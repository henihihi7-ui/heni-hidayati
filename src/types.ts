export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  priceEstimate: number; // For interactive budget planner
  specs: Record<string, string>;
  benefits?: string[]; // Customer benefits
  differentiator?: string; // Competitive edge
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits?: string[]; // Customer benefits
  differentiator?: string; // Competitive edge
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface PartnerClinic {
  id: string;
  name: string;
  city: string;
  type: 'Hospital' | 'Klinik' | 'Laboratorium';
  coordinates: { x: number; y: number }; // Relative percentage coordinates for simulated map [0-100]
}

export interface InquiryItem {
  productId: string;
  productName: string;
  quantity: number;
}

export interface Inquiry {
  id: string;
  senderName: string;
  organization: string;
  email: string;
  phone: string;
  items: InquiryItem[];
  message: string;
  createdAt: string;
  status: 'Menunggu Review' | 'Diproses' | 'Selesai';
}
