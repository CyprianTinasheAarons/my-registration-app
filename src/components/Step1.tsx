"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Define the props interface for Step1 component
interface Step1Props {
  onNext: () => void; // Function to move to the next step
  onChange: (data: { [key: string]: string }) => void; // Function to handle form data changes
}

const Step1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    reEnterPassword: "",
  });

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the form data state
    setFormData({ ...formData, [name]: value });
    // Invoke the onChange function with updated form data
    onChange({ [name]: value });
  };

  const isFormValid = () => {
    return (
      formData.email &&
      formData.password &&
      formData.reEnterPassword &&
      formData.password === formData.reEnterPassword
    );
  };

  const handleNext = () => {
    if (isFormValid()) {
      onNext();
    } else {
      alert("Please fill in all fields and ensure passwords match.");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reEnterPassword">Re-enter Password</Label>
          <Input
            id="reEnterPassword"
            type="password"
            name="reEnterPassword"
            placeholder="Re-enter your password"
            value={formData.reEnterPassword}
            onChange={handleChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleNext}
          className="w-full"
          disabled={!isFormValid()}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Step1;
