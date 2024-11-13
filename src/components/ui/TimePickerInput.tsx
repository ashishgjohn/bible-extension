import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
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

const TimePickerInput = React.forwardRef<HTMLInputElement, TimePickerInputProps>(
  (
    {
      className,
      type = "tel",
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      setDate,
      onChange,
      picker,
      period,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string>("00");
    const [flag, setFlag] = useState<boolean>(false);

    // Update input value based on the date and picker type
    useEffect(() => {
      setInputValue(getDateByType(date, picker));
    }, [date, picker]);

    useEffect(() => {
      const inputElement = inputRef.current;
      if (!inputElement) return;

      // Native keydown event handler
      const handleNativeKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();

        if (e.key === "Tab") return;
        if (e.key === "ArrowRight") onRightFocus?.();
        if (e.key === "ArrowLeft") onLeftFocus?.();

        // Handle ArrowUp/ArrowDown keys to increase or decrease time
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
          const step = e.key === "ArrowUp" ? 1 : -1;
          const newValue = getArrowByType(inputValue, step, picker);
          setInputValue(newValue);
          const tempDate = new Date(date);
          setDate(setDateByType(tempDate, newValue, picker, period));
          return;
        }

        // Handle number key inputs
        if (e.key >= "0" && e.key <= "9") {
          const newInput = flag ? inputValue.slice(1) + e.key : "0" + e.key;
          setInputValue(newInput);
          inputElement.value = newInput; // Directly update DOM
          const tempDate = new Date(date);
          setDate(setDateByType(tempDate, newInput, picker, period));
          setFlag(!flag);
        }

        // Handle Backspace key
        if (e.key === "Backspace") {
          const newInput = "0" + inputValue[0];
          setInputValue(newInput);
          inputElement.value = newInput; // Directly update DOM
          const tempDate = new Date(date);
          setDate(setDateByType(tempDate, newInput, picker, period));
          setFlag(false);
        }
      };

      inputElement.addEventListener("keydown", handleNativeKeyDown);

      // Clean up the event listener on unmount
      return () => {
        inputElement.removeEventListener("keydown", handleNativeKeyDown);
      };
    }, [inputValue, flag, onRightFocus, onLeftFocus, date, picker, period, setDate]);

    return (
      <div className="flex flex-col justify-between items-center gap-1">
        <Input
          ref={(el) => {
            inputRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          }}
          id={id || picker}
          name={name || picker}
          className={cn(
            "w-[45px] h-[30px] text-center font-[Montserrat] font-semibold text-xs tabular-nums bg-white focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
            className
          )}
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            onChange?.(e);
          }}
          type={type}
          inputMode="decimal"
          {...props}
        />
      </div>
    );
  }
);

TimePickerInput.displayName = "TimePickerInput";

export { TimePickerInput };