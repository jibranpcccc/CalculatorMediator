import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TestCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Test Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="test-birth">Data nașterii</Label>
          <Input
            id="test-birth"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="test-salary">Salariu</Label>
          <Input
            id="test-salary"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="5000"
          />
        </div>
        
        <Button onClick={() => alert(`Date: ${birthDate}, Salary: ${salary}`)}>
          Test
        </Button>
      </div>
    </div>
  );
}