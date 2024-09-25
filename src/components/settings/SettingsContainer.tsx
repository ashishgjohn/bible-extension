import { useState } from "react";
import Stepper from "./Stepper";
import TimeInput from "./TimeInput";

export default function SettingsContainer() {
    const [step, setStep] = useState<number>(1);

    function handleStepClick(s: number) {
        setStep(s);
    }

    return (
        <div className="w-full">
            <Stepper step={step} onClick={handleStepClick} />
            <TimeInput index={step} />
        </div>
    );
}