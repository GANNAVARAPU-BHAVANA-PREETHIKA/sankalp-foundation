import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
Sankalp Foundation Contact`;
    const whatsappUrl = `https://wa.me/918019869386?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you. Reach out to us for any queries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-surface p-4 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold text-gray-900">Registered Office</h3>
                <p className="text-gray-600 mt-1">
                  H.No.12-7-133/G/23, Muskipet Moosapet Village Kukatpally Mandal, Medchal Malkajgiri District, Telangana, India-500018
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-surface p-4 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                <a href="tel:+917659088310" className="text-gray-600 mt-1 hover:text-primary transition-colors">+91 76590 88310</a>
                <p className="text-gray-500 text-sm">(Mon-Fri, 9am - 6pm)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-surface p-4 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-bold text-gray-900">Email</h3>
                <a href="mailto:sankalpfoundation.sjsb@gmail.com" className="text-gray-600 mt-1 hover:text-primary transition-colors">sankalpfoundation.sjsb@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition-colors flex justify-center items-center shadow-md hover:shadow-lg"
              >
                📱 Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

