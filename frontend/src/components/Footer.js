import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-xl">ST</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">SMPS Tech Lab</h3>
                <p className="text-xs text-slate-400">Innovation Ecosystem</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A National Innovation Ecosystem Platform driving India's technology leadership through cutting-edge R&D and strategic partnerships.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="social-linkedin" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-testid="social-twitter" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-testid="social-facebook" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" data-testid="footer-link-about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/investor" data-testid="footer-link-investor" className="text-slate-400 hover:text-white transition-colors">IP Portfolio</Link></li>
              <li><Link to="/collaborate" data-testid="footer-link-collaborate" className="text-slate-400 hover:text-white transition-colors">Collaboration</Link></li>
              <li><Link to="/ecosystem" data-testid="footer-link-ecosystem" className="text-slate-400 hover:text-white transition-colors">Ecosystem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/insights" data-testid="footer-link-insights" className="text-slate-400 hover:text-white transition-colors">Insights & Blogs</Link></li>
              <li><Link to="/careers" data-testid="footer-link-careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" data-testid="footer-link-contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:contact@smpstechlab.com" className="text-slate-400 text-sm hover:text-white transition-colors">contact@smpstechlab.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-slate-400 text-sm hover:text-white transition-colors">+91 12345 67890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 SMPS Tech Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;