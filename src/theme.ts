import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: 'var(--light-primary)',
    fontFamily: 'var(--font-body)',
    controlOutline: 'transparent',
    controlOutlineWidth: 0,
  },

  components: {
    Input: {
      activeShadow: 'none',
      colorBorder: 'var(--light-primary)',
      activeBorderColor: 'var(--dark-primary)',
      hoverBorderColor: 'var(--dark-primary)',
    },

    Checkbox: {
      colorPrimary: 'var(--light-primary)',
      colorPrimaryHover: 'var(--light-primary)',
      borderRadiusSM: 2,
      controlInteractiveSize: 18,
      colorBorder: 'var(--dark-primary)',
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
    },
  },
};
