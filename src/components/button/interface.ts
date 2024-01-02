export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: string;
  size?: string;
  text?: string;
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  children?: React.ReactNode;
  submit?: boolean;
  outlined?: boolean;
}
