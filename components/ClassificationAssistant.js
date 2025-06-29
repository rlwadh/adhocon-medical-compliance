import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ClassificationAssistant = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Step configuration mit flacher Struktur
  const steps = [
    {
      id: 'step1',
      field: 'deviceType',
      options: ['software', 'hardware', 'combination']
    },
    {
      id: 'step2', 
      field: 'invasiveness',
      options: ['non_invasive', 'invasive_body_orifice', 'surgically_invasive']
    },
    {
      id: 'step3',
      field: 'duration',
      options: ['transient', 'short_term', 'long_term']
    },
    {
      id: 'step4',
      field: 'energySource',
      options: ['non_active', 'active_therapeutic', 'active_diagnostic']
    },
    {
      id: 'step5',
      field: 'bodySystem',
      options: ['central_nervous', 'cardiovascular', 'other']
    },
    {
      id: 'step6',
      field: 'drugDelivery',
      options: ['no_drug', 'drug_delivery', 'drug_dosing']
    },
    {
      id: 'step7',
      field: 'riskFactors',
      options: ['contraceptive', 'disinfection', 'biological_origin', 'none']
    }
  ];

  const classificationLogic = (answers) => {
    // Simplified classification logic based on IMDRF/MDCG 2019-11
    let score = 0;
    
    // Device Type
    if (answers.deviceType === 'software') score += 1;
    if (answers.deviceType === 'combination') score += 2;
    
    // Invasiveness
    if (answers.invasiveness === 'invasive_body_orifice') score += 2;
    if (answers.invasiveness === 'surgically_invasive') score += 3;
    
    // Duration
    if (answers.duration === 'short_term') score += 1;
    if (answers.duration === 'long_term') score += 2;
    
    // Energy Source
    if (answers.energySource === 'active_therapeutic') score += 2;
    if (answers.energySource === 'active_diagnostic') score += 1;
    
    // Body System
    if (answers.bodySystem === 'cardiovascular') score += 2;
    if (answers.bodySystem === 'central_nervous') score += 3;
    
    // Drug Delivery
    if (answers.drugDelivery === 'drug_delivery') score += 2;
    if (answers.drugDelivery === 'drug_dosing') score += 3;
    
    // Risk Factors
    if (answers.riskFactors === 'contraceptive') score += 1;
    if (answers.riskFactors === 'disinfection') score += 1;
    if (answers.riskFactors === 'biological_origin') score += 2;
    
    // Classification based on score
    if (score <= 2) return 'class_i';
    if (score <= 5) return 'class_iia';
    if (score <= 8) return 'class_iib';
    return 'class_iii';
  };

  const handleAnswer = (field, value) => {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = async () => {
    setIsLoading(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const classification = classificationLogic(answers);
    setResult(classification);
    setIsLoading(false);
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const handleCreateProject = () => {
    if (onComplete && result) {
      onComplete({
        classification: result,
        answers: answers,
        timestamp: new Date().toISOString()
      });
    }
  };

  const currentStepData = steps[currentStep];
  const currentField = currentStepData?.field;
  const selectedValue = answers[currentField];

  // Loading State
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              {t('classification.title')}
            </h2>
          </div>
          
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
            <p className="text-lg text-gray-600">{t('classification.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  // Results State
  if (result) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              {t('classification.results_title')}
            </h2>
          </div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <span className="text-3xl font-bold text-green-600">
                  {result === 'class_i' ? 'I' : 
                   result === 'class_iia' ? 'IIa' : 
                   result === 'class_iib' ? 'IIb' : 'III'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('classification.results_class')}: {t(`classification.${result}_name`)}
              </h3>
              <p className="text-gray-600 mb-4">
                {t(`classification.${result}_description`)}
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  {t('classification.results_next_steps')}:
                </h4>
                <p className="text-blue-800">
                  {t(`classification.${result}_requirements`)}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleCreateProject}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t('classification.results_create_project')}
              </button>
              <button
                onClick={handleStartOver}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t('classification.results_start_over')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question Steps
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            {t('classification.title')}
          </h2>
          <p className="text-blue-100">
            {t('classification.subtitle')}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 px-8 py-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>
              {t('classification.progress_step')} {currentStep + 1} {t('classification.progress_of')} {steps.length}
            </span>
            <span>
              {Math.round(((currentStep + 1) / steps.length) * 100)}% {t('classification.progress_completed')}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t(`classification.${currentStepData.id}_title`)}
            </h3>
            <p className="text-gray-700 text-lg">
              {t(`classification.${currentStepData.id}_question`)}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentStepData.options.map((optionKey) => (
              <label
                key={optionKey}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedValue === optionKey
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={currentField}
                  value={optionKey}
                  checked={selectedValue === optionKey}
                  onChange={(e) => handleAnswer(currentField, e.target.value)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedValue === optionKey
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedValue === optionKey && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-900">
                  {t(`classification.${currentStepData.id}_option_${optionKey}`)}
                </span>
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {t('classification.back')}
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedValue}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                !selectedValue
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {currentStep === steps.length - 1 ? t('classification.finish') : t('classification.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationAssistant;