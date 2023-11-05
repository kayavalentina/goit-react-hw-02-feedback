import React from 'react';
import { OptionsWrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsWrapper>
    {options.map(option => (
      <Button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        type="button"
      >
        {option}
      </Button>
    ))}
  </OptionsWrapper>
);


export default FeedbackOptions;