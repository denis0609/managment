'use client';
import React from 'react';
import Feedback from './feedback'; // Adjust the path as needed

const MyComponentPage = () => {
  const handleFeedbackSubmit = (rating: number, feedback: string) => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
  };

  return <Feedback onSubmit={handleFeedbackSubmit} />;
};

export default MyComponentPage;
