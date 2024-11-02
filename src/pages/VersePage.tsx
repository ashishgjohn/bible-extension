import useVerses from "../functions/useVerses";
import Loader from "../components/ui/Loader";
import ErrorPlaceholder from "../components/ui/ErrorPlaceholder";
import { useParams } from "react-router-dom";
import VersesContainer from "../components/home/VersesContainer";
import Logo from "../components/ui/Logo";

export default function VersePage() {
    const { score } = useParams();
    const { data, isLoading, error, isSuccess } = useVerses(score ?? 0);
    console.error(error);

    return (
        <div className='w-[400px] h-[100%] m-auto resize-none relative'>
            <Logo
                classname="absolute p-4 top-6 left-6 z-10 bg-slate-800 bg-opacity-50 rounded-lg"
            />

            {error && (
                <div className="w-full h-screen flex items-center justify-center">
                    <ErrorPlaceholder message="Internal Server Error" />
                </div>
            )}
            {isLoading ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                <>
                    {isSuccess && (
                        <VersesContainer verses={data.verses} images={data.images} />
                    )}
                </>
            )}
        </div>
    );
}