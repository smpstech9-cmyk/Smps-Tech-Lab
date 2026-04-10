import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import CareerCard from '../components/CareerCard';
import careersData from '../data/careers.json';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', ...new Set(careersData.map(career => career.type))];

  const filteredCareers = careersData.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || career.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div data-testid="careers-page" className="pt-20">
      <section className="py-20 sm:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Join Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              Build the Future of Technology
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join India's leading innovation ecosystem and work on cutting-edge projects that shape the nation's technological future.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                data-testid="career-search-input"
                placeholder="Search by title, department, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                data-testid="type-filter"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full lg:w-64 pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCareers.length === 0 ? (
            <div data-testid="no-career-results" className="text-center py-20">
              <p className="text-lg text-muted-foreground">No positions found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCareers.map((career, index) => (
                <CareerCard key={career.id} career={career} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-6 tracking-tight">
                Why Join SMPS Tech Lab?
              </h2>
              <ul className="space-y-4">
                {[
                  'Work on nationally critical projects with real-world impact',
                  'Collaborate with IITs, DRDO, ISRO, and industry leaders',
                  'Access to cutting-edge technology and research facilities',
                  'Competitive compensation and benefits package',
                  'Fast-track career growth in deep tech domains',
                  'Flexible work arrangements and work-life balance',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Don't See the Right Role?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're always looking for exceptional talent. Send us your resume and we'll reach out when a suitable position opens up.
              </p>
              <button
                data-testid="submit-resume-button"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Submit Your Resume
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;