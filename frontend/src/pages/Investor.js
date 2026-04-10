import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import IPCard from '../components/IPCard';
import ipData from '../data/ipData.json';

const Investor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(ipData.map(ip => ip.category))];

  const filteredIPs = ipData.filter(ip => {
    const matchesSearch = ip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div data-testid="investor-page" className="pt-20">
      <section className="py-20 sm:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Intellectual Property Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              Innovation Ready for Investment
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our 17+ high-value intellectual properties across critical technology sectors with proven market potential and government backing.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                data-testid="search-input"
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                data-testid="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full lg:w-64 pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredIPs.length === 0 ? (
            <div data-testid="no-results" className="text-center py-20">
              <p className="text-lg text-muted-foreground">No intellectual properties found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIPs.map((ip, index) => (
                <IPCard key={ip.id} ip={ip} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-6 tracking-tight">
              Interested in Investing?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a meeting with our investment team to discuss opportunities, valuations, and partnership models.
            </p>
            <a
              href="/contact"
              data-testid="schedule-meeting-button"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Schedule a Meeting
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investor;