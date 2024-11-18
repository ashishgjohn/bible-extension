import { useState } from "react";
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

        if (inputValue.length === 1) {
            if (parseInt(inputValue, 10) > 1 && parseInt(inputValue, 10) < 10) {
                setValue(inputValue);
            } else if (parseInt(inputValue, 10) === 0) {
                setValue("");
            } else {
                setValue(inputValue);
            }
        } else if (inputValue.length === 2) {
            const numberValue = parseInt(inputValue, 10);
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

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            maxLength={2}
            className="w-[45px] h-[30px] rounded-[5px] text-center font-[Montserrat] font-semibold text-xs tabular-nums bg-white focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50"
            title="HH"
            disabled={disabled}
        />
    );
}