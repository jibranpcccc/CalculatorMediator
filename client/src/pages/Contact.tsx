import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submit', 'form', 'contact');
    
    const mailtoLink = `mailto:contact@calculatormediefacultate.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nume: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <>
      <SEOHead 
        title="Calculator Medie Facultate - Contact Suport și Consultanță Pensii"
        description="Calculator Medie Facultate - contactează echipa noastră de experți pentru consultanță personalizată în planificarea pensiei și suport profesional."
        keywords="calculator medie facultate, contact, suport pensii, consultanta pensii"
        canonicalUrl="https://calculatormediefacultate.com/contact"
        schemaType="organization"
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Contact</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Ai întrebări despre planificarea pensiei? Echipa noastră de experți este aici să te ajute.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Trimite-ne un mesaj</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prenume</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Ion"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nume</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Popescu"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ion.popescu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subiect</Label>
                    <Input 
                      id="subject" 
                      placeholder="Întrebare despre calculul pensiei"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Descrie întrebarea ta aici..." 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Trimite mesajul</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informații de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-600">contact@calculatormediefacultate.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-neutral-600">+40 21 XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary" />
                    <div>
                      <p className="font-medium">Adresă</p>
                      <p className="text-neutral-600">București, România</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary" />
                    <div>
                      <p className="font-medium">Program</p>
                      <p className="text-neutral-600">Luni - Vineri: 9:00 - 17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Întrebări frecvente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Cât de precise sunt calculele?</p>
                    <p className="text-neutral-600 text-sm">Calculele noastre se bazează pe legislația actuală și au o precizie de aproximativ 95%.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sm">Costă ceva consultanța?</p>
                    <p className="text-neutral-600 text-sm">Calculatoarele și ghidurile de bază sunt gratuite. Pentru consultanță personalizată, te rugăm să ne contactezi.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sm">Cât de des se actualizează informațiile?</p>
                    <p className="text-neutral-600 text-sm">Actualizăm toate informațiile lunar sau ori de câte ori apar modificări legislative.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
