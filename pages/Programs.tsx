import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programList = [
  {
    id: 'livelihood',
    title: 'Livelihood Enhancement',
    desc: 'Skill mapping, market-linked training, Farmer Producer Groups formation, and micro-enterprise incubation to ensure economic self-reliance.',
    stats: '5,000+ Entrepreneurs Supported',
    image: '/programs img/livelihood training in agriculture/Volunteer-Villager Interaction.png'
  },
  {
    id: 'health',
    title: 'Health & Nutrition',
    desc: 'Health camps, preventive healthcare awareness, nutrition gardens, and adolescent health programs for holistic community well-being.',
    stats: '25,000+ Health Checkups',
    image: '/programs img/rural healthcare support/Healthcare Challenges.png'
  },
  {
    id: 'education',
    title: 'Education & Skilling',
    desc: 'Remedial education centers, digital learning labs, career guidance, and life skills training to empower the next generation.',
    stats: '15,000+ Students Enrolled',
    image: '/programs img/education and skill development/Beneficiaries at Skill Training.png'
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    desc: 'SHG strengthening, credit linkage, entrepreneurship training, and leadership workshops to enable women to lead transformative change.',
    stats: '3,000+ Women Leaders',
    image: '/programs img/women empowerment training/Volunteer-Women Interaction.png'
  },
  {
    id: 'environment',
    title: 'Water & Environment',
    desc: 'Rainwater harvesting, waste management systems, climate adaptation campaigns, and community tree plantation drives for a resilient future.',
    stats: '47kg Pollutants Removed/Acre',
    image: '/programs img/water conservation and environment/Water Scarcity Challenge.png'
  },
  {
    id: 'community',
    title: 'Community Institutions',
    desc: 'Strengthening SHGs, FPOs, and local governance bodies through capacity building and participatory planning for sustainable development.',
    stats: '200+ SHGs Formed',
    image: '/programs img/community governance meetings/Gram Sabha Banner.png'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Targeted interventions aimed at solving deep-rooted social issues through community participation.
          </p>
        </div>

        <div className="space-y-12">
          {programList.map((prog, index) => (
            <div 
                key={prog.id} 
                className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link to={`/programs/${prog.id}`} className="md:w-1/2 cursor-pointer overflow-hidden group">
                <img src={prog.image} alt={prog.title} className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </Link>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wide w-fit mb-3">
                    Impact: {prog.stats}
                </div>
                <Link to={`/programs/${prog.id}`} className="block">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">{prog.title}</h2>
                </Link>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {prog.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={`/programs/${prog.id}`}
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-secondary text-secondary font-medium rounded hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/programs/${prog.id}`}
                    className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded hover:bg-primary transition-all shadow-md hover:shadow-lg group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Species Selection</h2>
          <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            We choose drought-tolerant, urban-friendly trees based on site conditions to ensure higher survival rates and maximum environmental impact.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-gray-200">
                  <th className="p-4 font-bold text-gray-900">Plant Species</th>
                  <th className="p-4 font-bold text-gray-900">Key Benefit</th>
                  <th className="p-4 font-bold text-gray-900">Environmental Benefit (Avg/Tree)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Pongamia (Karanj)', benefit: 'Canopy + Shade', impact: 'CO₂ absorbed: 10–25 kg/year • O₂ released: 55–110 kg/year' },
                  { name: 'Indian Almond', benefit: 'Broad shade + Cooling', impact: 'CO₂ absorbed: 10–25 kg/year • O₂ released: 55–110 kg/year' },
                  { name: 'Ashoka', benefit: 'Green barrier / Screen', impact: 'CO₂ absorbed: 10–25 kg/year • O₂ released: 55–110 kg/year' },
                  { name: 'Neem', benefit: 'Hardy + Air purification', impact: 'CO₂ absorbed: 10–25 kg/year • O₂ released: 55–110 kg/year' },
                  { name: 'Bamboo', benefit: 'Fast green cover', impact: 'CO₂ absorbed: 10–25 kg/year • O₂ released: 55–110 kg/year' },
                ].map((tree, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-primary">{tree.name}</td>
                    <td className="p-4 text-gray-700">{tree.benefit}</td>
                    <td className="p-4 text-sm text-gray-600">{tree.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;