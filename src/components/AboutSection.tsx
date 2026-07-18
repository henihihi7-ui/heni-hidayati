import React, { useState } from 'react';
import { milestones, teamMembers, services, companyDetails } from '../data';
import * as Icons from 'lucide-react';

export default function AboutSection() {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(milestones[milestones.length - 1].id);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Dynamic Lucide Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Icons.Activity className="w-5 h-5 text-navy" />;
      case 'Wrench': return <Icons.Wrench className="w-5 h-5 text-navy" />;
      case 'Award': return <Icons.Award className="w-5 h-5 text-navy" />;
      case 'ShieldAlert': return <Icons.ShieldCheck className="w-5 h-5 text-navy" />;
      default: return <Icons.Layers className="w-5 h-5 text-navy" />;
    }
  };

  return (
    <div className="space-y-24">
      
      {/* UAS STIE Ekadharma Indonesia Profile Section */}
      <section id="uas-student-profile" className="bg-white p-6 sm:p-8 rounded-none border-2 border-navy relative overflow-hidden">
        {/* Decorative corner sash */}
        <div className="absolute top-0 right-0 bg-[#C5A880] text-navy font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1.5 border-l border-b border-navy z-10">
          UAS - 2026
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Professional Face Photo */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="w-48 h-56 rounded-none overflow-hidden border-2 border-navy p-1.5 bg-[#FBFBF9] shadow-sm relative group">
              <img
                src="/src/assets/images/tugas_pak_ali_uas_juli_2026.jpg"
                alt="Foto Heni Hidayati"
                className="w-full h-full object-cover filter contrast-[1.01] transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high-quality portrait of a professional student if uploaded file fails
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                }}
              />
            </div>
            <span className="text-[9px] font-mono font-bold text-slate-400 mt-2 uppercase tracking-widest text-center">
              FOTO MAHASISWA ASLI
            </span>
          </div>

          {/* Right: Academic details */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#E5E5E1]/40 border border-cream-border px-3 py-1 rounded-none text-navy">
                <Icons.GraduationCap className="w-4 h-4 text-[#C5A880]" />
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold">Dokumen Ujian Akhir Semester (UAS)</span>
              </div>
              <h3 className="text-3xl font-editorial-serif font-black italic text-navy leading-tight">
                Lembar Kinerja & Aplikasi Bisnis
              </h3>
              <p className="text-xs text-muted-text font-serif leading-relaxed">
                Website interaktif Company Profile & Sistem Simulasi Anggaran Pengadaan PT. Heni Medika ini dirancang dan dikembangkan secara mandiri guna memenuhi persyaratan kelulusan akademik semester genap.
              </p>
            </div>

            {/* Grid of Academic Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FBFBF9] border border-cream-border p-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Nama Lengkap</span>
                <span className="font-bold text-navy text-sm uppercase font-sans">Heni Hidayati</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Nomor Induk Mahasiswa (NIM)</span>
                <span className="font-bold text-navy text-sm">12250012</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 border-cream-border pt-2 sm:pt-0">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Semester</span>
                <span className="font-bold text-navy text-sm">Semester 2 (Dua)</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 border-cream-border pt-2 sm:pt-0">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Kelas Kuliah</span>
                <span className="font-bold text-navy text-sm">Reguler C</span>
              </div>
              <div className="space-y-1 sm:col-span-2 border-t border-cream-border pt-3 mt-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Mata Kuliah</span>
                <span className="font-bold text-navy text-sm font-sans">Aplikasi Komputer Bisnis</span>
              </div>
              <div className="space-y-1 sm:col-span-2 border-t border-cream-border pt-3">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Institusi Kampus</span>
                <span className="font-bold text-navy text-sm font-sans">STIE Ekadharma Indonesia</span>
              </div>
            </div>

            {/* Crucial Statement Paragraph */}
            <div className="bg-navy text-[#FBFBF9] p-4 rounded-none border border-[#C5A880]/30 flex items-start gap-3.5 shadow-sm">
              <Icons.ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#C5A880] tracking-widest block">
                  Pernyataan Akademik Resmi:
                </span>
                <p className="text-xs text-slate-200 font-serif leading-relaxed italic">
                  "Website ini dibuat sebagai Ujian Akhir Semester Mata Kuliah Aplikasi Komputer Bisnis kampus STIE Ekadharma Indonesia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <div className="bg-navy text-[#FBFBF9] p-8 md:p-10 rounded-none flex flex-col justify-between relative overflow-hidden border border-cream-border shadow-sm">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <Icons.HeartPulse className="w-64 h-64 translate-x-16 translate-y-16" />
          </div>
          <div>
            <div className="border border-[#C5A880]/40 text-[#C5A880] font-mono tracking-widest uppercase text-[10px] px-3 py-1 w-max mb-6">
              Visi Perusahaan Masa Depan
            </div>
            <h3 className="text-3xl font-editorial-serif font-black italic tracking-tight mb-5 leading-tight text-[#FBFBF9]">
              Menjadi Pionir Solusi Medis Terintegrasi Paling Terpercaya di Indonesia
            </h3>
            <p className="text-slate-300 font-serif leading-relaxed text-sm">
              Membangun fondasi kesehatan nasional yang tangguh dengan memimpin distribusi peralatan elektromedis berstandar emas, mengadopsi sistem Internet of Medical Things (IoMT) cerdas, serta memberdayakan setiap rumah sakit dan klinik di nusantara untuk menghadirkan diagnosis tanpa cela demi menyelamatkan lebih banyak jiwa.
            </p>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>PT. Heni Medika © Sejak {companyDetails.foundedYear}</span>
            <span className="text-[#C5A880] tracking-wider font-bold">Standard ISO 13485</span>
          </div>
        </div>

        {/* Mission List */}
        <div className="bg-[#E5E5E1]/20 p-8 md:p-10 rounded-none border border-cream-border flex flex-col justify-between">
          <div>
            <div className="border border-navy/20 text-navy font-mono tracking-widest uppercase text-[10px] px-3 py-1 w-max mb-6">
              Misi Strategis & Langkah Nyata
            </div>
            <h3 className="text-2xl font-editorial-serif font-black italic text-navy mb-6 leading-snug">
              Langkah Sistematis Mewujudkan Pelayanan Prima
            </h3>
            
            <div className="space-y-5">
              {[
                { 
                  number: 'I', 
                  title: 'Standarisasi Global & Jaminan NIE', 
                  desc: 'Hanya menyuplai perangkat elektromedis bersertifikasi CE, FDA, dan ISO yang memiliki Nomor Izin Edar resmi dari Kemenkes RI demi keamanan mutlak.' 
                },
                { 
                  number: 'II', 
                  title: 'Integrasi Teknologi Pintar (IoMT)', 
                  desc: 'Menghadirkan konektivitas alat medis ke rekam medis elektronik rumah sakit secara nirkabel untuk menekan risiko salah pencatatan data.' 
                },
                { 
                  number: 'III', 
                  title: 'Integritas Kalibrasi & Akurasi Ekstrem', 
                  desc: 'Menyelenggarakan pemeliharaan berkala berpemandu teknisi elektromedis bersertifikat nasional untuk menjamin nol deviasi pada alat diagnostik.' 
                },
                { 
                  number: 'IV', 
                  title: 'Edukasi Operator Berkelanjutan', 
                  desc: 'Memberikan pelatihan hands-on komprehensif bagi dokter, perawat, dan staf laboratorium guna memastikan kemahiran penuh operasional alat.' 
                }
              ].map((misi, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="font-editorial-serif text-gold-accent font-black text-xl italic min-w-[20px]">{misi.number}</div>
                  <div>
                    <h4 className="text-xs tracking-wider uppercase font-bold text-navy">{misi.title}</h4>
                    <p className="text-xs text-muted-text font-serif mt-1 leading-relaxed">{misi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate History Section */}
      <section id="corporate-history" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Beautiful Typography History Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 border-b border-gold-accent pb-1">
              <span className="w-1.5 h-1.5 bg-gold-accent"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-navy">Sejarah Pendirian & Rekam Jejak</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-editorial-serif font-black italic text-navy leading-tight">
              Dedikasi Melayani Negeri, <br/>
              <span className="text-gold-accent font-normal">Dari Jakarta untuk Nusantara</span>
            </h3>

            <div className="text-sm text-muted-text font-serif space-y-4 leading-relaxed">
              <p>
                <span className="font-editorial-serif text-3xl font-black italic text-navy float-left mr-2.5 mt-1 line-height-none">P</span>
                T. Heni Medika didirikan pada tahun 2018 oleh <strong>dr. Heni Susanti, M.Biomed</strong> di Jakarta Selatan. Bermula dari sebuah visi luhur untuk menyediakan bahan medis habis pakai berkualitas tinggi secara konsisten, perusahaan berkomitmen untuk mengatasi tantangan penyediaan alat kesehatan berkualitas tinggi yang saat itu masih terkonsentrasi di kota-kota besar.
              </p>
              <p>
                Saat pandemi melanda pada tahun 2020, ketahanan kami diuji. PT. Heni Medika bertransformasi menjadi salah satu penyokong krusial faskes dengan mendistribusikan ratusan unit ventilator, monitor vital, dan perlengkapan <em>life support</em> darurat langsung ke lebih dari 30 rumah sakit rujukan utama penanganan COVID-19 di berbagai daerah terpencil.
              </p>
              <p>
                Melalui dedikasi tanpa kompromi terhadap regulasi, pada tahun 2022 kami dianugerahi sertifikat resmi <strong>CDAKB (Cara Distribusi Alat Kesehatan yang Baik)</strong> dari Kementerian Kesehatan RI. Pencapaian ini mengukuhkan kami sebagai distributor terpercaya yang menjamin bahwa setiap unit alat kesehatan disimpan, dikirim, dan dikalibrasi sesuai standar tertinggi klinis demi keselamatan pasien Indonesia.
              </p>
            </div>
          </div>

          {/* Right: Visionary Stat Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-none border border-cream-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-accent/5 rounded-full blur-2xl"></div>
            <h4 className="font-editorial-serif font-black italic text-xl text-navy mb-4">Visi Awal Pendirian</h4>
            <blockquote className="text-xs text-muted-text italic font-serif leading-relaxed border-l-2 border-[#C5A880] pl-4 mb-6">
              "{companyDetails.foundingVision}"
            </blockquote>
            
            <div className="space-y-4 pt-4 border-t border-cream-border">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Tahun Dimulai</span>
                <span className="font-bold text-navy">{companyDetails.foundedYear}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Izin Logistik CDAKB</span>
                <span className="font-bold text-navy">Kemenkes RI Terverifikasi</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Wilayah Distribusi</span>
                <span className="font-bold text-navy">Seluruh Provinsi Indonesia</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid with Benefits & Differentiators */}
      <section id="core-services" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-3xl font-editorial-serif font-black italic text-navy">Layanan Unggulan & Nilai Lebih</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-text">
            Kami menghadirkan jaminan purnajual kritis, keandalan teknis, dan kepatuhan penuh regulasi yang membedakan kami dari kompetitor tradisional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 sm:p-8 rounded-none border border-cream-border hover:border-navy transition-all duration-300 flex flex-col justify-between gap-6"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#FBFBF9] border border-cream-border text-navy rounded-none shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wider uppercase text-navy">{service.title}</h4>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#C5A880]">Layanan Terakreditasi</span>
                  </div>
                </div>

                <p className="text-xs text-muted-text font-serif leading-relaxed">
                  {service.description}
                </p>

                {/* Enriched: Customer Benefits */}
                {service.benefits && (
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-mono uppercase font-bold tracking-widest text-navy">Manfaat Utama bagi Fasilitas Kesehatan:</h5>
                    <ul className="space-y-1.5 text-xs text-muted-text font-serif">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <Icons.CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Enriched: Competitive Differentiator */}
              {service.differentiator && (
                <div className="bg-[#FBFBF9] p-4 rounded-none border border-cream-border border-l-2 border-navy">
                  <span className="text-[9px] font-mono uppercase font-bold text-navy block tracking-widest mb-1">
                    Mengapa Kami Berbeda dari Kompetitor?
                  </span>
                  <p className="text-xs text-muted-text font-serif leading-relaxed italic">
                    "{service.differentiator}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interactive History Timeline */}
      <section id="interactive-history" className="bg-[#E5E5E1]/10 p-8 rounded-none border border-cream-border space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-2xl font-editorial-serif font-black italic text-navy">Perjalanan Milestones Kami</h3>
            <p className="text-xs text-muted-text font-serif mt-1">
              Klik tahun di bawah untuk melihat rincian pencapaian dan perjalanan sejarah PT. Heni Medika.
            </p>
          </div>
          <div className="bg-transparent text-navy text-[10px] tracking-widest font-bold px-4 py-1.5 rounded-none border border-navy font-mono">
            SEJAK {companyDetails.foundedYear}
          </div>
        </div>

        {/* Timeline Bar */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cream-border -translate-y-1/2 z-0 hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {milestones.map((milestone) => {
              const isActive = selectedMilestone === milestone.id;
              return (
                <button
                  key={milestone.id}
                  onClick={() => setSelectedMilestone(milestone.id)}
                  className={`p-4 rounded-none text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-navy text-[#FBFBF9] md:translate-y-[-2px]'
                      : 'bg-white border border-cream-border text-navy hover:bg-[#E5E5E1]/40'
                  }`}
                >
                  <div className={`font-editorial-serif font-black text-xl italic ${isActive ? 'text-[#C5A880]' : 'text-navy'}`}>
                    {milestone.year}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest truncate mt-1.5">{milestone.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Card */}
        {(() => {
          const activeMilestone = milestones.find((m) => m.id === selectedMilestone);
          if (!activeMilestone) return null;
          return (
            <div className="bg-white p-6 rounded-none border border-cream-border flex items-start gap-4">
              <div className="p-2.5 bg-[#FBFBF9] border border-cream-border text-navy hidden sm:block">
                <Icons.Sparkles className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-editorial-serif text-gold-accent font-black italic text-lg pr-1">
                    {activeMilestone.year}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-bold text-navy">— {activeMilestone.title}</span>
                </div>
                <p className="text-xs text-muted-text font-serif leading-relaxed">{activeMilestone.description}</p>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Board of Directors / Team */}
      <section id="our-team" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-3xl font-editorial-serif font-black italic text-navy">Manajemen & Dewan Direksi</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-text">
            Dipimpin oleh para profesional yang berdedikasi tinggi di bidang klinis, teknik elektromedis, dan kerja sama internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-none border border-cream-border p-6 flex flex-col items-center text-center gap-5">
              <div className="w-24 h-24 rounded-none overflow-hidden border border-cream-border p-1 bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter contrast-[1.02] grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-editorial-serif font-black text-sm tracking-wide text-navy">{member.name}</h4>
                <div className="text-[10px] tracking-widest uppercase font-bold text-gold-accent">{member.role}</div>
              </div>
              <p className="text-xs text-muted-text font-serif leading-relaxed italic border-t border-cream-border pt-4 w-full">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
