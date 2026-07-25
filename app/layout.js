import './globals.css';

export const metadata = {
  title: 'EdgeProc | Enterprise Performance Marketing & Growth Agency',
  description: 'EdgeProc architects high-velocity performance marketing funnels, Meta/Google ad engines, SEO dominance, and AI automation for market-leading brands.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        {/* Inline critical CSS to prevent unstyled flash on page refresh */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root { background: #F2F4F8; }
          [data-theme="dark"] { background: #0B1120; }
          body { background: #F2F4F8; margin: 0; padding: 0; }
          [data-theme="dark"] body { background: #0B1120; }
        `}} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
