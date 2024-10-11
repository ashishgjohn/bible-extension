import ShareButton from "./ShareButton";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import redirect from "../../hooks/redirect";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { getVerseImage } from "../../services/getVersesApi";
import Loader from "../ui/Loader";
import { useState } from "react";
import Button from "../ui/Button";
import { IoClose } from "react-icons/io5";

type VersePropsType = {
    reference: string;
    text: string;
    mood: number;
    image: string;
    onClick: () => void;
}

const facebookCaption = "My verse for today’s journey | SelahVie https://selahvie-backend.onrender.com/";

export default function Verse({ reference, text, image, onClick }: VersePropsType) {
    const postCaption = `${text} - ${reference}`;
    const [url, setUrl] = useState<string | null>(null);
    const { mutate, isPending } = useMutation({
        mutationKey: ['verseImage'],
        mutationFn: () => getVerseImage(`${text} - ${reference}`),
        onSuccess: (data) => {
            window.open(`${url}${data.imageUrl}`, '_blank')
        },
        onError: (error) => {
            console.log(error);
        }
    });

    async function handleClick(url: string) {
        setUrl(url);
        mutate();
    }

    function handleClose() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id ?? 0, { action: 'removeSidebar' });
        });
    }

    return (
        <div className="w-full h-full relative">
            <Button
                onClick={handleClose}
                classname="closeBtn absolute top-6 right-6 p-4 bg-slate-700 bg-opacity-50 rounded-lg"
            >
                <IoClose size={18} color="#fff" />
            </Button>


            <img src={image} alt="" className='c w-full h-full' loading="eager" onClick={onClick} />

            <div className='absolute w-full h-min-[35%] bottom-0 flex flex-col gap-8 p-8 justify-center items-center text-white bg-slate-800 bg-opacity-50 '>
                <div onClick={onClick} className="flex flex-col gap-8 justify-center items-center">
                    <p className='text-center text-base'>{text}</p>
                    <p className='text-center font-semibold text-sm'>{reference}</p>
                </div>

                <div className="w-full flex justify-center items-center gap-12">
                    {isPending ? (
                        <Loader />
                    ) : (
                        <>
                            <ShareButton
                                onClick={() => handleClick(`https://www.facebook.com/dialog/share?app_id=466015839919233&display=popup&hashtag=${encodeURIComponent(facebookCaption)}&href=`)}
                            >
                                <FaFacebook size={36} className="hover:text-facebookColor " />
                            </ShareButton>
                            <ShareButton
                                onClick={() => redirect(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postCaption)}&url=${encodeURIComponent('https://selahvie-backend.onrender.com/')}`)}
                            >
                                <FaSquareXTwitter size={36} className="hover:text-black " />
                            </ShareButton>
                            <ShareButton
                                onClick={() => redirect(`https://api.whatsapp.com//send?text=${encodeURIComponent(postCaption)}&url=https://x.com`)}
                            >
                                <FaWhatsapp size={36} className="hover:text-green-400 " />
                            </ShareButton>
                            <ShareButton
                                onClick={() => redirect(`https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(postCaption)}`)}
                            >
                                <FaSnapchatGhost size={36} className="hover:text-yellow-300" />
                            </ShareButton>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}