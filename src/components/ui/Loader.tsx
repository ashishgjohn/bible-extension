import { LoaderSize } from "./../../constants/LoaderSize";

type LoaderPropsType = {
    size?: LoaderSize
}

export default function Loader({ size }: LoaderPropsType) {
    let config = '';
    switch (size) {
        case LoaderSize.LG:
            config = 'h-12 w-12';
            break;

        case LoaderSize.XS:
            config = 'h-4 w-4';
            break;

        default:
            config = 'h-8 w-8';
            break;
    }
    return (
        <div className={`${config} animate-spin border-2 border-t-primary rounded-full`}></div>
    );
}