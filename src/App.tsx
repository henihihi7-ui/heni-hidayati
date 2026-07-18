import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductCatalog from './components/ProductCatalog';
import InquiryCalculator from './components/InquiryCalculator';
import ContactSection from './components/ContactSection';
import InquiryList from './components/InquiryList';
import { Inquiry, InquiryItem } from './types';
import { companyDetails, products } from './data';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [cart, setCart] = useState<InquiryItem[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedPastInquiry, setSelectedPastInquiry] = useState<Inquiry | null>(null);

  // Load cart and past inquiries on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('heni_medika_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }

    const savedInquiries = localStorage.getItem('heni_medika_inquiries');
    if (savedInquiries) {
      try {
        setInquiries(JSON.parse(savedInquiries));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Sync cart to localStorage
  const updateCartState = (newCart: InquiryItem[]) => {
    setCart(newCart);
    localStorage.setItem('heni_medika_cart', JSON.stringify(newCart));
  };

  // Cart Handlers
  const handleAddToCart = (productId: string, productName: string) => {
    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      updateCartState(
        cart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      updateCartState([...cart, { productId, productName, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    updateCartState(cart.filter((item) => item.productId !== productId));
  };

  const handleUpdateCartQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveFromCart(productId);
    } else {
      updateCartState(
        cart.map((item) =>
          item.productId === productId ? { ...item, quantity: qty } : item
        )
      );
    }
  };

  // Inquiry Submission Handler
  const handleSubmitInquiry = (details: {
    senderName: string;
    organization: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    const newInquiry: Inquiry = {
      id: `HM-${Math.floor(1000 + Math.random() * 9000)}`,
      senderName: details.senderName,
      organization: details.organization,
      email: details.email,
      phone: details.phone,
      items: [...cart],
      message: details.message,
      createdAt: new Date().toISOString(),
      status: 'Menunggu Review',
    };

    const updatedInquiries = [newInquiry, ...inquiries];
    setInquiries(updatedInquiries);
    localStorage.setItem('heni_medika_inquiries', JSON.stringify(updatedInquiries));
    
    // Clear cart
    updateCartState([]);
  };

  // Helper to calculate pricing on modal
  const getProductPrice = (id: string) => {
    return products.find((p) => p.id === id)?.priceEstimate || 0;
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between selection:bg-navy/10 selection:text-navy">
      
      {/* Dynamic sticky header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Body */}
      <main className="flex-grow">
        
        {/* Dynamic section injection */}
        {activeTab === 'dashboard' && (
          <div className="space-y-16 pb-16">
            <Hero
              onExploreProducts={() => setActiveTab('catalog')}
              onBudgetSimulate={() => setActiveTab('simulator')}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AboutSection />
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="border-b border-cream-border pb-5">
              <h2 className="text-3xl font-editorial-serif font-black italic text-navy">Katalog Alat Kesehatan Resmi</h2>
              <p className="text-xs text-muted-text font-serif mt-1.5">
                Seluruh produk telah melewati sertifikasi kalibrasi mutu dan terdaftar resmi di Kementerian Kesehatan RI.
              </p>
            </div>
            <ProductCatalog
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQty={handleUpdateCartQty}
              onGoToSimulator={() => setActiveTab('simulator')}
            />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="border-b border-cream-border pb-5">
              <h2 className="text-3xl font-editorial-serif font-black italic text-navy">Simulasi Anggaran Pengadaan</h2>
              <p className="text-xs text-muted-text font-serif mt-1.5">
                Sesuaikan kapasitas unit medis, sertifikasi layanan kalibrasi, serta buat penawaran tertulis otomatis.
              </p>
            </div>
            <InquiryCalculator
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQty={handleUpdateCartQty}
              onSubmitInquiry={handleSubmitInquiry}
            />
          </div>
        )}

        {activeTab === 'partnership' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="border-b border-cream-border pb-5">
              <h2 className="text-3xl font-editorial-serif font-black italic text-navy">Hubungi Kami & Jaringan Distribusi</h2>
              <p className="text-xs text-muted-text font-serif mt-1.5">
                Layanan pelanggan komprehensif, jaringan diler alkes regional, dan rujukan mitra rumah sakit nasional.
              </p>
            </div>
            <ContactSection />
          </div>
        )}

        {/* Global/Bottom segment for Local storage Inquiries history */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <InquiryList inquiries={inquiries} onSelectInquiry={setSelectedPastInquiry} />
        </div>

      </main>

      {/* Professional Editorial Footer */}
      <footer className="bg-navy text-slate-300 border-t border-cream-border/10 text-xs py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <h4 className="font-editorial-serif font-black italic text-lg text-white tracking-wide">{companyDetails.name}</h4>
            <p className="text-[11px] text-slate-400 font-serif leading-relaxed">
              Distributor resmi alat kesehatan dan elektromedis berkualitas tinggi dengan sertifikasi standar internasional.
            </p>
            <div className="text-[10px] font-mono text-[#C5A880] tracking-wider uppercase font-bold pt-1">
              CDAKB Kemenkes: {companyDetails.cdakbLicense}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-mono border-b border-slate-850 pb-2">Navigasi Profil</h4>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => setActiveTab('dashboard')} className="hover:text-[#C5A880] cursor-pointer text-left transition-colors font-medium">Tentang Kami / About Us</button></li>
              <li><button onClick={() => setActiveTab('catalog')} className="hover:text-[#C5A880] cursor-pointer text-left transition-colors font-medium">Katalog Alat Kesehatan</button></li>
              <li><button onClick={() => setActiveTab('simulator')} className="hover:text-[#C5A880] cursor-pointer text-left transition-colors font-medium">Kalkulator Simulasi Anggaran</button></li>
              <li><button onClick={() => setActiveTab('partnership')} className="hover:text-[#C5A880] cursor-pointer text-left transition-colors font-medium">Pertanyaan Umum & Kontak</button></li>
            </ul>
          </div>

          {/* Legal / Accreditation */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-mono border-b border-slate-850 pb-2">Legalitas & Mutu</h4>
            <ul className="space-y-2 text-[11px] text-slate-400 font-serif">
              <li>• Izin Penyalur Alat Kesehatan (IPAK)</li>
              <li>• Sertifikasi ISO 13485:2016 (Medical Devices)</li>
              <li>• CDAKB (Cara Distribusi Alkes yang Baik)</li>
              <li>• Terdaftar Resmi di e-Katalog LKPP RI</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-mono border-b border-slate-850 pb-2">Kantor & Layanan</h4>
            <div className="space-y-2 text-[11px] leading-relaxed font-serif text-slate-400">
              <div>{companyDetails.address}</div>
              <div className="font-mono text-[10px] text-slate-400 space-y-0.5 pt-1 uppercase">
                <div>Tel: {companyDetails.phone}</div>
                <div>Email: {companyDetails.email}</div>
                <div>WA: {companyDetails.whatsapp}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic UAS Notice */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 mt-10 pt-6">
          <div className="bg-slate-900/60 border border-slate-800 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-none">
            <div className="space-y-2 md:max-w-2xl">
              <div className="text-[9px] text-[#C5A880] uppercase tracking-widest font-bold font-mono">
                PENILAIAN AKADEMIK KAMPUS - UAS 2026
              </div>
              <p className="text-xs text-slate-300 font-serif leading-relaxed italic">
                "Website ini dibuat sebagai Ujian Akhir Semester Mata Kuliah Aplikasi Komputer Bisnis kampus STIE Ekadharma Indonesia"
              </p>
            </div>
            <div className="text-left text-xs font-mono text-slate-400 shrink-0 space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 pl-0 md:pl-6 w-full md:w-auto">
              <div><span className="text-slate-500 font-bold">NAMA:</span> <span className="text-[#FBFBF9] font-sans font-bold">HENI HIDAYATI</span></div>
              <div><span className="text-slate-500 font-bold">NIM:</span> <span className="text-slate-300">12250012</span></div>
              <div><span className="text-slate-500 font-bold">KELAS:</span> <span className="text-slate-300">REGULER C (SEMESTER 2)</span></div>
              <div className="text-[11px] text-[#C5A880] font-sans font-bold mt-1">STIE Ekadharma Indonesia</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-bold tracking-widest uppercase font-mono">
          <div>
            PT. HENI MEDIKA © 2026. HAK CIPTA DILINDUNGI UNDANG-UNDANG.
          </div>
          <div className="flex items-center gap-1.5 text-[#C5A880]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Sertifikat Mutu Medis Indonesia Terakreditasi</span>
          </div>
        </div>
      </footer>

      {/* Past Inquiry Detail Modal */}
      {selectedPastInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FBFBF9] rounded-none max-w-xl w-full p-6 sm:p-8 shadow-none border border-cream-border space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-cream-border pb-4">
              <div>
                <span className="text-[9px] font-mono bg-navy text-white px-2.5 py-1 rounded-none font-bold uppercase tracking-widest">
                  Salinan Pengajuan {selectedPastInquiry.id}
                </span>
                <h3 className="text-xl font-editorial-serif font-black italic text-navy mt-2">Detail Dokumen Penawaran</h3>
              </div>
              <button
                onClick={() => setSelectedPastInquiry(null)}
                className="text-navy hover:text-gold-accent text-base cursor-pointer p-1 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Submitter Bio */}
            <div className="grid grid-cols-2 gap-4 text-xs font-serif">
              <div className="space-y-0.5">
                <span className="text-slate-400 font-medium">Institusi Pemohon:</span>
                <div className="font-bold text-navy uppercase tracking-wide">{selectedPastInquiry.organization}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 font-medium">Nama Pemohon:</span>
                <div className="font-bold text-navy">{selectedPastInquiry.senderName}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 font-medium">Email:</span>
                <div className="font-bold text-navy font-mono">{selectedPastInquiry.email}</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 font-medium">HP / WA:</span>
                <div className="font-bold text-navy font-mono">{selectedPastInquiry.phone}</div>
              </div>
            </div>

            {/* List of simulated items in past inquiry */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-navy uppercase tracking-widest font-mono">Item Alkes & Jumlah</h4>
              <div className="bg-white rounded-none p-4 border border-cream-border divide-y divide-cream-border font-mono text-xs">
                {selectedPastInquiry.items.map((item, idx) => {
                  const price = getProductPrice(item.productId);
                  return (
                    <div key={idx} className="py-2.5 flex justify-between items-center first:pt-0 last:pb-0">
                      <div>
                        <div className="font-sans font-bold text-navy uppercase tracking-wide">{item.productName}</div>
                        <div className="text-[10px] text-slate-400">Rp {price.toLocaleString('id-ID')} / Unit</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-navy">x{item.quantity} Unit</div>
                        <div className="text-[11px] text-[#C5A880] font-bold">
                          Rp {(price * item.quantity).toLocaleString('id-ID')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Message */}
            {selectedPastInquiry.message && (
              <div className="space-y-1 text-xs">
                <span className="text-slate-400 font-medium">Catatan Pemohon:</span>
                <p className="bg-[#E5E5E1]/20 border border-cream-border p-3 rounded-none text-muted-text font-serif leading-relaxed italic">
                  "{selectedPastInquiry.message}"
                </p>
              </div>
            )}

            <div className="bg-navy border border-[#C5A880]/30 p-4 rounded-none flex items-center gap-3 text-xs text-[#FBFBF9]/90">
              <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0" />
              <div>
                <span className="font-bold text-[#C5A880] uppercase tracking-wider block">Status Dokumen: {selectedPastInquiry.status}</span>
                <span className="text-[11px] text-slate-300 font-serif">Formulir draf sedang diverifikasi oleh Kepala Pengadaan PT. Heni Medika.</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedPastInquiry(null)}
                className="bg-transparent hover:bg-navy hover:text-[#FBFBF9] border border-navy text-navy font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-none cursor-pointer"
              >
                Tutup Detail
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
