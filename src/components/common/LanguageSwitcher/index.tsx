import { Dropdown, Avatar, Space } from 'antd';
import type { MenuProps } from 'antd';
import { LANGUAGES } from './const';
import type { LanguageSwitcherProps } from './types';

const LanguageSwitcher = ({ currentLang, onChange }: LanguageSwitcherProps) => {
  const currentItem = LANGUAGES.find(lang => lang.key === currentLang) || LANGUAGES[0];

  const items: MenuProps['items'] = LANGUAGES.map(item => ({
    key: item.key,
    label: (
      <Space>
        <Avatar size={18} src={item.icon} />
        {item.label}
      </Space>
    ),
    onClick: () => onChange(item.key),
  }));

  return (
    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
      <Space style={{ cursor: 'pointer' }}>
        <Avatar size={20} src={currentItem.icon} />
      </Space>
    </Dropdown>
  );
};

export default LanguageSwitcher;
