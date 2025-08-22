export interface NavItem {
  name: string;
  path?: string;
  icon: React.ReactNode;
  subItems?: NavItem[];
}
