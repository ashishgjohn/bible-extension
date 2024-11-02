import { useQuery } from "@tanstack/react-query";
import getVersesApi from "../services/getVersesApi";

export default function useVerses(score: number | string) {
    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ['verses', score],
        queryFn: async () => getVersesApi(Number(score))
    });

    return { data: data?.data, isLoading, error, isSuccess };
}