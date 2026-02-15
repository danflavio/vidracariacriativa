import React from "react";

export default function Logo({ width = 45, height = 45, className = "" }: { width?: number; height?: number; className?: string }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
                </linearGradient>

                <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="20%" stopColor="#f1f5f9" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="80%" stopColor="#f1f5f9" />
                    <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Background Silver Crescent */}
            <path
                d="M20 70 C 5 70, 5 110, 60 115 C 100 115, 115 105, 115 105 L 115 108 C 115 108, 100 118, 60 118 C 0 118, 0 70, 20 65 Z"
                fill="url(#silverGrad)"
            />
            <path
                d="M20 70 C 15 70, 10 75, 10 90 C 10 105, 15 112, 18 113 L 22 110 C 20 108, 15 100, 15 90 C 15 80, 18 73, 22 71 Z"
                fill="#cbd5e1"
            />

            {/* Glass Panels */}
            {/* Panel 1 (left back) */}
            <rect x="25" y="30" width="18" height="60" fill="url(#glassGrad)" stroke="#cbd5e1" strokeWidth="0.5" />
            {/* Panel 2 */}
            <rect x="40" y="15" width="18" height="75" fill="url(#glassGrad)" stroke="#cbd5e1" strokeWidth="0.5" />
            {/* Panel 3 (center) */}
            <rect x="55" y="25" width="22" height="65" fill="url(#glassGrad)" stroke="#cbd5e1" strokeWidth="0.5" />
            {/* Panel 4 (right back) */}
            <rect x="75" y="45" width="15" height="45" fill="url(#glassGrad)" stroke="#cbd5e1" strokeWidth="0.5" />

            {/* Railing System */}
            {/* Horizontal Main Bar */}
            <rect x="22" y="85" width="75" height="3" rx="1" fill="url(#silverGrad)" />

            {/* Vertical Posts */}
            <rect x="26" y="88" width="2" height="15" fill="#94a3b8" />
            <rect x="48" y="88" width="2" height="18" fill="#94a3b8" />
            <rect x="72" y="88" width="2" height="15" fill="#94a3b8" />
            <rect x="92" y="88" width="2" height="12" fill="#94a3b8" />

            {/* Thin Horizontal Railing Bars */}
            <rect x="26" y="93" width="67" height="1" fill="#cbd5e1" />
            <rect x="26" y="98" width="67" height="1" fill="#cbd5e1" />
            <rect x="26" y="103" width="67" height="1" fill="#cbd5e1" />

            {/* Highlights / Sparkles */}
            <g filter="url(#glow)">
                <path d="M45 25 L47 25 M46 24 L46 26" stroke="white" strokeWidth="1" strokeLinecap="round">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M65 35 L67 35 M66 34 L66 36" stroke="white" strokeWidth="1" strokeLinecap="round">
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                </path>
                <circle cx="38" cy="85" r="1" fill="white">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    );
}
