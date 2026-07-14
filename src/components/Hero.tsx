import React from 'react';
import { companyDetails } from '../data';
import { ShieldCheck, Calendar, PackageOpen, Users, ClipboardCheck, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onBudgetSimulate: () => void;
}

export default function Hero({ onExploreProducts, onBudgetSimulate }: HeroProps) {
  const bannerPath = '/src/assets/images/medical_hero_banner_1784033993137.jpg';

  const stats = [
    { label: 'Tahun Berdiri', value: companyDetails.foundedYear, icon: Calendar, color: 'text-navy' },
    { label: 'Kategori Produk', value: '4+ Kategori', icon: PackageOpen, color: 'text-navy' },
    { label: 'Fasilitas Mitra', value: '50+ RS & Klinik', icon: Users, color: 'text-navy' },
    { label: 'Izin Distribusi', value: 'CDAKB Kemenkes', icon: ClipboardCheck, color: 'text-navy' },
  ];

  return (
    <section id="hero-section" className="relative bg-[#FBFBF9] py-12 sm:py-20 border-b border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center lg:self-start border-b border-gold-accent pb-1">
            <span className="w-1.5 h-1.5 bg-gold-accent"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-navy">Distributor Resmi Alat Kesehatan Utama</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial-serif font-black italic text-navy leading-tight">
            Menghadirkan <span className="text-gold-accent font-normal">Teknologi Medis</span> Mutakhir demi Keselamatan Pasien
          </h2>

          <p className="text-base text-muted-text font-serif leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {companyDetails.description} Kami menjamin keamanan, kesesuaian regulasi Kementerian Kesehatan RI, dan presisi tinggi di setiap peralatan elektromedis yang kami distribusikan.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onExploreProducts}
              className="bg-navy hover:bg-[#11243e] text-white font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-none transition-all flex items-center gap-2.5 cursor-pointer group border border-transparent"
            >
              Lihat Katalog Produk
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onBudgetSimulate}
              className="bg-transparent hover:bg-navy hover:text-[#FBFBF9] text-navy border border-navy font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-none transition-all cursor-pointer"
            >
              Simulasi Anggaran Pengadaan
            </button>
          </div>

          {/* Quick Features banner */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 pt-6 border-t border-cream-border text-muted-text text-xs font-medium font-serif">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-accent" /> Jaminan Garansi Resmi
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-accent" /> Teknisi Bersertifikat Kemenkes
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-accent" /> Suku Cadang Orisinal
            </span>
          </div>
        </div>

        {/* Right Side: Hero Image and Quick Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative rounded-none overflow-hidden border border-cream-border bg-white p-1.5 shadow-none aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
            <img
              src={bannerPath}
              alt="Heni Medika Medical Device Showroom"
              className="w-full h-full object-cover filter contrast-[1.02] saturate-[0.95]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          {/* Grid Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-4 rounded-none border border-cream-border flex items-center gap-3">
                  <div className={`p-2 rounded-none bg-paper border border-cream-border ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-text uppercase tracking-wider font-mono font-bold">{stat.label}</div>
                    <div className="text-sm font-editorial-serif font-black italic text-navy">{stat.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
