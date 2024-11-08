import logo from "./../../assets/imgs/SelahVieLogo.webp";

type LogoPropsType = {
    classname?: string
}

export default function Logo({ classname }: LogoPropsType) {
    return (
        <img
            src={logo}
            title="Logo"
            className={classname}
        />
    );
}