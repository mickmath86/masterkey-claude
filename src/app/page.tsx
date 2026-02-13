"use client";

import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  ChevronRight,
  Key,
  LineChart,
  Menu,
  Smartphone,
  Shield,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Key className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">MasterKey</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#platform" className="text-sm text-muted hover:text-foreground transition-colors">Platform</a>
            <a href="#services" className="text-sm text-muted hover:text-foreground transition-colors">Services</a>
            <a href="#technology" className="text-sm text-muted hover:text-foreground transition-colors">Technology</a>
            <a href="#insights" className="text-sm text-muted hover:text-foreground transition-colors">Insights</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Sign In</a>
            <a href="#contact" className="bg-sky-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sky-600 transition-all">
              Get Started
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-8 flex flex-col gap-6">
            <a href="#platform" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Platform</a>
            <a href="#services" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#technology" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Technology</a>
            <a href="#insights" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Insights</a>
            <div className="pt-4 border-t border-border flex flex-col gap-4">
              <a href="#" className="text-lg text-muted">Sign In</a>
              <a href="#contact" className="bg-sky-500 text-white px-6 py-3 rounded-full text-center font-medium" onClick={() => setMobileOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Sky glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-200/40 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-5 py-2 mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-sm text-sky-700 font-medium">AI-Powered Real Estate Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 animate-fade-in-up">
          <span className="block text-foreground">Unlock the</span>
          <span className="block bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 bg-clip-text text-transparent animate-gradient">
            Future of
          </span>
          <span className="block text-foreground">Real Estate</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted mb-12 animate-fade-in-up delay-200" style={{ animationFillMode: "both" }}>
          MasterKey combines cutting-edge AI technology with expert market knowledge
          to transform how you buy, sell, and manage properties.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300" style={{ animationFillMode: "both" }}>
          <a
            href="#contact"
            className="group bg-sky-500 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-sky-600 transition-all flex items-center gap-2 shadow-lg shadow-sky-500/25"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#platform"
            className="group border border-slate-300 text-foreground px-10 py-4 rounded-full text-base font-medium hover:border-sky-300 hover:bg-sky-50 transition-all flex items-center gap-2"
          >
            Explore Platform
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500" style={{ animationFillMode: "both" }}>
          {[
            { value: "$2.4B+", label: "Properties Managed" },
            { value: "15K+", label: "Transactions Closed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Markets Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-sky-500">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600" style={{ animationFillMode: "both" }}>
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-sky-400/50 to-transparent" />
      </div>
    </section>
  );
}

function Platform() {
  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI Valuations",
      description: "Our AI engine analyzes thousands of data points to provide accurate property estimates in real time.",
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Market Analytics",
      description: "Advanced algorithms analyze trends, comparable sales, and neighborhood data for precise investment insights.",
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Command",
      description: "Access your entire portfolio, client communications, and market data from anywhere on any device.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Smart Contracts",
      description: "Streamlined transaction processing with intelligent contract management and compliance automation.",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Performance Dashboards",
      description: "Track occupancy rates, maintenance costs, and ROI with real-time market comparisons.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Instant Insights",
      description: "Get instant notifications on market shifts, investment opportunities, and portfolio performance changes.",
    },
  ];

  return (
    <section id="platform" className="py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-4">The Platform</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            Intelligence at every level
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            A unified platform that brings AI-powered analytics, seamless management tools,
            and real-time market data together in one powerful ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white border border-border rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      number: "01",
      icon: <Building2 className="w-8 h-8" />,
      title: "Brokerage",
      description:
        "Full-service buying and selling powered by AI market analysis, predictive pricing, and automated matching to connect the right buyers with the right properties.",
      features: ["AI-powered property matching", "Predictive pricing models", "Automated offer management"],
    },
    {
      number: "02",
      icon: <Key className="w-8 h-8" />,
      title: "Property Management",
      description:
        "Maximize your property investments with our comprehensive management platform. From tenant screening to maintenance coordination, we handle everything.",
      features: ["Automated tenant screening", "Predictive maintenance", "Real-time financial reporting"],
    },
    {
      number: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Advisory",
      description:
        "Data-driven investment strategies backed by machine learning models that analyze market cycles, growth corridors, and risk factors.",
      features: ["Portfolio optimization", "Market cycle analysis", "Risk-adjusted returns"],
    },
  ];

  return (
    <section id="services" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[128px]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            Everything you need.
            <br />
            <span className="text-muted">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-white border border-border rounded-2xl p-8 md:p-12 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex items-center gap-6 lg:w-64 shrink-0">
                  <span className="text-5xl font-bold text-slate-200 group-hover:text-sky-200 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 group-hover:bg-sky-100 transition-colors">
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted text-lg leading-relaxed mb-6 max-w-2xl">{service.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5 text-sm text-sky-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex items-center">
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-sky-400 group-hover:text-sky-500 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14,165,233,0.4) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-4">Technology</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground">
              Built for the
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent">next era</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-lg">
              Our proprietary AI analyzes millions of data points across market trends,
              neighborhood dynamics, and economic indicators to deliver insights that
              were previously impossible.
            </p>

            <div className="space-y-4">
              {[
                { label: "Machine Learning", value: "Predictive models trained on 10M+ transactions" },
                { label: "Real-Time Data", value: "Live feeds from 200+ market data sources" },
                { label: "IoT Integration", value: "Connected sensors for predictive property maintenance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white border border-border rounded-xl p-5 hover:border-sky-200 hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-foreground">{item.label}</div>
                    <div className="text-sm text-muted">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data visualization panel */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50 border border-border overflow-hidden relative">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(14,165,233,0.2) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(14,165,233,0.2) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sky-100 border-2 border-sky-300 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/10">
                    <Key className="w-10 h-10 text-sky-500" />
                  </div>

                  {/* Data cards */}
                  <div className="absolute top-[15%] left-[10%] bg-white border border-border rounded-xl p-4 w-40 shadow-sm">
                    <div className="text-xs text-muted mb-1">Avg. Home Value</div>
                    <div className="text-lg font-bold text-sky-500">$847K</div>
                    <div className="text-xs text-emerald-500 mt-1">+12.3% YoY</div>
                  </div>

                  <div className="absolute top-[12%] right-[10%] bg-white border border-border rounded-xl p-4 w-40 shadow-sm">
                    <div className="text-xs text-muted mb-1">Market Score</div>
                    <div className="text-lg font-bold text-foreground">94/100</div>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-sky-400" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-[15%] left-[10%] bg-white border border-border rounded-xl p-4 w-44 shadow-sm">
                    <div className="text-xs text-muted mb-1">Active Listings</div>
                    <div className="text-lg font-bold text-foreground">2,847</div>
                    <div className="text-xs text-muted mt-1">Across 50+ markets</div>
                  </div>

                  <div className="absolute bottom-[18%] right-[8%] bg-white border border-border rounded-xl p-4 w-40 shadow-sm">
                    <div className="text-xs text-muted mb-1">ROI Forecast</div>
                    <div className="text-lg font-bold text-sky-500">18.2%</div>
                    <div className="text-xs text-muted mt-1">Next 12 months</div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="50%" x2="30%" y2="25%" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="25%" y2="78%" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const testimonials = [
    {
      quote:
        "MasterKey's AI valuation saved us from overpaying by $120K on a commercial property. The data speaks for itself.",
      name: "Sarah Chen",
      role: "Real Estate Investor",
    },
    {
      quote:
        "Managing 200+ units used to be a nightmare. Now our entire operation runs through one dashboard. Game changer.",
      name: "Marcus Rivera",
      role: "Property Manager",
    },
    {
      quote:
        "The market insights gave us a 6-month head start on an emerging neighborhood. Our ROI speaks for itself.",
      name: "David Park",
      role: "Development Partner",
    },
  ];

  return (
    <section id="insights" className="py-32 bg-surface relative">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-4">Client Insights</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            Trusted by those
            <br />
            who demand more
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-1.5 h-6 rounded-full bg-sky-400" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8 text-foreground">{t.quote}</p>
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-border">
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-10">
            Partnered with industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Zillow", "Realtor.com", "CoStar", "Redfin", "MLS"].map((name) => (
              <span key={name} className="text-xl font-semibold tracking-wide text-slate-300 hover:text-slate-400 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-sky-100/50 rounded-full blur-[128px]" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 text-foreground">
          Ready to unlock
          <br />
          <span className="bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 bg-clip-text text-transparent animate-gradient">
            your potential?
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12">
          Join thousands of real estate professionals who are already using MasterKey
          to close more deals, manage smarter, and grow faster.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group bg-sky-500 text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-sky-600 transition-all flex items-center gap-3 shadow-lg shadow-sky-500/25"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="group border border-slate-300 text-foreground px-12 py-5 rounded-full text-lg font-medium hover:border-sky-300 hover:bg-sky-50 transition-all flex items-center gap-3"
          >
            Schedule a Demo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-slate-900">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <Key className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MasterKey</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The future of real estate, powered by AI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Platform</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">AI Valuations</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Market Analytics</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Mobile App</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Dashboards</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Services</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Brokerage</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Property Management</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Investment Advisory</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Consulting</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Company</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} MasterKey. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Platform />
      <Services />
      <Technology />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}
