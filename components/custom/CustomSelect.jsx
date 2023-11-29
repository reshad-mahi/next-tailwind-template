import React from 'react';

const CustomSelect = ({ register, question }) => {
  return (
    <select
      className="flex h-10 w-full items-center justify-between  rounded-md border border-input bg-[#F6F2F7] px-3 py-2 text-[16px] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-[#C8C5CA] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 focus:outline-none focus:ring-0 focus-visible:ring-0"
      placeholder="Select an option"
      {...register(question.Variable)}
    >
      <option value="" selected>
        Select an option
      </option>
      {question.Predetermined_Answers.map((item, index) => (
        <option
          className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          key={item}
          value={item}
        >
          {' '}
          {item}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
