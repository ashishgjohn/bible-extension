type LogoPropsType = {
    classname?: string
}

export default function Logo({ classname }: LogoPropsType) {
    return (
        <div className={`flex justify-center items-center ${classname}`}>
            <img
                src="./SelahVie-logo.png"
                title="Logo"
                className="w-20 h-20"
            />
        </div>
    );
}