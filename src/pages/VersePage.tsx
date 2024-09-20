import useVerses from "../functions/useVerses";
import Loader from "../components/ui/Loader";
import ErrorPlaceholder from "../components/ui/ErrorPlaceholder";
import { useParams } from "react-router-dom";
import VersesContainer from "../components/home/VersesContainer";

export default function VersePage() {
    const { score } = useParams();
    const { data: verses, isLoading, error } = useVerses(score ?? 0);

    return (
        <div className='w-[380px] m-auto resize-none'>
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
                    {!error && (
                        <VersesContainer verses={verses} />
                    )}
                </>
            )}
        </div>
    );
}