
import React from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import FaqAccordion from '@/components/FaqAccordion';
import FlowStep from '@/components/FlowStep';
import Logo from '@/components/Logo';
import ChatMockup from '@/components/ChatMockup';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  BookOpen, 
  Zap, 
  CalendarClock, 
  Shield, 
  UserCheck, 
  CloudCog 
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return <div className="min-h-screen bg-aurallon-deep-purple antialiased overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-40 pb-24 bg-hero-gradient relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzgwODBmZjIwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 z-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Elevate Your Real Estate Pipeline with 24/7 AI Concierge
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Capture, qualify, and schedule calls automatically across Telegram, WhatsApp & Slack
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/aurallonbiz" target="_blank" rel="noopener noreferrer">
                  <Button className="primary-btn">
                    Schedule Your Private Demo
                  </Button>
                </a>
                <Button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-purple-gradient text-white py-3 px-6 rounded-md font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  Explore the Workflow
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 z-10">
              <div className="premium-card bg-white/5 backdrop-blur-sm pt-6">
                <h3 className="text-center text-white font-semibold mb-4">24/7 AI Follow-Up on Messaging Apps</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <ChatMockup platform="whatsapp" />
                    </CarouselItem>
                    <CarouselItem>
                      <ChatMockup platform="telegram" />
                    </CarouselItem>
                    <CarouselItem>
                      <ChatMockup platform="slack" />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Logos Section */}
      <Section className="py-12 bg-aurallon-dark-purple/80">
        <div className="text-center mb-8">
          <p className="text-white/60 uppercase tracking-wider font-medium text-sm">Trusted by leading real estate brands</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Placeholder logos - would be replaced with actual partner logos */}
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center px-4">
              <div className="h-3 w-full bg-white/20 rounded"></div>
            </div>)}
        </div>
      </Section>

      {/* How It Works Section - REBUILT */}
      <Section id="how-it-works" className="bg-aurallon-dark-purple">
        <SectionTitle 
          title="How Aurallon Works" 
          subtitle={
            <span>
              Aurallon runs entirely in the cloud—no downloads, no servers, just instant setup and results.
              <br />Our AI concierge integrates seamlessly with your existing workflow, requiring minimal setup while delivering maximum impact.
            </span>
          } 
        />
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <FlowStep 
            index={1} 
            title="24/7 Lead Capture & Follow-Up" 
            description="Aurallon's AI concierge engages leads instantly across Telegram, WhatsApp, and Slack—ensuring you never miss an opportunity, day or night." 
            icon={<MessageSquare className="w-6 h-6 text-aurallon-light-purple" />} 
          />
          
          <FlowStep 
            index={2} 
            title="RAG-Powered Expert Responses" 
            description="The AI uses retrieval-augmented generation (RAG) to pull from your listings and FAQs, delivering precise, brand-aligned answers." 
            icon={<BookOpen className="w-6 h-6 text-aurallon-light-purple" />} 
          />
          
          <FlowStep 
            index={3} 
            title="Intelligent Data Enrichment" 
            description="Automatically builds rich lead profiles with preferences, location, and firmographics in real time." 
            icon={<Zap className="w-6 h-6 text-aurallon-light-purple" />} 
          />
          
          <FlowStep 
            index={4} 
            title="Timezone-Safe Scheduling" 
            description="Converts appointment times to each lead's local timezone, syncing directly with your calendar for frictionless booking." 
            icon={<CalendarClock className="w-6 h-6 text-aurallon-light-purple" />} 
          />
          
          <FlowStep 
            index={5} 
            title="Real-Time CRM Sync & Alerts" 
            description="Every conversation is logged in your CRM, and your team receives instant notifications for high-intent leads." 
            icon={<Shield className="w-6 h-6 text-aurallon-light-purple" />} 
          />
          
          <FlowStep 
            index={6} 
            title="Seamless Agent Handoff" 
            description="Your team gets the full conversation context when a lead is ready for a human follow-up." 
            icon={<UserCheck className="w-6 h-6 text-aurallon-light-purple" />} 
            isLast={true}
          />
        </div>

        {/* Cloud infrastructure callout */}
        <div className="mt-12 premium-card max-w-4xl mx-auto">
          <div className="flex gap-3 items-center mb-4">
            <div className="p-3 bg-aurallon-light-purple/20 rounded-full">
              <CloudCog className="w-6 h-6 text-aurallon-light-purple" />
            </div>
            <h3 className="font-semibold text-white text-xl">Cloud-Powered. Always Available.</h3>
          </div>
          <p className="text-white/70 text-lg">
            Aurallon's infrastructure runs 24/7 in secure cloud environments, enabling easy setup and
            eliminating maintenance headaches. No technical expertise required.
          </p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-aurallon-deep-purple">
        <SectionTitle title={<>What <span className="gradient-text">happy customers</span> are saying</>} center />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard quote="Aurallon has transformed how we handle leads. Response time is down from hours to seconds, and our conversion rate is up 35%." author="Sarah Johnson" role="Team Lead" company="Luxe Realty Partners" image="/placeholder.svg" logo="/placeholder.svg" />
          <TestimonialCard quote="The AI's ability to answer complex property questions accurately has been game-changing. Our team only steps in when truly needed." author="Michael Chen" role="Principal Broker" company="Elevate Property Group" image="/placeholder.svg" logo="/placeholder.svg" />
          <TestimonialCard quote="Setup took 20 minutes, and we were capturing leads that same day. The ROI has been incredible for our boutique agency." author="Amanda Rodriguez" role="Marketing Director" company="Horizon Homes" image="/placeholder.svg" logo="/placeholder.svg" />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-aurallon-dark-purple">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know about Aurallon's AI concierge system for real estate teams." />
            <div className="premium-card">
              <div className="flex gap-3 items-center mb-4">
                <div className="p-2 bg-green-500/20 rounded-full">
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-white">Bank-Level Security</h3>
              </div>
              <p className="text-white/70">
                Your data is protected with enterprise-grade encryption, SOC 2 compliance, and regular security audits. We take your clients' privacy as seriously as you do.
              </p>
            </div>
          </div>
          <div>
            <FaqAccordion />
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="bg-aurallon-deep-purple">
        <div className="bg-purple-gradient rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Lead Game Today</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join elite real estate teams using Aurallon to convert more leads with less effort.
          </p>
          <a href="https://calendly.com/aurallonbiz" className="inline-block" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="font-bold">
              Book My Exclusive Demo
            </Button>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-aurallon-deep-purple pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Logo />
              <p className="mt-4 text-white/60">
                AI-powered multi-channel chatbot automation system built for real estate professionals.
              </p>
              <div className="mt-4 text-white/60">
                <a href="mailto:info@aurallon.com" className="block hover:text-white transition-colors">info@aurallon.com</a>
                <a href="https://aurallon.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">aurallon.com</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">Lead Capture</a></li>
                <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">RAG Technology</a></li>
                <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">Data Enrichment</a></li>
                <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">Timezone-Safe Scheduling</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-white/60 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="flex flex-col space-y-2">
                <a href="https://calendly.com/aurallonbiz" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Book a Demo</a>
                <a href="mailto:info@aurallon.com" className="text-white/60 hover:text-white transition-colors">Email Us</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Support Portal</a>
              </div>
            </div>
          </div>
          
          <Separator className="bg-white/10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <p className="text-white/40 text-sm">
              © 2025 Aurallon Automations. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.42 3.9 14.25C4.16 15.1 4.7 15.82 5.43 16.32C6.16 16.82 7.04 17.07 7.92 17.02C6.22 18.38 4.09 19.1 1.91 19.08C1.57 19.08 1.23 19.06 0.9 19.02C3.08 20.41 5.63 21.21 8.29 21.21C16 21.21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
