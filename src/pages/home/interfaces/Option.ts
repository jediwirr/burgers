export interface Option {
  id: number;
  title: string;
  weight?: string;
  value?: string;
  note?: string;
  choices?: Option[];
}