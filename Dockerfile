# Production build
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g typescript

FROM base AS deps
RUN apk add --no-cache gcc g++ python3 make
COPY package.json package-lock.json* ./
RUN npm install

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
RUN adduser -u 1001 -D appuser
RUN mkdir -p /app/public && chown appuser:appuser /app/public
RUN chown -R appuser:appuser /app
USER appuser
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
EXPOSE 3001
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["npm", "run", "start"]
