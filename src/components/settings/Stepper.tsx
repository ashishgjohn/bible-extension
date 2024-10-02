import Step from './Step';

type StepperPropsType = {
    step: number;
    onClick: (s: number) => void;
}

export default function Stepper({ step, onClick }: StepperPropsType) {
    return (
        <div className='w-full flex justify-around items-center mb-8'>
            <Step currentStep={step} index={1} onClick={onClick} />
            <Step currentStep={step} index={2} onClick={onClick} />
            <Step currentStep={step} index={3} onClick={onClick} />
        </div>
    );
}