import hotelData from '../data.json';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-sans tracking-[0.2em] text-brand-gold uppercase mb-4">Get In Touch</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark uppercase">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-serif text-brand-dark mb-6">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">Send Message</button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-brand-dark mb-6">Contact Information</h3>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-8">
            <div className="flex items-start">
              <MapPin className="text-brand-gold mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-medium text-brand-dark mb-1">Address</h4>
                <p className="text-gray-600 font-light">{hotelData.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-brand-gold mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-medium text-brand-dark mb-1">Phone</h4>
                <p className="text-gray-600 font-light">{hotelData.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="text-brand-gold mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-medium text-brand-dark mb-1">Email</h4>
                <p className="text-gray-600 font-light">{hotelData.contact.email}</p>
              </div>
            </div>
          </div>
          
          {/* Placeholder for Map */}
          <div className="mt-8 h-64 bg-gray-200 rounded-lg w-full flex items-center justify-center overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2950587752676!2d80.6272!3d16.5165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e4cdf85906dd%3A0xc682229fa1a33cb8!2sGovernor%20Peta%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
