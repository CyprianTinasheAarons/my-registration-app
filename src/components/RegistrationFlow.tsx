// RegistrationFlow.tsx
"use client";

import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const RegistrationFlow = () => {
  // State to track the current step of the registration flow
  const [step, setStep] = useState(1);
  // State to store form data across steps
  const [formData, setFormData] = useState({});

  // Function to move to the next step
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Function to move to the previous step
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Function to handle form data changes across steps
  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {/* Render Step1 component if step is 1 */}
      {step === 1 && (
        <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />
      )}
      {/* Render Step2 component if step is 2 */}
      {step === 2 && (
        <Step2 onNext={handleNextStep} onChange={handleFormDataChange} />
      )}
      {/* Render Step3 component if step is 3 */}
      {step === 3 && <Step3 onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default RegistrationFlow;
