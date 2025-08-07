import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_qtiit49',
      'template_zin36gg',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        time: new Date().toLocaleString()
      },
      'OCdzeV0jpE4p1LiCb'
    )
    .then(() => {
      console.log('Email sent!');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 3000);
    })
    .catch((error) => {
      console.error('Failed:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

    const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 95000 09474', '+91 7871616123', '+91 9786773773'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hifitrendz@gmail.com'],
      description: 'Send us your project details'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['197/1, Gandhi Road, Thilagar Nagar Bus Stop, Anupparpalayam, Avinashi Road, Tirupur - 641 652'],
      description: 'Visit our main office'
    },
    {
      icon: MapPin,
      title: 'Branch Office - 1',
      details: ['306, Visakam Complex, Pallavan bank Upstairs, Sivanandhapuram, Saravanampatti, Coimbatore - 35'],
      description: 'Visit our branch office'
    },
     {
      icon: MapPin,
      title: 'Branch Office - 2',
      details: ['2, New Tuda Complex, Near ESI Hospital, RC Road, Tirupathi'],
      description: 'Visit our branch office'
    },
    
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 9.30AM-7.30PM','Sun: Closed'],
      description: 'Our business hours'
    }
  ];

  const projectTypes = [
    'Residential Interior Design', 'Commercial Space Design', 'Kitchen Renovation',
    'Bathroom Renovation', 'Complete Home Makeover', 'Office Design', 'Retail Space Design', 'Other'
  ];

  const budgetRanges = [
    'Under $25,000', '$25,000–$50,000', '$50,000–$100,000',
    '$100,000–$200,000', 'Over $200,000', 'Need consultation'
  ];

  const timelines = [
    'ASAP', '1–2 months', '3–6 months', '6–12 months', 'More than 1 year', 'Flexible'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-48 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://exba.com/wp-content/uploads/sites/7/2021/10/contact-us-concept-with-wood-block-and-symbols.jpg")' }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
  <p className="text-xl md:text-2xl text-white font-bold max-w-3xl mx-auto drop-shadow-md">
    Ready to transform your space? Let's discuss your vision together.
  </p>
</div>

      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2 text-gray-700 text-sm">
                  {info.details.map((d, i) => <p key={i}>{d}</p>)}
                </div>
                <p className="text-xs text-gray-500">{info.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Maps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below and we'll contact you within 24 hours for a free consultation.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">We’ll get in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary"
                />
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Project Type</option>
                  {projectTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary"
                >
                  <option value="">Estimated Budget</option>
                  {budgetRanges.map((budget, idx) => (
                    <option key={idx} value={budget}>{budget}</option>
                  ))}
                </select>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary"
                >
                  <option value="">Project Timeline</option>
                  {timelines.map((time, idx) => (
                    <option key={idx} value={time}>{time}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows="4"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Maps */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Locations</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Head Office</h4>
                  <iframe
                    title="Hi Fi Trendz Interior Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.2727177828408!2d77.31411583850132!3d11.14719289725624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b2a3d30915%3A0xe53b99d82dd287c1!2sHi%20Fi%20Trendz%20Interior!5e0!3m2!1sen!2sin!4v1753859517219!5m2!1sen!2sin"
                    className="w-full h-64 rounded-lg border-0 shadow"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="bg-primary p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What Happens Next?</h4>
                  <ul className="space-y-2 text-sm text-black list-disc list-inside">
                    <li>We’ll contact you within 24 hours to schedule your consultation.</li>
                    <li>Our designer will visit your space to assess the project.</li>
                    <li>You'll receive a detailed proposal and quote.</li>
                    <li>We’ll start transforming your space!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
