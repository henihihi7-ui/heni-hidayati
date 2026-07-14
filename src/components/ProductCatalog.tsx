import React, { useState } from 'react';
import { products } from '../data';
import { Product, InquiryItem } from '../types';
import { Search, Filter, ShoppingBag, Plus, Minus, Info, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  cart: InquiryItem[];
  onAddToCart: (productId: string, productName: string) => void;
  onRemoveFromCart: (productId: string) => void;
  onUpdateCartQty: (productId: string, qty: number) => void;
  onGoToSimulator: () => void;
}

export default function ProductCatalog({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onUpdateCartQty,
  onGoToSimulator
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Extract unique categories
  const categories = ['Semua', ...Array.from(new Set(products.map((p) => p.category)))];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCartQty = (productId: string) => {
    return cart.find((item) => item.productId === productId)?.quantity || 0;
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="space-y-8">
      
      {/* Search and Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-none border border-cream-border">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-text w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari alat kesehatan (contoh: Monitor, ECG)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBF9] border border-cream-border rounded-none text-xs font-semibold focus:outline-none focus:border-navy focus:bg-white transition-all font-mono"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
          <Filter className="text-muted-text w-4 h-4 mr-2 shrink-0 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-none text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-navy text-[#FBFBF9] border border-transparent'
                  : 'bg-[#FBFBF9] text-navy border border-cream-border hover:bg-[#E5E5E1]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const qty = getCartQty(product.id);
          return (
            <div
              key={product.id}
              className="bg-white rounded-none border border-cream-border overflow-hidden flex flex-col justify-between hover:border-navy transition-all group"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-[4/3] bg-[#FBFBF9] overflow-hidden cursor-pointer border-b border-cream-border" onClick={() => handleProductClick(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter contrast-[1.01] saturate-[0.95]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-navy text-[#FBFBF9] text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded-none border border-transparent">
                  {product.category}
                </span>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <h4 
                    onClick={() => handleProductClick(product)}
                    className="font-editorial-serif font-black italic text-lg text-navy line-clamp-1 hover:text-gold-accent cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h4>
                  <p className="text-xs text-muted-text font-serif line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical quick spec snippet */}
                <div className="bg-[#FBFBF9] p-3 rounded-none border border-cream-border text-[11px] text-muted-text font-mono space-y-1">
                  {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-400 font-sans">{key}:</span>
                      <span className="font-bold text-navy truncate max-w-[150px]">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-cream-border">
                  <button
                    onClick={() => handleProductClick(product)}
                    className="text-navy hover:text-gold-accent text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-gold-accent" /> Detail Alat
                  </button>

                  {/* Add/Remove quantities */}
                  {qty === 0 ? (
                    <button
                      onClick={() => onAddToCart(product.id, product.name)}
                      className="bg-transparent hover:bg-navy hover:text-[#FBFBF9] text-navy text-[10px] uppercase tracking-wider font-bold px-3 py-2 rounded-none border border-navy transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Ajukan Penawaran
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 bg-[#E5E5E1]/20 border border-cream-border rounded-none px-2.5 py-1">
                      <button
                        onClick={() => {
                          if (qty === 1) {
                            onRemoveFromCart(product.id);
                          } else {
                            onUpdateCartQty(product.id, qty - 1);
                          }
                        }}
                        className="text-navy p-0.5 hover:bg-[#E5E5E1]/60 rounded-none cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-navy w-4 text-center font-mono">
                        {qty}
                      </span>
                      <button
                        onClick={() => onUpdateCartQty(product.id, qty + 1)}
                        className="text-navy p-0.5 hover:bg-[#E5E5E1]/60 rounded-none cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart floating status banner if there are products selected */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full bg-navy text-[#FBFBF9] p-4 rounded-none shadow-none border border-[#C5A880] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#C5A880] rounded-none text-navy">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Pengajuan Terpilih</div>
              <div className="text-xs font-bold text-[#C5A880] font-mono">{cart.length} JENIS ALAT KESEHATAN</div>
            </div>
          </div>
          <button
            onClick={onGoToSimulator}
            className="bg-[#C5A880] hover:bg-[#b0936b] text-navy font-bold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-none transition-colors cursor-pointer flex items-center gap-1.5"
          >
            Lanjut Simulasi <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FBFBF9] rounded-none max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-none border border-cream-border animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header banner */}
            <div className="relative aspect-[16/9] bg-[#FBFBF9] border-b border-cream-border">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover filter contrast-[1.01]"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-[#FBFBF9]/95 hover:bg-navy hover:text-white text-navy p-2 rounded-none border border-cream-border cursor-pointer transition-colors w-9 h-9 flex items-center justify-center font-bold"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-navy text-[#FBFBF9] text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-none">
                {selectedProduct.category}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-editorial-serif font-black italic text-navy">{selectedProduct.name}</h3>
                <p className="text-xs text-muted-text font-serif leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Key Features list */}
              <div className="space-y-3">
                <h4 className="font-bold text-xs text-navy flex items-center gap-1.5 uppercase tracking-widest font-mono">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" /> Fitur Unggulan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-text font-serif">
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Benefits & Competitive Edge */}
              {selectedProduct.benefits && selectedProduct.benefits.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="font-bold text-xs text-navy flex items-center gap-1.5 uppercase tracking-widest font-mono">
                    <Check className="w-4 h-4 text-gold-accent" /> Manfaat Utama bagi Pasien & Klinisi
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-text font-serif">
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-1.5 shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProduct.differentiator && (
                <div className="bg-navy text-[#FBFBF9] p-4 rounded-none border border-[#C5A880]/30 border-l-2 border-[#C5A880]">
                  <span className="text-[9px] font-mono uppercase font-bold text-[#C5A880] block tracking-widest mb-1">
                    Keunggulan Kompetitif Alat:
                  </span>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed italic">
                    "{selectedProduct.differentiator}"
                  </p>
                </div>
              )}

              {/* Technical Specifications */}
              <div className="space-y-3">
                <h4 className="font-bold text-xs text-navy uppercase tracking-widest font-mono">Spesifikasi Teknis</h4>
                <div className="bg-white rounded-none overflow-hidden border border-cream-border divide-y divide-cream-border font-mono text-xs">
                  {Object.entries(selectedProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between p-3">
                      <span className="text-slate-400 font-sans">{key}</span>
                      <span className="font-bold text-navy text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Estimate notice */}
              <div className="bg-[#E5E5E1]/30 border border-cream-border p-5 rounded-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                <div>
                  <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider font-mono">Estimasi Nilai Pengadaan per Unit:</div>
                  <div className="text-xl font-bold text-navy font-mono">
                    Rp {selectedProduct.priceEstimate.toLocaleString('id-ID')}
                  </div>
                </div>
                {getCartQty(selectedProduct.id) === 0 ? (
                  <button
                    onClick={() => {
                      onAddToCart(selectedProduct.id, selectedProduct.name);
                      setSelectedProduct(null);
                    }}
                    className="bg-navy hover:bg-navy-800 text-white font-bold text-[10px] uppercase tracking-widest px-5 py-3 rounded-none transition-all cursor-pointer flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4 text-[#C5A880]" /> Masukkan ke Penawaran
                  </button>
                ) : (
                  <div className="bg-navy text-[#C5A880] font-bold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-none flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Terpilih ({getCartQty(selectedProduct.id)} unit)
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
