import React from 'react';

const news = [
  { id: 1, title: 'Support a verified cause that ensures 100 % transparency and measurable impact. Every donation helps change lives — and you can track its progress.', date: 'Jan 12, 2026', image: '/news1.png' },
  { id: 2, title: 'Your unrestricted gift empowers us to respond quickly and boldly where the need is greatest. Join those making transformational gifts today.', date: 'Jan 28, 2026', image: '/news2.png' },
  { id: 3, title: 'Join a collective of donors committed to systemic change. Together we’re investing in solutions that last.', date: 'Feb 15, 2026', image: '/news3.png' },
];

const gallery = [
  '/programs img/livelihood training in agriculture/Agricultural Training Banner.png',
  '/programs img/rural healthcare support/Rural Healthcare Banner.png',
  '/programs img/education and skill development/Education Banner No Text.png',
  '/programs img/water conservation and environment/Water Conservation Banner.png',
  '/programs img/women empowerment training/Women Empowerment Banner.png',
  '/programs img/community governance meetings/Governance Training Intervention.png',
];

const Media: React.FC = () => {
  return (
    <div className="py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* News Section */}
        <h1 className="text-4xl font-bold text-primary mb-8">Latest Updates</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {news.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-secondary font-bold mb-2">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h2 className="text-3xl font-bold text-primary mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {gallery.map((src, idx) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-lg">
              <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
