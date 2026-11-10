const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white py-4 px-6 flex justify-end">
        <ul className="flex space-x-4">
          <li className="hover:text-gray-400">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
