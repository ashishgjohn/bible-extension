type ErrorPlaceholderPropsType = {
    message: string
}

export default function ErrorPlaceholder({ message }: ErrorPlaceholderPropsType) {
    return (
        <div className="w-full m-4 p-4 border-2 border-red-400 rounded-xl bg-red-100">
            <p className="text-base font-medium text-red-500">Error</p>
            <p className="text-sm font-normal text-red-500">{message}</p>
        </div>
    );
}