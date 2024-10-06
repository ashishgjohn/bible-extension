import * as React from "react";
import { TimePickerInput } from "./TimePickerInput";
import { Period } from "./time-picker-utils";
import PeriodSelect from "./PeriodSelect";

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
      <p className="font-semibold text-xl">:</p>
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
        <PeriodSelect
          value={period}
          onChange={(value) => setPeriod(value as Period)}
          date={date}
          setDate={setDate}
        />
      </div>
    </div>
  );
}