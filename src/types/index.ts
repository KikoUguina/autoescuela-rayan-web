export interface TeamMember {
  name: string;
  role: string;
  image: string;
  slug: string;
  text: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon: string;
}

export interface Car {
  name: string;
  description: string;
  type: string;
  image: string;
  premium?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}
