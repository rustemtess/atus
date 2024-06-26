'use client';

import {IHeader} from "./header.interface";
import {FC, useEffect, useState} from "react";
import styles from "./header.module.scss";
import {LucideMoon, LucideSun, LucideBell} from "lucide-react";
import {changeTheme, initTheme, getTheme} from "@/theme.config";
import Logo from "@/components/ui/logo";
import Link from "next/link";

const Header: FC<IHeader> = ({children, isAuth = false}) => {
    const [changedTheme, setChangedTheme] = useState<string>('light');

    useEffect(() => {
        initTheme();
        const theme: string = getTheme();
        setChangedTheme(theme);
    }, []);

    const changeCurrentTheme = () => {
        const newTheme = changeTheme();
        setChangedTheme(newTheme);
    };

    return (
        <header className={`bg-white dark:bg-[#0A0A0C] ${styles.header}`}>
            <div>
                <Logo isChangedTheme={changedTheme}/>
                {children}
                <nav>
                    {isAuth && (
                        <Link title='Уведомления' href='/notifications'
                            className={'p-2 rounded-lg border border-[#E5E7EB] dark:border-gray-700'}
                        >
                            {changedTheme === 'dark' ? (
                                <LucideBell className={'stroke-[#67676C] dark:stroke-gray-300'} size={20}/>
                            ) : (
                                <LucideBell className={'stroke-[#67676C] dark:stroke-gray-300'} size={20}/>
                            )}
                        </Link>
                    )}
                    <button
                        title='Смена темы'
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
