import React from 'react';
import { FileText, Calendar, Layout, Download } from 'lucide-react';

const DigitalResources = () => {
  const resources = [
    {
      icon: <Layout className="text-primary" size={32} />,
      title: 'Website Templates',
      description: 'Professional, customizable templates for various industries and business types.',
      price: '$29',
      type: 'Template Pack'
    },
    {
      icon: <Calendar className="text-accent-mustard" size={32} />,
      title: 'Business Planners',
      description: 'Digital planners to organize your business goals, projects, and daily tasks.',
      price: '$19',
      type: 'Digital Planner'
    },
    {
      icon: <FileText className="text-accent-salmon" size={32} />,
      title: 'Automation Guides',
      description: 'Step-by-step guides to implement automation in your business processes.',
      price: '$39',
      type: 'Guide & Toolkit'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Digital Resources</span> for Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready-to-use templates, planners, and guides to help you get started quickly or enhance your existing business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-background to-highlight rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-6">{resource.icon}</div>
                <div className="text-sm font-semibold text-primary mb-2">{resource.type}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{resource.price}</div>
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent-salmon/10 to-accent-mustard/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Looking for a specific template or resource that's not listed here? Let me know what you need, and I'll create it for you.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Request Custom Resource
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalResources;