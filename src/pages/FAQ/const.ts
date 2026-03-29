import React from 'react';
import { 
  CarOutlined, 
  HeartOutlined, 
  SafetyCertificateOutlined, 
  CalendarOutlined 
} from '@ant-design/icons';

export const FAQ_CATEGORIES = [
  { 
    id: 'shipping', 
    icon: React.createElement(CarOutlined), 
    questionCount: 3
  },
  { 
    id: 'jewelry', 
    icon: React.createElement(HeartOutlined), 
    questionCount: 3
  },
  { 
    id: 'warranty', 
    icon: React.createElement(SafetyCertificateOutlined), 
    questionCount: 3
  },
  { 
    id: 'booking', 
    icon: React.createElement(CalendarOutlined), 
    questionCount: 3 
  }
] as const;