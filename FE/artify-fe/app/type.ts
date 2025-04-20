export interface InputProps {
  title: string;
  styles: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (name: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  title: string;
  styles: string;
  onClick?: () => void;
}
