type VersePropsType = {
    reference: string;
    version: string;
    text: string;
    mood: number;
    image: string;
    onClick: () => void;
}

export default function Verse({ reference, version, text, mood, image, onClick }: VersePropsType) {
    return (
        <div className="w-full h-full relative" onClick={onClick}>
            <img src={image} alt="" className='c w-full h-full' />
            <div className='absolute w-full bottom-0 flex flex-col gap-8 p-8 justify-center items-center text-white bg-slate-800 bg-opacity-50 '>
                <p className='text-center text-base'>{text}</p>
                <p className='text-center font-semibold text-sm'>{reference} ({version})</p>
                <p className='text-center font-semibold text-sm'>Mood: {mood}</p>
            </div>
        </div>
    )
}