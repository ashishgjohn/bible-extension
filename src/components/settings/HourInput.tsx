import { KeyboardEvent, useState } from "react";
import { display12HourValue, Period, setDateByType, TimePickerType } from "../ui/time-picker-utils";

type HourInputPropsType = {
    disabled?: boolean;
    picker: TimePickerType;
    date: Date | undefined;
    setDate: (date: Date) => void;
    period?: Period;
}

export default function HourInput({
    disabled,
    picker,
    date = new Date(new Date().setHours(0, 0, 0, 0)),
    setDate,
    period
}: HourInputPropsType) {
    const [value, setValue] = useState<string>(display12HourValue(date.getHours()) ?? "12");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = (e.target as HTMLInputElement)?.value;

        inputValue = inputValue.replace(/[^0-9]/g, "");
        const numberValue = parseInt(inputValue, 10);

        if (inputValue.length === 1) {
            if (numberValue > 1 && numberValue < 10) {
                setValue(inputValue);
            } else if (numberValue === 0) {
                setValue("");
            } else {
                setValue(inputValue);
            }
        } else if (inputValue.length === 2) {
            if (numberValue >= 1 && numberValue <= 12) {
                setValue(inputValue);
            }
        } else {
            setValue(inputValue.slice(0, 2));
        }
    };

    const handleBlur = () => {
        const numberValue = parseInt(value, 10);
        if (!numberValue || numberValue < 1 || numberValue > 12) {
            setValue("12");
            const tempDate = new Date(date);
            setDate(setDateByType(tempDate, "12", picker, period));
        }
        
        if (value.length === 1 && numberValue < 10) {
            setValue(`0${value}`);
            const tempDate = new Date(date);
            setDate(setDateByType(tempDate, `0${value}`, picker, period));
        } else {
            const tempDate = new Date(date);
            setDate(setDateByType(tempDate, value, picker, period));
        }
    };

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
            const numberValue = parseInt(value, 10);
            if (numberValue == 1) {
                if (e.key === "ArrowUp") {
                    setValue(v => String(Number(v) + 1));
                }
            } else if (numberValue == 12) {
                if (e.key === "ArrowDown") {
                    setValue(v => String(Number(v) - 1));
                }
            } else {
                const step = e.key === "ArrowUp" ? 1 : -1;
                setValue(v => String(Number(v) + step));
            }
        }
    }

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            maxLength={2}
            className="w-[45px] h-[30px] rounded-[5px] text-center font-[Montserrat] font-semibold text-xs tabular-nums bg-white focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
            title="HH"
            disabled={disabled}
        />
    );
}