import Button from "./Button";
import back from './../../assets/imgs/ArrowLeft.png';
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate(-1)}
            classname="p-2 bg-white/10 backdrop-blur-[50px] border-white/70 border rounded-[10px] z-10"
        >
            <img src={back} title="settings logo" className="w-[17.50px] h-[16.16px]" />
        </Button>
    )
}