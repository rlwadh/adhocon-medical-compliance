import React from 'react';
import { ArrowLeft, Mail, Phone, Building, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 nav-button px-4 py-2 rounded-xl mb-8">
          <ArrowLeft className="w-4 h-4" />
          Zurück zu ADHOCON.AI
        </Link>
        
        <div className="glass-effect rounded-3xl p-8 adhocon-shadow">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Building className="w-8 h-8" style={{color: '#006caa'}} />
            Impressum & Site Notice
          </h1>
          
          {/* Deutsche Version */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🇩🇪 Angaben gemäß § 5 TMG
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Unternehmen</h3>
                  <div className="text-gray-700 space-y-1">
                    <p className="font-semibold">ADHOCON UG (haftungsbeschränkt)</p>
                    <p>Albert-Haueisen-Ring 70</p>
                    <p>67071 Ludwigshafen am Rhein</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Handelsregister</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><strong>HRB 68276</strong></p>
                    <p>Registergericht: Amtsgericht Ludwigshafen am Rhein</p>
                    <p>Vertreten durch: <strong>Rudolf Ludwig Wagner</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5" style={{color: '#006caa'}} />
                    Kontakt
                  </h3>
                  <div className="text-gray-700 space-y-2">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" style={{color: '#006caa'}} />
                      <a href="tel:+4962159815216" className="hover:underline" style={{color: '#006caa'}}>+49 621 59815216</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <FileText className="w-4 h-4" style={{color: '#006caa'}} />
                      Telefax: +49 621 54563379
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{color: '#006caa'}} />
                      <a href="mailto:info@adhocon.com" className="hover:underline" style={{color: '#006caa'}}>info@adhocon.com</a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Verbraucherstreitbeilegung</h3>
                  <p className="text-gray-700 text-sm">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* English Version */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🇺🇸 Site Notice - Information pursuant to Sect. 5 German Telemedia Act (TMG)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Company</h3>
                  <div className="text-gray-700 space-y-1">
                    <p className="font-semibold">ADHOCON UG (haftungsbeschränkt)</p>
                    <p>Albert-Haueisen-Ring 70</p>
                    <p>67071 Ludwigshafen am Rhein</p>
                    <p>Germany</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Register</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><strong>HRB 68276</strong></p>
                    <p>Registration court: Amtsgericht Ludwigshafen am Rhein</p>
                    <p>Represented by: <strong>Rudolf Ludwig Wagner</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5" style={{color: '#006caa'}} />
                    Contact
                  </h3>
                  <div className="text-gray-700 space-y-2">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" style={{color: '#006caa'}} />
                      <a href="tel:+4962159815216" className="hover:underline" style={{color: '#006caa'}}>+49 621 59815216</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <FileText className="w-4 h-4" style={{color: '#006caa'}} />
                      Telefax: +49 621 54563379
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{color: '#006caa'}} />
                      <a href="mailto:info@adhocon.com" className="hover:underline" style={{color: '#006caa'}}>info@adhocon.com</a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                  <p className="text-gray-700 text-sm">
                    We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ADHOCON.AI Spezifischer Hinweis */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 border-l-4 p-6 rounded-r-lg" style={{borderColor: '#006caa'}}>
              <h3 className="font-semibold mb-2" style={{color: '#003459'}}>ADHOCON.AI - Medical Device Compliance Tool</h3>
              <p className="text-sm mb-3" style={{color: '#003459'}}>
                Kostenloses Tool für Medical Device Regulatory Affairs. 
                Wir bieten keine medizinische Beratung, sondern technische Compliance-Unterstützung.
              </p>
              <p className="text-xs text-gray-600">
                ©2025 ADHOCON - ADHOCON is a registered Trademark
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}