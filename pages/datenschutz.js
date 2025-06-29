import Head from 'next/head';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung - ADHOCON.AI</title>
        <meta name="description" content="Datenschutzerklärung für ADHOCON.AI - Medical Compliance Platform" />
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
            <h1 className="text-3xl font-bold text-[#003459] mb-8">Datenschutzerklärung</h1>

            {/* 1. Datenschutz auf einen Blick */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">Allgemeine Hinweise</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
                aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Datenerfassung auf dieser Website</h3>
              
              <h4 className="text-lg font-medium text-gray-800 mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie 
                dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-3">Wie erfassen wir Ihre Daten?</h4>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten 
                handeln, die Sie in unsere Medical Compliance Plattform eingeben, Projektdaten hochladen oder in Kontaktformulare eingeben.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
                Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-3">Wofür nutzen wir Ihre Daten?</h4>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website und unserer Medical Compliance 
                Services zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens und zur Verbesserung unserer 
                KI-gestützten Compliance-Analysen verwendet werden.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
                zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung 
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei 
                der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            {/* 2. Hosting und Technologien */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">2. Hosting und verwendete Technologien</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">Vercel Hosting</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Diese Website wird bei Vercel Inc. gehostet. Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern von Vercel gespeichert. 
                Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Der Einsatz von Vercel erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden 
                Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung 
                unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" className="text-[#006caa] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Supabase Datenbank</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Für die Speicherung und Verwaltung von Benutzerdaten und Projektinformationen nutzen wir Supabase. 
                Anbieter ist Supabase Inc., San Francisco, CA, USA.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                In der Supabase-Datenbank werden folgende Daten gespeichert:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
                <li>Benutzerkontoinformationen (E-Mail, verschlüsselte Passwörter)</li>
                <li>Projektdaten und hochgeladene Dokumente</li>
                <li>Compliance-Analyseergebnisse</li>
                <li>Nutzungsstatistiken und Sitzungsdaten</li>
              </ul>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und 
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung unserer Services).
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Supabase: 
                <a href="https://supabase.com/privacy" className="text-[#006caa] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://supabase.com/privacy
                </a>
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Next.js Framework</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Diese Website basiert auf dem Next.js Framework von Vercel. Next.js sammelt automatisch bestimmte anonyme 
                Telemetriedaten über die allgemeine Nutzung. Diese Daten sind nicht personenbezogen und umfassen keine 
                Informationen wie Quellcode, Umgebungsvariablen oder andere sensible Informationen.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Weitere Informationen zur Next.js Telemetrie: 
                <a href="https://nextjs.org/telemetry" className="text-[#006caa] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://nextjs.org/telemetry
                </a>
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Claude AI Integration</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Für die KI-gestützte Analyse von Medical Compliance Dokumenten nutzen wir Claude AI von Anthropic. 
                Anbieter ist Anthropic PBC, San Francisco, CA, USA.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Wenn Sie unsere AI-Analysefunktionen nutzen, werden folgende Daten an Anthropic übertragen:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
                <li>Hochgeladene Dokumente zur Compliance-Analyse</li>
                <li>Textinhalte für die KI-Verarbeitung</li>
                <li>Analyseanfragen und Parameter</li>
              </ul>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die Verarbeitung erfolgt nur mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) beim 
                Starten einer AI-Analyse. Anthropic verarbeitet die Daten gemäß ihrer Datenschutzrichtlinie und 
                verwendet die Daten nicht zum Training ihrer Modelle.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Anthropic: 
                <a href="https://www.anthropic.com/privacy" className="text-[#006caa] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://www.anthropic.com/privacy
                </a>
              </p>
            </section>

            {/* 3. Datenerfassung auf unserer Website */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">3. Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">Browser-Speicher (LocalStorage)</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Unsere Website verwendet den Browser-LocalStorage, um Ihre Präferenzen und Sitzungsdaten lokal in Ihrem 
                Browser zu speichern. Diese Daten verlassen Ihren Computer nicht und werden nur zur Verbesserung Ihrer 
                Benutzererfahrung verwendet.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Sie können den LocalStorage jederzeit über Ihre Browser-Einstellungen löschen.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">File Upload und Dokumentenverarbeitung</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Wenn Sie Dokumente für die Compliance-Analyse hochladen, werden diese temporär auf unseren Servern 
                verarbeitet und anschließend sicher in der Supabase-Datenbank gespeichert. Die Dateien werden 
                verschlüsselt übertragen und gespeichert.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Sie können Ihre hochgeladenen Dateien jederzeit über Ihr Benutzerkonto verwalten und löschen.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Server-Log-Dateien</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes 
                Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
              </p>
            </section>

            {/* 4. Allgemeine Hinweise und Pflichtinformationen */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">4. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">Datenschutz</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung 
                erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck 
                das geschieht.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>ADHOCON UG (haftungsbeschränkt)</strong><br />
                  Vertreten durch den Geschäftsführer Rudolf Ludwig Wagner<br />
                  Albert-Haueisen-Ring 70<br />
                  67071 Ludwigshafen am Rhein<br />
                  Deutschland
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Telefon:</strong> +4962159815216<br />
                  <strong>E-Mail:</strong> info@adhocon.com
                </p>
              </div>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Speicherdauer</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden 
                Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                personenbezogenen Daten haben.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Datenschutzbeauftragter</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>ADHOCON UG (haftungsbeschränkt)</strong><br />
                  Datenschutzbeauftragter Rudolf Ludwig Wagner<br />
                  Albert-Haueisen-Ring 70<br />
                  67071 Ludwigshafen am Rhein<br />
                  Deutschland
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Telefon:</strong> +4962159815216<br />
                  <strong>E-Mail:</strong> info@adhocon.com
                </p>
              </div>
            </section>

            {/* 5. Ihre Rechte */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">5. Ihre Rechte</h2>
              
              <h3 className="text-xl font-medium text-[#006caa] mb-4">Auskunft, Löschung und Berichtigung</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu 
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Recht auf Datenübertragbarkeit</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
                aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen 
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine 
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-medium text-[#006caa] mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, 
                insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des 
                mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher 
                oder gerichtlicher Rechtsbehelfe.
              </p>
            </section>

            {/* 6. SSL/TLS Verschlüsselung */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#003459] mb-6">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers 
                von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                nicht von Dritten mitgelesen werden.
              </p>
            </section>

            {/* Stand der Erklärung */}
            <section className="border-t pt-8">
              <p className="text-sm text-gray-600">
                <strong>Stand dieser Datenschutzerklärung:</strong> Juni 2025
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Diese Datenschutzerklärung kann bei Änderungen unserer Website oder bei Änderungen der gesetzlichen 
                Bestimmungen angepasst werden.
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