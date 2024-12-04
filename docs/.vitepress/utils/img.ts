import mirrorHost from '../data/mirror.load';
const imgHost = 'https://a.gkd.li/';

export const convertSrc = (name: string): string => {
  if (name && name.startsWith('https:')) {
    if (name.startsWith(imgHost)) {
      return mirrorHost + name.slice(imgHost.length);
    }
    return name;
  }
  return mirrorHost + name;
};
