import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Code, 
  Sparkles, 
  Play, 
  ArrowRight, 
  CheckCircle2,
  User,
  Users
} from 'lucide-react';
import { ChatDemo } from '../components/ChatDemo';

export const Landing = () => {
  const [showDemo, setShowDemo] = useState(false);
  const featuresRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[var(--background)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-[var(--primary)]" />
            <span className="text-xl font-bold neon-text">AI Terminal</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection(featuresRef)}
              className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
            >
              Pricing
            </button>
            <Link to="/login" className="cyber-button">
              Access Terminal →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 transform rotate-45 bg-[var(--surface)] neon-border flex items-center justify-center">
            <Brain className="h-10 w-10 text-[var(--primary)] transform -rotate-45" />
          </div>
          <h1 className="text-5xl font-bold neon-text mb-6">
            Accelerate your Growth with Advanced AI
          </h1>
          <p className="text-xl text-[var(--primary)] opacity-80 mb-10">
            Experience the next generation of AI assistance. Process data, generate insights, and automate workflows with unparalleled speed and precision.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/login" className="cyber-button group">
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              className="cyber-button flex items-center"
              onClick={() => setShowDemo(true)}
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </button>
          </div>
          <p className="text-[var(--primary)] opacity-70">
            Adopted by over 20+ teams in the last month
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="container mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold neon-text text-center mb-16">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "Natural Conversations",
              description: "Chat like you're talking to a brilliant friend"
            },
            {
              icon: <Brain className="h-8 w-8" />,
              title: "Universal Knowledge",
              description: "From academic research to creative projects"
            },
            {
              icon: <Code className="h-8 w-8" />,
              title: "Code Generation",
              description: "Build entire applications with AI guidance"
            },
            {
              icon: <Sparkles className="h-8 w-8" />,
              title: "Learning Companion",
              description: "Personalised explanations in any field"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-[var(--surface)] p-6 rounded-lg neon-border">
              <div className="text-[var(--primary)] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold neon-text mb-4">Trusted by Innovators</h2>
          <p className="text-[var(--primary)] opacity-80">1M+ questions answered daily</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Transformed our development workflow. 3x faster prototyping.",
              author: "Sarah Chen",
              role: "Lead Developer",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
            },
            {
              quote: "The most intuitive AI assistant I've ever used.",
              author: "Mark Thompson",
              role: "Technical Writer",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
            },
            {
              quote: "Game-changing for research analysis and synthesis.",
              author: "Dr. Emily Roberts",
              role: "Research Scientist",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-[var(--surface)] p-6 rounded-lg neon-border">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full neon-border"
                />
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="opacity-70">{testimonial.role}</p>
                </div>
              </div>
              <p className="opacity-80">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section ref={pricingRef} className="container mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold neon-text text-center mb-16">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <User className="h-8 w-8" />,
              name: "Free",
              price: "0",
              features: ["Basic AI assistance", "5 requests per day", "Standard response time"]
            },
            {
              icon: <Sparkles className="h-8 w-8" />,
              name: "Pro",
              price: "29",
              features: ["Unlimited AI assistance", "Priority response time", "Advanced features"]
            },
            {
              icon: <Users className="h-8 w-8" />,
              name: "Team",
              price: "99",
              features: ["Team collaboration", "Admin dashboard", "Custom integrations"]
            }
          ].map((plan, index) => (
            <div key={index} className="bg-[var(--surface)] p-8 rounded-lg neon-border flex flex-col">
              <div className="text-[var(--primary)] mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg opacity-70">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-[var(--primary)]" />
                    <span className="opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/login" className="cyber-button text-center">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="bg-[var(--surface)] rounded-lg neon-border p-12 text-center">
          <h2 className="text-3xl font-bold neon-text mb-6">
            Start Building with AI Today
          </h2>
          <p className="text-xl opacity-80 mb-8">
            7-day free trial • No credit card required • 100% satisfaction guarantee
          </p>
          <Link to="/login" className="cyber-button inline-flex items-center">
            Initialize System
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Chat Demo Modal */}
      <ChatDemo isVisible={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  );
};