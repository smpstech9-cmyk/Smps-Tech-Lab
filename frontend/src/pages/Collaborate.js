import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Building2, Rocket, Landmark, FlaskConical, Award, Users, BookOpen } from 'lucide-react';

const Collaborate = () => {
  const [activeTab, setActiveTab] = useState('academia');

  const collaborationTypes = {
    academia: {
      icon: GraduationCap,
      title: 'Academia',
      subtitle: 'Universities & Research Institutions',
      offerings: [
        {
          icon: FlaskConical,
          title: 'R&D Collaboration',
          description: 'Joint research projects with IITs, NITs, and top universities. Access to cutting-edge labs and co-authorship opportunities.',
          benefits: ['Funded research projects', 'Access to industry datasets', 'Co-publication opportunities', 'Technology transfer support']
        },
        {
          icon: Users,
          title: 'Internship Programs',
          description: 'Provide students with hands-on experience in deep tech innovation. 6-12 month programs with stipends and mentorship.',
          benefits: ['Paid internships', 'Industry mentorship', 'Real-world projects', 'Pre-placement offers']
        },
        {
          icon: Award,
          title: 'Certification Programs',
          description: 'Industry-recognized certification courses in emerging technologies co-designed with academic partners.',
          benefits: ['Curriculum co-development', 'Faculty training', 'Student certifications', 'Placement assistance']
        },
        {
          icon: Rocket,
          title: 'Startup Incubation',
          description: 'Support student and faculty-led startups with funding, mentorship, and infrastructure.',
          benefits: ['Seed funding up to ₹50L', 'Mentorship network', 'Office space', 'Go-to-market support']
        },
      ],
    },
    industry: {
      icon: Building2,
      title: 'Industry',
      subtitle: 'Enterprises & Corporations',
      offerings: [
        {
          icon: FlaskConical,
          title: 'Technology Licensing',
          description: 'License our proven intellectual properties for rapid deployment in your products and services.',
          benefits: ['Flexible licensing models', 'Technical support', 'Custom modifications', 'Training programs']
        },
        {
          icon: Users,
          title: 'Co-Development',
          description: 'Collaborate on developing custom solutions tailored to your industry-specific challenges.',
          benefits: ['Joint IP ownership', 'Dedicated teams', 'Agile development', 'Market exclusivity options']
        },
        {
          icon: BookOpen,
          title: 'Proof of Concept',
          description: 'Validate technology fit with pilot projects before full-scale implementation.',
          benefits: ['Low-risk trials', 'Performance guarantees', 'Scalability assessment', 'ROI analysis']
        },
        {
          icon: Award,
          title: 'Innovation Partnerships',
          description: 'Long-term strategic partnerships to drive continuous innovation in your organization.',
          benefits: ['Dedicated R&D center', 'Priority access to IPs', 'Co-branding opportunities', 'Knowledge sharing']
        },
      ],
    },
    startups: {
      icon: Rocket,
      title: 'Startups',
      subtitle: 'Deep Tech Ventures',
      offerings: [
        {
          icon: Rocket,
          title: 'Incubation Program',
          description: '12-18 month program providing infrastructure, mentorship, and initial funding for promising deep-tech startups.',
          benefits: ['Office space', 'Seed funding ₹25-50L', 'Mentor network', 'Legal & accounting support']
        },
        {
          icon: FlaskConical,
          title: 'Technology Access',
          description: 'Access our IP portfolio at preferential rates to accelerate your product development.',
          benefits: ['Discounted licensing', 'Technical guidance', 'R&D collaboration', 'Lab access']
        },
        {
          icon: Users,
          title: 'Go-to-Market Support',
          description: 'Leverage our network of 228+ partners for customer introductions and market validation.',
          benefits: ['Customer introductions', 'Pilot opportunities', 'Sales support', 'Marketing assistance']
        },
        {
          icon: Award,
          title: 'Funding Connect',
          description: 'Connect with our network of investors, VCs, and government funding schemes.',
          benefits: ['Investor introductions', 'Pitch preparation', 'Grant application support', 'Due diligence help']
        },
      ],
    },
    government: {
      icon: Landmark,
      title: 'Government',
      subtitle: 'Public Sector & Agencies',
      offerings: [
        {
          icon: FlaskConical,
          title: 'Policy Implementation',
          description: 'Partner with us to implement national technology missions and policy initiatives.',
          benefits: ['Technology deployment', 'Capacity building', 'Monitoring systems', 'Impact assessment']
        },
        {
          icon: Users,
          title: 'Skill Development',
          description: 'Design and deliver large-scale skill development programs aligned with national priorities.',
          benefits: ['Curriculum design', 'Trainer training', 'Assessment frameworks', 'Certification management']
        },
        {
          icon: Building2,
          title: 'Smart City Solutions',
          description: 'Implement integrated technology solutions for smart cities and digital governance.',
          benefits: ['Turnkey solutions', 'PPP models', 'Operations & maintenance', 'Citizen engagement']
        },
        {
          icon: Award,
          title: 'Research Collaboration',
          description: 'Joint research programs addressing national challenges in defense, healthcare, and infrastructure.',
          benefits: ['Funded projects', 'Security clearances', 'Multi-agency coordination', 'Technology demonstration']
        },
      ],
    },
  };

  return (
    <div data-testid="collaborate-page" className="pt-20">
      <section className="py-20 sm:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Collaboration Opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              Partner With India's Innovation Leader
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join 228+ organizations collaborating with us to drive technological excellence and national development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList data-testid="collaboration-tabs" className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-accent p-2 rounded-xl mb-12">
              {Object.entries(collaborationTypes).map(([key, value]) => {
                const Icon = value.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    data-testid={`tab-${key}`}
                    className="flex flex-col items-center space-y-2 py-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-medium">{value.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(collaborationTypes).map(([key, value]) => (
              <TabsContent key={key} value={key} data-testid={`tab-content-${key}`} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-semibold text-foreground mb-2">
                      {value.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">{value.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {value.offerings.map((offering, index) => {
                      const OfferingIcon = offering.icon;
                      return (
                        <motion.div
                          key={offering.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white rounded-xl border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)] transition-all duration-300"
                        >
                          <div className="w-14 h-14 bg-accent-blue rounded-xl flex items-center justify-center mb-4">
                            <OfferingIcon className="w-7 h-7 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                            {offering.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {offering.description}
                          </p>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                              Key Benefits
                            </p>
                            <ul className="space-y-2">
                              {offering.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
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
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can work together to drive innovation and create lasting impact.
            </p>
            <a
              href="/contact"
              data-testid="start-collaboration-button"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;