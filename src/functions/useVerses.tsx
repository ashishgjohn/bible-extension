import { useQuery } from "@tanstack/react-query";
import getVersesApi from "../services/getVersesApi";

export default function useVerses(score: number | string) {
    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: [],
        queryFn: async () => getVersesApi(Number(score)),
        staleTime: 0,
        refetchOnMount: true,
    });

    return { data: data?.data, isLoading, error, isSuccess };
}