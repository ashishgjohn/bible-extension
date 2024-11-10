import TimeInput from "./TimeInput";
import settings from "./../../assets/imgs/SettingsBg.webp";
import Button from "../ui/Button";
import star from './../../assets/imgs/StarBlack.png';

export default function SettingsContainer() {
    // const [step, setStep] = useState<number>(1);

    // function handleStepClick(s: number) {
    //     setStep(s);
    // }

    return (
        <div className="w-full">
            <img src={settings} title="setings bg" className="w-full h-screen" />
            {/* <TimeInput index={step} /> */}
            <div className="absolute w-full bottom-0 p-2">
                <div className="w-full p-1 flex flex-col justify-center items-center gap-4 bg-white/0 rounded-[10px] border border-white/70 backdrop-blur-[50px]">
                    <p className="text-center text-white text-base font-normal font-['Medino'] uppercase">timers</p>

                    <div className="w-full p-2 flex flex-col justify-center items-center gap-2">
                        <TimeInput index={1} />
                        <TimeInput index={2} />
                        <TimeInput index={3} />
                    </div>

                    <p className="text-center text-[#959595] text-xs font-normal font-['Montserrat']">You can enable or disable multiple <br /> timers with their toggles. </p>

                    <Button
                        onClick={() => { }}
                        classname="w-full p-3 bg-white rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex"
                    >
                        <div className="w-full flex justify-center items-center gap-2">
                            <img src={star} alt="star" className="w-[13px] h-[17px]" />
                            <p className="text-center text-black text-lg font-medium font-['Medino'] ">Save!</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}