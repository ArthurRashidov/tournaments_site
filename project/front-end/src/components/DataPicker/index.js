import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Input, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Picker(props) {
  const [date, setDate] = React.useState(new Date());

  const allData = props.allData.map(date => {
    const data = date.split(".");
    return {day: data[0], year: data[2], month: data[1]-1};
  });

  const highlightedDates = allData.map(date => new Date(date.year, date.month, date.day));

  const isDayDisabled = (date) => {
    return !highlightedDates.find(d => format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"));
  };

  return (
    <div >
      <Popover placement="bottom">
        <PopoverHandler style={{background:"rgba(0,0,0,.8)"}}>
          <Input
            label="Select a Date"
            labelProps={{ className: "!text-white" }}
            value={date ? format(date, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            onDayClick={(selectedDate)=>{
              props.filters(selectedDate)
            }}
            showOutsideDays
            className="border-0"
            disabled={isDayDisabled}
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-xl h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-xl !bg-gray-800 !text-white !opacity-100", // по можливості змінити класс імпортент на щось інше
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            modifiers={{
              highlighted: highlightedDates,
            }}
            modifiersClassNames={{
              highlighted: 'bg-cyan-700 rounded-xl hover:bg-cyan-600 text-white',
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}