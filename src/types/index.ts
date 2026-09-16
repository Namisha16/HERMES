export type BrandId = 'hermes' | 'versace' | 'prada' | 'chanel' | 'dior' | 'ralph_lauren' | 'bottega_veneta' | 'louis_vuitton';

export interface BrandSummary {
  name: string;
  founded: number;
  origin: string;
  descriptor: string;
  active?: boolean;
}

export interface TimelineEventItem {
  year: number;
  text: string;
  category: string;
}

export interface MetierItem {
  id: string;
  name: string;
  frenchName: string;
  process: string;
  description: string;
  image: string;
  established?: string;
}

export interface ProductIconItem {
  id: string;
  name: string;
  year?: number | string;
  category: string;
  tagline: string;
  story: string;
  detail: string;
  image: string;
}

export interface RevenueItem {
  sector: string;
  revenueMillions: number;
  percentage: number;
}

export interface RegionalDataItem {
  region: string;
  percentage: number;
}
