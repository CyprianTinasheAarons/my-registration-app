// Step3.tsx
"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the props interface for Step3 component
interface Step3Props {
  onPrevious: () => void; // Function to move to the previous step
}

const Step3: React.FC<Step3Props> = ({ onPrevious }) => {
  return (
    <Card className="w-full max-w-2xl"> {/* Increased width */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
        <CardDescription>We sent you an email with further instructions.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add any additional content here if needed */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onPrevious}>Back</Button>
        <Button>Open Email App</Button>
      </CardFooter>
    </Card>
  );
};

export default Step3;
