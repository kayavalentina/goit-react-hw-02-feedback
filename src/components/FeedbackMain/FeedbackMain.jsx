import React from 'react';
import { MainWrapper, Button } from './FeedbackMain.styled';

const FeedbackMain = ({ options, onLeaveFeedback }) => (
  <MainWrapper>
    {options.map(option => (
      <Button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        type="button"
      >
        {option}
      </Button>
    ))}
  </MainWrapper>
);


export default FeedbackMain;