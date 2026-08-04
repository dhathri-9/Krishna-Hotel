import { motion } from 'framer-motion';

const Dining = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Culinary Excellence</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark uppercase">Dining Experience</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[500px] overflow-hidden rounded-lg"
        >
          <img 
            src="/images/dinning.png" 
            alt="Fine Dining Restaurant" 
            className="w-full h-full object-cover img-enhance"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif text-brand-dark mb-4">The Grand Restaurant</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-6">
            Indulge in a gastronomic journey at our signature restaurant. Our master chefs curate exquisite dishes using the freshest local ingredients, blending traditional flavors with contemporary techniques. Whether it's a romantic dinner or a family gathering, the elegant ambiance sets the perfect stage.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="text-gray-600 font-light"><strong className="text-brand-dark font-medium">Breakfast:</strong> 7:00 AM - 10:30 AM</li>
            <li className="text-gray-600 font-light"><strong className="text-brand-dark font-medium">Lunch:</strong> 12:30 PM - 3:00 PM</li>
            <li className="text-gray-600 font-light"><strong className="text-brand-dark font-medium">Dinner:</strong> 7:00 PM - 11:00 PM</li>
          </ul>
          <button className="btn-outline">Reserve a Table</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dining;
