import React, { useState } from 'react';
import { partnerClinics, companyDetails, faqs, testimonials } from '../data';
import { PartnerClinic } from '../types';
import { MapPin, Phone, Mail, Clock, HelpCircle, Star, Quote, Building2, Send } from 'lucide-react';

export default function ContactSection() {
  const [selectedPartner, setSelectedPartner] = useState<PartnerClinic | null>(partnerClinics[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [partnerFilter, setPartnerFilter] = useState('Semua');

  const filteredPartners = partnerClinics.filter((partner) => {
    if (partnerFilter === 'Semua') return true;
    return partner.type === partnerFilter;
  });

  return (
    <div className="space-y-16">
      
      {/* Testimonials section */}
      <section id="testimonials-section" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-3xl font-editorial-serif font-black italic text-navy">Kepuasan Staf Medis & Rumah Sakit</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-text">
            Dengar langsung pendapat dokter, perawat, dan direktur operasional yang telah bermitra dengan PT. Heni Medika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test) => (
            <div key={test.id} className="bg-white p-6 rounded-none border border-cream-border flex flex-col justify-between gap-6 relative">
              <Quote className="absolute right-6 top-6 w-12 h-12 text-[#E5E5E1]/50 pointer-events-none" />
              <div className="space-y-3">
                <div className="flex gap-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <p className="text-xs text-muted-text font-serif leading-relaxed italic relative z-10">
                  "{test.comment}"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-cream-border pt-4">
                <div className="w-10 h-10 rounded-none border border-cream-border bg-[#FBFBF9] text-navy font-bold text-xs flex items-center justify-center font-mono">
                  {test.name.split(' ')[1]?.[0] || 'D'}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy uppercase tracking-wider">{test.name}</h5>
                  <p className="text-[10px] text-muted-text font-serif italic">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map & Partners locator */}
      <section id="partners-locator" className="bg-[#E5E5E1]/10 p-6 sm:p-8 rounded-none border border-cream-border space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-editorial-serif font-black italic text-navy">Jaringan Layanan Distribusi Indonesia</h3>
            <p className="text-xs text-muted-text font-serif">
              PT. Heni Medika menyuplai rumah sakit rujukan utama dan laboratorium klinik di seluruh penjuru Indonesia.
            </p>
          </div>

          {/* Filter partners */}
          <div className="flex gap-1 bg-white p-1 rounded-none border border-cream-border text-xs shrink-0">
            {['Semua', 'Hospital', 'Klinik', 'Laboratorium'].map((type) => (
              <button
                key={type}
                onClick={() => setPartnerFilter(type)}
                className={`px-3 py-1.5 rounded-none text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer ${
                  partnerFilter === type
                    ? 'bg-navy text-[#FBFBF9]'
                    : 'text-navy hover:bg-[#E5E5E1]/40'
                }`}
              >
                {type === 'Hospital' ? 'Rumah Sakit' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* List of Partners */}
          <div className="lg:col-span-5 space-y-3 max-h-[350px] overflow-y-auto pr-1">
            {filteredPartners.map((partner) => (
              <button
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className={`w-full text-left p-4 rounded-none border transition-all flex items-center gap-4 cursor-pointer ${
                  selectedPartner?.id === partner.id
                    ? 'bg-white border-navy translate-x-1 shadow-none'
                    : 'bg-white border-cream-border hover:bg-[#E5E5E1]/30'
                }`}
              >
                <div className={`p-2.5 rounded-none border border-cream-border bg-[#FBFBF9] text-navy`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider">{partner.name}</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-text font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-accent" /> {partner.city}
                    <span className="text-slate-300">•</span>
                    <span className="font-mono text-[9px] uppercase font-bold text-gold-accent">{partner.type}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Simulated Map / Visual Locator Card */}
          <div className="lg:col-span-7 bg-white rounded-none border border-cream-border p-4 flex flex-col justify-between relative min-h-[350px] overflow-hidden">
            {/* Visual background representation of Indonesia Map using minimalist points */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1A365D_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>

            {/* Simulated Map Canvas */}
            <div className="relative flex-1 bg-[#FBFBF9] rounded-none border border-cream-border overflow-hidden min-h-[200px]">
              {/* Map points representation */}
              {partnerClinics.map((p) => {
                const isSelected = selectedPartner?.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPartner(p)}
                    style={{ left: `${p.coordinates.x}%`, top: `${p.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group animate-pulse-slow"
                  >
                    <span className="relative flex h-5 w-5">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-50"></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center border border-white shadow-sm cursor-pointer transition-colors ${
                        isSelected ? 'bg-navy text-white' : 'bg-[#E5E5E1] text-navy hover:bg-navy hover:text-white'
                      }`}>
                        <MapPin className="w-3 h-3" />
                      </span>
                    </span>

                    {/* Tooltip on hover */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-navy text-white text-[9px] tracking-widest font-bold px-2 py-1 rounded-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 font-mono">
                      {p.name}
                    </span>
                  </button>
                );
              })}

              {/* Watermark Indonesian Archipelago Schematic */}
              <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-widest text-slate-400 select-none uppercase">
                PETA DISTRIBUSI ALKES NASIONAL
              </div>
            </div>

            {/* Bottom active detail card */}
            {selectedPartner && (
              <div className="bg-navy text-[#FBFBF9] p-4 rounded-none border border-cream-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4 relative z-10">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono border border-[#C5A880]/40 text-[#C5A880] font-bold px-2.5 py-1 rounded-none uppercase tracking-wider">
                    Mitra Terverifikasi ({selectedPartner.type})
                  </span>
                  <h4 className="text-xs font-bold uppercase tracking-wider mt-1">{selectedPartner.name}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Kota Layanan: {selectedPartner.city}, Indonesia</p>
                </div>
                <a
                  href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20PT.%20Heni%20Medika,%20saya%20tertarik%20dengan%20pengadaan%20seperti%20mitra%20${encodeURIComponent(selectedPartner.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C5A880] hover:bg-[#b0936b] text-navy font-bold text-[10px] uppercase tracking-widest px-4 py-3 rounded-none transition-colors whitespace-nowrap inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Konsultasi Kemitraan
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs-section" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-3xl font-editorial-serif font-black italic text-navy">Pertanyaan Umum (FAQ)</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-text">
            Segala informasi mendasar mengenai pengadaan, legalitas kementerian, sertifikasi kalibrasi, dan purnajual kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-cream-border bg-white rounded-none border border-cream-border overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="p-4 sm:p-5 transition-all">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left font-bold text-xs sm:text-sm text-navy hover:text-gold-accent cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-gold-accent shrink-0" />
                    {faq.q}
                  </span>
                  <span className="text-navy font-mono text-base">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <p className="text-xs text-muted-text font-serif leading-relaxed pt-3 pl-6">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Office Locations & Direct Contacts */}
      <section id="office-details" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Card */}
        <div className="bg-white p-6 rounded-none border border-cream-border space-y-4">
          <div className="p-3 bg-[#FBFBF9] border border-cream-border text-navy rounded-none w-max">
            <MapPin className="w-5 h-5 text-gold-accent" />
          </div>
          <h4 className="font-editorial-serif font-black italic text-lg text-navy">Kantor Pusat Jakarta</h4>
          <p className="text-xs text-muted-text font-serif leading-relaxed">
            {companyDetails.address}
          </p>
        </div>

        {/* Operational hours Card */}
        <div className="bg-white p-6 rounded-none border border-cream-border space-y-4">
          <div className="p-3 bg-[#FBFBF9] border border-cream-border text-navy rounded-none w-max">
            <Clock className="w-5 h-5 text-gold-accent" />
          </div>
          <h4 className="font-editorial-serif font-black italic text-lg text-navy">Jam Operasional Layanan</h4>
          <p className="text-xs text-muted-text font-serif leading-relaxed">
            {companyDetails.operatingHours}
          </p>
          <div className="bg-[#E5E5E1]/20 border border-cream-border text-navy text-[10px] font-mono p-2.5 rounded-none font-bold uppercase tracking-wider">
            *Emergency service support siaga 24 jam.
          </div>
        </div>

        {/* Direct Phone / Mail */}
        <div className="bg-white p-6 rounded-none border border-cream-border space-y-4">
          <div className="p-3 bg-[#FBFBF9] border border-cream-border text-navy rounded-none w-max">
            <Phone className="w-5 h-5 text-gold-accent" />
          </div>
          <h4 className="font-editorial-serif font-black italic text-lg text-navy">Kontak Resmi & Dukungan</h4>
          <div className="space-y-2 text-xs font-mono">
            <a href={`tel:${companyDetails.phone}`} className="flex items-center gap-2 text-muted-text hover:text-navy">
              Tel: {companyDetails.phone}
            </a>
            <a href={`mailto:${companyDetails.email}`} className="flex items-center gap-2 text-muted-text hover:text-navy">
              Email: {companyDetails.email}
            </a>
            <a href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-navy hover:text-gold-accent font-bold">
              WhatsApp: {companyDetails.whatsapp}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
