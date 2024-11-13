import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Period,
  TimePickerType,
  getArrowByType,
  getDateByType,
  setDateByType,
} from "./time-picker-utils";

export interface TimePickerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  picker: TimePickerType;
  date: Date | undefined;
  setDate: (date: Date) => void;
  period?: Period;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
}

const TimePickerInput = React.forwardRef<
  HTMLInputElement,
  TimePickerInputProps
>(
  (
    {
      className,
      type = "tel",
      value,
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      setDate,
      onChange,
      onKeyDown,
      picker,
      period,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState<string>("00");
    const [flag, setFlag] = React.useState<boolean>(false);

    React.useEffect(() => {
      setInputValue(getDateByType(date, picker));
    }, [date, picker]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") return;
      e.preventDefault();

      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();

      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        const step = e.key === "ArrowUp" ? 1 : -1;
        const newValue = getArrowByType(inputValue, step, picker);
        setInputValue(newValue);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newValue, picker, period));
        return;
      }

      // Handle number keys
      if (e.key >= "0" && e.key <= "9") {
        const newInput = flag ? inputValue.slice(1) + e.key : "0" + e.key;
        setInputValue(newInput);
        setFlag(!flag);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newInput, picker, period));
        return;
      }

      // Handle Backspace key
      if (e.key === "Backspace") {
        const newInput = "0" + inputValue[0]; // Shift digits left and pad with "0"
        setInputValue(newInput);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newInput, picker, period));
        setFlag(false); // Reset flag to start fresh on next keypress
      }
    };

    return (
      <div className="flex flex-col justify-between items-center gap-1">
        <Input
          ref={ref}
          id={id || picker}
          name={name || picker}
          className={cn(
            "w-[45px] h-[30px] text-center font-[Montserrat] font-semibold text-xs tabular-nums bg-white focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
            className
          )}
          value={value || inputValue}
          onChange={(e) => {
            e.preventDefault();
            onChange?.(e);
          }}
          type={type}
          inputMode="decimal"
          onKeyDown={(e) => {
            onKeyDown?.(e);
            handleKeyDown(e);
          }}
          {...props}
        />
      </div>
    );
  }
);

TimePickerInput.displayName = "TimePickerInput";

export { TimePickerInput };