// lib/translations.js - ORDENTLICHE LÖSUNG mit flacher Struktur
export const translations = {
  de: {
    // Header & Navigation
    nav: {
      needHelp: "Need help or other AI Regulatory tools?",
      logout: "Abmelden"
    },
    
    // Welcome Section
    welcome: {
      title: "Willkommen bei ADHOCON.AI",
      subtitle: "Ihr kostenloser Medical Device Compliance Assistant",
      features: {
        free: {
          title: "Kostenlos & Open",
          description: "Keine versteckten Kosten. Vollständig kostenlos für alle Funktionen."
        },
        ai: {
          title: "KI-Powered",
          description: "Claude AI hilft bei jedem Schritt Ihrer Medical Device Registrierung."
        },
        global: {
          title: "Global Ready",
          description: "EU, USA, Kanada und 10+ weitere Länder unterstützt."
        }
      }
    },
    
    // Project Creation
    project: {
      createFirst: "Erstes Projekt erstellen",
      benefits: "🚀 In 5 Minuten startklar • 📋 Personalisierte Compliance-Roadmap • 🎯 Schritt-für-Schritt Anleitung",
      loading: "Dashboard wird geladen..."
    },
    
    // Classification Assistant - FLACHE STRUKTUR
    classification: {
      title: "Medical Device Classification Assistant",
      subtitle: "Ermitteln Sie die Risikoklasse Ihres Medizinprodukts nach IMDRF/MDCG 2019-11",
      start: "Klassifizierung starten",
      back: "Zurück",
      next: "Weiter",
      finish: "Abschließen",
      loading: "Wird verarbeitet...",
      
      // Progress
      progress_step: "Schritt",
      progress_of: "von",
      progress_completed: "abgeschlossen",
      
      // Step 1
      step1_title: "Art des Medizinprodukts",
      step1_question: "Ist Ihr Produkt ein Software-Medizinprodukt (SaMD)?",
      step1_option_software: "Ja, es ist eine Software",
      step1_option_hardware: "Nein, es ist ein Hardware-Produkt",
      step1_option_combination: "Kombination aus Software und Hardware",
      
      // Step 2
      step2_title: "Invasivität",
      step2_question: "Ist das Medizinprodukt invasiv?",
      step2_option_non_invasive: "Nicht invasiv",
      step2_option_invasive_body_orifice: "Invasiv über Körperöffnungen",
      step2_option_surgically_invasive: "Chirurgisch invasiv",
      
      // Step 3
      step3_title: "Anwendungsdauer",
      step3_question: "Wie lange wird das Medizinprodukt angewendet?",
      step3_option_transient: "Vorübergehend (< 60 Minuten)",
      step3_option_short_term: "Kurzzeitig (30 Tage oder weniger)",
      step3_option_long_term: "Langzeitig (> 30 Tage)",
      
      // Step 4
      step4_title: "Energiequelle",
      step4_question: "Wird das Medizinprodukt mit Energie betrieben?",
      step4_option_non_active: "Nein, passives Medizinprodukt",
      step4_option_active_therapeutic: "Ja, aktiv therapeutisch",
      step4_option_active_diagnostic: "Ja, aktiv diagnostisch",
      
      // Step 5
      step5_title: "Körpersystem",
      step5_question: "Mit welchem Körpersystem interagiert das Medizinprodukt?",
      step5_option_central_nervous: "Zentrales Nervensystem",
      step5_option_cardiovascular: "Herz-Kreislauf-System",
      step5_option_other: "Andere Körpersysteme",
      
      // Step 6
      step6_title: "Medikamentenabgabe",
      step6_question: "Gibt das Medizinprodukt Medikamente ab oder dosiert es diese?",
      step6_option_no_drug: "Nein",
      step6_option_drug_delivery: "Ja, Medikamentenabgabe",
      step6_option_drug_dosing: "Ja, Medikamentendosierung",
      
      // Step 7
      step7_title: "Weitere Risikofaktoren",
      step7_question: "Treffen weitere Risikofaktoren zu?",
      step7_option_contraceptive: "Empfängnisverhütung",
      step7_option_disinfection: "Desinfektion/Sterilisation",
      step7_option_biological_origin: "Biologischen Ursprungs",
      step7_option_none: "Keine der genannten",
      
      // Results
      results_title: "Klassifizierungsergebnis",
      results_class: "Risikoklasse",
      results_description: "Beschreibung",
      results_next_steps: "Nächste Schritte",
      results_create_project: "Projekt erstellen",
      results_start_over: "Neue Klassifizierung",
      
      // Class I
      class_i_name: "Klasse I",
      class_i_description: "Geringes Risiko - Nicht invasive Medizinprodukte mit geringem Risikopotential",
      class_i_requirements: "Grundlegende Sicherheits- und Leistungsanforderungen, CE-Kennzeichnung",
      
      // Class IIa
      class_iia_name: "Klasse IIa",
      class_iia_description: "Mittleres Risiko - Invasive Produkte für kurzfristige Anwendung",
      class_iia_requirements: "Benannte Stelle erforderlich, umfassende technische Dokumentation",
      
      // Class IIb
      class_iib_name: "Klasse IIb",
      class_iib_description: "Erhöhtes Risiko - Invasive Produkte mit mittlerem bis hohem Risikopotential",
      class_iib_requirements: "Benannte Stelle erforderlich, klinische Bewertung notwendig",
      
      // Class III
      class_iii_name: "Klasse III",
      class_iii_description: "Hohes Risiko - Lebenserhaltende oder kritische Medizinprodukte",
      class_iii_requirements: "Strenge Konformitätsbewertung, umfassende klinische Prüfung erforderlich"
    },
    
    // Buttons & Actions
    buttons: {
      createProject: "Erstes Projekt erstellen",
      back: "Zurück",
      next: "Weiter",
      save: "Speichern",
      cancel: "Abbrechen",
      upload: "Hochladen",
      download: "Herunterladen",
      analyze: "Analysieren"
    },
    
    // Footer
    footer: {
      copyright: "© 2025 ADHOCON UG (haftungsbeschränkt). Alle Rechte vorbehalten.",
      impressum: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB"
    },
    
    // Language Switcher
    language: {
      switch: "Language",
      german: "Deutsch",
      english: "English"
    }
  },
  
  en: {
    // Header & Navigation
    nav: {
      needHelp: "Need help or other AI Regulatory tools?",
      logout: "Logout"
    },
    
    // Welcome Section
    welcome: {
      title: "Welcome to ADHOCON.AI",
      subtitle: "Your free Medical Device Compliance Assistant",
      features: {
        free: {
          title: "Free & Open",
          description: "No hidden costs. Completely free for all features."
        },
        ai: {
          title: "AI-Powered",
          description: "Claude AI assists you at every step of your Medical Device registration."
        },
        global: {
          title: "Global Ready",
          description: "EU, USA, Canada and 10+ additional countries supported."
        }
      }
    },
    
    // Project Creation
    project: {
      createFirst: "Create First Project",
      benefits: "🚀 Ready in 5 minutes • 📋 Personalized Compliance Roadmap • 🎯 Step-by-Step Guide",
      loading: "Loading dashboard..."
    },
    
    // Classification Assistant - FLACHE STRUKTUR
    classification: {
      title: "Medical Device Classification Assistant",
      subtitle: "Determine the risk class of your medical device according to IMDRF/MDCG 2019-11",
      start: "Start Classification",
      back: "Back",
      next: "Next",
      finish: "Finish",
      loading: "Processing...",
      
      // Progress
      progress_step: "Step",
      progress_of: "of",
      progress_completed: "completed",
      
      // Step 1
      step1_title: "Type of Medical Device",
      step1_question: "Is your product a Software as Medical Device (SaMD)?",
      step1_option_software: "Yes, it is software",
      step1_option_hardware: "No, it is a hardware product",
      step1_option_combination: "Combination of software and hardware",
      
      // Step 2
      step2_title: "Invasiveness",
      step2_question: "Is the medical device invasive?",
      step2_option_non_invasive: "Non-invasive",
      step2_option_invasive_body_orifice: "Invasive through body orifices",
      step2_option_surgically_invasive: "Surgically invasive",
      
      // Step 3
      step3_title: "Duration of Use",
      step3_question: "How long is the medical device used?",
      step3_option_transient: "Transient (< 60 minutes)",
      step3_option_short_term: "Short-term (30 days or less)",
      step3_option_long_term: "Long-term (> 30 days)",
      
      // Step 4
      step4_title: "Energy Source",
      step4_question: "Is the medical device powered by energy?",
      step4_option_non_active: "No, passive medical device",
      step4_option_active_therapeutic: "Yes, active therapeutic",
      step4_option_active_diagnostic: "Yes, active diagnostic",
      
      // Step 5
      step5_title: "Body System",
      step5_question: "Which body system does the medical device interact with?",
      step5_option_central_nervous: "Central nervous system",
      step5_option_cardiovascular: "Cardiovascular system",
      step5_option_other: "Other body systems",
      
      // Step 6
      step6_title: "Drug Delivery",
      step6_question: "Does the medical device deliver or dose medications?",
      step6_option_no_drug: "No",
      step6_option_drug_delivery: "Yes, drug delivery",
      step6_option_drug_dosing: "Yes, drug dosing",
      
      // Step 7
      step7_title: "Additional Risk Factors",
      step7_question: "Do additional risk factors apply?",
      step7_option_contraceptive: "Contraception",
      step7_option_disinfection: "Disinfection/Sterilization",
      step7_option_biological_origin: "Of biological origin",
      step7_option_none: "None of the above",
      
      // Results
      results_title: "Classification Result",
      results_class: "Risk Class",
      results_description: "Description",
      results_next_steps: "Next Steps",
      results_create_project: "Create Project",
      results_start_over: "New Classification",
      
      // Class I
      class_i_name: "Class I",
      class_i_description: "Low risk - Non-invasive medical devices with low risk potential",
      class_i_requirements: "Basic safety and performance requirements, CE marking",
      
      // Class IIa
      class_iia_name: "Class IIa",
      class_iia_description: "Medium risk - Invasive products for short-term use",
      class_iia_requirements: "Notified Body required, comprehensive technical documentation",
      
      // Class IIb
      class_iib_name: "Class IIb",
      class_iib_description: "Elevated risk - Invasive products with medium to high risk potential",
      class_iib_requirements: "Notified Body required, clinical evaluation necessary",
      
      // Class III
      class_iii_name: "Class III",
      class_iii_description: "High risk - Life-sustaining or critical medical devices",
      class_iii_requirements: "Strict conformity assessment, comprehensive clinical investigation required"
    },
    
    // Buttons & Actions
    buttons: {
      createProject: "Create First Project",
      back: "Back",
      next: "Next",
      save: "Save",
      cancel: "Cancel",
      upload: "Upload",
      download: "Download",
      analyze: "Analyze"
    },
    
    // Footer
    footer: {
      copyright: "© 2025 ADHOCON UG (haftungsbeschränkt). All rights reserved.",
      impressum: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    },
    
    // Language Switcher
    language: {
      switch: "Sprache",
      german: "Deutsch",
      english: "English"
    }
  }
};