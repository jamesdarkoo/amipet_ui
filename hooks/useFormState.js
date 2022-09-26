import React, { useState } from 'react';

function useFormState(getInitialFormState) {
  const [formState, setFormStateInternal] = useState(() => getInitialFormState());

  const updateFormState = (partialState) => {
    setFormStateInternal((state) => {
      return {
        ...state,
        ...partialState,
      };
    });
  };

  return {
    formState,
    updateFormState,
  };
};

export default useFormState;
