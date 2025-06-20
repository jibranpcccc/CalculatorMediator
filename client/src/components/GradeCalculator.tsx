import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Plus, Trash2, GraduationCap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Subject {
  id: string;
  name: string;
  grade: string;
  credits: string;
}

export default function GradeCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', name: '', grade: '', credits: '' }
  ]);
  const [result, setResult] = useState<{
    simpleAverage: number;
    weightedAverage: number;
    totalCredits: number;
    gradeClass: string;
    ectsGrade: string;
  } | null>(null);

  const addSubject = () => {
    setSubjects([...subjects, {
      id: Date.now().toString(),
      name: '',
      grade: '',
      credits: ''
    }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string) => {
    setSubjects(subjects.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const calculateGrades = () => {
    const validSubjects = subjects.filter(s => 
      s.grade && !isNaN(parseFloat(s.grade)) && 
      s.credits && !isNaN(parseFloat(s.credits))
    );

    if (validSubjects.length === 0) return;

    // Medie simplă
    const simpleSum = validSubjects.reduce((sum, s) => sum + parseFloat(s.grade), 0);
    const simpleAverage = simpleSum / validSubjects.length;

    // Medie ponderată cu credite
    const weightedSum = validSubjects.reduce((sum, s) => 
      sum + (parseFloat(s.grade) * parseFloat(s.credits)), 0);
    const totalCredits = validSubjects.reduce((sum, s) => 
      sum + parseFloat(s.credits), 0);
    const weightedAverage = weightedSum / totalCredits;

    // Clasificare academică
    const getGradeClass = (avg: number) => {
      if (avg >= 9.5) return "Summa Cum Laude";
      if (avg >= 9.0) return "Magna Cum Laude";
      if (avg >= 8.5) return "Cum Laude";
      if (avg >= 7.0) return "Bine";
      if (avg >= 6.0) return "Satisfăcător";
      return "Nesatisfăcător";
    };

    // Echivalent ECTS
    const getECTSGrade = (avg: number) => {
      if (avg >= 9.5) return "A (Excelent)";
      if (avg >= 8.5) return "B (Foarte bine)";
      if (avg >= 7.5) return "C (Bine)";
      if (avg >= 6.5) return "D (Satisfăcător)";
      if (avg >= 6.0) return "E (Suficient)";
      return "F (Respins)";
    };

    setResult({
      simpleAverage,
      weightedAverage,
      totalCredits,
      gradeClass: getGradeClass(weightedAverage),
      ectsGrade: getECTSGrade(weightedAverage)
    });

    trackEvent("grade_calculation", "calculator_usage");
  };

  const resetCalculator = () => {
    setSubjects([{ id: '1', name: '', grade: '', credits: '' }]);
    setResult(null);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Calculator Medie Facultate</CardTitle>
        <p className="text-gray-600">
          Calculează media generală și media ponderată cu credite ECTS
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Disciplinele tale</h3>
            <Button onClick={addSubject} size="sm" className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Adaugă disciplină
            </Button>
          </div>

          {subjects.map((subject, index) => (
            <div key={subject.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg bg-gray-50">
              <div className="md:col-span-5">
                <Label htmlFor={`name-${subject.id}`}>Numele disciplinei</Label>
                <Input
                  id={`name-${subject.id}`}
                  placeholder="ex: Matematică, Programare..."
                  value={subject.name}
                  onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-3">
                <Label htmlFor={`grade-${subject.id}`}>Nota (1-10)</Label>
                <Input
                  id={`grade-${subject.id}`}
                  type="number"
                  min="1"
                  max="10"
                  step="0.01"
                  placeholder="8.50"
                  value={subject.grade}
                  onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-3">
                <Label htmlFor={`credits-${subject.id}`}>Credite ECTS</Label>
                <Input
                  id={`credits-${subject.id}`}
                  type="number"
                  min="1"
                  max="30"
                  placeholder="6"
                  value={subject.credits}
                  onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-1 flex items-end">
                {subjects.length > 1 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeSubject(subject.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button onClick={calculateGrades} className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Calculator className="h-4 w-4 mr-2" />
            Calculează Media
          </Button>
          <Button variant="outline" onClick={resetCalculator}>
            Resetează
          </Button>
        </div>

        {result && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
            <h3 className="text-xl font-bold mb-4 text-center">Rezultatele tale</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {result.simpleAverage.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">Media Aritmetică</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {result.weightedAverage.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">Media Ponderată (cu credite)</div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Badge variant="secondary" className="text-sm">
                  {result.totalCredits} credite ECTS
                </Badge>
              </div>
              
              <div className="text-center">
                <Badge variant="default" className="text-sm bg-green-600">
                  {result.gradeClass}
                </Badge>
              </div>
              
              <div className="text-center">
                <Badge variant="outline" className="text-sm">
                  {result.ectsGrade}
                </Badge>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>
                Media ponderată este calculată conform sistemului de credite ECTS
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}