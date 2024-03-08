import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/utils/registry';
import { fontPrimary, fontSecondary } from '@/styles/fonts';

export const metadata: Metadata = {
  title: '1 Satoshi 1 Peso | La Crypta',
  description:
    'La hiperbitcoinización es inminente, por eso enterate cuánto falta para el famoso 1 a 1 del Peso Argentino contra Bitcoin.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
      <head>
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <link rel='icon' type='img/png' href='img/schema-logo.png' />

        {/*  */}
        <meta name='author' content='La Crypta' />
        <meta name='robots' content='index,follow' />

        {/* Facebook */}
        <meta property='og:title' content='1 Satoshi 1 Peso | La Crypta' />
        <meta
          property='og:description'
          content='La hiperbitcoinización es inminente, por eso enterate cuánto falta para el famoso 1 a 1 del Peso Argentino contra Bitcoin.'
        />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/img/social/facebook-1200x630.jpg' />
        <meta property='og:url' content='https://1satoshi1peso.ar/' />

        {/* Twitter */}
        <meta name='twitter:title' content='1 Satoshi 1 Peso | La Crypta' />
        <meta
          name='twitter:description'
          content='La hiperbitcoinización es inminente, por eso enterate cuánto falta para el famoso 1 a 1 del Peso Argentino contra Bitcoin.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='/img/social/twitter-600x330.jpg' />
        <meta name='twitter:url' content='https://1satoshi1peso.ar/' />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
