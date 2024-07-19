import { useState } from 'react';

export const useCount = () => {
    const [count, setCount] = useState(0);

    const incrementOne = () => {
        setCount(prevCount => prevCount + 1);
    };
    const incrementTen = () => {
        setCount(prevCount => prevCount + 10);
    };
    const incrementHundred = () => {
        setCount(prevCount => prevCount + 100);
    };
    const decrementHundred = () => {
        setCount(prevCount => prevCount - 100);
    };
    const decrementTen = () => {
        setCount(prevCount => prevCount - 10);
    };
    const decrementOne = () => {
        setCount(prevCount => prevCount - 1);
    };

    const counterActions = {
        incrementOne, incrementTen, incrementHundred,
         decrementHundred, decrementTen, decrementOne
      };

    return { count, 
        counterActions
    };
};