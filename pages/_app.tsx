import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import SiteLayout from '@/components/common/SiteLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}
