'use client';
import React, { useEffect, useState } from 'react';
import CustomStepper from '@/components/custom/progress-stepper/CustomStepper';

import { Button } from '@/components/ui/button';

import MultiStepForm from '@/components/owner/MultiStepForm';
import { useForm } from 'react-hook-form';
import Staticdata from '../../../../constants/capacity_register_form_data';
import { axiosOpen } from '@/utils/axios';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const { register, handleSubmit, control } = useForm();

  useEffect(() => {
    const incomingData = {
      earlierStep: [
        {
          1: [
            {
              Variable: 'DC_Capacity_Owner',
              answer: 'i do not',
            },
            {
              Variable: 'DC_Capacity_Provider',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Address',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Storage',
              answer: 'yes',
            },
            {
              Variable: 'DC_Capacity_Office',
              answer: 'no',
            },
            {
              Variable: 'DC_Capacity_MSA',
              answer: 'no',
            },
            {
              Variable: 'DC_Capacity_MSA_Form',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Rack_Width',
              answer: '28',
            },
          ],
          2: [
            {
              Variable: 'DC_Capacity_Rack_RU',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Rack_Lockable',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Rack_Number',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Rack_MaxkW',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Rack_Cords',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Cage',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_Cage_Size',
              answer: '',
            },
            {
              Variable: 'DC_Capacity_RAF',
              answer: '',
            },
          ],
        },
      ],
      currentStep: 3,
      sessionID: 'dasdss',
    };

    if (incomingData.sessionID === '') {
      setQuestionList(Staticdata);
    } else {
      function updateAnswers(firstArray, secondArray) {
        secondArray.forEach((stepAnswers) => {
          Object.keys(stepAnswers).forEach((step) => {
            stepAnswers[step].forEach((answer) => {
              const matchingQuestion = firstArray
                .find((stepObj) => stepObj.step == step)
                ?.questions.find(
                  (question) => question.Variable == answer.Variable
                );

              if (matchingQuestion) {
                matchingQuestion.answer = answer.answer;
              }
            });
          });
        });
      }

      // Call the function to update answers
      updateAnswers(Staticdata, incomingData.earlierStep);
      setCurrentStep(incomingData.currentStep - 1);
      setQuestionList(Staticdata);
    }
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    const latestData = Staticdata[currentStep].questions.map((newData) => {
      const matchedAnswer = Object.keys(data).find(
        (key) => key === newData.Variable
      );

      if (matchedAnswer) {
        console.log(data[matchedAnswer]);

        return { question: matchedAnswer, answer: data[matchedAnswer] };
      }
    });

    const stepData = {
      currentStep: currentStep + 1,
      lastStep: [latestData],
    };
    console.log(stepData);

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="px-4 pb-4">
      <h2 className="headline-small mt-[40px]">Add a new capacity </h2>
      <CustomStepper currentStep={currentStep} />
      <div
        className={`step-container ${currentStep === 1 ? 'active-step' : ''}`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <MultiStepForm
            register={register}
            questionList={questionList[currentStep]}
            currentStep={currentStep}
            control={control}
          />
          <div className="flex justify-end gap-3">
            <Button className="transparent-btn">Close</Button>
            {currentStep > 0 && (
              <div
                onClick={() => setCurrentStep(currentStep - 1)}
                className="main-btn h-[40px]"
              >
                Prev
              </div>
            )}

            <Button type="submit" className="main-btn">
              {currentStep === 3 ? 'submit ' : 'Next'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stepper;
