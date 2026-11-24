const Header = () => {
  return (
    <header>
      <div>
        <nav className="bg-blue-400 text-white py-4 px-6 flex justify-end">
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
