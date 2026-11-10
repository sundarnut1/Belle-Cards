import { NextResponse } from 'next/server';

const wordMap: Record<number, string> = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
};

export async function POST(request: Request) {
  const apiKey = request.headers.get('X-API-KEY');
  // Checks for either API_KEY_TOKEN or PASSWORD environment variables
  const validKey = process.env.API_KEY_TOKEN || process.env.PASSWORD;

  if (!apiKey || apiKey !== validKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const num = parseInt(body.number, 10);

    if (isNaN(num) || num < 0 || num > 10) {
      return NextResponse.json({ error: 'Please provide a valid number between 0 and 10.' }, { status: 400 });
    }

    return NextResponse.json({ word: wordMap[num] });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

