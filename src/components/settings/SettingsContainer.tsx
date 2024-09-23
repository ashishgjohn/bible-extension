import { useForm } from "react-hook-form";
import TimeInput from "./TimeInput";
import Button from "../ui/Button";
import timeToTimeStamp from "../../hooks/timeToTimeStamp";

type SettingsData = {
    time1: string;
    time2: string;
    time3: string
}

export default function SettingsContainer() {
    const { register, getValues, handleSubmit } = useForm<SettingsData>({
        defaultValues: {
            time1: '',
            time2: '',
            time3: ''
        }
    });

    function onSubmit() {
        const { time1, time2, time3 } = getValues();
        console.log(time1, time2, time3);
    }

    return (
        <div className="w-full h-[90%] flex flex-col justify-between items-center">
            <div className="w-full">
                <TimeInput
                    register={register("time1")}
                    label="Time 1"
                />
                <TimeInput
                    register={register("time2")}
                    label="Time 1"
                />
                <TimeInput
                    register={register("time3")}
                    label="Time 1"
                />
            </div>

            <Button
                onClick={handleSubmit(onSubmit)}
                classname="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 w-full p-3 px-4 rounded-xl self-center justify-self-end "
            >
                <p className="text-base font-semibold text-white">Save</p>
            </Button>
        </div>
    );
}