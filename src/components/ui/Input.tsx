import { UseFormRegisterReturn } from "react-hook-form";

type InputPropsType = {
    type: string;
    label: string;
    register: UseFormRegisterReturn
}

export default function Input({ type, label, register }: InputPropsType) {
    return (
        <div className="w-full flex flex-col gap-1 justify-center items-start">
            <p className="font-semibold text-sm capitalize">{label}</p>
            <input
                type={type}
                title="Input"
                className="w-full border-2 outline-none p-1 px-2 rounded-lg "
                {...register}
            />
        </div>
    )
}