import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Highlighted Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-12 relative"
          >
             <img src="/images/entrance.png" alt="Hotel Entrance" className="w-full h-auto block img-enhance" />
          </motion.div>
          
          {/* Text Underneath */}
          <div className="text-center max-w-4xl mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-brand-dark mb-6 uppercase tracking-wider"
            >
              Welcome to <br/><span className="text-brand-gold">Krishna Residency</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 font-light tracking-wide"
            >
              A symphony of luxury and comfort in the heart of the city
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-primary">Explore Our Rooms</button>
            </motion.div>
          </div>
        </div>

        {/* Booking Inquiry Bar */}
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 transform -translate-y-6">
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Check In</label>
                <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-brand-dark" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Check Out</label>
                <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-brand-dark" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Guests</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-brand-dark bg-transparent">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>3 Adults</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Room Type</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold text-brand-dark bg-transparent">
                  <option>Executive Suite</option>
                  <option>Deluxe Room</option>
                </select>
              </div>
              <div>
                <button type="submit" className="btn-primary w-full py-4 text-xs">Submit Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Exterior Image Section */}
      <section className="px-4 py-8 bg-brand-light">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/exterior.png" alt="Hotel Exterior Building" className="w-full h-auto block img-enhance" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-16 pb-24 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Discover The Experience</h2>
              <h3 className="text-4xl font-serif text-brand-dark mb-6">Unparalleled Hospitality</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Step into a world of elegance. At Krishna Residency, we combine modern luxury with warm hospitality to create an unforgettable stay. From our beautifully appointed rooms to our world-class dining, every detail is designed with your comfort in mind. Our dedicated staff is here 24/7 to ensure your every need is met.
              </p>
              <button className="btn-outline">Read Our Story</button>
            </div>
            <div className="h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img src="/images/reception.png" alt="Reception Desk" className="w-full h-full object-cover img-enhance" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
