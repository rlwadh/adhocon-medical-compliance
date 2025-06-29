import Head from 'next/head';
import Link from 'next/link';

export default function AGB() {
  return (
    <>
      <Head>
        <title>Allgemeine Geschäftsbedingungen - ADHOCON.AI</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen für ADHOCON.AI - Medical Compliance Platform" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/logo.svg" alt="ADHOCON.AI Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-[#003459]">ADHOCON.AI</span>
              </Link>
              <Link href="/" className="text-[#006caa] hover:text-[#003459] font-medium">
                ← Zurück zur Hauptseite
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[#003459] mb-8">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-lg text-gray-600 mb-8">für die Nutzung von ADHOCON.AI - Medical Compliance Platform</p>

            {/* 1. Geltungsbereich und Vertragspartner */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">1. Geltungsbereich und Vertragspartner</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der ADHOCON.AI Medical Compliance Platform 
                sowie aller damit verbundenen Services und Funktionen.
              </p>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>Vertragspartner:</strong>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>ADHOCON UG (haftungsbeschränkt)</strong><br />
                  Vertreten durch: Rudolf Ludwig Wagner<br />
                  Albert-Haueisen-Ring 70<br />
                  67071 Ludwigshafen am Rhein<br />
                  Deutschland
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Telefon:</strong> +4962159815216<br />
                  <strong>E-Mail:</strong> info@adhocon.com<br />
                  <strong>Handelsregisternummer:</strong> HRB 68276, Amtsgericht Ludwigshafen am Rhein
                </p>
              </div>

              <p className="mb-6 text-gray-700 leading-relaxed">
                Durch die Nutzung unserer Plattform stimmen Sie diesen AGB zu. Sollten Sie mit diesen Bedingungen nicht 
                einverstanden sein, ist eine Nutzung der ADHOCON.AI Platform nicht gestattet.
              </p>
            </section>

            {/* 2. Beschreibung der Dienstleistung */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">2. Beschreibung der Dienstleistung</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                ADHOCON.AI bietet eine web-basierte Plattform zur KI-gestützten Analyse von Medical Compliance Dokumenten. 
                Die Platform umfasst insbesondere:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 ml-4 space-y-2">
                <li>Upload und Verarbeitung von medizinischen und regulatorischen Dokumenten</li>
                <li>KI-gestützte Analyse durch Claude AI von Anthropic</li>
                <li>Generierung von Compliance-Reports und Empfehlungen</li>
                <li>Projektmanagement-Tools für Compliance-Projekte</li>
                <li>Datenspeicherung und -verwaltung</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ WICHTIGER HINWEIS</h3>
                <p className="text-red-700 leading-relaxed">
                  <strong>Die von ADHOCON.AI generierten Analysen, Berichte und Empfehlungen dienen ausschließlich 
                  der Orientierung und stellen keine rechtsverbindlichen Aussagen dar.</strong> Alle Ergebnisse 
                  müssen vor jeder Anwendung oder Umsetzung durch qualifizierte Fachkräfte (Ärzte, Juristen, 
                  Regulatory Affairs Experten) geprüft und validiert werden.
                </p>
              </div>
            </section>

            {/* 3. Nutzungsrechte und -beschränkungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">3. Nutzungsrechte und -beschränkungen</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">3.1 Nutzungsrecht</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                ADHOCON UG gewährt Ihnen ein nicht-exklusives, widerrufliches, nicht übertragbares Recht zur Nutzung 
                der ADHOCON.AI Platform gemäß diesen AGB.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">3.2 Nutzungsbeschränkungen</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">Sie verpflichten sich, die Platform nicht zu nutzen für:</p>
              <ul className="list-disc list-inside mb-6 text-gray-700 ml-4 space-y-1">
                <li>Rechtswidrige Zwecke oder Aktivitäten</li>
                <li>Die Analyse von Dokumenten, die Geschäftsgeheimnisse Dritter enthalten</li>
                <li>Reverse Engineering, Dekompilierung oder Disassemblierung</li>
                <li>Umgehung von Sicherheitsmaßnahmen</li>
                <li>Überlastung der Systemressourcen</li>
                <li>Weitergabe von Zugangsdaten an Dritte</li>
              </ul>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">3.3 Aussetzung und Beendigung</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-yellow-800 leading-relaxed">
                  <strong>ADHOCON UG ist berechtigt, die Nutzung der Platform jederzeit und ohne Angabe von Gründen:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 text-yellow-800 ml-4">
                  <li>Einzuschränken oder vollständig zu sperren</li>
                  <li>Bezahlpflichtig zu machen oder Preise zu ändern</li>
                  <li>Funktionen zu modifizieren oder einzustellen</li>
                  <li>Den Service vollständig zu beenden</li>
                </ul>
                <p className="text-yellow-800 mt-2">
                  Ein Anspruch auf Nutzung besteht nicht. Eine Vorankündigung erfolgt nach Möglichkeit, ist aber nicht verpflichtend.
                </p>
              </div>
            </section>

            {/* 4. Haftungsausschluss und Gewährleistung */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">4. Haftungsausschluss und Gewährleistung</h2>
              
              <div className="bg-red-50 border-2 border-red-500 p-6 mb-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-4">🚨 VOLLSTÄNDIGER HAFTUNGSAUSSCHLUSS</h3>
                
                <h4 className="text-lg font-medium text-red-700 mb-3">4.1 Keine Garantie für KI-Ergebnisse</h4>
                <p className="text-red-700 leading-relaxed mb-4">
                  ADHOCON UG übernimmt keinerlei Gewähr oder Garantie für die Richtigkeit, Vollständigkeit, Aktualität 
                  oder Verwendbarkeit der durch die KI-Analyse generierten Ergebnisse. Die Nutzung erfolgt auf eigenes 
                  Risiko des Anwenders.
                </p>

                <h4 className="text-lg font-medium text-red-700 mb-3">4.2 Orientierungscharakter</h4>
                <p className="text-red-700 leading-relaxed mb-4">
                  Alle Analysen, Berichte, Empfehlungen und sonstigen Ausgaben der Platform haben ausschließlich 
                  orientierenden Charakter und stellen keine fachliche, rechtliche oder medizinische Beratung dar.
                </p>

                <h4 className="text-lg font-medium text-red-700 mb-3">4.3 Prüfungspflicht</h4>
                <p className="text-red-700 leading-relaxed mb-4">
                  Der Nutzer ist verpflichtet, alle von der Platform generierten Inhalte vor jeder Verwendung durch 
                  qualifizierte Experten prüfen und validieren zu lassen. Eine direkte Anwendung ohne fachliche 
                  Überprüfung ist ausgeschlossen.
                </p>

                <h4 className="text-lg font-medium text-red-700 mb-3">4.4 Haftungsfreistellung</h4>
                <p className="text-red-700 leading-relaxed">
                  Der Nutzer stellt ADHOCON UG von allen Ansprüchen Dritter frei, die aus der Nutzung der Platform 
                  oder der Anwendung der generierten Ergebnisse entstehen können.
                </p>
              </div>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">4.5 Gesetzliche Haftung</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Die Haftung von ADHOCON UG ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Bei einfacher 
                Fahrlässigkeit haftet ADHOCON UG nur für die Verletzung wesentlicher Vertragspflichten und ist 
                auf den typischen, vorhersehbaren Schaden begrenzt. Die Haftung für Schäden an Leben, Körper 
                oder Gesundheit sowie nach dem Produkthaftungsgesetz bleibt unberührt.
              </p>
            </section>

            {/* 5. Datenschutz und Datenverarbeitung */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">5. Datenschutz und Datenverarbeitung</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt gemäß unserer Datenschutzerklärung. 
                Durch die Nutzung der Platform stimmen Sie der dort beschriebenen Datenverarbeitung zu.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">5.1 Hochgeladene Dokumente</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Sie versichern, dass Sie berechtigt sind, die von Ihnen hochgeladenen Dokumente für die 
                KI-Analyse zu verwenden und dabei keine Rechte Dritter verletzen.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">5.2 KI-Verarbeitung</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Ihre Dokumente werden zur Analyse an Claude AI (Anthropic) übertragen. Details hierzu finden 
                Sie in unserer <Link href="/datenschutz" className="text-[#006caa] hover:underline">Datenschutzerklärung</Link>.
              </p>
            </section>

            {/* 6. Vergütung und Zahlungsbedingungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">6. Vergütung und Zahlungsbedingungen</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die Platform wird derzeit als Beta-Version kostenfrei zur Verfügung gestellt. 
                ADHOCON UG behält sich vor, zukünftig Nutzungsgebühren zu erheben.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-800 leading-relaxed">
                  <strong>Hinweis:</strong> Bei Einführung von Nutzungsgebühren werden bestehende Nutzer 
                  mindestens 30 Tage im Voraus informiert. Die weitere Nutzung nach Einführung von 
                  Gebühren gilt als Zustimmung zu den neuen Preisen.
                </p>
              </div>
            </section>

            {/* 7. Geistiges Eigentum */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">7. Geistiges Eigentum</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">7.1 Platform-Rechte</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Alle Rechte an der ADHOCON.AI Platform, einschließlich Software, Design, Marken und 
                Inhalten, verbleiben bei ADHOCON UG oder den jeweiligen Rechteinhabern.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">7.2 Nutzerdaten</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Sie behalten die Rechte an Ihren hochgeladenen Dokumenten. ADHOCON UG erwirbt keine 
                Eigentumsrechte an Ihren Inhalten, benötigt aber das Recht zur Verarbeitung für die 
                Bereitstellung der Services.
              </p>
            </section>

            {/* 8. Vertragslaufzeit und Kündigung */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">8. Vertragslaufzeit und Kündigung</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                Der Nutzungsvertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien 
                jederzeit ohne Einhaltung einer Kündigungsfrist beendet werden.
              </p>

              <p className="mb-6 text-gray-700 leading-relaxed">
                ADHOCON UG ist berechtigt, den Vertrag bei Verstößen gegen diese AGB oder aus wichtigem 
                Grund fristlos zu kündigen.
              </p>
            </section>

            {/* 9. Änderungen der AGB */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">9. Änderungen der AGB</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                ADHOCON UG behält sich vor, diese AGB jederzeit zu ändern. Änderungen werden über die 
                Platform oder per E-Mail mitgeteilt.
              </p>

              <p className="mb-6 text-gray-700 leading-relaxed">
                Widersprechen Sie den geänderten AGB nicht binnen 30 Tagen nach Mitteilung, gelten 
                diese als angenommen. Bei Widerspruch endet das Nutzungsverhältnis.
              </p>
            </section>

            {/* 10. Schlussbestimmungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">10. Schlussbestimmungen</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">10.1 Anwendbares Recht</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">10.2 Gerichtsstand</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Ludwigshafen am Rhein, Deutschland.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">10.3 Salvatorische Klausel</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der 
                übrigen Bestimmungen unberührt.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">10.4 Streitbeilegung</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                ADHOCON UG ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor 
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Kontakt und Stand */}
            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">Kontakt</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Bei Fragen zu diesen AGB wenden Sie sich bitte an:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>ADHOCON UG (haftungsbeschränkt)</strong><br />
                  E-Mail: info@adhocon.com<br />
                  Telefon: +4962159815216
                </p>
              </div>
              
              <p className="text-sm text-gray-600">
                <strong>Stand dieser AGB:</strong> Juni 2025
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Diese AGB können bei Änderungen der Platform oder aus rechtlichen Gründen angepasst werden.
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#003459] text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <img src="/logo.svg" alt="ADHOCON.AI Logo" className="h-6 w-auto filter brightness-0 invert" />
                <span className="font-bold">ADHOCON.AI</span>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/impressum" className="hover:text-[#006caa] transition-colors">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="hover:text-[#006caa] transition-colors">
                  Datenschutz
                </Link>
                <Link href="/agb" className="hover:text-[#006caa] transition-colors">
                  AGB
                </Link>
              </div>
            </div>
            <div className="text-center text-sm text-gray-300 mt-4">
              © 2025 ADHOCON UG (haftungsbeschränkt). Alle Rechte vorbehalten.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}