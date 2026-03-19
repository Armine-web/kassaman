export type Props = {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
};
