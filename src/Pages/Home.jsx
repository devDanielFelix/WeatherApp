const Home = () => {
  return (
    <section className="bg-blue-500 text-white py-10">
      <div className="container mx-auto text-center">
        <h1>Welcome to our Weather App!</h1>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-300 text-black mx-auto mt-6 p-6">
        <div class="relative w-full max-w-md">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="search"
            placeholder="Pesquisar..."
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
