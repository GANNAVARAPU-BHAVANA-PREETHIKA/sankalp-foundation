import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Activity, Globe } from 'lucide-react';

const programs = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
    title: 'Education & Skilling',
    desc: 'Access to quality education, digital literacy, and future-ready vocational training.'
  },
  {
    icon: <Activity className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
    title: 'Health & Wellbeing',
    desc: 'Community health awareness, preventive care, and holistic well-being support.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
    title: 'Women Empowerment',
    desc: 'Capacity building, financial inclusion, and leadership development for women.'
  },
  {
    icon: <Globe className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
    title: 'Environment',
    desc: 'Water conservation, sanitation, and climate-resilient tree plantation drives.'
  },
  {
    icon: <ArrowRight className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
    title: 'Livelihoods',
    desc: 'Creating sustainable income opportunities for economic self-reliance.'
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://give.do/blog/wp-content/uploads/2023/08/The-role-of-the-education-NGO-in-India-enthusiastic-children-beneficiaries-education-classroom-preview.jpg" 
            alt="Smiling children" 
            className="w-full h-full  object-center"
          />
          
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-4 inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium tracking-widest uppercase animate-fade-in">
            Sarvajana Sukhino Bhavantu
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up drop-shadow-lg">
            Integrated Development for<br /> Sustainable Growth
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-light opacity-0 animate-fade-in-up-delay-1">
            Creating resilient, inclusive, and sustainable communities through holistic interventions aligned with the SDGs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up-delay-2">
            <Link 
              to="/programs" 
              className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              See Our Work
            </Link>
            <Link 
              to="/donate" 
              className="px-8 py-3 bg-gradient-to-r from-secondary to-blue-400 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Donate Now <Heart className="w-5 h-5 fill-current animate-pulse-slow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-surface relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">120+</div>
              <div className="text-gray-600 font-medium">Villages Served</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Volunteers</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Active Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Theory of Change</h2>
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "If communities are empowered with access to skills, resources, health services, education, and sustainable environmental practices — and supported through strong local institutions — then they will achieve economic stability, social inclusion, and long-term resilience."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Key Programs</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We focus on holistic development through targeted interventions in key areas of society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 bg-surface w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{program.desc}</p>
                <Link to="/programs" className="text-secondary font-semibold flex items-center justify-center hover:text-primary transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Beneficiaries & Geographic Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Target Beneficiaries</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Rural poor households',
                  'Marginalized urban communities',
                  'Women (SHG members)',
                  'Small & marginal farmers',
                  'Unemployed youth',
                  'Vulnerable children & elderly'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Geographic Focus</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Initially implemented in selected rural and peri-urban areas based on vulnerability indicators such as poverty levels, malnutrition rates, and access to basic services.
              </p>
              <div className="flex items-center gap-4 text-secondary font-bold">
                <Globe className="w-6 h-6" />
                <span>Scalable across districts and states</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Messages */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10 relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-secondary mx-auto mb-8 animate-pulse-slow" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Messages from Our Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <img src="/vijay.jpeg" alt="Sri. Diddekunta Vijay Bhaskar Reddy" className="w-24 h-24 rounded-full object-cover mx-auto mb-6 shadow-lg" />
              <blockquote className="text-xl font-light text-gray-800 italic mb-8 leading-relaxed text-center">
                "When I started Sankalp, it didn't begin as an organization—it began as a feeling. A feeling that we could not ignore the struggles around us. Every day, we see people who just need a small opportunity, a little support, or even someone to believe in them. That thought stayed with me and slowly turned into a commitment—a sankalp—to do something meaningful. What started as a small step has now grown into a community of kind-hearted people who believe in giving back. Every contribution we receive is not just financial support—it is trust, hope, and responsibility. I want to personally thank every supporter who has stood with us. You are the reason we are able to reach more lives and create real impact. Together, let us continue this journey of compassion and make the world a little better, one step at a time."
              </blockquote>
              <div className="text-center">
                <cite className="text-lg font-bold text-primary not-italic block">
                  — Sri. Diddekunta Vijay Bhaskar Reddy
                </cite>
                <span className="text-sm text-gray-500 uppercase tracking-wide font-medium block mt-1">Founder, Sankalp</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <img src="/sreepathi.jpeg" alt="Sri. Mudimela Sreepathi Reddy" className="w-24 h-24 rounded-full object-cover mx-auto mb-6 shadow-lg" />
              <blockquote className="text-xl font-light text-gray-800 italic mb-8 leading-relaxed text-center">
                "Sankalp was built on a simple idea—that change does not come from one person, but from all of us coming together. In our journey, we have seen how even the smallest act of support can bring a smile, encourage a dream, or completely change someone's path. Whether it is education, healthcare, or basic needs, there are countless people waiting for an opportunity. Through Sankalp, we are trying to bridge that gap—connecting those who want to help with those who truly need it. This platform is not just about giving—it is about building a community that genuinely cares. I invite you to be part of this mission. Your support, your belief, and your kindness can create a lasting impact in someone's life."
              </blockquote>
              <div className="text-center">
                <cite className="text-lg font-bold text-primary not-italic block">
                  — Sri. Mudimela Sreepathi Reddy
                </cite>
                <span className="text-sm text-gray-500 uppercase tracking-wide font-medium block mt-1">Treasurer, Sankalp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Your contribution, no matter how small, can change a life forever. Join our movement today.
          </p>
          <Link 
            to="/donate" 
            className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            Donate Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;