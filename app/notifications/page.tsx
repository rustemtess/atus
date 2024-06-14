'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Footer from "../../components/ui/footer";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";
import {FC, ReactNode} from "react";
import styles from './notifications.module.scss';
import { VKSans,GoogleSans } from "@/fonts";

export default function NotificationsPage(): ReactNode {

    return (
        <MainLayout>
            <Header isAuth={true}/>
            <MainInnerLayout>
                <div>
                    <h3 className={styles.notifications_title + ` ${GoogleSans.className} text-gray-800 dark:text-gray-300`}>Мои уведомления</h3>
                    <nav className={styles.notifications_buttons + ' text-gray-600 dark:text-gray-400 dark:border-gray-800'}>
                        <button className={`border-[#F04939] border-b-[2px] ${VKSans.className}`}>Не прочитанные <span>2</span></button>
                        <button className={`${VKSans.className}`}>Все</button>
                    </nav>
                </div>
            </MainInnerLayout>
            <Footer/>
        </MainLayout>
    );
};