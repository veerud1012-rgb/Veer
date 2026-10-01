import React from 'react';

export function HandDrawnCrown({ className = 'w-10 h-10 text-[#FACC15]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 38L12 14L26 28L34 10L44 28L56 13L52 38H8Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 43C24 41 40 41 54 43"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnUnderline({
  className = 'w-full h-4 text-[#A3E635]',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 260 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 14C68 5 154 4 256 11"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M28 18C95 12 168 11 235 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function HandDrawnArrow({ className = 'w-12 h-12 text-[#A3E635]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 16C24 14 42 22 48 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M37 39L49 46L54 33"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnLightning({
  className = 'w-8 h-10 text-[#FACC15]',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M28 6L8 34H24L18 58L40 28H24L28 6Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
    </svg>
  );
}

export function HandDrawnStar({ className = 'w-7 h-7 text-[#8B5CF6]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4L28.5 17.5L42 19L31.5 28L34.5 41.5L24 34L13.5 41.5L16.5 28L6 19L19.5 17.5L24 4Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnSquiggle({
  className = 'w-20 h-5 text-[#A3E635]',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 16C14 5 22 5 30 15C38 25 48 5 58 14C68 23 78 6 90 13C100 19 108 9 116 11"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
