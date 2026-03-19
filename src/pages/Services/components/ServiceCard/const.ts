import repairImg from '../../../../assets/img/services/repairImg.jpg';
import cleaningImg from '../../../../assets/img/services/careImg.jpg';
import customImg from '../../../../assets/img/services/repair.jpg';

export const SERVICE_ITEMS = [
  {
    id: 'repair',
    image: repairImg,
  },
  {
    id: 'cleaning',
    image: cleaningImg,
  },
  {
    id: 'custom',
    image: customImg,
  },
] as const;
