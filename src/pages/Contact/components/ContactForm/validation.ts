import type { Rule } from 'antd/es/form';

export const requiredRule = (message: string): Rule => ({
  required: true,
  message,
});

export const phoneRule = (message: string): Rule => ({
  required: true,
  pattern: /^\+?\d{7,15}$/,
  message,
});

export const emailRule: Rule = ({ getFieldValue }) => ({
  async validator(_, value) {
    const preferred = getFieldValue('preferredContact');

    if (preferred === 'email' && !value) {
      throw new Error('Email is required');
    }

    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      throw new Error('Invalid email');
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    return true;
  },
});
