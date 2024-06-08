'use client';

import { IHeader } from "./header.interface";
import { FC, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { LucideMoon, LucideSun, LucideBell } from "lucide-react";
import {changeTheme, changeToHTML, getTheme, isDark} from "@/theme.config";
import Logo from "@/components/ui/logo";

const Header: FC<IHeader> = ({ children, isAuth = false }) => {
    const [changedTheme, setChangedTheme] = useState<string>(getTheme());

    useEffect(() => {
        if(isDark()) changeToHTML(true);
        else changeToHTML();
    }, []);

    const changeCurrentTheme = () => {
        setChangedTheme(changeTheme());
    };

    return (
        <header className={styles.header}>
            <div>
                <Logo isChangedTheme={changedTheme} />
                {children}
                <nav>
                    { (isAuth) &&
                        <button
                            onClick={changeCurrentTheme}
                            className={'p-2 rounded-lg border border-[#E5E7EB] dark:border-gray-700'}
                        >
                            {changedTheme === 'dark' ? (
                                <LucideBell className={'stroke-[#67676C] dark:stroke-gray-300'} size={20}/>
                            ) : (
                                <LucideBell className={'stroke-[#67676C] dark:stroke-gray-300'} size={20}/>
                            )}
                        </button>
                    }
                    <button
                        onClick={changeCurrentTheme}
                        className={'p-2 rounded-lg border border-[#E5E7EB] dark:border-gray-700'}
                    >
                        {changedTheme === 'dark' ? (
                            <LucideSun className={'stroke-[#67676C] dark:stroke-gray-300'} size={20}/>
                        ) : (
                            <LucideMoon className={'stroke-[#67676C] dark:stroke-gray-300'} size={20}/>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
