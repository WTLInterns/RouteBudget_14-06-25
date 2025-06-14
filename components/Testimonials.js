const testimonials = [
  {
    quote: `Route Budget helped us reduce fuel and maintenance costs by nearly 20%. The reporting 
dashboard is a game- changer`,
    author: "Ravi",
    position: " Fleet Manager, Mumbai ",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: `Earlier I used notebooks to manage my expenses. Now I just snap a pic, and everything is 
stored in the app. Saved me hours every week.`,
    author: "Priya",
    position: "Solo Cab Driver, Pune",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: `Managing multiple cabs with different drivers used to be chaotic. With Route Budget, it's all in one 
place. I get daily updates and alerts.`,
    author: "Amit",
    position: " Travel Agency Owner, Pune",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say – Route Budget Cab Expense Tracker Reviews</h2>
          <p className="text-xl text-blue-100">
            Hear from real users across India who've streamlined their operations using
            Route Budget, the leading cab expense tracker software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-800 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">"{testimonial.quote}"</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;