// Step2.tsx
"use client";

import React, { useState, ChangeEvent } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Define the props interface for Step2 component
interface Step2Props {
  onNext: () => void; // Function to move to the next step
  onChange: (data: { [key: string]: string }) => void; // Function to handle form data changes
}

const Step2: React.FC<Step2Props> = ({ onNext, onChange }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    organization: "",
    phoneNumber: "",
    message: "",
  });

  // Function to handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Update the form data state
    setFormData({ ...formData, [name]: value });
    // Invoke the onChange function with updated form data
    onChange({ [name]: value });
  };

  const isFormValid = () => {
    return formData.organization && formData.phoneNumber && formData.message;
  };

  const handleNext = () => {
    if (isFormValid()) {
      onNext();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Card className="w-full max-w-2xl"> {/* Increased width */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Additional Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="organization">Organization</Label>
          <Input
            id="organization"
            type="text"
            name="organization"
            placeholder="Enter your organization"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNext} className="w-full" disabled={!isFormValid()}>Create Account</Button>
      </CardFooter>
    </Card>
  );
};

export default Step2;
