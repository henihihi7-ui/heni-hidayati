import React from 'react';
import { companyDetails } from '../data';
import { ShieldCheck, Phone, Mail, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const logoPath = '/src/assets/images/heni_medika_logo_1784034007916.jpg';

  const menuItems = [
    { id: 'dashboard', label: 'Profil & Tentang Kami' },
    { id: 'catalog', label: 'Katalog Alat Kesehatan' },
    { id: 'simulator', label: 'Simulasi Anggaran' },
    { id: 'partnership', label: 'Jaringan & Kontak' },
  ];

  return (
    <header id="header-container" className="sticky top-0 z-50 bg-[#FBFBF9] border-b border-cream-border">
      {/* Top Bar info */}
      <div className="bg-navy text-slate-200 text-[11px] py-2 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-navy-700">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="font-mono text-[10px] tracking-wider uppercase">Izin CDAKB Kemenkes: {companyDetails.cdakbLicense}</span>
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline font-mono tracking-widest uppercase text-[10px]">Layanan Purnajual 24/7</span>
        </div>
        <div className="flex items-center gap-4 font-mono tracking-wider text-[10px] uppercase">
          <a href={`tel:${companyDetails.phone}`} className="hover:text-[#C5A880] flex items-center gap-1 transition-colors">
            <Phone className="w-3 h-3" /> {companyDetails.phone}
          </a>
          <a href={`mailto:${companyDetails.email}`} className="hover:text-[#C5A880] flex items-center gap-1 transition-colors">
            <Mail className="w-3 h-3" /> {companyDetails.email}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo and Name */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-none overflow-hidden border border-cream-border bg-white flex items-center justify-center p-0.5">
            <img 
              src={logoPath} 
              alt="PT. Heni Medika Logo" 
              className="w-full h-full object-cover filter contrast-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = "text-navy font-editorial-serif font-bold text-lg italic";
                  fallback.innerText = "HM";
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl font-editorial-serif font-black italic tracking-tight text-navy">{companyDetails.name}</h1>
              <span className="bg-transparent text-navy text-[9px] font-bold tracking-widest uppercase border border-navy px-2 py-0.5 rounded-none flex items-center gap-1 shrink-0">
                <Award className="w-2.5 h-2.5 text-[#C5A880]" /> ISO 13485
              </span>
            </div>
            <p className="text-[10px] text-muted-text font-mono uppercase tracking-widest mt-0.5">{companyDetails.tagline}</p>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex items-center gap-1 bg-[#E5E5E1]/40 p-1 rounded-none w-full md:w-auto overflow-x-auto scrollbar-none">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-none text-xs tracking-wider uppercase font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-navy text-[#FBFBF9] shadow-none'
                  : 'text-muted-text hover:text-navy hover:bg-[#E5E5E1]/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
