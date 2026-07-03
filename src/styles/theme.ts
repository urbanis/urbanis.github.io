import type { ThemeConfig } from 'antd';

export const portfolioTheme: ThemeConfig = {
  token: {
    colorPrimary: '#006080',
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: 8,
    colorBgContainer: '#ffffff',
    colorText: '#0f172a',
    colorTextSecondary: '#475569',
    colorBorder: '#e2e8f0',
  },
  components: {
    Layout: {
      headerBg: 'transparent',
      footerBg: '#000a1a',
      headerPadding: '0',
      footerPadding: '0',
    },
    Button: {
      colorPrimary: '#F2C94C',
      borderRadius: 8,
    },
    Card: {
      borderRadiusLG: 12,
    },
    Modal: {
      borderRadiusLG: 16,
    },
    Tag: {
      colorText: '#006080',
    },
  },
};
