function Navigation() {
  return (
    <>
      <div className="nav_container flex justify-between items-center bg-stone-400 h-24">
        <div>
          <p className="pl-3">Imaji coffe</p>
        </div>
        <ul className="flex gap-3 justify-end">
          <li>Home</li>
          <li>Story</li>
          <li>Menu</li>
          <li>Space</li>
          <li>Community</li>
          <li>News</li>
          <button className="rounded border-red-500 border-2 p-1">Order</button>
          <button className="rounded  border-red-500 border-2 p-1">
            Sign In
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
