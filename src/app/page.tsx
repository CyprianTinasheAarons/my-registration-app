import React from 'react';
import RegistrationFlow from '@/components/RegistrationFlow';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">User Registration</h1>
      <RegistrationFlow />
    </div>
  );
}
