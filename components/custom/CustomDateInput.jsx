import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Controller } from 'react-hook-form';
import { Calendar } from '@/components/ui/calendar';
const CustomDateInput = ({ control, question }) => {
  const [date, setDate] = useState(undefined > new Date());
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Controller
          control={control}
          name={question.Variable}
          render={({ field }) => (
            <Calendar
              {...field}
              placeholderText="Select date"
              selected={field.value}
              onDayClick={field.onChange}
              onSelect={setDate}
              onBlur={field.onBlur}
              defaultMonth={new Date()}
              fromYear={new Date().getFullYear()}
              toYear={new Date().getFullYear() + 1}
              mode="single"
            />
          )}
        />
      </PopoverContent>
    </Popover>
  );
};

export default CustomDateInput;
