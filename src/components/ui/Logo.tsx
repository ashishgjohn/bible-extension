import logo from "./../../assets/imgs/SelahVieLogo.webp";

type LogoPropsType = {
    classname?: string
}

export default function Logo({ classname }: LogoPropsType) {
    return (
        <div className={`flex justify-center items-center ${classname}`}>
            <img
                src={logo}
                title="Logo"
                className="w-[158px] h-[158px]"
            />
        </div>
    );
}