import { UseFormRegisterReturn } from 'react-hook-form';
import Input from '../ui/Input';

type TimeInputPropsType = {
    label: string,
    register: UseFormRegisterReturn
}

export default function TimeInput({ label, register }: TimeInputPropsType) {
    return (
        <Input label={label} type='time' register={register} />
    );
}