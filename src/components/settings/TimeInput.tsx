import { useEffect, useState } from "react";
import { TimePicker12Hour } from "../ui/TimePickerInput12Hour";
import Loader from "../ui/Loader";
import timer from './../../assets/imgs/Timer.png';
import { Switch } from "@/components/ui/switch";

type TimeInputPropsType = {
    index: number
}

export default function TimeInput({ index }: TimeInputPropsType) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [time, setTime] = useState<Date>(new Date('Wed Sep 25 2024 00:00:00'));
    // const formattedDate: string = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;

    useEffect(() => {
        setIsLoading(true);
        // const timeName = `time${index}`;
        // chrome.storage.local.get(timeName, (result) => {
        //     const time = result[timeName];
        //     if (time) setTime(new Date(`Wed Sep 25 2024 ${time}:00`));

        //     setIsLoading(false);
        // });
        setIsLoading(false);
    }, [index]);

    // function handleClick() {
    //     chrome.storage.local.set({ [`time${index}`]: formattedDate });
    //     chrome.storage.local.set({ [`openedForTime${index}`]: false });
    //     toast.success("Saved!")
    // }

    return (
        <div className="w-full p-3 flex flex-col justify-center items-start gap-4 bg-white/10 rounded-[10px] border border-white/30 backdrop-blur-[50px]">
            <div className="flex justify-start items-center gap-2">
                <img src={timer} alt="timer" className="w-[19px] h-[19px]" />
                <p className="text-white text-[13px] font-medium font-['Montserrat'] uppercase">timeslot {index}</p>
            </div>
            <div className="w-full flex flex-col justify-between items-center">
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="w-full flex justify-between items-center ">
                        <TimePicker12Hour date={time} setDate={(t: Date) => setTime(t)} />
                        <Switch />
                    </div>
                )}
            </div>
        </div>
    );
}