'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Footer from "../../components/ui/footer";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";
import {ReactNode} from "react";
import Link from "next/link";
import {LucideSparkles, LucideCalendarClock, LucideUsersRound} from "lucide-react";
import styles from './menu.module.scss';
import {GoogleSans, GoogleSansMedium} from "@/fonts";

export default function MenuPage(): ReactNode {

    return (
        <MainLayout>
            <Header isAuth={true}/>
            <MainInnerLayout>
                <nav className={`${styles.menu} ${GoogleSansMedium.className}`}>
                    <Link href='/' className={`bg-gray-100 dark:bg-[#15161B] ${styles.menuButton}`}>
                        <div className='p-3.5 rounded-lg' style={{
                            'backgroundColor': 'rgba(109,191,73,0.2)'
                        }}>
                            <LucideSparkles size={40} color='#6DBF49'/>
                        </div>
                        <div>
                            <h3 className='text-slate-900 dark:text-slate-200'>Успеваемость</h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${GoogleSans.className}`}>Просмотр и анализ
                                оценок</p>
                        </div>
                    </Link>
                    <Link href='/' className={`bg-gray-100 dark:bg-[#15161B] ${styles.menuButton}`}>
                        <div className='p-3.5 rounded-lg' style={{
                            'backgroundColor': 'rgba(246,131,4,0.2)'
                        }}>
                            <LucideCalendarClock size={40} color='#F68304'/>
                        </div>
                        <div>
                            <h3 className='text-slate-900 dark:text-slate-200'>Расписание</h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${GoogleSans.className}`}>Мой учебный
                                график</p>
                        </div>
                    </Link>
                    <Link href='/about' className={`bg-gray-100 dark:bg-[#15161B] ${styles.menuButton}`}>
                        <div className='p-3.5 rounded-lg' style={{
                            'backgroundColor': 'rgba(49,140,231,0.2)'
                        }}>
                            <LucideUsersRound size={40} color='#318CE7'/>
                        </div>
                        <div>
                            <h3 className='text-slate-900 dark:text-slate-200'>О Команде</h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${GoogleSans.className}`}>Участники
                                проекта</p>
                        </div>
                    </Link>
                </nav>
            </MainInnerLayout>
            <Footer/>
        </MainLayout>
    );
};