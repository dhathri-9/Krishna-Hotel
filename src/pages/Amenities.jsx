import { Utensils, Wifi, Car, Coffee, Wind, Tv, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const amenitiesList = [
  { icon: <Utensils size={32} />, name: 'Fine Dining Restaurant', desc: 'Experience culinary delights prepared by our expert chefs.' },
  { icon: <Wifi size={32} />, name: 'High-Speed WiFi', desc: 'Stay connected with complimentary high-speed internet.' },
  { icon: <Car size={32} />, name: 'Valet Parking', desc: 'Secure and convenient parking for all our guests.' },
  { icon: <Coffee size={32} />, name: '24/7 Coffee Shop', desc: 'Enjoy fresh brews and snacks anytime.' },
  { icon: <Wind size={32} />, name: 'Air Conditioning', desc: 'Climate-controlled comfort in all rooms and public areas.' },
  { icon: <Tv size={32} />, name: 'Smart TVs', desc: 'Entertainment at your fingertips with premium channels.' },
  { icon: <Shield size={32} />, name: '24/7 Security', desc: 'Your safety is our top priority with round-the-clock surveillance.' },
  { icon: <Users size={32} />, name: 'Conference Rooms', desc: 'State-of-the-art facilities for your business meetings.' }
];

const Amenities = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Exceptional Facilities</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark uppercase">Our Amenities</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {amenitiesList.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="w-16 h-16 mx-auto bg-brand-light rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
              {amenity.icon}
            </div>
            <h3 className="text-xl font-serif text-brand-dark mb-3">{amenity.name}</h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">{amenity.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[400px] overflow-hidden rounded-lg shadow-xl"
        >
          <img src="/images/images/convention hall.jpeg" alt="Conference Hall" className="w-full h-full object-cover img-enhance" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Meetings & Events</h2>
          <h3 className="text-4xl font-serif text-brand-dark mb-6">Conference Hall</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-8">
            Host your corporate events, seminars, or private gatherings in our state-of-the-art conference room. Equipped with modern audio-visual technology and comfortable seating, our hall provides the perfect environment for successful meetings. Our events team is on hand to assist with planning, catering, and execution to ensure a flawless experience.
          </p>
          <button className="btn-outline">Inquire for Events</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Amenities;
