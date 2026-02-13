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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Key className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">MasterKey</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#platform" className="text-sm text-muted hover:text-foreground transition-colors">Platform</a>
            <a href="#services" className="text-sm text-muted hover:text-foreground transition-colors">Services</a>
            <a href="#technology" className="text-sm text-muted hover:text-foreground transition-colors">Technology</a>
            <a href="#insights" className="text-sm text-muted hover:text-foreground transition-colors">Insights</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Sign In</a>
            <a href="#contact" className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent hover:text-black transition-all">
              Get Started
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-8 flex flex-col gap-6">
            <a href="#platform" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Platform</a>
            <a href="#services" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#technology" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Technology</a>
            <a href="#insights" className="text-lg text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Insights</a>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
              <a href="#" className="text-lg text-muted">Sign In</a>
              <a href="#contact" className="bg-foreground text-background px-6 py-3 rounded-full text-center font-medium" onClick={() => setMobileOpen(false)}>
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
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-surface-light border border-border rounded-full px-5 py-2 mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted">AI-Powered Real Estate Platform</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 animate-fade-in-up">
          <span className="block">Unlock the</span>
          <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent animate-gradient">
            Future of
          </span>
          <span className="block">Real Estate</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted mb-12 animate-fade-in-up delay-200" style={{ animationFillMode: "both" }}>
          MasterKey combines cutting-edge AI technology with expert market knowledge
          to transform how you buy, sell, and manage properties.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300" style={{ animationFillMode: "both" }}>
          <a
            href="#contact"
            className="group bg-accent text-black px-10 py-4 rounded-full text-base font-semibold hover:bg-accent-light transition-all flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#platform"
            className="group border border-white/20 text-foreground px-10 py-4 rounded-full text-base font-medium hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2"
          >
            Explore Platform
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500" style={{ animationFillMode: "both" }}>
          {[
            { value: "$2.4B+", label: "Properties Managed" },
            { value: "15K+", label: "Transactions Closed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Markets Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600" style={{ animationFillMode: "both" }}>
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">The Platform</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Intelligence at
            <br />
            every level
          </h2>
          <p className="text-lg text-muted max-w-xl">
            A unified platform that brings AI-powered analytics, seamless management tools,
            and real-time market data together in one powerful ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 hover:bg-surface-light transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-500" />
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Everything you need.
            <br />
            <span className="text-muted">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-black border border-border rounded-2xl p-8 md:p-12 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex items-center gap-6 lg:w-64 shrink-0">
                  <span className="text-5xl font-bold text-border group-hover:text-accent/30 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted text-lg leading-relaxed mb-6 max-w-2xl">{service.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-surface-light border border-border rounded-full px-4 py-1.5 text-sm text-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex items-center">
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
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
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Technology</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              Built for the
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">next era</span>
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
                  className="flex items-start gap-4 bg-surface border border-border rounded-xl p-5 hover:border-accent/20 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-sm text-muted">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-surface border border-border overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(200,162,60,0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(200,162,60,0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/20 border border-accent/40 rounded-2xl flex items-center justify-center">
                    <Key className="w-10 h-10 text-accent" />
                  </div>

                  <div className="absolute top-[15%] left-[10%] bg-surface-light border border-border rounded-xl p-4 w-40">
                    <div className="text-xs text-muted mb-1">Avg. Home Value</div>
                    <div className="text-lg font-bold text-accent">$847K</div>
                    <div className="text-xs text-green-400 mt-1">+12.3% YoY</div>
                  </div>

                  <div className="absolute top-[12%] right-[10%] bg-surface-light border border-border rounded-xl p-4 w-40">
                    <div className="text-xs text-muted mb-1">Market Score</div>
                    <div className="text-lg font-bold">94/100</div>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-accent" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-[15%] left-[10%] bg-surface-light border border-border rounded-xl p-4 w-44">
                    <div className="text-xs text-muted mb-1">Active Listings</div>
                    <div className="text-lg font-bold">2,847</div>
                    <div className="text-xs text-muted mt-1">Across 50+ markets</div>
                  </div>

                  <div className="absolute bottom-[18%] right-[8%] bg-surface-light border border-border rounded-xl p-4 w-40">
                    <div className="text-xs text-muted mb-1">ROI Forecast</div>
                    <div className="text-lg font-bold text-accent">18.2%</div>
                    <div className="text-xs text-muted mt-1">Next 12 months</div>
                  </div>

                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="50%" x2="30%" y2="25%" stroke="rgba(200,162,60,0.15)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="rgba(200,162,60,0.15)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="25%" y2="78%" stroke="rgba(200,162,60,0.15)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(200,162,60,0.15)" strokeWidth="1" />
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Client Insights</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Trusted by those
            <br />
            who demand more
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-black border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-accent/20 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-1.5 h-6 rounded-full bg-accent" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8">{t.quote}</p>
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-border">
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-10">
            Partnered with industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 text-muted-foreground">
            {["Zillow", "Realtor.com", "CoStar", "Redfin", "MLS"].map((name) => (
              <span key={name} className="text-xl font-semibold tracking-wide opacity-40 hover:opacity-70 transition-opacity">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent/8 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
          Ready to unlock
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent animate-gradient">
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
            className="group bg-accent text-black px-12 py-5 rounded-full text-lg font-semibold hover:bg-accent-light transition-all flex items-center gap-3"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="group border border-white/20 text-foreground px-12 py-5 rounded-full text-lg font-medium hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-3"
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
    <footer className="border-t border-border bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Key className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">MasterKey</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The future of real estate, powered by AI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Platform</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">AI Valuations</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Market Analytics</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Mobile App</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Dashboards</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Brokerage</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Property Management</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Investment Advisory</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Consulting</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MasterKey. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
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
