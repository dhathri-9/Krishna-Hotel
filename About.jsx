const About = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 text-center uppercase">Our Story</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-serif text-brand-gold mb-4">A Legacy of Excellence</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            Established with a vision to redefine luxury hospitality, Hotel Krishna Residency has been a beacon of comfort and elegance. Our journey began with a simple philosophy: to treat every guest like family and every stay as a memorable experience.
          </p>
          <p className="text-gray-600 font-light leading-relaxed">
            From our grand lobby to our meticulously designed rooms, every corner of our hotel reflects a commitment to quality and aesthetic brilliance.
          </p>
        </div>
        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/images/lobby.png" 
            alt="Hotel Lobby" 
            className="w-full h-full object-cover img-enhance"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
