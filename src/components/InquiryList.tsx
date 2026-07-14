import React from 'react';
import { Inquiry } from '../types';
import { History, Calendar, ArrowRight } from 'lucide-react';

interface InquiryListProps {
  inquiries: Inquiry[];
  onSelectInquiry: (inquiry: Inquiry) => void;
}

export default function InquiryList({ inquiries, onSelectInquiry }: InquiryListProps) {
  if (inquiries.length === 0) return null;

  return (
    <div className="bg-[#E5E5E1]/10 rounded-none border border-cream-border p-6 space-y-4">
      <h4 className="text-xl font-editorial-serif font-black italic text-navy flex items-center gap-2">
        <History className="w-4 h-4 text-gold-accent" /> Riwayat Pengajuan Simulasi Anda
      </h4>
      <p className="text-xs text-muted-text font-serif">
        Berikut adalah draf & formulir penawaran resmi yang baru saja Anda simulasikan di perangkat ini.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inquiries.map((inq) => (
          <div
            key={inq.id}
            onClick={() => onSelectInquiry(inq)}
            className="bg-white p-4 rounded-none border border-cream-border hover:border-navy transition-all cursor-pointer flex flex-col justify-between gap-3 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-400">ID: {inq.id}</span>
                <span className="bg-navy text-[#FBFBF9] text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-none">
                  {inq.status}
                </span>
              </div>

              <div>
                <h5 className="text-xs font-bold text-navy uppercase tracking-wider group-hover:text-gold-accent transition-colors">
                  {inq.organization}
                </h5>
                <p className="text-[10px] text-muted-text font-serif italic mt-0.5">Pemohon: {inq.senderName}</p>
              </div>

              {/* Items preview snippet */}
              <div className="bg-[#FBFBF9] border border-cream-border p-2.5 rounded-none text-[10px] text-muted-text font-mono space-y-0.5">
                {inq.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="truncate max-w-[120px]">{item.productName}</span>
                    <span className="font-bold text-navy">x{item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-cream-border pt-2 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                {inq.createdAt.split('T')[0]}
              </span>
              <span className="text-gold-accent font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[9px]">
                Lihat Detail <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
