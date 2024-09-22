import { ReactElement } from 'react';
import Button from '../ui/Button'

type ShareButtonPropsType = {
    onClick: () => void;
    children: ReactElement;
}

export default function ShareButton({ onClick, children }: ShareButtonPropsType) {
    return (
        <Button
            onClick={onClick}
            classname=''
        >
            {children}
        </Button>
    )
}