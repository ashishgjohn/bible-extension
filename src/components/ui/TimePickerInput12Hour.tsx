import * as React from "react";
import { TimePickerInput } from "./TimePickerInput";
import { Period } from "./time-picker-utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TimePickerDemoProps {
  date: Date;
  setDate: (date: Date) => void;
}

export function TimePicker12Hour({ date, setDate }: TimePickerDemoProps) {
  const [period, setPeriod] = React.useState<Period>(
    function () {
      if (date?.getHours() > 12) {
        return "PM";
      }
      return "AM";
    }
  );
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-2">
      <div className="grid gap-1 text-center">
        <TimePickerInput
          picker="12hours"
          period={period}
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <p className="font-semibold text-xl text-white">:</p>
      <div className="grid gap-1 text-center">
        <TimePickerInput
          picker="minutes"
          id="minutes12"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Tabs defaultValue="account" className="w-[4px] p-0">
          <TabsList className="p-0 h-[30px]">
            <TabsTrigger value="AM" defaultChecked onClick={() => setPeriod("AM")} className="font-[Montserrat] font-semibold">AM</TabsTrigger>
            <TabsTrigger value="PM" onClick={() => setPeriod("PM")} className="font-[Montserrat] font-semibold">PM</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}