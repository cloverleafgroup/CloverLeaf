
import { Page, ServiceItem, CategoryItem, GalleryItem, Advisor } from '../types';

export const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Traditional Funerals', description: 'Full service coordination honoring family traditions.', icon: 'local_florist' },
  { id: '2', title: 'Chapel & Venue', description: 'Assistance with booking and setting up perfect venues.', icon: 'church' },
  { id: '3', title: 'Repatriation', description: 'Specialized care in bringing loved ones home internationally.', icon: 'flight_takeoff' },
  { id: '4', title: 'Cremation', description: 'Dignified arrangements with wide selections of urns.', icon: 'wb_sunny' },
  { id: '5', title: 'Paperwork Support', description: 'Handling all legal documentation and certificates.', icon: 'description' },
  { id: '6', title: 'Memorial Services', description: 'Personalized gatherings to celebrate the life lived.', icon: 'diversity_1' },
];

export const CATEGORIES: CategoryItem[] = [
  { id: 'single', title: 'Single Headstones', description: 'Classic individual resting places.', icon: 'person' },
  { id: 'double', title: 'Double & Family', description: 'Shared stones uniting loved ones.', icon: 'diversity_3' },
  { id: 'child', title: 'Children’s Memorials', description: 'Tender designs for small angels.', icon: 'child_care' },
  { id: 'plaque', title: 'Plaques & Slabs', description: 'Understated elegance for tributes.', icon: 'feed' },
  { id: 'upgrade', title: 'Upgrades', description: 'Restoring existing memorials.', icon: 'build' },
];

export const GALLERY: GalleryItem[] = [

  // ── Headstones & Base – Cash and Carry ──────────────────────────────
  {
    id: 'TPCLT001',
    title: 'Classic Book-Style Headstone',
    description: 'A classic book-style upright headstone resting on a standard base, ideal for shared or dual family memorials.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870154/TPCLT%20001.jpg',
    category: 'headstone',
  },
  {
    id: 'TPCLT002',
    title: 'Traditional Upright Headstone',
    description: 'A traditional upright headstone offering a timeless, dignified, and straightforward tribute.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870153/TPCLT_002_i8lqtq.jpg',
    category: 'headstone',
  },
  {
    id: 'TPCLT003',
    title: 'Traditional Upright Headstone',
    description: 'A traditional upright headstone offering a timeless, dignified, and straightforward tribute.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870153/TPCLT_003_gfhfkh.jpg',
    category: 'headstone',
  },
  {
    id: 'TPCLT004',
    title: 'Traditional Upright Headstone',
    description: 'A traditional upright headstone offering a timeless, dignified, and straightforward tribute.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870158/TPCLT_004_wxcibk.jpg',
    category: 'headstone',
  },

  // ── Headstone, Base, Kerbs & Pebbles ────────────────────────────────
  {
    id: 'TPCLT005',
    title: 'Traditional Pebble-Bed Setup',
    description: 'A complete traditional setup featuring a durable headstone, matching grave kerbs, and a neatly filled bright white pebble bed.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870153/TPCLT_005_hylfks.jpg',
    category: 'pebbles',
  },
  {
    id: 'TPCLT006',
    title: 'Traditional Pebble-Bed Setup',
    description: 'A complete traditional setup featuring a durable headstone, matching grave kerbs, and a neatly filled bright white pebble bed.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870154/TPCLT_006_q0q0nq.jpg',
    category: 'pebbles',
  },
  {
    id: 'TPCLT007',
    title: 'Architectural Pebble-Bed Design',
    description: 'Elegant pebble-bed design accented with a unique architectural headstone shape, such as a curved arch.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870155/TPCLT_007_sli8nm.jpg',
    category: 'pebbles',
  },
  {
    id: 'TPCLT008',
    title: 'Architectural Pebble-Bed Design',
    description: 'Elegant pebble-bed design accented with a unique architectural headstone shape, such as a curved arch.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870153/TPCLT_008_oifw7f.jpg',
    category: 'pebbles',
  },

  // ── Premium Granite Slabs ────────────────────────────────────────────
  {
    id: 'TPCLT009',
    title: 'Full Granite Slab Cover',
    description: 'Clean and distinguished full granite slab cover paired with a beautifully shaped traditional headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870154/TPCLT_009_yde7bg.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT010',
    title: 'Full Granite Slab Cover',
    description: 'Clean and distinguished full granite slab cover paired with a beautifully shaped traditional headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870154/TPCLT_010_dwcrqr.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT011',
    title: 'Full Granite Slab Cover',
    description: 'Clean and distinguished full granite slab cover paired with a beautifully shaped traditional headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870155/TPCLT_011_exdiac.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT012',
    title: 'Full Granite Slab Cover',
    description: 'Clean and distinguished full granite slab cover paired with a beautifully shaped traditional headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870155/TPCLT_012_kwaraw.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT013',
    title: 'Slab with Flower Vase Detail',
    description: 'Sophisticated slab design accented with thoughtful aesthetic details, including a built-in flower vase and multi-paneled headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870156/TPCLT_013_azkj7y.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT014',
    title: 'Slab with Flower Vase Detail',
    description: 'Sophisticated slab design accented with thoughtful aesthetic details, including a built-in flower vase and multi-paneled headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870155/TPCLT_014_j7jbc7.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT015',
    title: 'Slab with Flower Vase Detail',
    description: 'Sophisticated slab design accented with thoughtful aesthetic details, including a built-in flower vase and multi-paneled headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870156/TPCLT_015_r10yzc.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT016',
    title: 'Slab with Flower Vase Detail',
    description: 'Sophisticated slab design accented with thoughtful aesthetic details, including a built-in flower vase and multi-paneled headstone.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870156/TPCLT_016_llwwbl.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT017',
    title: 'Personalized Etched Monument',
    description: 'Highly personalized monument featuring striking etched artwork, dual-tone granite combinations, and elegant pillar supports.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870156/TPCLT_017_xdbl3z.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT018',
    title: 'Dual-Tone Granite Monument',
    description: 'Highly personalized monument featuring striking dual-tone granite combinations and elegant pillar supports.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870156/TPCLT_018_ggctxg.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT019',
    title: 'Personalized Pillar Monument',
    description: 'Highly personalized monument featuring etched artwork, striking granite combinations, and elegant pillar supports.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870157/TPCLT_019_c7ddrb.jpg',
    category: 'slab',
  },
  {
    id: 'TPCLT020',
    title: 'Personalized Etched Monument',
    description: 'Highly personalized monument featuring striking etched artwork, dual-tone granite combinations, and elegant pillar supports.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870164/TPCLT_020_i9dqp2.jpg',
    category: 'slab',
  },

  // ── Artistic, Sculptural & Bespoke ──────────────────────────────────
  {
    id: 'TPCLT021',
    title: 'Modern Artistic Memorial',
    description: 'Modern and artistic memorial utilizing stark color contrasts, a prominent symbolic cross, and a multi-tiered base.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870164/TPCLT_021_rnr9d6.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT022',
    title: 'Modern Artistic Memorial',
    description: 'Modern and artistic memorial utilizing stark color contrasts, a prominent symbolic cross, and a multi-tiered base.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870164/TPCLT_022_llgobi.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT023',
    title: 'Modern Artistic Memorial',
    description: 'Modern and artistic memorial utilizing stark color contrasts, a prominent symbolic cross, and a multi-tiered base.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870164/TPCLT_023_mwl2go.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT024',
    title: 'Modern Artistic Memorial',
    description: 'Modern and artistic memorial utilizing stark color contrasts, a prominent symbolic cross, and a multi-tiered base.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870164/TPCLT_024_yxkzvy.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT025',
    title: 'Sculpted Open-Book Memorial',
    description: 'Intricate and deeply personal tribute featuring a sculpted open granite book, layered slab elements, and an integrated ceramic photo plaque.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870165/TPCLT_025_embhd1.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT026',
    title: 'Layered Slab Photo Tribute',
    description: 'Intricate personal tribute with layered slab elements and an integrated ceramic photo plaque.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870165/TPCLT_026_ybujiw.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT027',
    title: 'Sculpted Open-Book Memorial',
    description: 'Intricate and deeply personal tribute featuring a sculpted open granite book and layered slab elements.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870165/TPCLT_027_jjlw4s.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT028',
    title: 'Layered Slab Photo Tribute',
    description: 'Intricate personal tribute featuring layered slab elements and an integrated ceramic photo plaque.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870166/TPCLT_028_ajerqu.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT029',
    title: 'Majestic Pedestal Monument',
    description: 'Majestic monument showcasing grand structural features including an elevated pedestal and prominent architectural lintel supported by pillars to display the family name.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870168/TPCLT_029_q6wopj.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT030',
    title: 'Pillar & Lintel Monument',
    description: 'Majestic monument featuring a prominent architectural lintel supported by pillars to beautifully display the family name.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870174/TPCLT_030_xfkwnb.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT031',
    title: 'Majestic Pedestal Monument',
    description: 'Majestic monument with elevated pedestal and prominent architectural lintel supported by pillars to display the family name.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870174/TPCLT_031_cd2ksa.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT032',
    title: 'Pillar & Lintel Monument',
    description: 'Majestic monument featuring a prominent architectural lintel supported by pillars to beautifully display the family name.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870174/TPCLT_032_efdetz.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT033',
    title: 'Holy Bible Bespoke Monument',
    description: 'A highly bespoke "Holy Bible" themed monument featuring a sculpted book grave cover, an upright lectern-style headstone, and a vivid red cross.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870175/TPCLT_033_eesjno.jpg',
    category: 'bespoke',
  },
  {
    id: 'TPCLT034',
    title: 'Dual-Pillar Arch Monument',
    description: 'A grand dual-pillar architectural monument featuring an overhead arch, beautifully designed to commemorate "Two Lives, One Love, Eternal".',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870180/TPCLT_034_xezkgt.jpg',
    category: 'bespoke',
  },

  // ── Estate & Double Memorials ────────────────────────────────────────
  {
    id: 'TPCLT035',
    title: 'Estate Memorial — Dual Slab',
    description: 'Wide-profile extended dual slab with elaborate architectural structure, ideal for double graves or a distinguished family estate.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870180/TPCLT_035_iwju5h.jpg',
    category: 'estate',
  },
  {
    id: 'TPCLT036',
    title: 'Double Memorial — Twin Headstones',
    description: 'Expansive double memorial featuring twin headstones and an extended dual slab, perfectly proportioned for two.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870180/TPCLT_036_yugxw0.jpg',
    category: 'estate',
  },
  {
    id: 'TPCLT037',
    title: 'Estate Memorial — Extended Slab',
    description: 'Ultra-premium estate memorial with wide profile, extended dual slab, and an elaborate architectural granite structure.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870180/TPCLT_037_eebjqq.jpg',
    category: 'estate',
  },
  {
    id: 'TPCLT038',
    title: 'Granite Pergola Estate Memorial',
    description: 'The pinnacle of our collection — an elaborate granite pergola structure forming a majestic permanent shelter over a family estate grave.',
    imageUrl: 'https://res.cloudinary.com/ddvrmhcre/image/upload/v1773870181/TPCLT_038_xgbyai.jpg',
    category: 'estate',
  },
];

export const ADVISORS: Advisor[] = [
  { id: 'a1', name: 'Colin Pillay', role: 'Director - Quotations & Professional Consultation', imageUrl: 'https://picsum.photos/seed/colin/200/200' },
  { id: 'a2', name: 'Leigh Reddy', role: 'Professional Consultation', imageUrl: 'https://picsum.photos/seed/leigh/200/200' },
];
