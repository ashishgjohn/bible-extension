import CloseButton from "@/components/ui/CloseButton";
import SettingsContainer from "../components/settings/SettingsContainer";
import BackButton from "@/components/ui/BackButton";

export default function Settings() {
    return (
        <div className="w-[400px] h-screen m-auto bg-white relative">
            <div className="absolute w-full p-6 flex justify-between items-center">
                <BackButton />
                <p className="text-center text-white text-xl font-normal">Settings</p>
                <CloseButton />
            </div>
            <SettingsContainer />
        </div>
    );
}