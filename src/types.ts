export interface BioLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  type: 'ifood' | '99' | 'whatsapp' | 'maps' | 'google' | 'instagram' | 'tiktok';
  highlight?: boolean;
  accentColor: string;
  badge?: string;
  iconBg: string;
}

export interface FeatureCardItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}
