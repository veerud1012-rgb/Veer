import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  initialProjectType?: string;
}

const PROJECT_TYPES = ['Website', 'Web App', 'Game', 'Other'];
const BUDGET_RANGES = [
  'Under $500 / ₹25k–₹40k',
  '$500 – $1,500 / ₹40k–₹1.2L',
  '$1,500 – $3,000+ / Custom Scope',
  'Let’s discuss based on requirements',
];

export function ContactForm({ initialProjectType }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType || 'Website');
  const [budget, setBudget] = useState(BUDGET_RANGES[0]);
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialProjectType && PROJECT_TYPES.includes(initialProjectType)) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address so I can reply.');
      return;
    }

    if (message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please share a brief description of your project (at least 10 characters).');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 650);
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-[#0D1017] border border-[#A3E635]/50 p-8 sm:p-10 shadow-2xl space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-[#A3E635]/15 text-[#A3E635] flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Project Inquiry Received!
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Thank you, <strong className="text-white">{name}</strong>. Your inquiry for a{' '}
          <span className="text-[#A3E635] font-semibold">{projectType}</span> project ({budget}) is ready.
        </p>
        <div className="p-4 rounded-xl bg-[#08090D] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
          <div>REPLY-TO: {email}</div>
          <div>SCOPE: {projectType} · 5-Day Express Assessment</div>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setName('');
            setEmail('');
            setMessage('');
          }}
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={validateAndSubmit}
      noValidate
      className="rounded-3xl bg-[#0D1017] border border-white/10 p-6 sm:p-9 shadow-2xl space-y-5"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            Start a Project Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Fill out the brief below — I respond within 24 hours.
          </p>
        </div>
        <span className="font-mono text-xs text-[#A3E635]">5-DAY READY</span>
      </div>

      {status === 'error' && errorMessage && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-center gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
            YOUR NAME *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Rivera"
            className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 focus:border-[#A3E635] focus:outline-none text-white text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
            YOUR EMAIL *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 focus:border-[#A3E635] focus:outline-none text-white text-sm transition-colors"
          />
        </div>
      </div>

      {/* Project Type Selector */}
      <div>
        <label className="block text-xs font-mono text-slate-300 mb-2">
          PROJECT TYPE
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PROJECT_TYPES.map((type) => {
            const active = projectType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setProjectType(type)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-[#A3E635] text-[#08090D] border-[#A3E635]'
                    : 'bg-[#08090D] text-slate-300 border-white/10 hover:border-white/25'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="contact-budget" className="block text-xs font-mono text-slate-300 mb-1.5">
          BUDGET RANGE
        </label>
        <select
          id="contact-budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 focus:border-[#A3E635] focus:outline-none text-white text-sm transition-colors"
        >
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range} className="bg-[#0D1017] text-white">
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
          PROJECT DETAILS &amp; GOALS *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your website idea, game concept, timeline, and goals..."
          className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 focus:border-[#A3E635] focus:outline-none text-white text-sm transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 px-6 rounded-xl bg-[#A3E635] hover:bg-[#b5f24c] disabled:opacity-60 text-[#08090D] font-bold text-sm sm:text-base btn-cyber-lime flex items-center justify-center gap-2 shadow-[0_0_28px_rgba(163,230,53,0.3)] cursor-pointer group"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Preparing Inquiry...</span>
          </>
        ) : (
          <>
            <span>Send Project Inquiry</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
