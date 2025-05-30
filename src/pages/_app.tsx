import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';

import 'root/assets/global.css';

const robotoFont = Roboto({
  variable: '--roboto',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(robotoFont.className, robotoFont.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
