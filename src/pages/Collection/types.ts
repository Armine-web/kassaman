export type Props = {
  text: string;
  className?: string;
  route?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  onSelect: () => void;
};
