import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Marquee from 'react-fast-marquee';
import { Award, Users, Building2 } from 'lucide-react';
import ecosystemData from '../data/ecosystem.json';
import partnersData from '../data/partners.json';

const Ecosystem = () => {
  const { metrics, advisors, awards, growthData } = ecosystemData;

  return (
    <div data-testid="ecosystem-page" className="pt-20">
      <section className="py-20 sm:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Our Ecosystem
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              A Thriving Innovation Network
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Powering India's technology leadership through strategic partnerships, world-class advisors, and a track record of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'Intellectual Properties', value: metrics.ips + '+' },
              { label: 'Strategic Partnerships', value: metrics.partnerships + '+' },
              { label: 'Students Engaged', value: (metrics.studentsEngaged / 100000).toFixed(1) + 'L+' },
              { label: 'Funding Raised', value: metrics.fundingRaised },
              { label: 'Patents Filed', value: metrics.patentsFiled + '+' },
              { label: 'Startups Incubated', value: metrics.startupsIncubated + '+' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`ecosystem-metric-${index}`}
                className="bg-white rounded-xl p-6 text-center border border-slate-200"
              >
                <p className="text-3xl font-heading font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Growth Trajectory
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Five Years of Exponential Growth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Intellectual Properties Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ips" stroke="#0A66C2" strokeWidth={2} name="IPs Developed" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Partnership Expansion</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="partnerships" fill="#0A66C2" name="Partnerships" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Advisory Board
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Guided by Industry Veterans
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`advisor-${advisor.id}`}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{advisor.designation}</p>
                  <p className="text-sm text-muted-foreground">{advisor.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Recognition & Awards
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Excellence Acknowledged
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`award-${award.id}`}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{award.issuer}</p>
                <p className="text-xs text-primary font-semibold">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Our Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Trusted by Leading Organizations
            </h2>
          </motion.div>

          <div data-testid="partners-marquee">
            <Marquee gradient={false} speed={40} className="py-8">
              {partnersData.map((partner) => (
                <div
                  key={partner.id}
                  className="mx-6 bg-white rounded-xl border border-slate-200 px-12 py-8 flex items-center justify-center min-w-[200px]"
                >
                  <div className="text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="font-heading font-bold text-foreground">{partner.logo}</p>
                    <p className="text-xs text-muted-foreground mt-1">{partner.category}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;