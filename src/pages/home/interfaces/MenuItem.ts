export interface MenuItem {
  id: number;
  title: string;
  submenu?: MenuItem[];
}
