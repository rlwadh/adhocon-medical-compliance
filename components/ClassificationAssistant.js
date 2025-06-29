// components/ClassificationAssistant.js - NEUE DATEI ERSTELLEN
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, FileText, Brain, Shield, Globe, Lightbulb, Target, Award, Zap } from 'lucide-react';

const ClassificationAssistant = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  // Classification Questions based on IMDRF and MDCG 2019-11
  const questions = [
    {
      id: 'software_type',
      title: 'Software-Typ Identifikation',
      subtitle: 'Bestimmen Sie die grundlegende Art Ihrer Software',
      question: 'Welche Art von Software entwickeln Sie?',
      type: 'single',
      options: [
        {
          value: 'standalone_software',
          label: 'Standalone Software',
          description: 'Software, die unabhängig auf einem allgemeinen IT-System läuft',
          icon: <Brain className="w-5 h-5" />
        },
        {
          value: 'software_in_device',
          label: 'Software in einem Medizinprodukt',
          description: 'Software, die Teil eines Hardware-Medizinprodukts ist',
          icon: <Shield className="w-5 h-5" />
        },
        {
          value: 'software_driving_device',
          label: 'Software, die ein Medizinprodukt steuert',
          description: 'Software zur Steuerung von externen Medizinprodukten',
          icon: <Target className="w-5 h-5" />
        }
      ]
    },
    {
      id: 'medical_purpose',
      title: 'Medizinischer Zweck',
      subtitle: 'Definition des medizinischen Verwendungszwecks',
      question: 'Hat Ihre Software einen medizinischen Zweck gemäß MDR Art. 2?',
      type: 'single',
      options: [
        {
          value: 'medical_purpose_yes',
          label: 'Ja, medizinischer Zweck',
          description: 'Diagnose, Prävention, Überwachung, Vorhersage, Prognose, Behandlung oder Linderung',
          icon: <CheckCircle className="w-5 h-5 text-green-500" />
        },
        {
          value: 'medical_purpose_no',
          label: 'Nein, kein medizinischer Zweck',
          description: 'Administrative, organisatorische oder allgemeine IT-Funktionen',
          icon: <AlertTriangle className="w-5 h-5 text-red-500" />
        },
        {
          value: 'medical_purpose_unclear',
          label: 'Unsicher / Grenzfall',
          description: 'Kombination aus medizinischen und nicht-medizinischen Funktionen',
          icon: <Lightbulb className="w-5 h-5 text-yellow-500" />
        }
      ]
    },
    {
      id: 'ai_components',
      title: 'KI-Komponenten',
      subtitle: 'Identifikation von Künstlicher Intelligenz',
      question: 'Verwendet Ihre Software KI- oder Machine Learning-Technologien?',
      type: 'multiple',
      options: [
        {
          value: 'machine_learning',
          label: 'Machine Learning Algorithmen',
          description: 'Überwachtes, unüberwachtes oder verstärkendes Lernen'
        },
        {
          value: 'deep_learning',
          label: 'Deep Learning / Neural Networks',
          description: 'Tiefe neuronale Netzwerke, CNNs, RNNs, Transformer'
        },
        {
          value: 'nlp',
          label: 'Natural Language Processing',
          description: 'Textanalyse, Spracherkennung, Chatbots'
        },
        {
          value: 'computer_vision',
          label: 'Computer Vision',
          description: 'Bildanalyse, Mustererkennung, medizinische Bildgebung'
        },
        {
          value: 'adaptive_algorithms',
          label: 'Adaptive Algorithmen',
          description: 'Software, die sich selbst anpasst oder weiterentwickelt'
        },
        {
          value: 'no_ai',
          label: 'Keine KI-Komponenten',
          description: 'Regelbasierte, deterministische Software'
        }
      ]
    },
    {
      id: 'healthcare_decision',
      title: 'Healthcare Decision State',
      subtitle: 'IMDRF Framework - Gesundheitsentscheidungen',
      question: 'Welche Art von Gesundheitsentscheidungen unterstützt Ihre Software?',
      type: 'single',
      options: [
        {
          value: 'inform',
          label: 'INFORM - Informieren',
          description: 'Bereitstellung von Informationen ohne spezifische Handlungsempfehlung',
          badge: 'Niedrigstes Risiko'
        },
        {
          value: 'drive',
          label: 'DRIVE - Antreiben',
          description: 'Bereitstellung von Informationen zur Unterstützung klinischer Entscheidungen',
          badge: 'Mittleres Risiko'
        },
        {
          value: 'drive_critical',
          label: 'DRIVE (Critical) - Kritisch Antreiben',
          description: 'Kritische Situationen, sofortige oder nahe Zukunft Behandlungsentscheidungen',
          badge: 'Höchstes Risiko'
        }
      ]
    },
    {
      id: 'healthcare_situation',
      title: 'Healthcare Situation State',
      subtitle: 'IMDRF Framework - Gesundheitssituation',
      question: 'In welcher Gesundheitssituation wird Ihre Software eingesetzt?',
      type: 'single',
      options: [
        {
          value: 'serious',
          label: 'SERIOUS - Schwerwiegend',
          description: 'Lebensbedrohliche/schwerwiegende Gesundheitszustände',
          badge: 'Hohes Risiko'
        },
        {
          value: 'non_serious',
          label: 'NON-SERIOUS - Nicht schwerwiegend',
          description: 'Nicht lebensbedrohliche Gesundheitszustände',
          badge: 'Niedrigeres Risiko'
        },
        {
          value: 'critical',
          label: 'CRITICAL - Kritisch',
          description: 'Sofortige Intervention erforderlich, lebensbedrohlich',
          badge: 'Höchstes Risiko'
        }
      ]
    },
    {
      id: 'target_population',
      title: 'Zielgruppe',
      subtitle: 'Bestimmung der Anwendergruppe',
      question: 'Wer ist die primäre Zielgruppe Ihrer Software?',
      type: 'single',
      options: [
        {
          value: 'healthcare_professionals',
          label: 'Medizinische Fachkräfte',
          description: 'Ärzte, Pflegepersonal, medizinische Techniker'
        },
        {
          value: 'patients_caregivers',
          label: 'Patienten / Pflegende',
          description: 'Direkte Nutzung durch Patienten oder deren Betreuer'
        },
        {
          value: 'both',
          label: 'Beide Gruppen',
          description: 'Sowohl medizinische Fachkräfte als auch Patienten'
        }
      ]
    },
    {
      id: 'regulatory_markets',
      title: 'Zielmärkte',
      subtitle: 'Bestimmung der regulatorischen Anforderungen',
      question: 'In welchen Märkten planen Sie die Vermarktung?',
      type: 'multiple',
      options: [
        {
          value: 'eu',
          label: 'Europäische Union (CE-Kennzeichnung)',
          description: 'MDR 2017/745, MDCG Guidelines'
        },
        {
          value: 'usa',
          label: 'USA (FDA)',
          description: 'FDA Software Guidance, 510(k), De Novo'
        },
        {
          value: 'canada',
          label: 'Kanada (Health Canada)',
          description: 'MDEL, CMDCAS Pathway'
        },
        {
          value: 'uk',
          label: 'Vereinigtes Königreich (MHRA)',
          description: 'UK MDR 2002, Software Guidelines'
        },
        {
          value: 'other',
          label: 'Andere Märkte',
          description: 'Japan, Australien, Brasilien, etc.'
        }
      ]
    }
  ];

  const handleAnswer = (questionId, value, isMultiple = false) => {
    setAnswers(prev => {
      if (isMultiple) {
        const currentValues = prev[questionId] || [];
        if (currentValues.includes(value)) {
          return {
            ...prev,
            [questionId]: currentValues.filter(v => v !== value)
          };
        } else {
          return {
            ...prev,
            [questionId]: [...currentValues, value]
          };
        }
      } else {
        return {
          ...prev,
          [questionId]: value
        };
      }
    });
  };

  const getCurrentAnswer = (questionId) => {
    return answers[questionId];
  };

  const isStepComplete = (step) => {
    const question = questions[step];
    const answer = getCurrentAnswer(question.id);
    
    if (question.type === 'multiple') {
      return answer && answer.length > 0;
    }
    return answer !== undefined;
  };

  const canProceed = () => {
    return isStepComplete(currentStep);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      analyzeResults();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const analyzeResults = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis (will be replaced with real Claude AI)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock classification logic (will be replaced with IMDRF/MDCG logic)
    const mockResults = {
      classification: 'SaMD Class IIa',
      aiClassification: answers.ai_components?.includes('no_ai') ? null : 'AIaMD',
      riskLevel: 'Medium Risk',
      regulatoryPath: 'Notified Body Required',
      keyRequirements: [
        'Quality Management System (ISO 13485)',
        'Risk Management (ISO 14971)',
        'Software Lifecycle Process (IEC 62304)',
        'Clinical Evidence',
        'Technical Documentation'
      ],
      nextSteps: [
        'Establish QMS Documentation',
        'Conduct Risk Analysis',
        'Prepare Technical File',
        'Select Notified Body',
        'Submit for Assessment'
      ],
      estimatedTimeline: '8-12 months',
      estimatedCost: '€75,000 - €150,000'
    };
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const resetAssistant = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
    setIsAnalyzing(false);
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto adhocon-gradient rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">KI-Analyse läuft...</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Anwendung von IMDRF und MDCG 2019-11 Richtlinien</p>
          <div className="max-w-md mx-auto">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Klassifizierung basierend auf internationalen Standards...</p>
          </div>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto adhocon-gradient rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Klassifizierung Abgeschlossen</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Ihre Software wurde erfolgreich klassifiziert</p>
          </div>

          {/* Classification Results */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-500" />
                Klassifizierung
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300">MDR Klasse:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{results.classification}</span>
                </div>
                {results.aiClassification && (
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">KI-Typ:</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">{results.aiClassification}</span>
                  </div>
                )}
                <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Risiko-Level:</span>
                  <span className="font-bold text-yellow-600 dark:text-yellow-400">{results.riskLevel}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-500" />
                Regulatorischer Pfad
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="font-bold text-green-600 dark:text-green-400">{results.regulatoryPath}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="font-bold text-gray-900 dark:text-white">{results.estimatedTimeline}</div>
                    <div className="text-gray-600 dark:text-gray-400">Zeitrahmen</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="font-bold text-gray-900 dark:text-white">{results.estimatedCost}</div>
                    <div className="text-gray-600 dark:text-gray-400">Geschätzte Kosten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements and Next Steps */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-orange-500" />
                Hauptanforderungen
              </h3>
              <ul className="space-y-2">
                {results.keyRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-500" />
                Nächste Schritte
              </h3>
              <ol className="space-y-2">
                {results.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetAssistant}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 font-semibold"
            >
              Neue Klassifizierung
            </button>
            <button
              onClick={() => onComplete(results)}
              className="px-8 py-3 adhocon-button rounded-xl font-semibold flex items-center gap-2 shadow-lg"
            >
              Projekt mit diesen Einstellungen erstellen
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück zum Dashboard
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Schritt {currentStep + 1} von {questions.length}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Medical Device Classification Assistant
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Basierend auf IMDRF Guidelines und MDCG 2019-11
            </p>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 animate-fadeInUp">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {currentQuestion.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {currentQuestion.subtitle}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {currentQuestion.question}
            </h3>

            <div className="grid gap-4">
              {currentQuestion.options.map((option) => {
                const isSelected = currentQuestion.type === 'multiple' 
                  ? getCurrentAnswer(currentQuestion.id)?.includes(option.value)
                  : getCurrentAnswer(currentQuestion.id) === option.value;

                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(currentQuestion.id, option.value, currentQuestion.type === 'multiple')}
                    className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`}>
                        {option.icon || <CheckCircle className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className={`font-semibold ${isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}`}>
                            {option.label}
                          </h4>
                          {option.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              option.badge.includes('Niedrig') ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                              option.badge.includes('Mittel') ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                              'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                            }`}>
                              {option.badge}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
                          {option.description}
                        </p>
                      </div>
                      {isSelected && currentQuestion.type === 'multiple' && (
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </button>

            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-8 py-3 adhocon-button rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {currentStep === questions.length - 1 ? 'Analysieren' : 'Weiter'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationAssistant;