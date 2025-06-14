const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6158/person-woman-hand-smartphone.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Simplify Your Fleet Expense Management
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              A complete solution to manage and track all your Route Budget including fuel payments, FastTag recharges, servicing costs, and more.
            </p>
            <div className="mt-8 flex items-center text-sm text-blue-100">
              <span className="mr-2">★★★★★</span>
              <span>Trusted by 500+ fleet businesses across the country</span>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img
              src="https://images.klipfolio.com/website/public/43d1163c-613a-4709-b29f-c9e48a2dd27e/supply-chain-dashboard-example.png"
              alt="Dashboard Example"
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;