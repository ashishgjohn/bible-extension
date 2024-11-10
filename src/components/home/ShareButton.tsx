import { ReactElement } from 'react';
import Button from '../ui/Button'

type ShareButtonPropsType = {
    onClick: () => void;
    children: ReactElement;
    disabled: boolean;
}

export default function ShareButton({ onClick, disabled, children }: ShareButtonPropsType) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            classname='w-full p-4 bg-white/50 rounded-[10px] border border-white/50 backdrop-blur-[30px] flex-col justify-center items-center gap-2.5 inline-flex'
        >
            {children}
        </Button>
    )
}