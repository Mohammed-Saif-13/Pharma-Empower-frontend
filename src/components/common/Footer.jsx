// src/components/common/Footer.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Linkedin,
    Twitter,
    Facebook,
    Youtube,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Footer Component with Newsletter Subscription
 * Simple mock version - logs email to console (no backend required)
 */
const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Newsletter submission (MOCK VERSION)
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscribeStatus('error');
            setTimeout(() => setSubscribeStatus(null), 3000);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            // TODO: Replace with actual newsletter API
            console.log('📧 Newsletter Subscription:', email);
            console.log('💾 Save this email to database later');

            setSubscribeStatus('success');
            setEmail('');
            setIsSubmitting(false);

            // Reset message after 5 seconds
            setTimeout(() => setSubscribeStatus(null), 5000);
        }, 1000);
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800">

            {/* Flash News Ticker */}
            <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    <span className="mx-8">
                        📰 Latest News: USFDA Issues New Guidance on Data Integrity for Cloud-Based Systems
                    </span>
                    <span className="mx-8">
                        🧬 Clinical Trial Update: Gene Therapy Shows Promising Phase II Results for Oncology
                    </span>
                    <span className="mx-8">
                        📅 Upcoming Event: Webinar - Decoding USFDA's Latest Guidelines on Cleaning Validation. Register Now!
                    </span>
                    <span className="mx-8">
                        🔬 Breakthrough: AI-Powered Drug Discovery Reduces R&D Time by 40%
                    </span>
                    <span className="mx-8">
                        📰 Latest News: USFDA Issues New Guidance on Data Integrity for Cloud-Based Systems
                    </span>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info & Newsletter */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Pharma Empower Solutions
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Empowering pharmaceutical professionals globally through cutting-edge training,
                                industry insights, and expert consultancy services.
                            </p>
                        </div>

                        {/* Newsletter Subscription Box */}
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-5 h-5 text-indigo-400" />
                                <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
                            </div>
                            <p className="text-slate-400 text-sm mb-4">
                                Subscribe to our newsletter for the latest pharma news, training updates, and industry insights delivered weekly.
                            </p>

                            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        ) : (
                                            <Send className="w-4 h-4" />
                                        )}
                                    </Button>
                                </div>

                                {/* Success Message */}
                                {subscribeStatus === 'success' && (
                                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span className="text-green-400 text-sm">
                                            Successfully subscribed! Check your inbox for confirmation.
                                        </span>
                                    </div>
                                )}

                                {/* Error Message */}
                                {subscribeStatus === 'error' && (
                                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <span className="text-red-400 text-sm">
                                            Please enter a valid email address.
                                        </span>
                                    </div>
                                )}
                            </form>

                            <p className="text-xs text-slate-500 mt-3">
                                We respect your privacy. Unsubscribe anytime.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    About Us & Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/pharma-pulse" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    Pharma News
                                </Link>
                            </li>
                            <li>
                                <Link to="/academy" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    Pharma Academy
                                </Link>
                            </li>
                            <li>
                                <Link to="/network" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    Professional Network
                                </Link>
                            </li>
                            <li>
                                <Link to="/skill-board" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    Skill Board
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info & Social */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-400 text-xs mb-1">General Inquiries</p>
                                    <a href="mailto:contact@pharmaempower.com" className="text-white hover:text-indigo-400 transition-colors">
                                        contact@pharmaempower.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-400 text-xs mb-1">Support</p>
                                    <a href="mailto:support@pharmaempower.com" className="text-white hover:text-indigo-400 transition-colors">
                                        support@pharmaempower.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-400 text-xs mb-1">Location</p>
                                    <p className="text-white">Global Operations</p>
                                </div>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
                            <div className="flex gap-3">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all hover:scale-110"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-slate-400 text-sm text-center md:text-left">
                            <p>&copy; {currentYear} Pharma Empower Solutions. All rights reserved.</p>
                            <p className="text-xs mt-1">Empowering Pharma Professionals Globally</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                Privacy Policy
                            </a>
                            <span className="text-slate-700">•</span>
                            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                Terms of Service
                            </a>
                            <span className="text-slate-700">•</span>
                            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;