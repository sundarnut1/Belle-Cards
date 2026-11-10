export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="text-xl font-bold">Belle Cards</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Create</a>
        <a href="#" className="hover:underline">Orders</a>
        <a href="#" className="hover:underline">Login</a>
      </nav>
    </header>
  );
}
