// pages/_app.js - KOMPLETT ERSETZEN
import '../styles/globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import { DarkModeProvider } from '../contexts/DarkModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default MyApp;