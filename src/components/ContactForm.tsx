import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, Send } from 'lucide-react';

interface ContactFormProps {
  initialProjectType?: string;
}

const PROJECT_TYPES = ['Website', 'Web App', 'Game', 'Other'];
const WHATSAPP_PHONE = '919953575628';
const TARGET_EMAIL = 'veer.ud.1012@gmail.com';

export function ContactForm({ initialProjectType }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType || 'Website');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState<{
    name: string;
    email: string;
    projectType: string;
    message: string;
    whatsappUrl: string;
    mailtoUrl: string;
  } | null>(null);

  useEffect(() => {
    if (initialProjectType && PROJECT_TYPES.includes(initialProjectType)) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address so I can reply.');
      return;
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 10) {
      setStatus('error');
      setErrorMessage('Please share a brief description of your project (at least 10 characters).');
      return;
    }

    setStatus('loading');

    // Build formatted inquiry content
    const subject = `New Project Inquiry: ${projectType} from ${trimmedName}`;
    const formattedBody = `Hi Udayveer,

I would like to discuss a project with you:

• Name: ${trimmedName}
• Email: ${trimmedEmail}
• Project Type: ${projectType}

Project Details & Goals:
${trimmedMessage}

(Sent via Veyro Portfolio inquiry form)`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(formattedBody)}`;
    const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

    setLastSubmitted({
      name: trimmedName,
      email: trimmedEmail,
      projectType,
      message: trimmedMessage,
      whatsappUrl,
      mailtoUrl,
    });

    // Send inquiry to both WhatsApp and Email simultaneously
    setTimeout(() => {
      // 1. Open WhatsApp chat with pre-filled message
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.warn('Could not auto-open WhatsApp:', err);
      }

      // 2. Open Email client with pre-filled subject and body
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.warn('Could not auto-trigger mailto:', err);
      }

      setStatus('success');
    }, 600);
  };

  if (status === 'success' && lastSubmitted) {
    return (
      <div className="rounded-3xl bg-[#0D1017] border border-[#A3E635]/60 p-7 sm:p-10 shadow-[0_0_40px_rgba(163,230,53,0.15)] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#A3E635]/15 text-[#A3E635] flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.3)]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#A3E635] font-semibold tracking-wider">
              INQUIRY DISPATCHED
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Sent to Email &amp; WhatsApp!
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Thank you, <strong className="text-white">{lastSubmitted.name}</strong>. Your project inquiry has been prepared and routed to Udayveer on both <strong className="text-[#A3E635]">Email</strong> and <strong className="text-[#25D366]">WhatsApp</strong>.
        </p>

        {/* 1-Click Direct Links to re-open or confirm on both channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <a
            href={lastSubmitted.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-[#08090D] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Open in WhatsApp (9953575628)</span>
          </a>

          <a
            href={lastSubmitted.mailtoUrl}
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-[#A3E635]" />
            <span>Open in Email ({TARGET_EMAIL})</span>
          </a>
        </div>

        <div className="p-4 rounded-xl bg-[#08090D] border border-white/10 font-mono text-xs text-slate-300 space-y-1.5">
          <div className="text-slate-400">INQUIRY SUMMARY:</div>
          <div><span className="text-slate-500">NAME:</span> {lastSubmitted.name}</div>
          <div><span className="text-slate-500">EMAIL:</span> {lastSubmitted.email}</div>
          <div><span className="text-slate-500">PROJECT TYPE:</span> {lastSubmitted.projectType}</div>
          <div className="pt-1 text-slate-400 border-t border-white/5 line-clamp-2">
            <span className="text-slate-500">DETAILS:</span> &ldquo;{lastSubmitted.message}&rdquo;
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setName('');
            setEmail('');
            setMessage('');
            setLastSubmitted(null);
          }}
          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
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
            Sends directly to my Email &amp; WhatsApp for immediate review.
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

      {/* Message / Project Details (Budget range removed as requested) */}
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

      {/* Dual Email & WhatsApp dispatch note */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Send className="w-3.5 h-3.5 text-[#A3E635]" />
        <span>Dispatches simultaneously to Email &amp; WhatsApp (+91 9953575628)</span>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 px-6 rounded-xl bg-[#A3E635] hover:bg-[#b5f24c] disabled:opacity-60 text-[#08090D] font-bold text-sm sm:text-base btn-cyber-lime flex items-center justify-center gap-2 shadow-[0_0_28px_rgba(163,230,53,0.3)] cursor-pointer group"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Routing to Email &amp; WhatsApp...</span>
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
