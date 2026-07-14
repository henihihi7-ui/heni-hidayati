import React, { useState } from 'react';
import { products } from '../data';
import { InquiryItem } from '../types';
import { Trash2, Plus, Minus, Calculator, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

interface InquiryCalculatorProps {
  cart: InquiryItem[];
  onAddToCart: (productId: string, productName: string) => void;
  onRemoveFromCart: (productId: string) => void;
  onUpdateCartQty: (productId: string, qty: number) => void;
  onSubmitInquiry: (details: {
    senderName: string;
    organization: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

export default function InquiryCalculator({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onUpdateCartQty,
  onSubmitInquiry
}: InquiryCalculatorProps) {
  // Option additions
  const [includeCalibration, setIncludeCalibration] = useState(false);
  const [includeTraining, setIncludeTraining] = useState(false);
  const [extraWarranty, setExtraWarranty] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'regular' | 'express'>('regular');

  // Contact State
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Find product details
  const getProductPrice = (id: string) => {
    return products.find((p) => p.id === id)?.priceEstimate || 0;
  };

  const getProductName = (id: string) => {
    return products.find((p) => p.id === id)?.name || 'Produk Tidak Dikenal';
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => {
    return acc + (getProductPrice(item.productId) * item.quantity);
  }, 0);

  // Percentages based on subtotal
  const calibrationCost = includeCalibration ? subtotal * 0.05 : 0;
  const trainingCost = includeTraining ? subtotal * 0.02 : 0;
  const warrantyCost = extraWarranty ? subtotal * 0.03 : 0;
  const deliveryCost = subtotal > 0 ? (deliveryType === 'express' ? 5000000 : 1500000) : 0;

  const preTaxTotal = subtotal + calibrationCost + trainingCost + warrantyCost + deliveryCost;
  const tax = preTaxTotal * 0.11; // PPN 11%
  const grandTotal = preTaxTotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      setErrorMsg('Pilih minimal satu alat kesehatan untuk disimulasikan.');
      return;
    }
    if (!senderName || !organization || !email || !phone) {
      setErrorMsg('Harap lengkapi seluruh kolom formulir penawaran.');
      return;
    }
    setErrorMsg('');
    
    // Trigger callback
    onSubmitInquiry({
      senderName,
      organization,
      email,
      phone,
      message: message || `Permintaan penawaran simulasi harga PT. Heni Medika untuk ${cart.length} item.`
    });

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSenderName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Left Column: Cost Breakdown & Items List */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-white p-6 rounded-none border border-cream-border space-y-6">
          <div className="flex items-center justify-between border-b border-cream-border pb-4">
            <h3 className="text-xl font-editorial-serif font-black italic text-navy flex items-center gap-2">
              <Calculator className="w-5 h-5 text-gold-accent" /> Daftar Alkes yang Disimulasikan
            </h3>
            <span className="text-[10px] text-muted-text font-mono uppercase tracking-widest font-bold">
              {cart.length} Jenis Produk
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="p-3 bg-[#FBFBF9] border border-cream-border text-slate-400 rounded-none w-max mx-auto">
                <FileText className="w-6 h-6 text-[#C5A880]" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-navy uppercase tracking-wider">Daftar simulasi Anda kosong</p>
                <p className="text-xs text-muted-text font-serif">Silakan tambahkan produk terlebih dahulu dari tab Katalog.</p>
              </div>

              {/* Quick Add Dropdown */}
              <div className="pt-2">
                <select
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val) {
                      const prod = products.find((p) => p.id === val);
                      if (prod) onAddToCart(prod.id, prod.name);
                      e.target.value = '';
                    }
                  }}
                  className="mx-auto bg-[#FBFBF9] text-navy text-[10px] tracking-wider uppercase font-bold px-4 py-2.5 rounded-none border border-cream-border focus:outline-none cursor-pointer"
                >
                  <option value="">-- TAMBAH ALKES CEPAT --</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-cream-border max-h-96 overflow-y-auto pr-1">
              {cart.map((item) => {
                const price = getProductPrice(item.productId);
                return (
                  <div key={item.productId} className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="space-y-1 flex-1">
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider">{getProductName(item.productId)}</h4>
                      <p className="text-[11px] text-muted-text font-mono">
                        Estimasi: Rp {price.toLocaleString('id-ID')} / Unit
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6">
                      {/* Quantity selector */}
                      <div className="flex items-center gap-2 bg-[#E5E5E1]/30 border border-cream-border rounded-none p-1">
                        <button
                          type="button"
                          onClick={() => {
                            if (item.quantity === 1) {
                              onRemoveFromCart(item.productId);
                            } else {
                              onUpdateCartQty(item.productId, item.quantity - 1);
                            }
                          }}
                          className="text-navy p-1 hover:bg-[#FBFBF9] rounded-none cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-navy w-6 text-center font-mono">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateCartQty(item.productId, item.quantity + 1)}
                          className="text-navy p-1 hover:bg-[#FBFBF9] rounded-none cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Total Price */}
                      <div className="text-right min-w-[120px]">
                        <div className="text-xs font-bold text-navy font-mono">
                          Rp {(price * item.quantity).toLocaleString('id-ID')}
                        </div>
                      </div>

                      {/* Trash action */}
                      <button
                        type="button"
                        onClick={() => onRemoveFromCart(item.productId)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-none hover:bg-[#FBFBF9] transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Additional Services Options */}
        <div className="bg-white p-6 rounded-none border border-cream-border space-y-4">
          <h4 className="text-xs font-bold text-navy uppercase tracking-widest font-mono border-b border-cream-border pb-2">Pilihan Jasa & Layanan Ekstra</h4>
          
          <div className="space-y-3">
            {/* Calibration Option */}
            <label className="flex items-start gap-3 p-3 bg-[#FBFBF9] hover:bg-[#E5E5E1]/20 rounded-none border border-cream-border cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={includeCalibration}
                onChange={(e) => setIncludeCalibration(e.target.checked)}
                className="mt-1 border-cream-border text-navy focus:ring-navy w-4 h-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-navy">Jasa Kalibrasi & Sertifikasi Awal (+5%)</span>
                  <span className="text-[10px] font-mono text-gold-accent font-bold uppercase tracking-wider">Estimasi +5%</span>
                </div>
                <p className="text-[11px] text-muted-text font-serif mt-0.5">Mencakup penerbitan sertifikat kalibrasi standar Kemenkes RI untuk pemenuhan akreditasi klinis.</p>
              </div>
            </label>

            {/* Training Option */}
            <label className="flex items-start gap-3 p-3 bg-[#FBFBF9] hover:bg-[#E5E5E1]/20 rounded-none border border-cream-border cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={includeTraining}
                onChange={(e) => setIncludeTraining(e.target.checked)}
                className="mt-1 border-cream-border text-navy focus:ring-navy w-4 h-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-navy">Program Pelatihan Operator & Dokter (+2%)</span>
                  <span className="text-[10px] font-mono text-gold-accent font-bold uppercase tracking-wider">Estimasi +2%</span>
                </div>
                <p className="text-[11px] text-muted-text font-serif mt-0.5">Modul komprehensif, sertifikasi kompetensi staf medis, dan pendampingan pasca instalasi.</p>
              </div>
            </label>

            {/* Extra Warranty */}
            <label className="flex items-start gap-3 p-3 bg-[#FBFBF9] hover:bg-[#E5E5E1]/20 rounded-none border border-cream-border cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={extraWarranty}
                onChange={(e) => setExtraWarranty(e.target.checked)}
                className="mt-1 border-cream-border text-navy focus:ring-navy w-4 h-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-navy">Ekstra Garansi 2 Tahun (+3%)</span>
                  <span className="text-[10px] font-mono text-gold-accent font-bold uppercase tracking-wider">Estimasi +3%</span>
                </div>
                <p className="text-[11px] text-muted-text font-serif mt-0.5">Memperpanjang perlindungan garansi distributor dari 1 tahun standar menjadi total 3 tahun penuh.</p>
              </div>
            </label>

            {/* Delivery/Installation select */}
            <div className="p-3 bg-[#FBFBF9] rounded-none border border-cream-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-xs font-bold text-navy block">Metode Pengiriman & Instalasi</span>
                <span className="text-[11px] text-muted-text font-serif">Mencakup handling elektromedis sensitif dan pengaturan ruang operasi.</span>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setDeliveryType('regular')}
                  className={`px-3 py-1.5 rounded-none text-[10px] uppercase tracking-wider font-bold cursor-pointer border ${
                    deliveryType === 'regular'
                      ? 'bg-navy text-[#FBFBF9] border-transparent'
                      : 'bg-white border-cream-border text-navy hover:bg-[#E5E5E1]/40'
                  }`}
                >
                  Reguler (1.5 Jt)
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('express')}
                  className={`px-3 py-1.5 rounded-none text-[10px] uppercase tracking-wider font-bold cursor-pointer border ${
                    deliveryType === 'express'
                      ? 'bg-navy text-[#FBFBF9] border-transparent'
                      : 'bg-white border-cream-border text-navy hover:bg-[#E5E5E1]/40'
                  }`}
                >
                  Express (5 Jt)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Invoice / Budget Calculation Panel & Contact */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-navy text-[#FBFBF9] p-6 rounded-none border border-cream-border space-y-6">
          <div className="text-center space-y-1.5">
            <div className="border border-[#C5A880]/30 text-[#C5A880] font-mono tracking-widest text-[9px] uppercase px-3 py-1.5 rounded-none w-max mx-auto">
              Pratinjau Estimasi Budget Pengadaan
            </div>
            <h4 className="text-xs text-slate-400 font-serif">Total Proyek Pengadaan Alkes</h4>
          </div>

          {/* Subtotal table details */}
          <div className="space-y-3 font-mono text-xs text-slate-300 border-t border-b border-slate-700/60 py-4">
            <div className="flex justify-between">
              <span className="font-sans text-slate-400">Subtotal Alkes:</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            {includeCalibration && (
              <div className="flex justify-between text-[#C5A880]">
                <span className="font-sans text-slate-400">Jasa Kalibrasi (5%):</span>
                <span>+Rp {calibrationCost.toLocaleString('id-ID')}</span>
              </div>
            )}
            {includeTraining && (
              <div className="flex justify-between text-[#C5A880]">
                <span className="font-sans text-slate-400">Program Pelatihan (2%):</span>
                <span>+Rp {trainingCost.toLocaleString('id-ID')}</span>
              </div>
            )}
            {extraWarranty && (
              <div className="flex justify-between text-[#C5A880]">
                <span className="font-sans text-slate-400">Extra Garansi 2Th (3%):</span>
                <span>+Rp {warrantyCost.toLocaleString('id-ID')}</span>
              </div>
            )}
            {deliveryCost > 0 && (
              <div className="flex justify-between">
                <span className="font-sans text-slate-400">Pengiriman & Setup:</span>
                <span>Rp {deliveryCost.toLocaleString('id-ID')}</span>
              </div>
            )}
            <div className="flex justify-between border-t border-slate-700/40 pt-2">
              <span className="font-sans text-slate-400">PPN (11%):</span>
              <span>Rp {tax.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* Grand Total representation */}
          <div className="text-center space-y-1 py-2">
            <span className="text-[11px] text-slate-400 font-sans block">Estimasi Total Investasi</span>
            <span className="text-2xl sm:text-3xl font-black text-[#C5A880] font-mono tracking-tight">
              Rp {grandTotal.toLocaleString('id-ID')}
            </span>
            <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider mt-1">*Estimasi belum mengikat kontrak hukum resmi</span>
          </div>

          <div className="bg-[#E5E5E1]/10 p-4 rounded-none text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5 border border-slate-700/40">
            <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <span className="font-serif">Setiap penawaran yang disimulasikan akan mendapatkan dokumen PDF resmi penawaran harga jika disubmit melalui formulir di bawah.</span>
          </div>
        </div>

        {/* Form contact */}
        <div className="bg-white p-6 rounded-none border border-cream-border space-y-4">
          <h4 className="text-xs font-bold text-navy uppercase tracking-widest font-mono border-b border-cream-border pb-2">Kirim Pengajuan Resmi Penawaran</h4>
          
          {isSubmitted ? (
            <div className="bg-[#E5E5E1]/10 border border-cream-border p-6 rounded-none text-center space-y-4">
              <CheckCircle className="w-10 h-10 text-gold-accent mx-auto" />
              <div className="space-y-2">
                <h5 className="text-sm font-editorial-serif font-black italic text-navy">Permintaan Berhasil Terkirim!</h5>
                <p className="text-xs text-muted-text font-serif leading-relaxed">
                  Terima kasih, Bapak/Ibu <strong>{senderName}</strong> dari <strong>{organization}</strong>. Proposal penawaran harga resmi PT. Heni Medika sedang diproses oleh Tim Account Executive kami dan akan dikirim ke <strong>{email}</strong> dalam waktu maksimal 1x24 jam.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="bg-navy hover:bg-[#11243e] text-[#FBFBF9] text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-none cursor-pointer mt-2"
              >
                Buat Pengajuan Baru
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-none font-semibold">
                  {errorMsg}
                </div>
              )}
              
              <div className="space-y-1">
                <label className="font-bold uppercase tracking-wider text-[9px] text-navy">Nama Lengkap Pemohon *</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Contoh: dr. Adhi Pratama, Sp.B"
                  className="w-full p-2.5 bg-[#FBFBF9] border border-cream-border rounded-none text-xs font-semibold focus:outline-none focus:border-navy focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold uppercase tracking-wider text-[9px] text-navy">Nama Rumah Sakit / Klinik / Institusi *</label>
                <input
                  type="text"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Contoh: RSUD Pratama Sehat Mandiri"
                  className="w-full p-2.5 bg-[#FBFBF9] border border-cream-border rounded-none text-xs font-semibold focus:outline-none focus:border-navy focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold uppercase tracking-wider text-[9px] text-navy">Email Kerja *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contoh: procurement@rspratama.com"
                    className="w-full p-2.5 bg-[#FBFBF9] border border-cream-border rounded-none text-xs font-semibold focus:outline-none focus:border-navy focus:bg-white font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold uppercase tracking-wider text-[9px] text-navy">No. HP / WhatsApp Bisnis *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812XXXXXXXX"
                    className="w-full p-2.5 bg-[#FBFBF9] border border-cream-border rounded-none text-xs font-semibold focus:outline-none focus:border-navy focus:bg-white font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold uppercase tracking-wider text-[9px] text-navy">Catatan Tambahan (Opsional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Kebutuhan khusus seperti merk rujukan, target waktu serah terima..."
                  rows={2}
                  className="w-full p-2.5 bg-[#FBFBF9] border border-cream-border rounded-none text-xs font-semibold focus:outline-none focus:border-navy focus:bg-white font-serif"
                />
              </div>

              <button
                type="submit"
                disabled={cart.length === 0}
                className={`w-full py-3.5 rounded-none font-bold text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  cart.length === 0
                    ? 'bg-slate-100 text-slate-400 border border-cream-border cursor-not-allowed'
                    : 'bg-navy hover:bg-[#11243e] text-[#FBFBF9] shadow-none'
                }`}
              >
                Kirim Pengajuan & Simulasi Harga
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}
