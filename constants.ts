
import { Page, ServiceItem, CategoryItem, GalleryItem, Advisor } from './types';

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
  { id: 'g1', title: 'Black Granite Ogee', description: 'Classic polished finish with gold leaf.', category: 'single', imageUrl: 'https://picsum.photos/seed/granite1/600/400' },
  { id: 'g2', title: 'Angel Heart Memorial', description: 'Carved angel resting on heart-shaped stone.', category: 'child', imageUrl: 'https://picsum.photos/seed/angel/600/400' },
  { id: 'g3', title: 'Companion Double', description: 'Wide design suitable for two inscriptions.', category: 'double', imageUrl: 'https://picsum.photos/seed/double1/600/400' },
  { id: 'g4', title: 'Standard Lawn Plaque', description: 'Low-maintenance flat marker.', category: 'plaque', imageUrl: 'https://picsum.photos/seed/plaque/600/400' },
  { id: 'g5', title: 'Celtic Cross', description: 'Intricate traditional design.', category: 'single', imageUrl: 'https://picsum.photos/seed/celtic/600/400' },
  { id: 'g6', title: 'Full Kerb Set', description: 'Complete grave covering.', category: 'double', imageUrl: 'https://picsum.photos/seed/kerb/600/400' },
];

export const ADVISORS: Advisor[] = [
  { id: 'a1', name: 'Colin Pillay', role: 'Director - Quotations & Professional Consultation', imageUrl: 'https://picsum.photos/seed/colin/200/200' },
  { id: 'a2', name: 'Leigh Reddy', role: 'Professional Consultation', imageUrl: 'https://picsum.photos/seed/leigh/200/200' },
];
