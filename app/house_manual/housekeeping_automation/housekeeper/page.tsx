'use client';
import React from 'react';
import MyComponent from './component';  // Adjust the path as needed

const MyComponentPage = () => {
  const handleBack = () => {
    console.log('Back button clicked');
  };

  const handleContinue = () => {
    console.log('Continue button clicked');
  };

  return (
    <MyComponent
      onBack={handleBack}
      onContinue={handleContinue}
    />
  );
};

export default MyComponentPage;
