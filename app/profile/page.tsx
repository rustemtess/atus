'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Footer from "../../components/ui/footer";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";
import {FC, ReactNode} from "react";
import styles from './profile.module.scss';

export default function ProfilePage(): ReactNode {

    return (
        <MainLayout>
            <Header isAuth={true}/>
            <MainInnerLayout>
                <div className={styles.profile}>
                    <img src='https://avatars.githubusercontent.com/u/105985698?v=4' width={100} height={100} />
                </div>
            </MainInnerLayout>
            <Footer/>
        </MainLayout>
    );
};