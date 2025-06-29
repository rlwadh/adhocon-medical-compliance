import React, { useState, useEffect } from 'react';
import { User, Shield, FileText, CheckCircle, Clock, Brain, Settings, LogOut, Download, Upload, ArrowRight, ArrowLeft, Home, List, Zap, Globe, Flag, Building, Users, BookOpen, AlertTriangle, Info, Plus, Eye, Star, TrendingUp, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { useDarkMode } from '../contexts/DarkModeContext';
import LanguageSwitcher from './LanguageSwitcher';
import DarkModeToggle from './DarkModeToggle';

// Main App Component
const MedicalComplianceApp = () => {
  const [user, setUser] = useState(null);
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const [currentProject, setCurrentProject] = useState(null);
  const [viewMode, setViewMode] = useState('dashboard');
  const [currentStep, setCurrentStep] = useState('welcome');
  const [projects, setProjects] = useState([]);
  const [showGDPRConsent, setShowGDPRConsent] = useState(false);

  // Initialize app
  useEffect(() => {
    const savedUser = localStorage.getItem('adhocon_user');
    const savedProjects = localStorage.getItem('adhocon_projects');
    const gdprConsent = localStorage.getItem('adhocon_gdpr_consent');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (!gdprConsent) {
      setShowGDPRConsent(true);
    }
  }, []);

  // GDPR Consent Component
  const GDPRConsent = () => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-8 shadow-2xl animate-fadeInUp border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full adhocon-gradient flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Datenschutz & GDPR</h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Ihre Privatsphäre ist uns wichtig</p>
          </div>
        </div>
        
        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              <strong>ADHOCON.AI Medical Device Compliance Tool</strong> - GDPR-konform und sicher.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5 text-blue-600" />
                Was wir speichern:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Projektdaten für Medical Device Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Fortschritt Ihrer Registrierungsprozesse</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Dokumente (lokal in Ihrem Browser)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-green-600" />
                Ihre Rechte:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Jederzeit Löschung aller Daten</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Export aller Ihrer Daten</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Widerruf der Einverständniserklärung</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center border dark:border-gray-600">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              📧 Kontakt: <strong className="text-gray-900 dark:text-white">info@adhocon.com</strong> | Datenschutzbeauftragter gemäß GDPR Art. 37
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => window.close()}
            className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 font-semibold"
          >
            Ablehnen
          </button>
          <button
            onClick={() => {
              localStorage.setItem('adhocon_gdpr_consent', 'accepted');
              setShowGDPRConsent(false);
            }}
            className="flex-1 px-6 py-3 adhocon-button rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <Shield className="w-5 h-5" />
            Akzeptieren & Fortfahren
          </button>
        </div>
      </div>
    </div>
  );

  // Login/Register Component
  const AuthComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      companyName: '',
      firstName: '',
      lastName: ''
    });

    const handleSubmit = () => {
      const userData = {
        email: formData.email,
        companyName: formData.companyName || 'Personal',
        firstName: formData.firstName,
        lastName: formData.lastName,
        joinDate: new Date().toISOString()
      };
      localStorage.setItem('adhocon_user', JSON.stringify(userData));
      setUser(userData);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003459' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Controls im Auth-Bereich */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl max-w-md w-full p-8 shadow-2xl animate-fadeInUp relative z-10 border border-white/20 dark:border-gray-700/20">
          <div className="text-center mb-8">
            <div className="relative mx-auto mb-6">
              <div className="w-20 h-20 mx-auto adhocon-gradient rounded-full flex items-center justify-center shadow-2xl animate-pulse-subtle">
                <img 
                  src="/logo.svg" 
                  alt="ADHOCON.AI" 
                  className="w-12 h-12"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 text-white font-bold text-2xl hidden items-center justify-center">
                  A
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ADHOCON.AI
            </h1>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Medical Device Compliance Tool</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Kostenlos • KI-Powered • GDPR-konform</span>
            </div>
          </div>

          <div className="space-y-5">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Vorname"
                    className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nachname"
                    className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
            )}
            
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="E-Mail Adresse"
                className="w-full p-4 pl-12 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            {!isLogin && (
              <div className="relative">
                <Building className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Firmenname (optional)"
                  className="w-full p-4 pl-12 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
            )}
            
            <div className="relative">
              <Shield className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Passwort"
                className="w-full p-4 pl-12 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full adhocon-button p-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group"
            >
              {isLogin ? 'Anmelden' : 'Registrieren'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-300"
            >
              {isLogin ? '✨ Neuen Account erstellen' : '🔄 Bereits registriert? Anmelden'}
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              🛡️ SSL-verschlüsselt • 🇪🇺 GDPR-konform • 🔒 Daten bleiben in Ihrem Browser
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Project Creation Component
  const ProjectCreation = () => {
    const [projectData, setProjectData] = useState({
      name: '',
      productType: '',
      samdClass: '',
      targetMarkets: [],
      description: ''
    });

    const handleSubmit = async () => {
      const newProject = {
        id: Date.now().toString(),
        ...projectData,
        createdAt: new Date().toISOString(),
        status: 'setup',
        currentPhase: 'qms_setup',
        progress: 0,
        tasks: []
      };

      // Use Claude to generate initial assessment and tasks
      const prompt = `As a Medical Device Regulatory Expert, analyze this new project:
      Product: ${projectData.name}
      Type: ${projectData.productType}
      SaMD Class: ${projectData.samdClass}
      Target Markets: ${projectData.targetMarkets.join(', ')}
      Description: ${projectData.description}

      Generate initial assessment and first 3 tasks for QMS setup according to ISO 13485. Respond with JSON:
      {
        "riskAssessment": "brief risk analysis",
        "regulatoryPath": "recommended regulatory approach",
        "initialTasks": [
          {"id": 1, "title": "task title", "description": "task description", "priority": "high/medium/low", "estimatedHours": number},
          {"id": 2, "title": "task title", "description": "task description", "priority": "high/medium/low", "estimatedHours": number},
          {"id": 3, "title": "task title", "description": "task description", "priority": "high/medium/low", "estimatedHours": number}
        ],
        "nextMilestone": "what comes after these tasks"
      }`;

      try {
        const claudeResponse = await window.claude.complete(prompt);
        const assessment = JSON.parse(claudeResponse);
        
        newProject.riskAssessment = assessment.riskAssessment;
        newProject.regulatoryPath = assessment.regulatoryPath;
        newProject.tasks = assessment.initialTasks;
        newProject.nextMilestone = assessment.nextMilestone;
      } catch (error) {
        console.error('Claude assessment failed:', error);
        newProject.tasks = [
          {id: 1, title: "QMS Documentation Setup", description: "Establish basic Quality Management System documentation structure", priority: "high", estimatedHours: 8},
          {id: 2, title: "Risk Management Plan", description: "Create ISO 14971 compliant risk management plan", priority: "high", estimatedHours: 12},
          {id: 3, title: "Design Controls Framework", description: "Implement design controls according to ISO 13485", priority: "medium", estimatedHours: 16}
        ];
      }

      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      localStorage.setItem('adhocon_projects', JSON.stringify(updatedProjects));
      setCurrentProject(newProject);
      setCurrentStep('dashboard');
    };

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl animate-fadeInUp border border-white/20 dark:border-gray-700/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto adhocon-gradient rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('project.createFirst')}</h2>
            <p className="text-gray-600 dark:text-gray-300">Lassen Sie uns Ihr Medical Device für die Registrierung vorbereiten</p>
          </div>
        
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" style={{color: '#006caa'}} />
                  Produktname
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  value={projectData.name}
                  onChange={(e) => setProjectData({...projectData, name: e.target.value})}
                  placeholder="z.B. CardioAI Monitoring System"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <Brain className="w-4 h-4" style={{color: '#006caa'}} />
                  Produkttyp
                </label>
                <select
                  className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  value={projectData.productType}
                  onChange={(e) => setProjectData({...projectData, productType: e.target.value})}
                  required
                >
                  <option value="">Wählen Sie einen Typ</option>
                  <option value="samd">Software as Medical Device (SaMD)</option>
                  <option value="aiamd">AI as Medical Device (AIaMD)</option>
                  <option value="samd_ai_enabled">SaMD with AI Components</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" style={{color: '#006caa'}} />
                  SaMD Klassifizierung
                </label>
                <select
                  className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  value={projectData.samdClass}
                  onChange={(e) => setProjectData({...projectData, samdClass: e.target.value})}
                  required
                >
                  <option value="">Wählen Sie eine Klasse</option>
                  <option value="class_i">Class I (Low Risk)</option>
                  <option value="class_iia">Class IIa (Medium Risk)</option>
                  <option value="class_iib">Class IIb (Medium-High Risk)</option>
                  <option value="class_ii_us">Class II (US - Medium Risk)</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" style={{color: '#006caa'}} />
                  Zielmärkte
                </label>
                <div className="grid grid-cols-1 gap-3 max-h-48 overflow-y-auto bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                  {[
                    {id: 'EU (CE Mark)', flag: '🇪🇺'},
                    {id: 'USA (FDA)', flag: '🇺🇸'},
                    {id: 'Canada (Health Canada)', flag: '🇨🇦'},
                    {id: 'UK (MHRA)', flag: '🇬🇧'},
                    {id: 'Japan (PMDA)', flag: '🇯🇵'},
                    {id: 'Australia (TGA)', flag: '🇦🇺'}
                  ].map(market => (
                    <label key={market.id} className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded focus:ring-2"
                        style={{accentColor: '#006caa'}}
                        checked={projectData.targetMarkets.includes(market.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setProjectData({...projectData, targetMarkets: [...projectData.targetMarkets, market.id]});
                          } else {
                            setProjectData({...projectData, targetMarkets: projectData.targetMarkets.filter(m => m !== market.id)});
                          }
                        }}
                      />
                      <span className="text-lg">{market.flag}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{market.id}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" style={{color: '#006caa'}} />
                  Produktbeschreibung
                </label>
                <textarea
                  className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  rows={6}
                  value={projectData.description}
                  onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                  placeholder="Beschreiben Sie Ihr Medizinprodukt, seine Funktionen und den beabsichtigten Verwendungszweck..."
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={handleSubmit}
              className="w-full adhocon-button p-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group"
            >
              <Brain className="w-6 h-6" />
              Projekt erstellen & KI-Analyse starten
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
              {t('project.benefits')}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Navigation Header for logged in users
  const NavigationHeader = () => (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-40">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 adhocon-gradient rounded-full flex items-center justify-center shadow-lg">
            <img 
              src="/logo.svg" 
              alt="ADHOCON.AI" 
              className="w-6 h-6"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-6 h-6 text-white font-bold text-sm hidden items-center justify-center">
              A
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              ADHOCON.AI
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Medical Device Compliance</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Controls */}
          <DarkModeToggle />
          <LanguageSwitcher />
          
          <a 
            href="mailto:info@adhocon.com?subject=Professional AI Regulatory Consulting Request&body=Hello, I need professional help with my medical device regulatory project. Please contact me to discuss consulting services."
            className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Users className="w-4 h-4" />
            {t('nav.needHelp')}
          </a>
          
          <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-700/50 rounded-xl px-4 py-2">
            <div className="w-8 h-8 adhocon-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900 dark:text-white">{user?.firstName} {user?.lastName}</p>
              <p className="text-gray-500 dark:text-gray-400">{user?.companyName}</p>
            </div>
          </div>
          
          <button
            onClick={() => {
              localStorage.removeItem('adhocon_user');
              localStorage.removeItem('adhocon_projects');
              setUser(null);
              setProjects([]);
              setCurrentProject(null);
            }}
            className="p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-xl transition-all duration-300"
            title={t('nav.logout')}
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );

  // Main render logic
  if (showGDPRConsent) {
    return <GDPRConsent />;
  }

  if (!user) {
    return <AuthComponent />;
  }

  if (currentStep === 'project_creation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <NavigationHeader />
        <div className="p-6">
          <ProjectCreation />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <NavigationHeader />
      <div className="p-6">
        {!currentProject && projects.length === 0 ? (
          <div className="text-center py-20 animate-fadeInUp">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto adhocon-gradient rounded-full flex items-center justify-center mb-8 shadow-2xl animate-pulse-subtle">
                <img 
                  src="/logo.svg" 
                  alt="ADHOCON.AI" 
                  className="w-16 h-16"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-16 h-16 text-white font-bold text-3xl hidden items-center justify-center">
                  A
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('welcome.title')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t('welcome.subtitle')}</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('welcome.features.free.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('welcome.features.free.description')}</p>
                </div>
                
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('welcome.features.ai.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('welcome.features.ai.description')}</p>
                </div>
                
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg">
                  <div className="w-12 h-12 adhocon-gradient rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('welcome.features.global.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('welcome.features.global.description')}</p>
                </div>
              </div>
              
              <button
                onClick={() => setCurrentStep('project_creation')}
                className="adhocon-button px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 mx-auto group shadow-2xl"
              >
                <Plus className="w-6 h-6" />
                {t('project.createFirst')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="text-gray-500 dark:text-gray-400 mt-6">
                {t('project.benefits')}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-300">{t('project.loading')}</p>
          </div>
        )}
      </div>
      
      {/* Footer mit Dark Mode Support */}
      <footer className="bg-[#003459] dark:bg-gray-900 text-white py-8 mt-16 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/logo.svg" alt="ADHOCON.AI Logo" className="h-6 w-auto filter brightness-0 invert" />
              <span className="font-bold">ADHOCON.AI</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/impressum" className="hover:text-[#006caa] dark:hover:text-blue-400 transition-colors">
                {t('footer.impressum')}
              </Link>
              <Link href="/datenschutz" className="hover:text-[#006caa] dark:hover:text-blue-400 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="/agb" className="hover:text-[#006caa] dark:hover:text-blue-400 transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-gray-300 dark:text-gray-400 mt-4">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalComplianceApp;