import Image from "next/image";
import { FC } from "react";
import { ILogo } from "./logo.interface";

const Logo: FC<ILogo> = ({ isChangedTheme }) => {
    return (
        <Image
            className='border-none outline-none'
            width={90}
            height={50}
            src={(isChangedTheme == 'dark') ? '/atus_light.svg' : '/atus_dark.svg'}
            alt={'Logo'}
        />

    );
};

export default Logo;
