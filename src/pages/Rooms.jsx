import hotelData from '../data.json';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto bg-brand-light">
      <div className="text-center mb-16">
        <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Stay With Us</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark uppercase">Rooms & Suites</h1>
      </div>
      
      <div className="space-y-16">
        {hotelData.rooms.map((room, index) => (
          <motion.div 
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2 h-[400px] overflow-hidden group">
              <img 
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover img-enhance transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <h3 className="text-3xl font-serif text-brand-dark mb-4">{room.title}</h3>
              <p className="text-brand-gold text-xl font-serif mb-4">{room.price} <span className="text-sm font-sans text-gray-500 uppercase">/ night</span></p>
              <p className="text-gray-600 font-light mb-6">{room.description}</p>
              
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-brand-dark mb-3 font-medium">Amenities</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-light text-sm">
                      <Check size={16} className="text-brand-gold mr-2" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact" className="btn-outline inline-block">Book This Room</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
