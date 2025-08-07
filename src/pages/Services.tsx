import React from 'react';
import {
  Palette,
  Cable,
  Compass,
  Unlock,
  Grid2x2,
  Sparkles,
  Brush,
  Hammer,
  Monitor,
  Feather
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      subtitle: 'Tailored aesthetics for your space',
      description:
        'Complete interior design solutions that reflect your personal style while maximizing functionality and comfort.',
      features: [
        'Space analysis & planning',
        'Color scheme development',
        'Material & finish selection',
        'Lighting design',
        'Furniture arrangement',
        '3D visualizations',
      ],
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Hammer,
      title: 'Modular Kitchen',
      subtitle: 'Modern, functional kitchens tailored to your lifestyle',
      description:
        'Custom-designed modular kitchens that blend functionality with style, perfectly suited to your space and cooking needs.',
      features: [
        'Design Consultation',
        'Premium Materials',
        'Expert Installation',
        'Space Optimization',
        'Style Coordination',
        'Precision Fit',
      ],
      image:
        'https://aleamodular.com/wp-content/uploads/2022/03/is1.jpg',
    },
    {
      icon: Compass,
      title: 'Pooja Unit',
      subtitle: 'Sacred, serene spaces crafted with devotion',
      description:
        'Custom-designed pooja units that bring harmony and elegance to your home, tailored to your spiritual and aesthetic preferences.',
      features: [
        'Vastu Optimization',
        'Premium wood and materials',
        'Handcrafted Detailing',
        'Style Coordination',
        'Design Consultation',
        'Perfect Fit',
      ],
      image:
        'https://www.decorpot.com/images/blogimage2041050281compact-wall-units-for-pooja-storage-in-chennai-homes-maximizing-space-without-compromising-style.jpg',
    },
    {
      icon: Cable,
      title: 'Tv Unit',
      subtitle: 'Stylish, functional entertainment spaces for modern living',
      description:
        'Custom-designed TV units that blend technology with design, offering storage, style, and seamless integration with your living space.',
      features: [
        'Smart Storage',
        'Cable Management',
        'Premium Materials',
        'Visual Planning',
        'Seamless Integration',
        'Aesthetic Harmony',
      ],
      image:
        'https://media.designcafe.com/wp-content/uploads/2023/12/13173921/corner-tv-unit-design.jpg',
    },
    {
      icon: Unlock,
      title: 'Wardrobes',
      subtitle: 'Tailored storage solutions blending elegance and efficiency',
      description:
        'Custom-built wardrobes designed to complement your interiors, maximize space, and organize your lifestyle with a perfect mix of style and functionality.',
      features: [
        'Spatial Planning',
        'Refined Finishes',
        'Smooth drawers/doors',
        'Smart Organization',
        'Match with interior design',
        'Exact fitting',
      ],
      image:
        'https://media.designcafe.com/wp-content/uploads/2020/05/30190405/materials-finshes-for-wardrobe-in-bedroom.jpg',
    },
    {
      icon: Sparkles,
      title: 'False Ceiling',
      subtitle: 'Enhance beauty and lighting with elegant ceilings',
      description:
        'Sophisticated ceiling designs that improve acoustics, lighting, and add architectural interest to your space.',
      features: [
        'Ceiling Design',
        'Lighting Integration',
        'Utility Concealment',
        'Visual appeal & flow',
        'Flawless Finish',
        'Luxe Panels',
      ],
      image:
        'https://www.montdorinterior.com/wp-content/uploads/2024/09/5-best-false-ceiling-designs-bedrooms.jpg',
    },
    {
      icon: Monitor,
      title: 'Work Space',
      subtitle: 'Productive environments designed for comfort and focus',
      description:
        'Custom-designed workspaces that balance functionality with style — built to boost efficiency, reflect your personality, and fit seamlessly into your home or office.',
      features: [
        'Focused Design',
        'Elegant Finishes',
        'Smart Storage',
        'Tech Integration',
        'Matches decor and aesthetics',
        'Custom Fit',
      ],
      image:
        'https://officebanao.com/wp-content/uploads/2024/07/modern-office-with-no-people-luxury-chair-generated-by-ai.jpg',
    },
    {
      icon: Feather,
      title: 'Wood Flooring',
      subtitle: 'Natural warmth and elegance beneath your feet',
      description:
        'Custom wood flooring solutions that enhance the character of your space — combining durability, style, and craftsmanship for timeless interiors.',
      features: [
        'Floor Planning',
        'Premium wood types',
        'Expert installation',
        'Durable Finish',
        'Interior style match',
        'Underfoot Comfort',
      ],
      image:
        'https://media.istockphoto.com/id/2037012871/photo/open-space-living-room-and-kitchen-interior-with-large-windows-gray-sofa-dining-table-and.jpg?s=612x612&w=0&k=20&c=s6FEeZT3SKyrZL9diSxzwnJpWEkTxh7dcyWLJESr3s4=',
    },
    {
      icon: Grid2x2,
      title: 'Aluminium Partitions',
      subtitle: 'Sleek, functional divisions for modern spaces',
      description:
        'Custom aluminium partitions designed to create privacy, define spaces, and add contemporary appeal — all while ensuring strength, flexibility, and style.',
      features: [
        'Space Division',
        'Lightweight + strong build',
        'Installation precision',
        'Glass/aluminium combos',
        'Office or home use',
        'Sleek look & match',
      ],
      image:
        'https://i.pinimg.com/originals/cd/49/f1/cd49f1b6a3b453389aa60e92bf9133ac.jpg',
    },
    {
      icon: Brush,
      title: 'Wallpaper & Decor',
      subtitle: 'Artful expressions to transform your walls',
      description:
        'Custom wallpaper and decor solutions that elevate your interiors with bold textures, elegant finishes, and personalized style that reflects your taste.',
      features: [
        'Style selection & themes',
        'Premium wallpaper options',
        'Wall art and accents',
        'Seamless Installation',
        'Interior style match',
        'Durable & long-lasting',
      ],
      image:
        'https://images.meesho.com/images/products/375308027/bzfee_512.webp?width=512',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-44 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1715593949273-09009558300a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D")',
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">HiFi-Trendz Capabilities</h1>
          <p className="text-xl md:text-2xl max-w-3xl rounded-lg bg-black/20 mx-auto text-white drop-shadow-md">
            Tailored solutions that blend innovation, quality, and creativity
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Services</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Comprehensive interior design solutions to transform your space from concept to completion
            </p>
          </div>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-surface p-8 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text">{service.title}</h3>
                        <p className="text-primary font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-text-light mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-text text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gray opacity-0 group-hover:opacity-20 transition-opacity rounded-lg"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Service Process</h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Every project follows our proven process to ensure exceptional results and client satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Consultation & Planning', 'Design & Development', 'Implementation & Delivery'].map((title, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>
              <p className="text-text-light leading-relaxed">
                {i === 0 && 'We start with a detailed consultation to understand your needs, preferences, and budget requirements.'}
                {i === 1 && 'Our team creates detailed designs, 3D visualizations, and material specifications for your approval.'}
                {i === 2 && 'Professional execution with quality control, timely delivery, and post-installation support.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
