// lib/translations.js - Diese Datei erstellen
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
    
    // Classification Assistant - NEU HINZUGEFÜGT
    classification: {
      title: "Medical Device Classification Assistant",
      subtitle: "Ermitteln Sie die Risikoklasse Ihres Medizinprodukts nach IMDRF/MDCG 2019-11",
      start: "Klassifizierung starten",
      back: "Zurück",
      next: "Weiter",
      finish: "Abschließen",
      loading: "Wird verarbeitet...",
      steps: {
        step1: {
          title: "Art des Medizinprodukts",
          question: "Ist Ihr Produkt ein Software-Medizinprodukt (SaMD)?",
          options: {
            software: "Ja, es ist eine Software",
            hardware: "Nein, es ist ein Hardware-Produkt",
            combination: "Kombination aus Software und Hardware"
          }
        },
        step2: {
          title: "Invasivität",
          question: "Ist das Medizinprodukt invasiv?",
          options: {
            non_invasive: "Nicht invasiv",
            invasive_body_orifice: "Invasiv über Körperöffnungen",
            surgically_invasive: "Chirurgisch invasiv"
          }
        },
        step3: {
          title: "Anwendungsdauer",
          question: "Wie lange wird das Medizinprodukt angewendet?",
          options: {
            transient: "Vorübergehend (< 60 Minuten)",
            short_term: "Kurzzeitig (30 Tage oder weniger)",
            long_term: "Langzeitig (> 30 Tage)"
          }
        },
        step4: {
          title: "Energiequelle",
          question: "Wird das Medizinprodukt mit Energie betrieben?",
          options: {
            non_active: "Nein, passives Medizinprodukt",
            active_therapeutic: "Ja, aktiv therapeutisch",
            active_diagnostic: "Ja, aktiv diagnostisch"
          }
        },
        step5: {
          title: "Körpersystem",
          question: "Mit welchem Körpersystem interagiert das Medizinprodukt?",
          options: {
            central_nervous: "Zentrales Nervensystem",
            cardiovascular: "Herz-Kreislauf-System",
            other: "Andere Körpersysteme"
          }
        },
        step6: {
          title: "Medikamentenabgabe",
          question: "Gibt das Medizinprodukt Medikamente ab oder dosiert es diese?",
          options: {
            no_drug: "Nein",
            drug_delivery: "Ja, Medikamentenabgabe",
            drug_dosing: "Ja, Medikamentendosierung"
          }
        },
        step7: {
          title: "Weitere Risikofaktoren",
          question: "Treffen weitere Risikofaktoren zu?",
          options: {
            contraceptive: "Empfängnisverhütung",
            disinfection: "Desinfektion/Sterilisation",
            biological_origin: "Biologischen Ursprungs",
            none: "Keine der genannten"
          }
        }
      },
      results: {
        title: "Klassifizierungsergebnis",
        class: "Risikoklasse",
        description: "Beschreibung",
        next_steps: "Nächste Schritte",
        create_project: "Projekt erstellen",
        start_over: "Neue Klassifizierung",
        classes: {
          "Class I": {
            name: "Klasse I",
            description: "Geringes Risiko - Nicht invasive Medizinprodukte mit geringem Risikopotential",
            requirements: "Grundlegende Sicherheits- und Leistungsanforderungen, CE-Kennzeichnung"
          },
          "Class IIa": {
            name: "Klasse IIa",
            description: "Mittleres Risiko - Invasive Produkte für kurzfristige Anwendung",
            requirements: "Benannte Stelle erforderlich, umfassende technische Dokumentation"
          },
          "Class IIb": {
            name: "Klasse IIb",
            description: "Erhöhtes Risiko - Invasive Produkte mit mittlerem bis hohem Risikopotential",
            requirements: "Benannte Stelle erforderlich, klinische Bewertung notwendig"
          },
          "Class III": {
            name: "Klasse III",
            description: "Hohes Risiko - Lebenserhaltende oder kritische Medizinprodukte",
            requirements: "Strenge Konformitätsbewertung, umfassende klinische Prüfung erforderlich"
          }
        }
      },
      progress: {
        step: "Schritt",
        of: "von",
        completed: "abgeschlossen"
      }
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
    
    // Classification Assistant - NEU HINZUGEFÜGT
    classification: {
      title: "Medical Device Classification Assistant",
      subtitle: "Determine the risk class of your medical device according to IMDRF/MDCG 2019-11",
      start: "Start Classification",
      back: "Back",
      next: "Next",
      finish: "Finish",
      loading: "Processing...",
      steps: {
        step1: {
          title: "Type of Medical Device",
          question: "Is your product a Software as Medical Device (SaMD)?",
          options: {
            software: "Yes, it is software",
            hardware: "No, it is a hardware product",
            combination: "Combination of software and hardware"
          }
        },
        step2: {
          title: "Invasiveness",
          question: "Is the medical device invasive?",
          options: {
            non_invasive: "Non-invasive",
            invasive_body_orifice: "Invasive through body orifices",
            surgically_invasive: "Surgically invasive"
          }
        },
        step3: {
          title: "Duration of Use",
          question: "How long is the medical device used?",
          options: {
            transient: "Transient (< 60 minutes)",
            short_term: "Short-term (30 days or less)",
            long_term: "Long-term (> 30 days)"
          }
        },
        step4: {
          title: "Energy Source",
          question: "Is the medical device powered by energy?",
          options: {
            non_active: "No, passive medical device",
            active_therapeutic: "Yes, active therapeutic",
            active_diagnostic: "Yes, active diagnostic"
          }
        },
        step5: {
          title: "Body System",
          question: "Which body system does the medical device interact with?",
          options: {
            central_nervous: "Central nervous system",
            cardiovascular: "Cardiovascular system",
            other: "Other body systems"
          }
        },
        step6: {
          title: "Drug Delivery",
          question: "Does the medical device deliver or dose medications?",
          options: {
            no_drug: "No",
            drug_delivery: "Yes, drug delivery",
            drug_dosing: "Yes, drug dosing"
          }
        },
        step7: {
          title: "Additional Risk Factors",
          question: "Do additional risk factors apply?",
          options: {
            contraceptive: "Contraception",
            disinfection: "Disinfection/Sterilization",
            biological_origin: "Of biological origin",
            none: "None of the above"
          }
        }
      },
      results: {
        title: "Classification Result",
        class: "Risk Class",
        description: "Description",
        next_steps: "Next Steps",
        create_project: "Create Project",
        start_over: "New Classification",
        classes: {
          "Class I": {
            name: "Class I",
            description: "Low risk - Non-invasive medical devices with low risk potential",
            requirements: "Basic safety and performance requirements, CE marking"
          },
          "Class IIa": {
            name: "Class IIa",
            description: "Medium risk - Invasive products for short-term use",
            requirements: "Notified Body required, comprehensive technical documentation"
          },
          "Class IIb": {
            name: "Class IIb",
            description: "Elevated risk - Invasive products with medium to high risk potential",
            requirements: "Notified Body required, clinical evaluation necessary"
          },
          "Class III": {
            name: "Class III",
            description: "High risk - Life-sustaining or critical medical devices",
            requirements: "Strict conformity assessment, comprehensive clinical investigation required"
          }
        }
      },
      progress: {
        step: "Step",
        of: "of",
        completed: "completed"
      }
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