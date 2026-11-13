import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Keu Araújo — AI Builder | Systems, Data & Business',
  description: 'Portfólio de Keu Araújo. Automação de processos, inteligência artificial aplicada, dados e desenvolvimento de software.',
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
