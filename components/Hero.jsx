'use client';

import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { getDocument, COLLECTIONS } from '@/lib/firestore';

/* ═══════════════════════════════════════════════════════════════════════════
   HERO — Flagship Visual Experience
   ═══════════════════════════════════════════════════════════════════════════
   Features: Dynamic particles, floating nodes, morphing gradients,
             3D perspective effects, magnetic interactions
   ═══════════════════════════════════════════════════════════════════════════ */

const HERO_STYLES = `
  /* ─── Base Layout ─── */
  .hero {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    place-items: center;
    position: relative;
    background: var(--bg-primary);
    overflow: hidden;
    padding: 6rem 0 4rem;
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 1.5rem;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .hero-inner {
      grid-template-columns: 1fr 480px;
      gap: 4rem;
    }
  }

  /* ═══════════════════════════════════════════════════════════
     DYNAMIC BACKGROUND SYSTEM
     ═══════════════════════════════════════════════════════════ */

  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  /* Morphing gradient orbs */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    will-change: transform;
    animation: morph 20s ease-in-out infinite;
  }

  .hero-orb--1 {
    width: 600px;
    height: 600px;
    top: -20%;
    right: -10%;
    background: conic-gradient(from 0deg, var(--accent-light), rgba(139, 92, 246, 0.08), var(--accent-light));
    animation: morph 25s ease-in-out infinite, drift-1 30s ease-in-out infinite;
  }

  .hero-orb--2 {
    width: 500px;
    height: 500px;
    bottom: -15%;
    left: -10%;
    background: conic-gradient(from 180deg, rgba(16, 185, 129, 0.06), rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.06));
    animation: morph 30s ease-in-out infinite reverse, drift-2 25s ease-in-out infinite;
  }

  .hero-orb--3 {
    width: 300px;
    height: 300px;
    top: 40%;
    left: 30%;
    background: radial-gradient(circle, rgba(244, 114, 182, 0.05) 0%, transparent 70%);
    animation: morph 18s ease-in-out infinite, float-slow 20s ease-in-out infinite;
  }

  @keyframes morph {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
    75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
  }

  @keyframes drift-1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-30px, 40px) scale(1.05); }
    66% { transform: translate(20px, -20px) scale(0.95); }
  }

  @keyframes drift-2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(40px, -30px) scale(1.08); }
    66% { transform: translate(-20px, 30px) scale(0.92); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
  }

  [data-theme="dark"] .hero-orb { opacity: 1; }
  [data-theme="dark"] .hero-orb--1 {
    background: conic-gradient(from 0deg, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.12));
  }
  [data-theme="dark"] .hero-orb--2 {
    background: conic-gradient(from 180deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.12), rgba(16, 185, 129, 0.1));
  }

  /* Animated grid */
  .hero-grid {
    position: absolute;
    inset: -50%;
    background-image:
      linear-gradient(var(--border-secondary) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-secondary) 1px, transparent 1px);
    background-size: 80px 80px;
    transform: perspective(500px) rotateX(60deg);
    mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent);
    -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent);
    opacity: 0.3;
    animation: grid-flow 20s linear infinite;
  }

  @keyframes grid-flow {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; }
  }

  /* Floating particles canvas */
  .hero-particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    will-change: transform, opacity;
  }

  .particle--dot {
    width: 4px;
    height: 4px;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }

  .particle--ring {
    width: 20px;
    height: 20px;
    border: 1px solid var(--accent);
    background: transparent;
    opacity: 0.3;
  }

  .particle--glow {
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent);
  }

  /* Animated connection lines */
  .hero-lines {
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: 0.15;
  }

  .hero-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    animation: line-scan 8s ease-in-out infinite;
  }

  .hero-line--1 { top: 20%; width: 60%; left: -10%; animation-delay: 0s; }
  .hero-line--2 { top: 45%; width: 80%; left: 20%; animation-delay: 2s; }
  .hero-line--3 { top: 70%; width: 50%; left: 40%; animation-delay: 4s; }

  @keyframes line-scan {
    0%, 100% { opacity: 0; transform: translateX(-100%); }
    50% { opacity: 1; transform: translateX(100%); }
  }

  /* ═══════════════════════════════════════════════════════════
     CONTENT STYLES
     ═══════════════════════════════════════════════════════════ */

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    .hero-content {
      align-items: flex-start;
      text-align: left;
    }
  }

  /* Status badge with glow */
  .hero-status {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 10px 20px;
    border-radius: var(--radius-full);
    background: var(--bg-glass);
    border: 1px solid var(--border-primary);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-tertiary);
    margin-bottom: 2rem;
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.1);
  }

  .hero-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--success);
    box-shadow: 0 0 12px var(--success), 0 0 24px var(--success);
    animation: pulse-glow 2s ease-in-out infinite;
  }

  @keyframes pulse-glow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
  }

  /* Headline with shimmer */
  .hero-headline {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .hero-headline-accent {
    display: block;
    position: relative;
    background: var(--accent-gradient);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer-text 4s linear infinite;
  }

  @keyframes shimmer-text {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .hero-description {
    font-size: clamp(1rem, 2vw, 1.1rem);
    font-weight: 450;
    line-height: 1.8;
    color: var(--text-tertiary);
    max-width: 500px;
    margin-bottom: 2.5rem;
  }

  /* CTAs with magnetic hover */
  .hero-actions {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    max-width: 340px;
    margin-bottom: 3rem;
  }

  @media (min-width: 480px) {
    .hero-actions {
      flex-direction: row;
      max-width: none;
      width: auto;
    }
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 32px;
    border-radius: var(--radius-lg);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .hero-cta--primary {
    background: var(--accent-gradient);
    color: #fff;
    border: none;
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
  }

  .hero-cta--primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .hero-cta--primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 40px rgba(37, 99, 235, 0.4);
  }

  .hero-cta--primary:hover::before {
    opacity: 1;
  }

  .hero-cta--secondary {
    background: var(--bg-glass);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .hero-cta--secondary:hover {
    background: var(--bg-card-hover);
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
  }

  .hero-cta svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hero-cta:hover svg {
    transform: translateX(4px);
  }

  /* Metrics with count animation ready */
  .hero-metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-primary);
  }

  @media (min-width: 1024px) {
    .hero-metrics { gap: 3.5rem; }
  }

  .hero-metric {
    text-align: center;
    position: relative;
  }

  @media (min-width: 1024px) {
    .hero-metric { text-align: left; }
  }

  .hero-metric-value {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1.2;
  }

  .hero-metric-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-quaternary);
    margin-top: 6px;
  }

  /* ═══════════════════════════════════════════════════════════
     VISUAL SYSTEM - ADVANCED 3D GRAPHICS
     ═══════════════════════════════════════════════════════════ */

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    perspective: 1000px;
  }

  .visual-container {
    position: relative;
    width: 100%;
    max-width: 420px;
    aspect-ratio: 1;
    transform-style: preserve-3d;
    animation: float-3d 8s ease-in-out infinite;
  }

  @keyframes float-3d {
    0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
    25% { transform: translateY(-15px) rotateX(2deg) rotateY(-2deg); }
    50% { transform: translateY(-8px) rotateX(0) rotateY(2deg); }
    75% { transform: translateY(-20px) rotateX(-2deg) rotateY(-1deg); }
  }

  /* Outer rotating ring with nodes */
  .visual-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid;
    transform-style: preserve-3d;
  }

  .visual-ring--outer {
    inset: 0;
    border-color: var(--border-primary);
    animation: spin-slow 40s linear infinite;
  }

  .visual-ring--outer::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 2px dashed var(--accent);
    opacity: 0.2;
    animation: spin-slow 60s linear infinite reverse;
  }

  .visual-ring--middle {
    inset: 12%;
    border-color: var(--accent);
    opacity: 0.4;
    animation: spin-slow 30s linear infinite reverse;
  }

  .visual-ring--inner {
    inset: 28%;
    border-color: var(--border-hover);
    animation: spin-slow 20s linear infinite;
  }

  @keyframes spin-slow {
    to { transform: rotate(360deg); }
  }

  /* Orbiting nodes */
  .visual-node {
    position: absolute;
    border-radius: 50%;
    transform-origin: center center;
  }

  .visual-node--1 {
    width: 14px;
    height: 14px;
    top: -7px;
    left: calc(50% - 7px);
    background: var(--accent);
    box-shadow: 0 0 20px var(--accent), 0 0 40px var(--accent);
    animation: node-pulse 3s ease-in-out infinite;
  }

  .visual-node--2 {
    width: 10px;
    height: 10px;
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
    background: #8b5cf6;
    box-shadow: 0 0 15px #8b5cf6;
    animation: node-pulse 3s ease-in-out infinite 0.5s;
  }

  .visual-node--3 {
    width: 8px;
    height: 8px;
    bottom: 15%;
    left: 5%;
    background: #10b981;
    box-shadow: 0 0 12px #10b981;
    animation: node-pulse 3s ease-in-out infinite 1s;
  }

  .visual-node--4 {
    width: 6px;
    height: 6px;
    top: 25%;
    left: 8%;
    background: #f472b6;
    box-shadow: 0 0 10px #f472b6;
    animation: node-pulse 3s ease-in-out infinite 1.5s;
  }

  @keyframes node-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.7; }
  }

  /* Connection beams */
  .visual-beam {
    position: absolute;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    height: 1px;
    transform-origin: left center;
    animation: beam-pulse 4s ease-in-out infinite;
  }

  .visual-beam--1 {
    width: 80px;
    top: 50%;
    left: 50%;
    transform: rotate(45deg);
    animation-delay: 0s;
  }

  .visual-beam--2 {
    width: 60px;
    top: 50%;
    left: 50%;
    transform: rotate(-30deg);
    animation-delay: 1s;
  }

  .visual-beam--3 {
    width: 70px;
    top: 50%;
    left: 50%;
    transform: rotate(160deg);
    animation-delay: 2s;
  }

  @keyframes beam-pulse {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.6; }
  }

  /* Core glass card */
  .visual-core {
    position: absolute;
    inset: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg-glass-heavy);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-2xl);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    box-shadow: 
      0 0 60px rgba(37, 99, 235, 0.1),
      inset 0 0 30px rgba(255, 255, 255, 0.05);
    overflow: hidden;
  }

  .visual-core::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .visual-core::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: conic-gradient(from 0deg, transparent, var(--accent-light), transparent, transparent);
    animation: core-rotate 10s linear infinite;
    opacity: 0.3;
  }

  @keyframes core-rotate {
    to { transform: rotate(360deg); }
  }

  .core-monogram {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -0.06em;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
    position: relative;
    z-index: 2;
    text-shadow: 0 0 40px rgba(37, 99, 235, 0.3);
  }

  .core-role {
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-quaternary);
    margin-top: 10px;
    position: relative;
    z-index: 2;
  }

  /* Floating tech icons around the visual */
  .visual-tech {
    position: absolute;
    padding: 10px 14px;
    background: var(--bg-glass);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-md);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-tertiary);
    white-space: nowrap;
    animation: float-tech 6s ease-in-out infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .visual-tech--1 {
    top: 5%;
    right: -10%;
    animation-delay: 0s;
  }

  .visual-tech--2 {
    bottom: 10%;
    left: -15%;
    animation-delay: 2s;
  }

  .visual-tech--3 {
    top: 60%;
    right: -20%;
    animation-delay: 4s;
  }

  @keyframes float-tech {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
  }

  /* ─── Scroll Indicator ─── */
  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--text-quaternary);
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .hero-scroll-icon {
    width: 24px;
    height: 40px;
    border: 2px solid var(--border-primary);
    border-radius: 12px;
    position: relative;
  }

  .hero-scroll-dot {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--accent);
    border-radius: 2px;
    animation: scroll-bounce 2s ease-in-out infinite;
  }

  @keyframes scroll-bounce {
    0%, 100% { top: 8px; opacity: 1; }
    50% { top: 20px; opacity: 0.3; }
  }

  /* ─── Entrance Animations ─── */
  .hero-animate {
    animation: hero-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .hero-animate--delay-1 { animation-delay: 0.15s; }
  .hero-animate--delay-2 { animation-delay: 0.3s; }
  .hero-animate--delay-3 { animation-delay: 0.45s; }
  .hero-animate--delay-4 { animation-delay: 0.6s; }
  .hero-animate--delay-5 { animation-delay: 0.75s; }

  @keyframes hero-enter {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.98);
      filter: blur(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }

  /* ─── Reduced Motion ─── */
  @media (prefers-reduced-motion: reduce) {
    .hero-orb,
    .hero-grid,
    .hero-line,
    .visual-ring,
    .visual-node,
    .visual-beam,
    .visual-core::after,
    .visual-tech,
    .hero-scroll-dot,
    .hero-status-dot,
    .hero-animate,
    .visual-container {
      animation: none !important;
    }
    .hero-animate { opacity: 1; transform: none; filter: none; }
    .visual-container { transform: none; }
  }

  /* Hide visual on mobile for performance */
  @media (max-width: 1023px) {
    .hero-visual { display: none; }
  }
`;

/* ─── Default Content ─── */
const DEFAULT_CONTENT = {
  status: 'Open to opportunities',
  headline: 'Engineering systems',
  headlineAccent: 'built to last.',
  description:
    'Principal Software Engineer specializing in distributed systems, scalable architectures, and production-grade infrastructure. I design solutions that perform under pressure.',
  primaryCta: { label: 'Discuss a Project', href: '#contact' },
  secondaryCta: { label: 'View Architecture Work', href: '#projects' },
  metrics: [
    { value: '8+', label: 'Products Shipped' },
    { value: '26', label: 'GitHub Repos' },
    { value: '5', label: 'Industries Served' },
  ],
};

/* ─── Icon Components ─── */
const ArrowIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
));
ArrowIcon.displayName = 'ArrowIcon';

const ExternalIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
));
ExternalIcon.displayName = 'ExternalIcon';

/* ─── Floating Particles Component ─── */
const FloatingParticles = memo(() => {
  const particles = [
    { type: 'dot', style: { top: '15%', left: '10%', animation: 'float-slow 12s ease-in-out infinite' } },
    { type: 'ring', style: { top: '25%', right: '15%', animation: 'float-slow 15s ease-in-out infinite 2s' } },
    { type: 'dot', style: { top: '60%', left: '5%', animation: 'float-slow 10s ease-in-out infinite 1s' } },
    { type: 'glow', style: { top: '80%', right: '10%', animation: 'float-slow 14s ease-in-out infinite 3s' } },
    { type: 'dot', style: { top: '40%', right: '5%', animation: 'float-slow 11s ease-in-out infinite 0.5s' } },
    { type: 'ring', style: { bottom: '20%', left: '20%', animation: 'float-slow 13s ease-in-out infinite 2.5s' } },
  ];

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <div key={i} className={`particle particle--${p.type}`} style={p.style} />
      ))}
    </div>
  );
});
FloatingParticles.displayName = 'FloatingParticles';

/* ─── Advanced Visual System ─── */
const VisualSystem = memo(() => (
  <div className="visual-container" role="img" aria-label="Systems architecture visualization">
    {/* Rotating rings */}
    <div className="visual-ring visual-ring--outer">
      <div className="visual-node visual-node--1" />
      <div className="visual-node visual-node--2" />
    </div>
    <div className="visual-ring visual-ring--middle" />
    <div className="visual-ring visual-ring--inner">
      <div className="visual-node visual-node--3" />
      <div className="visual-node visual-node--4" />
    </div>

    {/* Connection beams */}
    <div className="visual-beam visual-beam--1" />
    <div className="visual-beam visual-beam--2" />
    <div className="visual-beam visual-beam--3" />

    {/* Core identity */}
    <div className="visual-core">
      <span className="core-monogram">DG</span>
      <span className="core-role">Systems Engineer</span>
    </div>

    {/* Floating tech badges */}
    <div className="visual-tech visual-tech--1">
      <i className="fa-brands fa-react" style={{ marginRight: 6 }} />
      React
    </div>
    <div className="visual-tech visual-tech--2">
      <i className="fa-brands fa-node-js" style={{ marginRight: 6 }} />
      Node.js
    </div>
    <div className="visual-tech visual-tech--3">
      <i className="fa-solid fa-cloud" style={{ marginRight: 6 }} />
      Cloud
    </div>
  </div>
));
VisualSystem.displayName = 'VisualSystem';

/* ─── Main Hero Component ─── */
const Hero = () => {
  const [content, setContent] = useState(DEFAULT_CONTENT);

  useEffect(() => {
    getDocument(COLLECTIONS.HERO, 'main')
      .then((data) => {
        if (data) {
          setContent((prev) => ({
            status: data.badge || prev.status,
            headline: data.headline1 || prev.headline,
            headlineAccent: data.headline2 || data.headline3 || prev.headlineAccent,
            description: data.subheadline || prev.description,
            primaryCta: {
              label: data.cta1Label || prev.primaryCta.label,
              href: data.cta1Href || prev.primaryCta.href,
            },
            secondaryCta: {
              label: data.cta2Label || prev.secondaryCta.label,
              href: data.cta2Href || prev.secondaryCta.href,
            },
            metrics: data.stats?.length ? data.stats : prev.metrics,
          }));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <style>{HERO_STYLES}</style>

      <section className="hero" id="home" aria-labelledby="hero-heading">
        {/* Dynamic Background */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb--1" />
          <div className="hero-orb hero-orb--2" />
          <div className="hero-orb hero-orb--3" />
          <div className="hero-grid" />
          <FloatingParticles />
          <div className="hero-lines">
            <div className="hero-line hero-line--1" />
            <div className="hero-line hero-line--2" />
            <div className="hero-line hero-line--3" />
          </div>
        </div>

        <div className="hero-inner">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-status hero-animate">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>{content.status}</span>
            </div>

            <h1 id="hero-heading" className="hero-headline hero-animate hero-animate--delay-1">
              {content.headline}
              <span className="hero-headline-accent">{content.headlineAccent}</span>
            </h1>

            <p className="hero-description hero-animate hero-animate--delay-2">
              {content.description}
            </p>

            <div className="hero-actions hero-animate hero-animate--delay-3">
              <a href={content.primaryCta.href} className="hero-cta hero-cta--primary">
                {content.primaryCta.label}
                <ArrowIcon />
              </a>
              <a href={content.secondaryCta.href} className="hero-cta hero-cta--secondary">
                {content.secondaryCta.label}
                <ExternalIcon />
              </a>
            </div>

            <div className="hero-metrics hero-animate hero-animate--delay-4">
              {content.metrics.map((metric, index) => (
                <div key={index} className="hero-metric">
                  <div className="hero-metric-value">{metric.value}</div>
                  <div className="hero-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual System */}
          <div className="hero-visual hero-animate hero-animate--delay-5">
            <VisualSystem />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-icon">
            <div className="hero-scroll-dot" />
          </div>
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);