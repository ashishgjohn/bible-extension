import { useEffect, useState } from "react";
import Button from "../ui/Button";
import toast from "react-hot-toast";
import { TimePicker12Hour } from "../ui/TimePickerInput12Hour";
import Loader from "../ui/Loader";

type TimeInputPropsType = {
    index: number
}

export default function TimeInput({ index }: TimeInputPropsType) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [time, setTime] = useState<Date>(new Date('Wed Sep 25 2024 00:00:00'));
    const formattedDate: string = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;

    useEffect(() => {
        setIsLoading(true);
        const timeName = `time${index}`;
        chrome.storage.local.get(timeName, (result) => {
            const time = result[timeName];
            if (time) setTime(new Date(`Wed Sep 25 2024 ${time}:00`));

            setIsLoading(false);
        });
    }, [index]);

    function handleClick() {
        chrome.storage.local.set({ [`time${index}`]: formattedDate });
        chrome.storage.local.set({ [`openedForTime${index}`]: false });
        toast.success("Saved!")
    }

    return (
        <div className="w-full h-[500px] flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-col justify-between items-center">
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <TimePicker12Hour date={time} setDate={(t: Date) => setTime(t)} />
                        <p className="mt-12 font-medium text-xl uppercase tracking-wider text-wrap ">Set timers for your Selahvie</p>
                        <Button
                            onClick={handleClick}
                            classname="mt-20 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 w-full p-3 rounded-xl self-center justify-self-end "
                        >
                            <p className="text-base font-semibold text-white">Save!</p>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}