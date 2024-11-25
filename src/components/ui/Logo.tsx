type LogoPropsType = {
    classname?: string;
    img: string;
}

export default function Logo({ img, classname }: LogoPropsType) {
    return (
        <img
            src={img}
            title="Logo"
            className={classname}
        />
    );
}