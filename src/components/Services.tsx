import React from 'react';
import { Globe, MessageSquare, Bot, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-primary" size={48} />,
      title: 'Custom Websites & Landing Pages',
      description: 'Beautiful, responsive websites built with modern HTML, CSS, and JavaScript that convert visitors into customers.',
      features: [
        'Fully responsive design',
        'SEO optimized',
        'Fast loading times',
        'Mobile-first approach',
        'Cross-browser compatibility'
      ],
      color: 'from-primary/10 to-primary/5'
    },
    {
      icon: <MessageSquare className="text-accent-salmon" size={48} />,
      title: 'CRM Integration & WhatsApp Flows',
      description: 'Seamless contact forms and WhatsApp automation that capture leads and nurture customer relationships.',
      features: [
        'CRM system integration',
        'WhatsApp Business API',
        'Automated lead capture',
        'Customer journey mapping',
        'Real-time notifications'
      ],
      color: 'from-accent-salmon/10 to-accent-salmon/5'
    },
    {
      icon: <Bot className="text-accent-mustard" size={48} />,
      title: 'AI-Powered Workflow Automation',
      description: 'Intelligent automation solutions that streamline your business processes and save valuable time.',
      features: [
        'Custom AI workflows',
        'Process automation',
        'Data analysis & insights',
        'Integration with existing tools',
        'Scalable solutions'
      ],
      color: 'from-accent-mustard/10 to-accent-mustard/5'
    }
  ];

  const includeFeatures = [
    '1 responsive landing page with 3 sections',
    'WhatsApp button and/or contact form',
    'Looks great on mobile',
    '5-day support after delivery'
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Services</span> That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to intelligent automation, I provide comprehensive tech solutions that help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${service.color} p-8`}>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="text-primary flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What's Included in Every Project
            </h3>
            <p className="text-gray-600 text-lg">
              I believe in delivering complete solutions with ongoing support to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {includeFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-highlight to-background rounded-xl">
                <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                  <Check size={16} />
                </div>
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;