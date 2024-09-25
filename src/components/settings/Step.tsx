type StepPropsType = {
    currentStep: number;
    index: number;
    onClick: (s: number) => void;
}

export default function Step({ index, currentStep, onClick }: StepPropsType) {
    const handleClick = () => onClick(index);
    const style = index === currentStep ? `bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white` : `border-2 border-slate-300 `;

    return (
        <div
            onClick={handleClick}
            className={`w-8 h-8 flex justify-center items-center rounded-full ${style}`}
        >
            <p className="text-sm font-medium">{index}</p>
        </div>
    );
}