'use client';
import React from 'react';
import Staticdata from '../../../../../constants/capacity_register_form_data';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const page = ({ params: { id } }) => {
  return (
    <div className="mt-[40px] mb-[40px]">
      <h2 className="headline-small mb-[8px]"> Capacity Details {id} </h2>
      {Staticdata.map((element) =>
        element.questions.map((question) => (
          <div className="border-input-details mb-[16px]">
            <Label className="label-large" htmlFor="email">
              {question.Question}
            </Label>
            {question.response_Type === 'Attachment' ? (
              <input
                className="pt-[7px] pb-[8px] text-[#534342] block"
                type="text"
                placeholder="show attachments"
                readOnly
              />
            ) : (
              <p className="body-medium pt-[7px] pb-[8px] text-[#534342]">
                {question.Variable}
              </p>
            )}
          </div>
        ))
      )}

      <div className="flex justify-end gap-3 mt-[60px]">
        <Link href="/owner">
          <Button className="transparent-btn">Close</Button>
        </Link>

        <Button type="submit" className="main-btn">
          Contact RACKSUB
        </Button>
      </div>
    </div>
  );
};

export default page;
