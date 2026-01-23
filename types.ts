
export enum Page {
  Home = 'home',
  Funerals = 'funerals',
  Tombstones = 'tombstones',
  Contact = 'contact'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Advisor {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}