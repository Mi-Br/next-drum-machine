import React from 'react';

import Header from '../components/Header';

import './styles.css';
import { SoundProvider } from '../context/SoundContext';
function RootLayout({ children }) {
  return (
    <html lang="en">
      <SoundProvider>
      <body>
        <Header />
        {children}
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
          </footer>
        </body>
      </SoundProvider>
    </html>
  );
}

export default RootLayout;
