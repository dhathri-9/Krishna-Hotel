import { motion } from 'framer-motion';
import hotelData from '../data.json';

const Gallery = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Capturing Moments</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark uppercase">Our Gallery</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hotelData.gallery.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`overflow-hidden rounded-lg ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-full object-cover min-h-[300px] hover:scale-110 transition-transform duration-700 cursor-pointer img-enhance"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
