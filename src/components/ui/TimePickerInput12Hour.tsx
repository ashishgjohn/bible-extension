import * as React from "react";
import { TimePickerInput } from "./TimePickerInput";
import { Period } from "./time-picker-utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HourInput from "../settings/HourInput";

interface TimePickerDemoProps {
  date: Date;
  setDate: (date: Date) => void;
  disabled?: boolean
}

export function TimePicker12Hour({ date, setDate, disabled }: TimePickerDemoProps) {
  const [period, setPeriod] = React.useState<Period>(
    function () {
      return date?.getHours() > 12 ? "PM" : "AM"
    }
  );
  
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);

  function handlePeriodChange(newPeriod: Period) {
    if (period !== newPeriod) {
      setPeriod(newPeriod);

      const newDate = new Date(date);
      let hours = newDate.getHours();

      if (newPeriod === "PM" && hours < 12) {
        hours += 12;
      } else if (newPeriod === "AM" && hours >= 12) {
        hours -= 12;
      }

      newDate.setHours(hours);
      setDate(newDate);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="grid gap-1 text-center">
        <HourInput
          picker="12hours"
          period={period}
          date={date}
          setDate={setDate}
          disabled={disabled}
        />
      </div>
      <p className="font-semibold text-xl text-white">:</p>
      <div className="grid gap-1 text-center">
        <TimePickerInput
          picker="minutes"
          id="minutes12"
          period={period}
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          className="rounded-[5px]"
          disabled={disabled}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Tabs defaultValue={period} className="w-[4px] p-0 rounded-[5px]">
          <TabsList className="p-0 h-[30px] rounded-[5px]">
            <TabsTrigger disabled={disabled} value="AM" onClick={() => handlePeriodChange("AM")} className="font-[Montserrat] rounded-[5px] text-xs font-semibold">AM</TabsTrigger>
            <TabsTrigger disabled={disabled} value="PM" onClick={() => handlePeriodChange("PM")} className="font-[Montserrat] rounded-[5px] text-xs font-semibold">PM</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}