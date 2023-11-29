'use client';

import clsx from 'clsx';
import './customStepper.css';

const CustomStepper = ({ currentStep }) => {
  //  const { currentStep } = useContext(ProgressBarContext);

  const steps = 4;
  const stepLabels = [1, 2, 3, 4];

  const getStepStyle = (stepIndex) => {
    if (stepIndex < currentStep) {
      return 'custom-step completed';
    } else if (stepIndex === currentStep) {
      return 'custom-step current';
    } else {
      return 'custom-step';
    }
  };
  return (
    <ol className="flex items-center w-full">
      <div className="custom-progress-bar">
        <div
          className={clsx(
            'custom-progress-line',
            currentStep === 0
              ? 'step-0'
              : currentStep === 1
              ? 'step-1'
              : 'step-2'
          )}
        >
          {Array.from({ length: steps }).map((_, index) => (
            <span key={index} className={getStepStyle(index)}>
              {stepLabels[index]}{' '}
            </span>
          ))}
        </div>
      </div>
    </ol>
  );
};

export default CustomStepper;
