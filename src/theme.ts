import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: 'transparent',
    fontFamily: 'var(--font-body)',
    controlOutline: 'transparent',
    controlOutlineWidth: 0,
    colorBgContainer: '#fff',
    colorBgElevated: '#fff',
    colorTextPlaceholder: '#7c7a7a',
    colorText: '#7c7a7a',
  },

  components: {
    Input: {
      activeShadow: 'none',
      colorBorder: 'var(--light-primary)',
      activeBorderColor: 'var(--light-primary)',
      hoverBorderColor: 'var(--light-primary)',
      colorBgContainer: '#fff',
    },

    Checkbox: {
      colorPrimary: 'var(--light-primary)',
      colorPrimaryHover: 'var(--light-primary)',
      borderRadiusSM: 2,
      controlInteractiveSize: 18,
      colorBorder: 'var(--light-primary)',
      colorBgContainer: '#fff',
    },

    Select: {
      colorBorder: 'var(--light-primary)',
      activeBorderColor: 'var(--light-primary)',
      hoverBorderColor: 'var(--light-primary)',
      colorBgContainer: '#fff',
      controlItemBgActive: '#fff',
    },

    Form: {
      itemMarginBottom: 24,
    },

    Button: {
      borderRadius: 0,
      controlOutline: 'none',
      defaultBorderColor: 'transparent',
      defaultShadow: 'none',
      defaultBg: 'transparent',
      opacityLoading: 0.6,
      paddingInline: 0,
      controlOutlineWidth: 0,
      primaryShadow: 'none',

      defaultHoverBg: 'transparent',
      defaultHoverColor: 'inherit',
      defaultHoverBorderColor: 'transparent',

      defaultActiveBg: 'transparent',
      defaultActiveColor: 'inherit',
      defaultActiveBorderColor: 'transparent',

      colorTextPlaceholder: 'inherit',

      colorLink: '#8f6c2c',
      colorLinkHover: '#c5a059',
      colorLinkActive: '#c5a059',
    },

    Pagination: {
      colorPrimary: '#c5a059',
      colorPrimaryHover: '#c5a059',
      itemActiveBg: 'transparent',

      colorText: '#1a1a1a',
      colorTextDisabled: '#d9d9d9',

      controlItemBgHover: 'transparent',
      colorPrimaryActive: '#c5a059',
      itemLinkBg: 'transparent',
      controlOutline: 'transparent',
    },
  },
};
