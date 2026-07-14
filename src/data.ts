import { Product, Service, Milestone, TeamMember, PartnerClinic } from './types';

export const companyDetails = {
  name: 'PT. HENI MEDIKA',
  tagline: 'Pionir Teknologi Kesehatan Terintegrasi & Terpercaya',
  description: 'PT. Heni Medika adalah perusahaan distributor alat kesehatan resmi dan penyedia solusi infrastruktur medis terintegrasi yang didirikan pada tahun 2018. Berbekal komitmen kokoh terhadap mutu dan regulasi, kami menghadirkan perangkat elektromedis berskala internasional yang berfokus pada keselamatan pasien, akurasi diagnostik, dan keandalan fungsional. Kami mendampingi setiap faskes mulai dari pengadaan resmi hingga perawatan purnajual kritis di seluruh penjuru Indonesia.',
  foundedYear: '2018',
  foundingVision: 'Membangun ekosistem kesehatan nasional yang tangguh dengan meminimalkan hambatan akses terhadap teknologi medis berstandar emas, menjamin akurasi diagnosis medis demi menyelamatkan nyawa pasien, serta menjadi standar acuan kepatuhan regulasi alat kesehatan di Indonesia.',
  address: 'Jl. Medika Raya No. 45, Kuningan, Jakarta Selatan, DKI Jakarta 12950',
  email: 'info@henimedika.co.id',
  phone: '+62 (021) 555-8989',
  whatsapp: '+62 812-3456-7890',
  operatingHours: 'Senin - Jumat: 08.00 - 17.00 WIB (Technical Emergency Service Siaga 24/7)',
  cdakbLicense: 'No. FK.01.01/VI/1280-e/2022',
};

export const services: Service[] = [
  {
    id: 's1',
    title: 'Distribusi & Pengadaan Alkes Resmi',
    description: 'Menyediakan berbagai peralatan medis elektromedis dan life support premium untuk kebutuhan kritis (ICU, OK, IGD, laboratorium) dengan jaminan legalitas resmi.',
    iconName: 'Activity',
    benefits: [
      'Menjamin ketersediaan alkes yang memiliki izin edar resmi (NIE) dari Kemenkes RI.',
      'Memudahkan integrasi alat baru dengan sistem operasional faskes yang sudah ada.',
      'Akses langsung ke e-Katalog LKPP untuk transparansi anggaran pengadaan sektor publik.'
    ],
    differentiator: 'Kami memiliki kemitraan eksklusif langsung (Tier-1) dengan produsen global terkemuka di Eropa dan Asia, meniadakan rantai perantara sehingga mampu memberikan harga terbaik serta dukungan dokumentasi legalitas yang mutlak dan lengkap.'
  },
  {
    id: 's2',
    title: 'Kalibrasi Profesional & Pemeliharaan Kritis',
    description: 'Jasa kalibrasi terakreditasi dan pemeliharaan preventif-korektif secara berkala untuk menjaga keakuratan, kepatuhan hukum, dan usia operasional peralatan.',
    iconName: 'Wrench',
    benefits: [
      'Menjaga tingkat akurasi diagnosis klinis mendekati 100% demi meminimalkan risiko medis.',
      'Meloloskan pemenuhan persyaratan akreditasi rumah sakit (KARS/JCI) dengan sertifikat resmi.',
      'Memperpanjang daur hidup kegunaan alat medis, menekan pengeluaran CAPEX faskes jangka panjang.'
    ],
    differentiator: 'Dikelola sepenuhnya oleh tim teknisi bersertifikasi pelatihan internasional dan nasional (Kemenkes), menggunakan simulator kalibrasi terkalibrasi berkala ke laboratorium internasional untuk menjamin deviasi sekecil mungkin.'
  },
  {
    id: 's3',
    title: 'Instalasi & Pelatihan Klinis Terstruktur',
    description: 'Pemasangan presisi tinggi dan program edukasi operasional komprehensif bagi tenaga medis (dokter, perawat, analis) pasca-pembelian.',
    iconName: 'Award',
    benefits: [
      'Menghilangkan keraguan operasional staf medis, memaksimalkan penggunaan seluruh fitur canggih alat.',
      'Meningkatkan efisiensi waktu penanganan pasien kritis di ruang operasi dan ICU.',
      'Mengurangi tingkat kerusakan alat akibat kesalahan operasional pengguna (human error).'
    ],
    differentiator: 'Program edukasi kami menyertakan modul bersertifikat kelayakan operasional, pendampingan uji fungsi klinis langsung secara tatap muka (hands-on), serta sesi penyegaran (refresher) berkala tanpa biaya tambahan.'
  },
  {
    id: 's4',
    title: 'Konsultasi Spasial Desain Fasilitas Medis',
    description: 'Perencanaan tata ruang klinis (kamar operasi, ICU, ruang radiologi) yang ergonomis, efisien, dan sepenuhnya mematuhi standar keselamatan Kementerian Kesehatan RI.',
    iconName: 'ShieldAlert',
    benefits: [
      'Memastikan alur kerja staf medis dan mobilitas pasien berjalan lancar tanpa hambatan spasial.',
      'Mencegah kontaminasi silang infeksius melalui pembagian zonasi steril yang tepat.',
      'Menjamin keamanan proteksi radiasi dan kelistrikan medis khusus sesuai standar regulasi.'
    ],
    differentiator: 'Menggunakan pemodelan 3D interaktif yang menggabungkan ergonomi kedokteran klinis dengan kalkulasi beban struktural dan sistem HVAC terintegrasi, bukan sekadar penataan layout arsitektural biasa.'
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Patient Monitor HM-9000 Multi-Parameter',
    category: 'Peralatan ICU & Life Support',
    description: 'Monitor pemantau tanda vital pasien kelas premium dengan layar sentuh resolusi tinggi 12.1 inci. Mampu menganalisis parameter kritis secara real-time untuk penanganan intensif.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    features: [
      'Analisis aritmia jantung, segmen S-T otomatis, dan deteksi laju pernapasan dinamis',
      'Penyimpanan data tren fisiologis pasien yang komprehensif hingga 120 jam penuh',
      'Konektivitas nirkabel proprietary ke Central Monitoring System (CMS) rumah sakit',
      'Baterai lithium rechargeable berdaya tinggi dengan waktu siaga hingga 4 jam'
    ],
    priceEstimate: 45000000,
    specs: {
      'Layar Layanan': '12.1" TFT Color Touch Screen',
      'Parameter Standar': 'ECG (3/5 lead), SpO2, NIBP, TEMP (Dual), RESP',
      'Sistem Alarm': 'Sinyal Visual LED & Audio Alarm Multi-Level Cerdas',
      'Berat Alat': '3.8 Kg (Desain Ergonomis dengan Gagang Terintegrasi)',
      'Standar Mutu': 'Sertifikasi CE, ISO 13485, Terdaftar Kemenkes RI'
    },
    benefits: [
      'Meningkatkan keselamatan pasien ICU melalui notifikasi dini perubahan tanda vital yang instan dan akurat.',
      'Memudahkan beban kerja perawat dengan sistem transfer data pasien otomatis tanpa pencatatan manual.'
    ],
    differentiator: 'Dilengkapi dengan sistem anti-interferensi elektromedis tingkat lanjut (electro-surgical noise rejection) yang memastikan pembacaan tetap presisi tinggi bahkan saat digunakan bersamaan dengan pisau bedah listrik.'
  },
  {
    id: 'p2',
    name: 'Mesin Elektrokardiogram (ECG) Elite-12',
    category: 'Diagnostik',
    description: 'Mesin ECG 12-channel digital canggih dengan algoritma interpretasi otomatis Glasgow yang diakui dunia. Memberikan hasil rekam ritme jantung yang tajam untuk akurasi diagnosis kardiologi.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600',
    features: [
      'Layar warna lipat untuk mempratinjau grafik gelombang sebelum dicetak pada kertas',
      'Sistem filter digital adaptif untuk mengeliminasi interferensi otot dan listrik gedung',
      'Penyimpanan memori internal masif hingga 1000 rekaman pemeriksaan pasien',
      'Mendukung ekspor data fleksibel format PDF, XML, dan JPG langsung via port USB'
    ],
    priceEstimate: 28000000,
    specs: {
      'Saluran Sadapan': '12-Channel Standard Acquisition Simultaneous',
      'Mode Operasional': 'Otomatis, Manual, Ritme Sadapan Tunggal',
      'Media Pencetakan': 'Kertas Thermal Roll Lebar 210mm High Density',
      'Catu Daya': 'AC 100-240V / Baterai Lithium Rechargeable Terintegrasi'
    },
    benefits: [
      'Mendeteksi kelainan jantung fungsional dengan cepat dan otomatis dalam waktu kurang dari 10 detik.',
      'Menghemat biaya operasional kertas dengan fitur pratinjau digital sebelum proses cetak fisik dilakukan.'
    ],
    differentiator: 'Mengintegrasikan Algoritma Glasgow terkemuka yang secara cerdas mempertimbangkan usia, jenis kelamin, dan ras pasien untuk menghasilkan rekomendasi diagnosis otomatis yang jauh lebih akurat dibanding ECG standar.'
  },
  {
    id: 'p3',
    name: 'Ranjang Pasien Elektrik Ergo-300 Premium',
    category: 'Furnitur Rumah Sakit',
    description: 'Ranjang perawatan pasien kelas VIP dengan 3 motor penggerak elektrik senyap. Memudahkan pengaturan posisi ergonomis untuk mempercepat pemulihan fisik pasien.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    features: [
      'Sistem kendali terpadu pada pembatas samping (side rail) dan remote genggam kabel',
      'Papan panel kepala dan kaki dari bahan ABS tebal yang mudah dilepas dan disterilkan',
      'Roda senyap berdiameter 5 inci dengan sistem penguncian rem sentral satu injakan',
      'Kapasitas beban aman operasional yang kokoh hingga 250 Kg'
    ],
    priceEstimate: 35000000,
    specs: {
      'Fungsi Elektrik': 'Punggung (Backrest), Lutut (Kneerest), Naik-Turun (Hi-Low)',
      'Dimensi Fisik': '2120 x 970 x 450-700 mm',
      'Rangka Utama': 'Baja Karbon Dilapis Bubuk Epoxy Anti-Bakteri & Karat',
      'Sistem Proteksi': 'Tombol CPR Darurat Manual Mekanis Sekali Tekan'
    },
    benefits: [
      'Meningkatkan kenyamanan mandiri pasien dan memudahkan tugas perawat dalam reposisi tubuh pasien secara berkala.',
      'Mencegah timbulnya luka dekubitus pada pasien tirah baring lama berkat fleksibilitas kemiringan yang presisi.'
    ],
    differentiator: 'Dilengkapi motor penggerak medis bersertifikat IPX4 (tahan cipratan air) berstandar medis Jerman yang bekerja sangat hening (di bawah 45 desibel) dan awet tanpa perlu pelumasan rutin.'
  },
  {
    id: 'p4',
    name: 'Syringe Pump MedSmart SP-500 Infusion',
    category: 'Peralatan ICU & Life Support',
    description: 'Pompa suntik berbasis mikrokomputer cerdas dengan tingkat akurasi tinggi untuk menyalurkan cairan obat dosis kecil secara kontinu. Dilengkapi sistem keamanan sensor ganda.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    features: [
      'Kompatibel universal dengan seluruh merek spuit standard ukuran 10, 20, 30, 50/60 ml',
      'Sistem deteksi oklusi (penyumbatan) dan gelembung udara dengan 3 level sensitivitas',
      'Layar LCD monokrom kontras tinggi dengan visualisasi parameter dosis lengkap',
      'Kecepatan aliran mikro yang dapat disesuaikan dari 0.1 hingga 1500 ml/jam'
    ],
    priceEstimate: 18000000,
    specs: {
      'Tingkat Akurasi': '±2% (Menggunakan spuit terkalibrasi pabrikan)',
      'Rentang Aliran': '0.1 - 1500 mL/jam (Sesuai ukuran spuit)',
      'Laju KVO (Keep Vein Open)': '0.1 - 5.0 mL/jam (Dapat diatur)',
      'Standar Proteksi': 'IPX2 Splash-proof (Tahan tetesan cairan infus)'
    },
    benefits: [
      'Mencegah risiko kelebihan dosis obat kritis (seperti inotropik) yang membahayakan jantung pasien.',
      'Deteksi dini malfungsi sirkulasi obat melalui sistem alarm sensor ganda yang bersuara nyaring.'
    ],
    differentiator: 'Menggunakan algoritma kompensasi spuit otomatis yang mengkalkulasi ketidaksempurnaan mekanis tabung spuit non-orisinil, menjamin laju aliran obat tetap konisten dan presisi.'
  },
  {
    id: 'p5',
    name: 'Hematologi Analyzer Lab-Plus 5 Part',
    category: 'Diagnostik & Laboratorium',
    description: 'Penganalisis darah otomatis hematologi dengan metode canggih diferensiasi 5-bagian sel darah putih (WBC). Menghasilkan 29 parameter darah lengkap dengan cepat dan akurat.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&q=80&w=600',
    features: [
      'Teknologi hamburan sinar laser Tri-angle berkombinasi dengan pewarnaan kimia presisi',
      'Kapasitas throughput tinggi mampu memproses hingga 60 sampel uji per jam',
      'Layar sentuh warna LCD 10.4 inci dengan visualisasi grafik sebaran yang jelas',
      'Konsumsi sampel darah yang sangat ekonomis (hanya membutuhkan 20uL volume sampel)'
    ],
    priceEstimate: 125000000,
    specs: {
      'Parameter Analisis': '29 Parameter Utama, 3 Histogram, 3 Scattergram Sebaran',
      'Metode Pengukuran': 'Flow Cytometry, Laser Scatter, Impedansi Elektrik',
      'Penyimpanan Hasil': 'Hingga 50.000 Rekam Hasil Uji Lengkap dengan Grafik',
      'Konektivitas Eksternal': 'LAN (Mendukung LIS/HIS), USB, Port RS-232'
    },
    benefits: [
      'Menghasilkan diagnosis penyakit darah (anemia, leukimia, infeksi) lengkap dalam waktu kurang dari 1 menit.',
      'Sangat ramah pasien anak (pediatrik) karena hanya membutuhkan sampel darah kapiler yang sangat minim.'
    ],
    differentiator: 'Sistem pembersihan jarum sampel otomatis bagian dalam dan luar secara otomatis pasca-pengujian, meniadakan risiko kontaminasi silang antar sampel secara absolut.'
  },
  {
    id: 'p6',
    name: 'Lampu Operasi LED Shadowless HM-LED5',
    category: 'Peralatan ICU & Life Support',
    description: 'Lampu bedah tanpa bayangan dengan teknologi LED dingin luminansi tinggi. Menghasilkan pencahayaan area bedah yang merata tanpa memancarkan panas radiasi yang mengganggu dokter bedah.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600',
    features: [
      'Sistem penyetelan fokus elektronik yang sangat mudah dikendalikan dari panel',
      'Pengaturan tingkat kecerahan digital 10-level dengan memori kecerahan terakhir',
      'Desain kap lampu aerodinamis modern mendukung kelancaran aliran udara laminar ruang operasi',
      'Masa pakai lampu LED yang sangat panjang hingga 50.000 jam pemakaian'
    ],
    priceEstimate: 85000000,
    specs: {
      'Intensitas Cahaya': 'Maksimal 160.000 Lux (Sangat terang, dapat diatur)',
      'Temperatur Warna': '4000 - 5000 Kelvin (Dapat disesuaikan sesuai jenis jaringan)',
      'Diameter Kap Lampu': '500 mm (Bahan Aluminium Alloy Ringan)',
      'Jumlah Modul LED': '48 Buah Chip LED Kualitas Tinggi (OSRAM Jerman)'
    },
    benefits: [
      'Menghilangkan kelelahan mata dokter bedah selama prosedur bedah kompleks yang memakan waktu lama.',
      'Mencegah dehidrasi jaringan tubuh pasien di meja operasi karena tingkat radiasi panas yang mendekati nol.'
    ],
    differentiator: 'Dilengkapi dengan sistem kompensasi bayangan cerdas otomatis (Automatic Shadow Dilution) yang secara otomatis menghidupkan LED sekitar ketika sensor mendeteksi kepala dokter menghalangi sebagian pancaran cahaya.'
  }
];

export const milestones: Milestone[] = [
  {
    id: 'm1',
    year: '2018',
    title: 'Awal Perjalanan & Visi Pendirian',
    description: 'PT. Heni Medika resmi didirikan di Jakarta Selatan oleh dr. Heni Susanti, M.Biomed, didorong oleh visi mulia untuk membangun jembatan distribusi teknologi medis yang aman, resmi, andal, dan berfokus penuh pada keselamatan pasien faskes lokal.',
  },
  {
    id: 'm2',
    year: '2020',
    title: 'Tanggap Darurat Pandemi & Ekspansi Medis',
    description: 'Menjadi mitra vital tak tergantikan bagi rumah sakit rujukan darurat nasional dengan menyuplai ratusan ventilator, monitor pasien, syringe pump, dan APD berkualitas tinggi guna menjaga kelangsungan hidup pasien kritis di tengah badai pandemi COVID-19.',
  },
  {
    id: 'm3',
    year: '2022',
    title: 'Sertifikasi CDAKB Resmi Kemenkes RI',
    description: 'Mencapai pengakuan standar mutu logistik tinggi dengan diraihnya sertifikasi resmi Cara Distribusi Alat Kesehatan yang Baik (CDAKB) dari Kementerian Kesehatan RI serta menyelaraskan operasional internal dengan standar sertifikasi mutu internasional ISO 13485:2016.',
  },
  {
    id: 'm4',
    year: '2024',
    title: 'Kemitraan Eksklusif & Keagenan Tunggal Global',
    description: 'Mendapatkan kepercayaan internasional dengan ditunjuk sebagai agen tunggal pemegang merek dan distributor eksklusif resmi untuk beberapa produsen teknologi kedokteran elektromedis terkemuka asal Jerman, Italia, dan Korea Selatan.',
  },
  {
    id: 'm5',
    year: '2026',
    title: 'Pelopor Integrasi Smart Hospital & IoMT',
    description: 'Meluncurkan divisi layanan integrasi sistem alkes berbasis IoMT (Internet of Medical Things) yang mampu mengintegrasikan data monitor pasien ICU dan hematologi analyzer laboratorium secara nirkabel dan aman langsung ke sistem rekam medis elektronik rumah sakit.',
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 't1',
    name: 'dr. Heni Susanti, M.Biomed',
    role: 'Direktur Utama & Pendiri',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300',
    bio: 'Dokter lulusan Universitas Indonesia dengan spesialisasi akademis Magister Biomedis. Memiliki rekam jejak kepemimpinan lebih dari 12 tahun di bidang tata kelola klinis, manajemen rumah sakit swasta, dan strategi pengadaan teknologi kesehatan nasional.',
  },
  {
    id: 't2',
    name: 'Ir. Budi Santoso, M.T.',
    role: 'Direktur Operasional & Teknik',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
    bio: 'Pakar elektromedis senior lulusan Institut Teknologi Bandung (ITB). Berpengalaman lebih dari 15 tahun mengawasi standardisasi kalibrasi alat kesehatan, perancangan ruang steril, dan memimpin puluhan teknisi elektromedis bersertifikasi negara.',
  },
  {
    id: 't3',
    name: 'Amalia Siregar, S.E., M.B.A.',
    role: 'Direktur Kemitraan & Keuangan',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    bio: 'Lulusan Fakultas Ekonomi Universitas Padjadjaran dengan gelar Master of Business Administration. Berfokus pada pengelolaan kemitraan perbankan, negosiasi impor keagenan internasional, serta penanganan tender B2B dan e-Katalog LKPP skala nasional.',
  }
];

export const partnerClinics: PartnerClinic[] = [
  { id: 'p_c1', name: 'RSUP Nasional Dr. Cipto Mangunkusumo', city: 'Jakarta', type: 'Hospital', coordinates: { x: 25, y: 35 } },
  { id: 'p_c2', name: 'RSUD Dr. Soetomo', city: 'Surabaya', type: 'Hospital', coordinates: { x: 55, y: 62 } },
  { id: 'p_c3', name: 'RSUP Dr. Hasan Sadikin', city: 'Bandung', type: 'Hospital', coordinates: { x: 30, y: 48 } },
  { id: 'p_c4', name: 'Laboratorium Terpadu Parahita', city: 'Semarang', type: 'Laboratorium', coordinates: { x: 45, y: 55 } },
  { id: 'p_c5', name: 'RS Siloam Sriwijaya', city: 'Palembang', type: 'Hospital', coordinates: { x: 15, y: 20 } },
  { id: 'p_c6', name: 'Klinik Pratama Sehat Utama', city: 'Medan', type: 'Klinik', coordinates: { x: 8, y: 10 } },
  { id: 'p_c7', name: 'RSUD Ulin Banjarmasin', city: 'Banjarmasin', type: 'Hospital', coordinates: { x: 60, y: 30 } },
  { id: 'p_c8', name: 'RSD Mangusada Badung', city: 'Bali', type: 'Hospital', coordinates: { x: 65, y: 75 } },
];

export const faqs = [
  {
    q: 'Apakah semua produk PT. Heni Medika terdaftar di Kemenkes RI?',
    a: 'Ya, seluruh alat kesehatan yang kami distribusikan dijamin 100% memiliki Nomor Izin Edar (NIE) resmi dari Kementerian Kesehatan Republik Indonesia, serta diproduksi oleh manufaktur internasional bersertifikat mutu ISO 13485.'
  },
  {
    q: 'Bagaimana prosedur penanganan garansi dan layanan purnajual?',
    a: 'Setiap unit alkes mendapatkan garansi distributor resmi minimal 1 tahun (dapat diperpanjang hingga 3 tahun). Kami menjamin ketersediaan teknisi darurat dalam waktu maksimal 2 jam setelah pelaporan untuk area Jabodetabek, lengkap dengan stok suku cadang orisinal.'
  },
  {
    q: 'Apakah PT. Heni Medika melayani kalibrasi alat dari merek di luar katalog Anda?',
    a: 'Ya, divisi elektromedis kami memiliki izin operasional untuk melayani pengujian fungsional, pemeliharaan preventif, dan kalibrasi tahunan untuk berbagai merek alat kesehatan elektromedis lainnya guna mendukung kepatuhan akreditasi faskes.'
  },
  {
    q: 'Bagaimana cara berpartisipasi dalam e-Katalog atau tender pengadaan resmi?',
    a: 'Tim kemitraan kami sangat berpengalaman dalam tata cara e-Katalog LKPP dan lelang LPSE. Silakan hubungi kami via formulir simulasi anggaran di website ini, WhatsApp Business resmi, atau email untuk pengajuan proposal teknis serta harga bersaing.'
  }
];

export const testimonials = [
  {
    id: 't_t1',
    name: 'dr. H. Wahyudi Pratama, Sp.An',
    role: 'Kepala Instalasi ICU RSUD Harapan',
    comment: 'Instalasi Patient Monitor dan Syringe Pump dari PT. Heni Medika sangat presisi dan rapi. Nilai tambah yang luar biasa adalah komitmen pelatihan staf perawat kami secara langsung hingga lulus uji kompetensi operasional alat. Sangat tepercaya!',
    rating: 5
  },
  {
    id: 't_t2',
    name: 'Siti Rahmawati, S.Tr.Kep',
    role: 'Manajer Laboratorium Klinik Pro-Test',
    comment: 'Hematologi Analyzer Lab-Plus 5-Part dari Heni Medika memangkas waktu diagnosis kami dari 15 menit menjadi 60 detik saja dengan presisi tinggi. Pengurusan kalibrasi berkala sangat dibantu dan diurus penuh oleh tim teknisi elektromedis mereka.',
    rating: 5
  }
];
