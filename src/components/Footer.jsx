import hotelData from '../data.json';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-brand-gold mb-4 uppercase">{hotelData.hotelName}</h3>
            <p className="text-gray-300 mb-4 font-light max-w-sm">Experience the perfect blend of comfort and luxury in the heart of the city. We look forward to hosting you.</p>
          </div>
          <div>
            <h4 className="text-xl font-serif mb-4 text-brand-gold">Contact Us</h4>
            <p className="text-gray-300 mb-2 font-light">{hotelData.address}</p>
            <p className="text-gray-300 mb-2 font-light">Phone: {hotelData.contact.phone}</p>
            <p className="text-gray-300 mb-2 font-light">Email: {hotelData.contact.email}</p>
          </div>
          <div>
            <h4 className="text-xl font-serif mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 font-light text-gray-300">
              <li><Link to="/about" className="hover:text-brand-gold transition duration-300">About Us</Link></li>
              <li><Link to="/rooms" className="hover:text-brand-gold transition duration-300">Rooms & Suites</Link></li>
              <li><Link to="/amenities" className="hover:text-brand-gold transition duration-300">Amenities</Link></li>
              <li><Link to="/dining" className="hover:text-brand-gold transition duration-300">Dining</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-gold transition duration-300">Gallery</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} {hotelData.hotelName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
