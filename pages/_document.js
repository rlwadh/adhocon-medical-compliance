import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Meta Tags */}
        <meta name="description" content="ADHOCON.AI - Free Medical Device Compliance Tool with AI Guidance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        
        {/* KORRIGIERTE Custom Styles - ADHOCON Branding */}
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            scroll-behavior: smooth;
          }
          
          body {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
          }
          
          /* EXAKTE ADHOCON Brand Colors */
          .adhocon-gradient {
            background: linear-gradient(135deg, #003459 0%, #006caa 100%);
          }
          
          .adhocon-shadow {
            box-shadow: 0 10px 25px -3px rgba(0, 52, 89, 0.1), 0 4px 6px -2px rgba(0, 52, 89, 0.05);
          }
          
          /* 🔧 KORRIGIERTE Button-Styles - LESBAR! */
          .adhocon-button {
            background: linear-gradient(135deg, #006caa 0%, #003459 100%) !important;
            color: #ffffff !important;
            border: none !important;
            transition: all 0.3s ease !important;
            transform: translateY(0);
            font-weight: 600 !important;
            text-decoration: none !important;
          }
          
          .adhocon-button:hover {
            background: linear-gradient(135deg, #005a91 0%, #002040 100%) !important;
            transform: translateY(-2px);
            box-shadow: 0 12px 28px -3px rgba(0, 108, 170, 0.4) !important;
            color: #ffffff !important;
          }
          
          /* Sekundäre Buttons - deutlich sichtbar */
          .adhocon-button-secondary {
            background: rgba(255, 255, 255, 0.9) !important;
            color: #003459 !important;
            border: 2px solid #006caa !important;
            font-weight: 600 !important;
          }
          
          .adhocon-button-secondary:hover {
            background: #006caa !important;
            color: #ffffff !important;
            border-color: #003459 !important;
          }
          
          /* Navigation Buttons - immer lesbar */
          .nav-button {
            background: rgba(255, 255, 255, 0.95) !important;
            color: #003459 !important;
            border: 1px solid rgba(0, 108, 170, 0.3) !important;
            font-weight: 500 !important;
          }
          
          .nav-button:hover {
            background: rgba(0, 108, 170, 0.1) !important;
            color: #003459 !important;
            border-color: #006caa !important;
          }
          
          /* Input Fields - bessere Lesbarkeit */
          .adhocon-input {
            background: rgba(255, 255, 255, 0.95) !important;
            border: 1px solid #d1d5db !important;
            color: #1f2937 !important;
            font-weight: 500 !important;
          }
          
          .adhocon-input:focus {
            border-color: #006caa !important;
            box-shadow: 0 0 0 3px rgba(0, 108, 170, 0.1) !important;
            background: #ffffff !important;
          }
          
          .adhocon-input::placeholder {
            color: #6b7280 !important;
          }
          
          /* Glass Effect */
          .glass-effect {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          /* Text Lesbarkeit */
          .text-readable {
            color: #1f2937 !important;
          }
          
          .text-readable-light {
            color: #6b7280 !important;
          }
          
          /* Select Dropdowns */
          select {
            background: rgba(255, 255, 255, 0.95) !important;
            color: #1f2937 !important;
            border: 1px solid #d1d5db !important;
          }
          
          select:focus {
            border-color: #006caa !important;
            box-shadow: 0 0 0 3px rgba(0, 108, 170, 0.1) !important;
          }
          
          /* Textarea */
          textarea {
            background: rgba(255, 255, 255, 0.95) !important;
            color: #1f2937 !important;
            border: 1px solid #d1d5db !important;
          }
          
          textarea:focus {
            border-color: #006caa !important;
            box-shadow: 0 0 0 3px rgba(0, 108, 170, 0.1) !important;
          }
          
          /* Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          .animate-pulse-subtle {
            animation: pulse 2s infinite;
          }
          
          /* Überall wo Tailwind Klassen verwendet werden, überschreiben */
          .bg-blue-600 {
            background-color: #006caa !important;
          }
          
          .bg-blue-500 {
            background-color: #006caa !important;
          }
          
          .text-blue-600 {
            color: #006caa !important;
          }
          
          .text-blue-500 {
            color: #006caa !important;
          }
          
          .border-blue-600 {
            border-color: #006caa !important;
          }
          
          .border-blue-500 {
            border-color: #006caa !important;
          }
        `}</style>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}