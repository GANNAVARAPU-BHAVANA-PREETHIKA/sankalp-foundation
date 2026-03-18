import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Heart, Target, Lightbulb, TrendingUp, ChevronLeft, ChevronRight, Activity, Users, Globe } from 'lucide-react';

interface ProgramDetailData {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  cause: string;
  problem: string;
  problemImage: string;
  approach: string[];
  approachImage: string;
  impact: string[];
  gallery: string[];
}

const programDatabase: Record<string, ProgramDetailData> = {
  'livelihood': {
    id: 'livelihood',
    title: 'Livelihood Enhancement',
    tagline: 'Building sustainable futures through skill and enterprise.',
    heroImage: '/programs img/livelihood training in agriculture/Volunteer-Villager Interaction.png',
    cause: 'Livelihood Enhancement',
    problem: 'Unemployment, underemployment, and lack of market-relevant skills in rural areas force migration and perpetuate the cycle of poverty. Small farmers face distress due to unsustainable practices and lack of market linkages.',
    problemImage: '/programs img/livelihood training in agriculture/Before and After Agricultural Improvement.png',
    approach: [
      'Skill mapping and market-linked training programs.',
      'Farmer Producer Groups formation.',
      'Organic and climate-smart agriculture promotion.',
      'Micro-enterprise incubation support.'
    ],
    approachImage: '/programs img/livelihood training in agriculture/Agricultural Training Banner.png',
    impact: [
      '5,000+ Entrepreneurs supported in setting up micro-businesses.',
      '40% Increase in average household income for beneficiaries.',
      '1,200 Farmers trained in sustainable agricultural practices.',
      'Established 10 Rural Production Centers.'
    ],
    gallery: [
      '/programs img/livelihood training in agriculture/Beneficiaries at Agricultural Training.png',
      '/programs img/livelihood training in agriculture/Hands-on Training Intervention.png',
      '/programs img/livelihood training in agriculture/Community Celebration.png',
      '/programs img/livelihood training in agriculture/Agricultural Challenges.png'
    ]
  },
  'health': {
    id: 'health',
    title: 'Health & Nutrition',
    tagline: 'Health is a fundamental right, not a privilege.',
    heroImage: '/programs img/rural healthcare support/Healthcare Challenges.png',
    cause: 'Health & Nutrition',
    problem: 'Remote villages often lack basic primary healthcare facilities. Residents travel long distances for minor treatments, and preventable diseases cause high mortality due to lack of awareness and timely care.',
    problemImage: '/programs img/rural healthcare support/Before and After Healthcare Impact.png',
    approach: [
      'Health camps and medical screening drives.',
      'Awareness on preventive healthcare.',
      'Nutrition gardens at household level.',
      'Adolescent health and menstrual hygiene programs.'
    ],
    approachImage: '/programs img/rural healthcare support/Rural Healthcare Banner.png',
    impact: [
      '25,000+ Health checkups conducted annually.',
      '100% Vaccination coverage in adopted villages.',
      'Significant reduction in malnutrition rates among children.',
      '5,000+ Cataract surgeries facilitated free of cost.'
    ],
    gallery: [
      '/programs img/rural healthcare support/Beneficiaries at Health Camp.png',
      '/programs img/rural healthcare support/Healthcare Intervention.png',
      '/programs img/rural healthcare support/Volunteer-Patient Interaction.png',
      '/programs img/rural healthcare support/Community Health Celebration.png'
    ]
  },
  'education': {
    id: 'education',
    title: 'Education & Skilling',
    tagline: 'Lighting the lamp of knowledge in every home.',
    heroImage: '/programs img/education and skill development/Beneficiaries at Skill Training.png',
    cause: 'Education & Skilling',
    problem: 'In many rural districts, children drop out of school due to lack of resources, poor infrastructure, and the need to work. This cycle of illiteracy perpetuates poverty.',
    problemImage: '/programs img/education and skill development/Before and After Education Impact.png',
    approach: [
      'Remedial education centers.',
      'Digital learning labs.',
      'Career guidance and placement linkage.',
      'Soft skills and life skills training.'
    ],
    approachImage: '/programs img/education and skill development/Education Banner No Text.png',
    impact: [
      '15,000+ Students enrolled in our partner schools.',
      '95% Pass rate in 10th-grade board exams.',
      '50 Digital libraries established.',
      'Zero dropout rate in intervention areas.'
    ],
    gallery: [
      '/programs img/education and skill development/Education Challenges.png',
      '/programs img/education and skill development/Graduation Celebration.png',
      '/programs img/education and skill development/Skill Training Intervention.png',
      '/programs img/education and skill development/Volunteer Teaching Interaction.png'
    ]
  },
  'women': {
    id: 'women',
    title: 'Women Empowerment',
    tagline: 'Empower a woman, empower a nation.',
    heroImage: '/programs img/women empowerment training/Volunteer-Women Interaction.png',
    cause: 'Women Empowerment',
    problem: 'Systemic gender inequality restricts women’s access to financial independence. Lack of skills and credit facilities prevents rural women from contributing effectively to the economy.',
    problemImage: '/programs img/women empowerment training/Before and After Empowerment.png',
    approach: [
      'SHG strengthening and credit linkage.',
      'Entrepreneurship development training.',
      'Leadership and governance workshops.',
      'Legal awareness and rights education.'
    ],
    approachImage: '/programs img/women empowerment training/Women Empowerment Banner.png',
    impact: [
      '3,000+ Women leaders trained and empowered.',
      '200+ Self Help Groups actively operating.',
      '₹1 Crore+ credit mobilized for micro-enterprises.',
      'Increased participation of women in local governance.'
    ],
    gallery: [
      '/programs img/women empowerment training/Women at Empowerment Training.png',
      '/programs img/women empowerment training/Women Empowerment Session.png',
      '/programs img/women empowerment training/Women Training Intervention.png',
      '/programs img/women empowerment training/Women_s Achievement Celebration.png'
    ]
  },
  'environment': {
    id: 'environment',
    title: 'Water & Environment',
    tagline: 'Restoring nature for a sustainable future.',
    heroImage: '/programs img/water conservation and environment/Water Scarcity Challenge.png',
    cause: 'Water & Environment',
    problem: 'Deforestation, depleting groundwater levels, and pollution are causing severe distress. Urban centers face high air pollution and heat island effects.',
    problemImage: '/programs img/water conservation and environment/Before and After Water Conservation.png',
    approach: [
      'Rainwater harvesting structures.',
      'Solid and liquid waste management systems.',
      'Climate adaptation awareness campaigns.',
      'Community tree plantation drives.'
    ],
    approachImage: '/programs img/water conservation and environment/Water Conservation Banner.png',
    impact: [
      '100,000+ Trees planted with high survival rates.',
      '~47 kg Pollutants removed per acre of canopy annually.',
      'Groundwater levels improved in intervention villages.',
      'Soil enrichment through organic composting.'
    ],
    gallery: [
      '/programs img/water conservation and environment/Volunteer-Villager Interaction.png',
      '/programs img/water conservation and environment/Environmental Intervention.png',
      '/programs img/water conservation and environment/Water Project Celebration.png',
      '/programs img/water conservation and environment/Beneficiaries at Water Conservation.png'
    ]
  },
  'community': {
    id: 'community',
    title: 'Community Institutions',
    tagline: 'Strengthening the roots of democracy and development.',
    heroImage: '/programs img/community governance meetings/Gram Sabha Banner.png',
    cause: 'Community Institutions',
    problem: 'Weak local institutions and lack of community participation hinder sustainable development and effective governance.',
    problemImage: '/programs img/community governance meetings/Before and After Improvement.png',
    approach: [
      'Strengthening Self Help Groups (SHGs) and Farmer Producer Organizations (FPOs).',
      'Capacity building of local governance bodies (Gram Panchayats).',
      'Promoting social inclusion and participatory planning.',
      'Leadership development at the grassroots level.'
    ],
    approachImage: '/programs img/community governance meetings/Governance Training Intervention.png',
    impact: [
      '200+ SHGs and 5 FPOs formed and strengthened.',
      'Enhanced participation in Gram Sabhas.',
      'Community-led maintenance of public assets.',
      'Greater social cohesion and collective action.'
    ],
    gallery: [
      '/programs img/community governance meetings/Governance Challenges.png',
      '/programs img/community governance meetings/Gram Sabha Participants.png',
      '/programs img/community governance meetings/Village Celebration.png',
      '/programs img/community governance meetings/Volunteer-Villager Interaction.png'
    ]
  }
};

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  // Basic scroll to top when mounting
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id || !programDatabase[id]) {
    return <Navigate to="/programs" replace />;
  }

  const program = programDatabase[id];

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % program.gallery.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + program.gallery.length) % program.gallery.length);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src={program.heroImage} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
          <Link to="/programs" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{program.title}</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">{program.tagline}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Problem Statement */}
            <section className="bg-red-50 rounded-xl border border-red-100 overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <Target className="w-8 h-8 text-red-500 mr-4 shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {program.problem}
                  </p>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={program.problemImage} 
                    alt="Problem context" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Environmental Challenge Details (Conditional) */}
            {id === 'environment' && (
              <section className="py-12 bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Act: The Environmental Challenge</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our focus on environmental sustainability is driven by critical data points in urban centers like Hyderabad, where rapid growth has led to significant ecological challenges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <Activity className="w-8 h-8 text-red-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">High Air Pollution</h4>
                      <p className="text-sm text-gray-600">PM2.5 levels average 30–60 μg/m³, far exceeding WHO safe limits (≤ 5). Hyderabad faces 60–80+ days of poor AQI annually.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <Users className="w-8 h-8 text-orange-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Vehicular Emissions</h4>
                      <p className="text-sm text-gray-600">With 80+ lakh registered vehicles and 7–9% annual growth, vehicular emissions are a major source of NOx and particulate matter.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <Globe className="w-8 h-8 text-green-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Low Urban Green Cover</h4>
                      <p className="text-sm text-gray-600">Current forest/green cover is only ~13–15%, significantly below the recommended 20–25% for healthy urban ecosystems.</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Approach */}
            <section>
              <div className="flex items-center mb-8">
                <Lightbulb className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                   {program.approach.map((item, index) => (
                      <div key={index} className="flex items-start bg-surface p-5 rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
                        <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary font-bold text-sm shrink-0 w-8 h-8 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                   ))}
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[300px]">
                   <img src={program.approachImage} alt="Our approach in action" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </section>

            {/* Impact */}
            <section>
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-success mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Impact So Far</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.impact.map((stat, index) => (
                  <div key={index} className="flex items-center p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="font-medium text-gray-800">{stat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Carousel */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="relative group bg-gray-100 rounded-xl overflow-hidden">
                <div className="aspect-[16/9] w-full relative">
                    <img 
                      src={program.gallery[currentGalleryIndex]} 
                      alt={`Gallery image ${currentGalleryIndex + 1}`} 
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                </div>
                
                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <button 
                        onClick={prevImage}
                        className="pointer-events-auto p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextImage}
                        className="pointer-events-auto p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {program.gallery.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentGalleryIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentGalleryIndex ? 'bg-white w-6' : 'bg-white/50 w-2 hover:bg-white/80'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                    ))}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {program.gallery.map((img, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentGalleryIndex(index)}
                        className={`relative rounded-lg overflow-hidden aspect-[4/3] border-2 transition-all duration-200 ${
                            currentGalleryIndex === index 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        {currentGalleryIndex === index && (
                           <div className="absolute inset-0 bg-primary/10"></div>
                        )}
                    </button>
                ))}
               </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support this Cause</h3>
              <p className="text-gray-600 text-sm mb-6">
                Your contribution can help us reach more beneficiaries and create a lasting impact.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="block text-xs text-gray-500 uppercase font-semibold">You are supporting</span>
                  <span className="block text-lg font-bold text-primary">{program.cause}</span>
                </div>

                <Link 
                  to={`/donate?cause=${encodeURIComponent(program.cause)}`}
                  className="w-full block text-center py-4 bg-secondary text-white font-bold rounded-lg hover:bg-primary transition-colors shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Donate Now <Heart className="w-4 h-4 inline-block ml-1 fill-white" />
                </Link>

                <div className="text-xs text-center text-gray-500 mt-4">
                  <p>All donations are 50% tax exempt under 80G.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;