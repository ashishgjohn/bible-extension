import TimeInput from "./TimeInput";
import settings from "./../../assets/imgs/SettingsBg.webp";
import Button from "../ui/Button";
import star from './../../assets/imgs/StarBlack.png';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";

type Time = {
    time: string;
    opened: boolean;
    isEnabled: boolean
}

type Times = {
    time1: Time;
    time2: Time;
    time3: Time;
}

export default function SettingsContainer() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [times, setTimes] = useState<Times>({
        time1: { time: "00:00", opened: false, isEnabled: false },
        time2: { time: "00:00", opened: false, isEnabled: false },
        time3: { time: "00:00", opened: false, isEnabled: false },
    });

    useEffect(() => {
        setIsLoading(true);
        chrome.storage.local.get(['time1', 'time2', 'time3', 'openedForTime1', 'openedForTime2', 'openedForTime3', 'enabled1', 'enabled2', 'enabled3'], (result) => {
            setTimes({
                time1: { time: result['time1'] ?? '00:00', opened: result['openedForTime1'] ?? false, isEnabled: result['enabled1'] ?? false },
                time2: { time: result['time2'] ?? '00:00', opened: result['openedForTime2'] ?? false, isEnabled: result['enabled2'] ?? false },
                time3: { time: result['time3'] ?? '00:00', opened: result['openedForTime3'] ?? false, isEnabled: result['enabled3'] ?? false }
            });

            setIsLoading(false);
        });
    }, []);

    function handleTimeChange(index: number, newTime: string) {
        setTimes((prevTimes) => ({
            ...prevTimes,
            [`time${index}`]: { ...prevTimes[`time${index}` as keyof Times], time: newTime }
        }));
    }

    function handleToggleChange(index: number, isEnabled: boolean) {
        setTimes((prevTimes) => ({
            ...prevTimes,
            [`time${index}` as keyof Times]: { ...prevTimes[`time${index}` as keyof Times], isEnabled }
        }));
    }

    function handleSave() {
        const updatedTimes = {
            time1: times?.time1.time,
            time2: times?.time2.time,
            time3: times?.time3.time,
            openedForTime1: times?.time1.opened,
            openedForTime2: times?.time2.opened,
            openedForTime3: times?.time3.opened,
            enabled1: times?.time1.isEnabled,
            enabled2: times?.time2.isEnabled,
            enabled3: times?.time3.isEnabled,
        };
        chrome.storage.local.set(updatedTimes, () => {
            toast.success("Saved!");
        });
    }

    return (
        <div className="w-full">
            <img src={settings} title="setings bg" className="w-full h-screen" />
            <div className="absolute w-full bottom-0 p-2">
                <div className="w-full p-1 pt-6 flex flex-col justify-center items-center gap-4 bg-white/0 rounded-[10px] border border-white/70 backdrop-blur-[50px]">
                    <p className="text-center text-white text-base font-normal uppercase">timers</p>

                    <div className="w-full p-2 flex flex-col justify-center items-center gap-2">
                        {isLoading ? (
                            <Loader />
                        ) : (<>
                            <TimeInput
                                index={1}
                                time={times.time1.time}
                                isEnabled={times.time1.isEnabled}
                                onTimeChange={(time) => handleTimeChange(1, time)}
                                onToggleChange={(enable) => handleToggleChange(1, enable)}
                                disabled={times?.time2.isEnabled}
                            />
                            <TimeInput
                                index={2}
                                time={times.time2.time}
                                isEnabled={times.time2.isEnabled}
                                onTimeChange={(time) => handleTimeChange(2, time)}
                                onToggleChange={(enable) => handleToggleChange(2, enable)}
                                disabled={!times?.time1.isEnabled || times?.time3.isEnabled}
                            />
                            <TimeInput
                                index={3}
                                time={times.time3.time}
                                isEnabled={times.time3.isEnabled}
                                onTimeChange={(time) => handleTimeChange(3, time)}
                                onToggleChange={(enable) => handleToggleChange(3, enable)}
                                disabled={(!times?.time1.isEnabled || !times?.time2.isEnabled) && !times.time3.isEnabled}
                            />
                        </>)}
                    </div>

                    <p className="text-center text-[#959595] text-xs font-normal font-['Montserrat']">You can enable or disable multiple <br /> timers with their toggles. </p>

                    <Button
                        onClick={handleSave}
                        classname="w-full p-3 bg-white rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex"
                    >
                        <div className="w-full flex justify-center items-center gap-2">
                            <img src={star} alt="star" className="w-[13px] h-[17px]" />
                            <p className="text-center text-black text-sm font-semibold">Save!</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}