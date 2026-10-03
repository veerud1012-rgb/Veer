import React from 'react';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER_DISPLAY = '9953575628';
const WHATSAPP_URL =
  'https://wa.me/919953575628?text=Hi%20Udayveer%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 left-4 sm:left-6 z-50">
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${WHATSAPP_NUMBER_DISPLAY}`}
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { type: 'spring', stiffness: 260, damping: 20 },
          y: {
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={{ scale: 1.06, y: -4 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center gap-2.5 sm:gap-3 pl-2 pr-3.5 sm:pr-4 py-2 rounded-2xl bg-[#0B0F17]/95 backdrop-blur-xl border-2 border-[#25D366]/80 shadow-[0_0_24px_rgba(37,211,102,0.45),inset_0_0_12px_rgba(37,211,102,0.18)] hover:border-[#A3E635] hover:shadow-[0_0_34px_rgba(37,211,102,0.8),0_0_16px_rgba(163,230,53,0.5)] transition-colors duration-200 cursor-pointer"
      >
        {/* Continuous Outer Sonar / Radar Pulse Rings */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 rounded-2xl border border-[#25D366]/55 animate-ping opacity-40"
        />

        {/* WhatsApp Icon Container with Periodic Attention Wiggle */}
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_0_16px_rgba(37,211,102,0.65)] shrink-0">
          {/* Live Online Status Dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3E635] opacity-85" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A3E635] border-2 border-[#08090D]" />
          </span>

          <motion.svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-6 h-6 text-white drop-shadow"
            animate={{
              rotate: [0, -12, 12, -10, 10, 0],
              scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              repeatDelay: 3.2,
              ease: 'easeInOut',
            }}
          >
            <path d="M16.004 3.2c-7.068 0-12.8 5.732-12.8 12.8 0 2.257.59 4.46 1.71 6.404L3.09 28.8l6.565-1.722a12.74 12.74 0 0 0 6.349 1.696h.005c7.066 0 12.796-5.731 12.799-12.798A12.72 12.72 0 0 0 25.06 6.93 12.717 12.717 0 0 0 16.004 3.2Zm0 23.413h-.004a10.59 10.59 0 0 1-5.402-1.48l-.387-.23-4.018 1.054 1.072-3.917-.252-.402a10.593 10.593 0 0 1-1.627-5.643c0-5.855 4.764-10.618 10.622-10.618 2.836 0 5.503 1.106 7.508 3.112a10.553 10.553 0 0 1 3.109 7.51c-.002 5.856-4.766 10.614-10.621 10.614Zm5.826-7.95c-.319-.16-1.889-.932-2.182-1.038-.292-.106-.505-.16-.718.16-.213.319-.824 1.038-1.01 1.25-.186.214-.373.24-.692.08-.319-.16-1.347-.496-2.566-1.583-.949-.846-1.589-1.891-1.775-2.21-.186-.32-.02-.493.14-.652.143-.143.319-.373.479-.559.16-.186.212-.319.319-.532.106-.213.053-.399-.027-.559-.08-.16-.718-1.73-0.984-2.369-.259-.622-.522-.538-.718-.548l-.612-.01c-.213 0-.558.08-.851.399-.292.32-1.117 1.091-1.117 2.661s1.144 3.087 1.303 3.3c.16.213 2.25 3.437 5.452 4.819.762.329 1.356.525 1.82.672.764.243 1.46.209 2.01.127.613-.092 1.889-.772 2.155-1.518.266-.745.266-1.384.186-1.517-.08-.133-.293-.213-.612-.373Z" />
          </motion.svg>
        </div>

        {/* WhatsApp Label + Phone Number */}
        <div className="flex flex-col leading-tight">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#25D366] group-hover:text-[#A3E635] transition-colors">
            WhatsApp Me
          </span>
          <span className="font-mono text-xs sm:text-sm font-extrabold text-white tracking-tight tabular-nums">
            {WHATSAPP_NUMBER_DISPLAY}
          </span>
        </div>
      </motion.a>
    </div>
  );
}
