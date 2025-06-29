// pages/_app.js - ERSETZEN
import '../styles/globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import { DarkModeProvider } from '../contexts/DarkModeContext';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default MyApp;