import React from 'react';

const team = [
  { name: 'Sri. Diddekunta Vijay Bhaskar Reddy', role: 'Founder and Chairman', image: '/vijay.jpeg' },
  { name: 'Sri. Mudimela Sreepathi Reddy', role: 'Treasurer', image: '/sreepathi.jpeg' },
  { name: 'Mrs. Diddekunta Lakshmikanthamma', role: 'Head of Programs', image: '/laxmi.jpeg' },
  { name: 'Mrs. Puli Vineetha', role: 'Head of Programs', image: '/vineetha.jpeg' },
  { name: 'Sri. Puli Jaya Prakash Reddy', role: 'Trustee', image: '/prakash.jpeg' },
];

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl opacity-90">Building a bridge between compassion and action.</p>
        </div>
      </div>

      {/* Story & Mission */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Background & Rationale</h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            Communities across rural and urban areas continue to face interconnected challenges such as poverty, food insecurity, limited access to quality healthcare and education, unemployment, gender inequality, and environmental degradation. These issues are further intensified by climate change, resource depletion, and rapid urbanization.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Addressing these challenges requires a holistic and integrated approach aligned with the United Nations Sustainable Development Goals (SDGs). SANKALP FOUNDATION believes in community-driven models that simultaneously improve livelihoods, strengthen human development indicators, and ensure environmental sustainability.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem Statement</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Despite multiple government initiatives, many vulnerable communities continue to experience multidimensional poverty. Fragmented interventions often address issues in isolation rather than through an integrated framework. There is a need for scalable, community-owned development models that combine livelihood security, social development, and environmental sustainability to ensure long-term impact.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">1</div>
              <div>
                <h4 className="font-bold text-gray-800">Participatory Planning</h4>
                <p className="text-sm text-gray-600">Active engagement with local stakeholders for needs-based solutions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
              <div>
                <h4 className="font-bold text-gray-800">Government Convergence</h4>
                <p className="text-sm text-gray-600">Aligning with existing government schemes for maximum reach.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">3</div>
              <div>
                <h4 className="font-bold text-gray-800">Capacity Building</h4>
                <p className="text-sm text-gray-600">Continuous handholding support and institutional strengthening.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">4</div>
              <div>
                <h4 className="font-bold text-gray-800">Impact Monitoring</h4>
                <p className="text-sm text-gray-600">Data-driven assessment to ensure scalable and replicable models.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Theory of Change</h2>
          <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 border-secondary pl-4 text-justify">
            "If communities are empowered with access to skills, resources, health services, education, and sustainable environmental practices — and supported through strong local institutions — then they will achieve economic stability, social inclusion, and long-term resilience."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Beneficiaries</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Rural poor households and marginalized urban communities</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Women (especially from Self-Help Groups)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Small and marginal farmers</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Youth (school dropouts and unemployed graduates)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Children (0–6 years and school-going age)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Elderly and vulnerable populations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Geographic Focus</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                The project will initially be implemented in selected rural and peri-urban areas based on vulnerability indicators such as poverty levels, malnutrition rates, unemployment, and access to basic services. The model will be scalable across districts and states based on results and partnerships.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-xl border border-primary/10 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Our AIM</h3>
            <p className="text-sm text-gray-700 leading-relaxed">To create integrated, community-centred development programs that strengthen environmental sustainability, improve health and nutrition outcomes, expand educational access, enable sustainable livelihoods, and advance women’s empowerment for inclusive and long-term social impact.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-sm opacity-90 leading-relaxed">To foster a just, healthy and sustainable society where communities thrive in harmony with the environment, free from inequality, with equal access to education, dignified livelihoods, and opportunities for women to lead transformative change.</p>
          </div>
          <div className="bg-secondary text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Our Objectives</h3>
            <ul className="text-xs space-y-2 opacity-90">
              <li>• Promoting sustainable practices for a greener and resilient future.</li>
              <li>• Strengthening community health and holistic well-being.</li>
              <li>• Expanding access to inclusive education and future-ready skills.</li>
              <li>• Creating sustainable income opportunities for economic self-reliance.</li>
              <li>• Enabling women to lead, earn, and participate equally in growth.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Legal Registration</h2>
          <div className="flex flex-wrap justify-center gap-6 text-base text-gray-600">
            <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="block font-black text-xl text-gray-900 mb-1">Trust Reg. No.</span>
              <span className="font-bold text-lg">123/2005/DEL</span>
            </div>
            <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="block font-black text-xl text-gray-900 mb-1">12A Registration</span>
              <span className="font-bold text-lg">AACTS1234A</span>
            </div>
            <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="block font-black text-xl text-gray-900 mb-1">80G Registration</span>
              <span className="font-bold text-lg">AACTS1234A</span>
            </div>
            <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="block font-black text-xl text-gray-900 mb-1">CSR</span>
              <span className="font-bold text-lg">SRN AC2323657</span>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-500">
            All donations are eligible for 50% tax exemption under section 80G of the Income Tax Act.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

