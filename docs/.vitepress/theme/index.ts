import 'uno.css';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import components from '../components';
import './custom.css';

// 兼容旧链接
if (!import.meta.env.SSR) {
  const u = location.href.substring(location.origin.length);
  if (location.pathname.startsWith('/selector/')) {
    if (location.pathname.at(-1) === '/') {
      location.pathname = '/guide/selector';
    } else {
      location.pathname = location.pathname.replace('/selector/', '/guide/');
    }
  } else if (location.pathname === '/subscription/') {
    location.pathname = '/guide/subscription';
  } else if (location.pathname === '/') {
    const r = new URLSearchParams(location.search).get('r');
    if (r === '1') {
      location.href = '/guide/snapshot#how-to-upload';
    } else if (r === '2') {
      location.href = '/guide/faq#restriction';
    }
  }
  if (u === '/guide/faq#fail_setting_secure_settings') {
    location.hash = 'adb_failed';
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
} satisfies Theme;
