'use client';

import {IMainLayout} from "./layout.interface";
import {FC} from "react";
import styles from './layout.module.scss';

const MainLayout: FC<IMainLayout> = ({children}) => {

    return (
        <main className={styles.layout + ' bg-white dark:bg-[#0A0A0C]'}>
            {children}
        </main>
    );

};

export default MainLayout;