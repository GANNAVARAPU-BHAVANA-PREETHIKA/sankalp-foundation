import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const dataFunds = [
  { name: 'Education', amount: 40000 },
  { name: 'Healthcare', amount: 30000 },
  { name: 'Empowerment', amount: 20000 },
  { name: 'Admin', amount: 5000 },
  { name: 'Reserves', amount: 5000 },
];



const COLORS = ['#2E7DA6', '#3F8FD2', '#6FAFCB', '#3BAA5D', '#D1D5DB'];

const Impact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-2 text-center">Our Impact</h1>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We believe in complete transparency. Here is how your donations are utilized and the growth of our beneficiary reach over the years.
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          {/* Funds Allocation Chart */}
          <div className="bg-surface p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fund Allocation (2026)</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataFunds}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {dataFunds.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">90% of funds go directly to programs.</p>
          </div>
        </div>

        {/* SDG Alignment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alignment with Sustainable Development Goals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { id: 1, name: 'No Poverty', color: 'bg-[#E5243B]' },
              { id: 2, name: 'Good Health', color: 'bg-[#4C9F38]' },
              { id: 3, name: 'Quality Education', color: 'bg-[#C5192D]' },
              { id: 4, name: 'Gender Equality', color: 'bg-[#FF3A21]' },
              { id: 5, name: 'Clean Water', color: 'bg-[#26BDE2]' },
              { id: 6, name: 'Decent Work', color: 'bg-[#A21942]' },
              { id: 7, name: 'Industry & Infra', color: 'bg-[#FD6925]' },
              { id: 8, name: 'Reduced Inequalities', color: 'bg-[#DD1367]' },
              { id: 9, name: 'Responsible Consumption', color: 'bg-[#BF8B2E]' },
              { id: 10, name: 'Climate Action', color: 'bg-[#3F7E44]' },
              { id: 11, name: 'Life on Land', color: 'bg-[#56C02B]' },
            ].map((sdg) => (
              <div key={sdg.id} className={`${sdg.color} p-4 rounded-lg text-white text-center shadow-md hover:scale-105 transition-transform cursor-default`}>
                <div className="text-2xl font-bold mb-1">{sdg.id}</div>
                <div className="text-[10px] font-semibold uppercase leading-tight">{sdg.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto italic">
            "Our initiative contributes holistically to all 17 SDGs, ensuring that development is not fragmented but holistic, inclusive, and sustainable."
          </p>
        </div>

        {/* Environmental Impact Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tree Plantation Drive Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-4">Air Quality Improvement</h3>
              <p className="text-gray-700 mb-4">Estimated impact per acre of canopy development:</p>
              <div className="text-4xl font-bold text-green-600 mb-2">~47 kg</div>
              <p className="text-sm text-gray-600">Pollutants removed per year (based on Wiley study references).</p>
            </div>
            <div className="bg-brown-50 p-8 rounded-xl border border-orange-100" style={{ backgroundColor: '#fdf8f3' }}>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Soil Enrichment</h3>
              <p className="text-gray-700 mb-4">Dry leaves to humus/compost conversion per acre:</p>
              <div className="text-4xl font-bold text-orange-600 mb-2">1.7–2.7 tonnes</div>
              <p className="text-sm text-gray-600">Compost yield per year from ~3.3–3.9 tonnes of dry leaves.</p>
            </div>
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Expected Outcomes</h3>
            <ul className="space-y-4">
              {[
                'Improved household incomes and reduced poverty levels',
                'Enhanced nutrition, health, and well-being of communities',
                'Increased access to education and employability skills',
                'Greater participation of women in leadership roles',
                'Improved natural resource management and environmental outcomes',
                'Strengthened community institutions and social inclusion'
              ].map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Impact</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We adopt a community-centered and convergence-based approach. Our monitoring, evaluation, and impact documentation ensure that every rupee spent creates long-term, measurable impact aligned with global development priorities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-gray-500 uppercase">Transparency</div>
              </div>
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-primary">Scalable</div>
                <div className="text-xs text-gray-500 uppercase">Model</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
