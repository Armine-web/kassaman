export type FilterModalProps = {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  buttonClassName?: string;

  selectedCategory?: string;
};
