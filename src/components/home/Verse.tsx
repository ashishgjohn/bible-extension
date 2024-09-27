import ShareButton from "./ShareButton";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import redirect from "../../hooks/redirect";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

type VersePropsType = {
    reference: string;
    text: string;
    mood: number;
    image: string;
    onClick: () => void;
}

export default function Verse({ reference, text, image, onClick }: VersePropsType) {
    const postCaption = `${text} - ${reference}`;

    return (
        <div className="w-full h-full relative" onClick={onClick}>
            <img src={image} alt="" className='c w-full h-full' loading="eager" />

            <div className='absolute w-full h-min-[35%] bottom-0 flex flex-col gap-8 p-8 justify-center items-center text-white bg-slate-800 bg-opacity-50 '>
                <p className='text-center text-base'>{text}</p>
                <p className='text-center font-semibold text-sm'>{reference}</p>

                <div className="w-full flex justify-center items-center gap-12">
                    <ShareButton
                        onClick={() => redirect(`https://www.facebook.com/dialog/share?app_id=466015839919233&display=popup&href=https://i.pinimg.com/originals/f6/d6/4b/f6d64b382528bc02685b4b76fd55d7ad.png&hashtag=${postCaption}`)}
                    >
                        <FaFacebook size={36} className="hover:text-facebookColor " />
                    </ShareButton>
                    <ShareButton
                        onClick={() => redirect(`https://twitter.com/intent/tweet?text=${postCaption}&url=https://x.com`)}
                    >
                        <FaSquareXTwitter size={36} className="hover:text-black " />
                    </ShareButton>
                    <ShareButton
                        onClick={() => redirect(`https://api.whatsapp.com//send?text=${postCaption}&url=https://x.com`)}
                    >
                        <FaWhatsapp size={36} className="hover:text-green-400 " />
                    </ShareButton>
                    <ShareButton
                        onClick={() => redirect(`https://snapchat.com/scan?attachmentUrl=${postCaption}`)}
                    >
                        <FaSnapchatGhost size={36} className="hover:text-yellow-300" />
                    </ShareButton>
                </div>
            </div>
        </div>
    )
}