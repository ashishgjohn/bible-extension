import Button from "@/components/ui/Button";
import SettingsContainer from "../components/settings/SettingsContainer";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Settings() {
    const navigate = useNavigate();
    return (
        <div className="w-[400px] h-screen m-auto p-6 bg-white">
            <Button
                onClick={() => { navigate(-1) }}
                classname="mb-4 border-2 p-2 border-gray-300 rounded-full flex justify-center items-center"
            >
                <IoArrowBack size={14}  />
            </Button>
            <SettingsContainer />
        </div>
    );
}