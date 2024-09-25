import { useForm } from "react-hook-form";
import TimeInput from "./TimeInput";
import Button from "../ui/Button";
import { IoClose } from "react-icons/io5";
import Input from "../ui/Input";

type SettingsContainerPropsType = {
    onClose: () => void;
}

type SettingsData = {
    time1: string;
    intervals: number
}

export default function SettingsContainer({ onClose }: SettingsContainerPropsType) {
    const { register, getValues, handleSubmit } = useForm<SettingsData>({
        defaultValues: {
            time1: '',
            intervals: 1
        }
    });

    function onSubmit() {
        const { time1, intervals } = getValues();
        chrome.storage.local.set({ 'time1': time1 });
        chrome.storage.local.set({ 'intervals': intervals });
    }

    return (
        <div className="absolute h-min bg-slate-200 z-20 top-6 left-6 bottom-6 right-6 p-4 rounded-2xl flex flex-col justify-start items-center">
            <Button
                onClick={onClose}
                classname="p-2 hover:bg-slate-100 rounded-lg self-end"
            >
                <IoClose size={20} />
            </Button>

            <div className="w-full flex flex-col gap-2">
                <TimeInput
                    register={register("time1")}
                    label="First Time "
                />
                <Input
                    type="number"
                    label="Gap between intervals (in hours)"
                    register={register("intervals")}
                    className="p-2 px-4"
                    min={1}
                    max={4}
                />
                <Button
                    onClick={handleSubmit(onSubmit)}
                    classname="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 w-full p-3 px-4 rounded-xl self-center justify-self-end "
                >
                    <p className="text-base font-semibold text-white">Save</p>
                </Button>
            </div>
        </div>
    );
}