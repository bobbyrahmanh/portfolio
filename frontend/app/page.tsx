'use client';
import { useState } from 'react';
import Image from 'next/image';
import projectsData from '../data/projects.json';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Data diambil langsung dari JSON lokal
  const projects = projectsData;

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* == HERO SECTION CONTAINER == */}
      <div className="relative w-full mx-auto h-200 rounded-b-[20px] overflow-hidden flex flex-col shadow-[0px_6px_30px_rgba(0,0,0,0.4)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-[#f0b9f0] via-white to-[#aecbfa] drop-shadow-[0_0_20px_rgba(10,60,142,0.6)] opacity-90"></div>
          <div className="absolute pointer-events-none -bottom-48 -right-48 w-[701px] h-[657px] rounded-full bg-gradient-to-b from-[#296A90] to-[#CCE0FF] blur-[300px]"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col h-full">
          {/* NAVBAR */}
          <nav className="relative z-50 flex items-center justify-between py-4 md:py-6 px-8 bg-white rounded-t-xl text-[#121926] mt-[49px] shadow-x1 max-w-93% mx-auto w-full">
            <div className="flex items-center cursor-pointer">porocopop</div>

            <ul className="hidden md:flex gap-7 text-sm font-semibold text-[#121926]">
              <li><a href="#about" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">About</a></li>
              <li><a href="#projects" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">Projects</a></li>
              <li><a href="#footer" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">Contact</a></li>
            </ul>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl font-light text-[#121926] focus:outline-none"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-[110%] left-0 w-full bg-white rounded-xl shadow-lg flex flex-col p-5 gap-4 md:hidden border border-slate-100">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">About</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">Projects</a>
                <a href="#footer" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">Support</a>
              </div>
            )}
          </nav>

          <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            className="relative overflow-hidden flex-1 flex flex-col items-center justify-center text-center pb-10 bg-white mb-20 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:90px_60px]"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(#ee2aee_1px,transparent_1px),linear-gradient(90deg,#2575f5_1px,transparent_1px)] bg-[size:90px_60px]"
              style={{
                maskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.6) 40%, transparent 75%)`,
                WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              }}
            />

            <h1 className="text-[33px] md:text-[56px] text-black font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] tracking-tight leading-tight">
              Welcome to
            </h1>

            <h2 className="text-4xl md:text-[80px] font-extrabold mt-2 inline-block bg-clip-text bg-linear-to-r from-[#f0b9f0] to-[#7b9bcf] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] text-transparent tracking-tighter">
              Bobby's Portfolio
            </h2>

            <p className="mt-6 max-w-[300px] md:max-w-[500px] text-base md:text-lg font-light text-black leading-relaxed">
              A passionate Computer Science student at UGM focused on crafting clean, performant front-end interfaces
            </p>

            <div className="flex justify-center gap-2 md:gap-x-6 mt-12 mb-16 bg-white md:bg-transparent rounded-full shadow-lg md:shadow-transparent z-9">
              {/* LinkedIn */}
              <a href="URL_LINKEDIN_KAMU" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="z-10 group flex items-center justify-center size-14 md:bg-white md:rounded-full md:shadow-lg transition duration-150 ease-in-out hover:shadow-xl hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-8 fill-zinc-700 transition duration-150 group-hover:fill-zinc-900"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/bobbyrahmanh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="z-10 group flex items-center justify-center size-14 md:bg-white md:rounded-full md:shadow-lg transition duration-150 ease-in-out hover:shadow-xl hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="size-8 fill-zinc-700 transition duration-150 group-hover:fill-zinc-900"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/bobbyrh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="z-10 group flex items-center justify-center size-14 md:bg-white md:rounded-full md:shadow-lg transition duration-150 ease-in-out hover:shadow-xl hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-8 fill-zinc-700 transition duration-150 group-hover:fill-zinc-900"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>

              {/* Email */}
              <a href="mailto:bobbyrahmanh123@gmail.com" aria-label="Email" className="group flex items-center justify-center size-14 md:bg-white md:rounded-full md:shadow-lg transition duration-150 ease-in-out hover:shadow-xl hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="z-10 size-8 fill-zinc-700 transition duration-150 group-hover:fill-zinc-900"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-30 items-center">
          <div className="md:w-3/5 space-y-6 text-gray-500 leading-relaxed">
            <p className="text-[18px] font-semibold text-gray-800 mb-4 tracking-tight lowercase">about me</p>
            <h3 className="text-[26px] md:text-[30px] font-bold mb-6 tracking-tight text-black">Bobby Rahman Hartanto</h3>
            <p className="text-gray-600 leading-relaxed font-light text-[18px]">
              I&apos;m<span className="font-semibold"> Bobby</span> , currently studying Computer Science at Universitas Gadjah Mada with a keen interest in front-end design. I love building websites that are intuitive, interactive, and visually engaging. My coding journey started with basic HTML, CSS, and JavaScript, and over time I’ve developed a passion for designing thoughtful user interfaces and collaborating on projects that make a difference. I’m always excited to explore new tools, push my limits, and create digital experiences that users genuinely enjoy.
            </p>
          </div>

          <div className="md:w-[30%] shrink-0 w-full">
            <img src="/foto-bobby.jpg" alt="Potret Bobby" className="w-full h-auto object-cover grayscale transition duration-300 hover:grayscale-0" />
          </div>
        </div>
      </section>

     {/* == PROJECTS SECTION == */}
<section id="projects" className="max-w-full mx-auto px-6 py-20 bg-linear-to-b from-white via-[#ffefff] to-[#dfebff] rounded-t-[40px] mt-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-black mb-12 text-center">My Projects</h2>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
      {projects.map((project) => (
        <div key={project.id} className="bg-white border border-[#ffffff] rounded-3xl p-8 text-black flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">{project.Title}</h3>

          {/* Mockup Container */}
          <div className="relative w-full aspect-video bg-[#c8b2e6] rounded-2xl overflow-hidden mb-8 border border-white/5 shadow-inner group">
            {/* PASTIKAN PAKAI project.DesktopImage SESUAI JSON KAMU */}
            {project.DesktopImage ? (
              <Image
                src={project.DesktopImage}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                alt={project.Title}
              />
            ) : (
              <div className="flex items-center justify-center h-full">No Image</div>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-4">{project.Description}</p>

          <div className="text-center mb-8">
            <a href={project.LiveUrl} target="_blank" className="text-[#3042cc] font-semibold hover:text-[#001eff] transition-colors flex items-center justify-center gap-2">
              {project.LiveUrl?.includes('github.com') ? '📂 View Source' : '🌐 Live Website'}
            </a>
          </div>

          <div className="pt-6 border-t border-gray flex justify-between items-center text-[10px] text-gray font-mono">
            <span className="bg-[#e4e4e4] px-2 py-1 rounded text-gray">{project.TechStack}</span>
            <span>{project.Year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* == FOOTER == */}
      <footer id="footer" className="w-full bg-[#ffffff] border-t border-[#d4d4d4]">
        <div className="flex flex-row max-w-[90%] mx-auto py-10 justify-between items-center">
          <p className="text-black text-[15px] font-semibold">© 2026 Bobby Rahman Hartanto. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-400">Built with Next.js & Tailwind</span>
          </div>
        </div>
      </footer>
    </main>
  );
}