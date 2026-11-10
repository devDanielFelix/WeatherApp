const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white py-4 px-6 flex justify-end">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
