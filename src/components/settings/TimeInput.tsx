import { useState } from "react";
import { TimePicker12Hour } from "../ui/TimePickerInput12Hour";
import timer from './../../assets/imgs/Timer.png';
import { Switch } from "@/components/ui/switch";

type TimeInputPropsType = {
    index: number;
    time: string;
    isEnabled: boolean;
    onTimeChange: (time: string) => void;
    onToggleChange: (isEnabled: boolean) => void;
    disabled?: boolean;
}

export default function TimeInput({ index, time, isEnabled, disabled, onTimeChange, onToggleChange }: TimeInputPropsType) {
    const [currentTime, setCurrentTime] = useState<Date>(new Date(`Wed Sep 25 2024 ${time}:00`));
    const isEnabledClass = isEnabled ? 'bg-[#ffffff80]' : 'opacity-50 bg-white/10';

    function handleTimeChange(date: Date) {
        setCurrentTime(date);
        const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        onTimeChange(formattedTime);
    }

    return (
        <div className={`w-full p-3 flex flex-col justify-center items-start gap-4 rounded-[10px] border border-white/30 ${isEnabledClass} backdrop-blur-[50px]`}>
            <div className="flex justify-start items-center gap-2">
                <img src={timer} alt="timer" className="w-[19px] h-[19px]" />
                <p className="text-white text-[13px] font-medium font-['Montserrat'] uppercase">timeslot {index}</p>
            </div>
            <div className="w-full flex flex-col justify-between items-center">
                <div className="w-full flex justify-between items-center ">
                    <TimePicker12Hour date={currentTime} setDate={handleTimeChange} />
                    <Switch
                        disabled={disabled ?? false}
                        checked={isEnabled}
                        onCheckedChange={(checked) => onToggleChange(checked)}
                    />
                </div>
            </div>
        </div>
    );
}