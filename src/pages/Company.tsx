import React from 'react';
import { Users, Clock, Target, Heart, Lightbulb } from 'lucide-react';

const Company = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Happy Clients' },
    { number: '25+', label: 'Expert Team Members' }
  ];

  const values = [
    { icon: Heart, title: 'Passion', description: 'We pour our heart into every project, treating each space as if it were our own.' },
    { icon: Target, title: 'Excellence', description: 'We strive for perfection in every detail, ensuring exceptional quality and craftsmanship.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new ideas and technologies to create unique, cutting-edge design solutions.' },
    { icon: Users, title: 'Collaboration', description: 'We work closely with clients, understanding their vision and bringing it to life.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-48 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-2"
          style={{ backgroundImage: 'url("https://www.nobroker.in/blog/wp-content/uploads/2024/12/Rectangle-50-scaled.webp?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">About HiFi-Trendz</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white drop-shadow-md">
            We don’t believe in moving to a new place and replicating the one you left behind. Where’s the fun in that?
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-light font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Our Story</h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>Hi-Fi Trendz was started in year 2009 with "Quality" as the only motto, Quality in terms of Products, Expertise in work, timely completion of job, maintenance during work are guaranteed by Hi-Fi Trendz. Our mission is to provide the best in quality products and customer service in the industry today at a competitive price for the Residential/Commercial. Customization is our specialty. We enable our customers to customize looks of their house / office as per their wish. We make your plans come true with our innovative designs and flawless implementation. Where you can bring your ideas into reality and get completely satisfied with our services. Affordable, Efficient, Novel, Clean, Innovative these are the adjectives given to the kitchens we designed by all of our customers. Through more than a decade of our service we were happy to see numerous satisfied families. The experience and efficiency of our staff speaks for itself.</p>
                
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Our design studio" 
                className="rounded-lg shadow-xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Values</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-4">{value.title}</h3>
                  <p className="text-text-light leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8 text-white">
            "To satisfy every customer's need for a better experience through quality construction and employee happiness. Hi-Fi Trendz has a well-managed architectural and engineering team that has closely partnered and worked with globally acclaimed architects and other professionals, to achieve both aesthetic and efficient designs."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Clock className="w-8 h-8 text-white" />
            <span className="text-lg">Committed to Excellence Since 2009</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
