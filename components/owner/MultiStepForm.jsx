'use client';
import React, { useState } from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CustomSelect from '../custom/CustomSelect';

import CustomDateInput from '../custom/CustomDateInput';
const MultiStepForm = ({ currentStep, questionList, register, control }) => {
  const [values, setValues] = useState({});

  const handleRangeChange = (event, rangeName) => {
    const newValue = parseInt(event.target.value, 10);
    setValues({ ...values, [rangeName]: newValue });
  };

  return (
    questionList?.questions.length > 0 &&
    questionList.questions.map((question, index) => (
      <div key={question.Variable} className="mb-[30px]">
        <div className="grid w-full items-center gap-2">
          <Label className="label-large" htmlFor="email">
            {question.Question}
          </Label>
          {question.response_Type === 'Short Answer' ? (
            <Input
              defaultValue={question.answer}
              {...register(question.Variable)}
              className="body-large mb-0"
              placeholder="Type here"
              type="text"
            />
          ) : question.response_Type === 'Drop Down' ? (
            <CustomSelect register={register} question={question} />
          ) : question.response_Type === 'radio' ? (
            <RadioGroup className="flex">
              <div className="flex justify-between items-center space-x-3 w-[70px]">
                <input
                  defaultChecked={question.answer === 'yes'}
                  {...register(question.Variable)}
                  type="radio"
                  value="Yes"
                  id={`r1-${question.Variable}`} // append the question variable to the id
                  className="sr-only" // hide the actual radio button
                />
                <label
                  htmlFor={`r1-${question.Variable}`} // append the question variable to the htmlFor
                  className="block border-2 border-transparent rounded-full p-0.5 mr-2"
                >
                  <div className="w-4 h-4 bg-transparent rounded-full border-2 border-gray-500"></div>
                </label>
                Yes
              </div>
              <div className="flex items-center justify-between space-x-3 w-[70px]">
                <input
                  defaultChecked={question.answer === 'no'}
                  {...register(question.Variable)}
                  type="radio"
                  value="No"
                  id={`r2-${question.Variable}`} // append the question variable to the id
                  className="sr-only" // hide the actual radio button
                />
                <label
                  htmlFor={`r2-${question.Variable}`} // append the question variable to the htmlFor
                  className="block border-2 border-transparent rounded-full p-0.5"
                >
                  <div className="w-4 h-4 bg-transparent rounded-full border-2 border-gray-500"></div>
                </label>
                No
              </div>
            </RadioGroup>
          ) : question.response_Type === 'Integer' ? (
            <div className="h-[40px] mt-[10px] rounded-md border border-input bg-[#F6F2F7] px-3 flex gap-4 items-center">
              <span>0</span>
              <div className="relative w-full">
                <input
                  type="range"
                  min={0}
                  max={100}
                  {...register(question.Variable, { required: true })}
                  value={values[question.Variable] || 0}
                  onChange={(e) => handleRangeChange(e, question.Variable)}
                  className="w-full"
                />
                {values[question.Variable] && (
                  <div
                    className="absolute top-0 -mt-6 text-center w-6 h-6 bg-[#D8C2BF] text-grey rounded-full flex items-center justify-center text-[12px]"
                    style={{
                      left: `calc(${values[question.Variable]}% - 0rem)`,
                      display:
                        values[question.Variable] === 0 ? 'none' : 'flex',
                    }}
                  >
                    {values[question.Variable]}
                  </div>
                )}
              </div>

              <span>100</span>
            </div>
          ) : question.response_Type === 'Attachment' ? (
            <Input
              className="body-large mb-0"
              {...register(question.Variable, { required: true })}
              id="picture"
              type="file"
            />
          ) : question.response_Type === 'URL Link' ? (
            <Input
              className="body-large mb-0"
              placeholder="Type here"
              type="url"
              {...register(question.Variable)}
            />
          ) : (
            (question.response_Type = 'Date' ? (
              <CustomDateInput control={control} question={question} />
            ) : (
              ''
            ))
          )}
        </div>
      </div>
    ))
  );
};

export default MultiStepForm;
