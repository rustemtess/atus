'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Footer from "../../components/ui/footer";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";
import {FC, ReactNode} from "react";
import styles from './about.module.scss';
import {VKSansMedium, inter} from "@/fonts";
import {TeamUsers} from "@/app/about/about.data";
import Link from "next/link";
import {LucideUsers} from "lucide-react";
import {IAboutUser} from "@/app/about/about.interface";

export default function AboutPage(): ReactNode {

    const User: FC<IAboutUser> = ({full_name, post, img, socialNetwork}) => {
        return (
            <div>
                <img
                    src={img}
                />
                <div>
                    <h3 className={`text-gray-700 dark:text-gray-200 ${inter.className}`}>{full_name}</h3>
                    <p className={`text-gray-500 dark:text-gray-400 ${VKSansMedium.className}`}>{post}</p>
                </div>
                <nav>
                    {socialNetwork.map(socialNetwork => {
                        return (
                            <Link key={socialNetwork.link} target='_blank' href={socialNetwork.link}>
                                <socialNetwork.svg size={25}
                                                   className='stroke-[#F04939]'/>
                            </Link>
                        )
                    })}

                </nav>
            </div>
        );
    };

    return (
        <MainLayout>
            <Header isAuth={true}/>
            <MainInnerLayout>
                <div className={styles.about}>
                    <h1 className='text-gray-600 dark:text-gray-400'>
                        <LucideUsers size={20}/>
                        <span>Команда проекта</span>
                    </h1>
                    <hr className='border-t-[0.3px] dark:border-gray-600'/>
                    <nav className={styles.team}>
                        {TeamUsers.map(user => {
                            return <User key={user.full_name} {...user} />
                        })}
                    </nav>
                </div>
            </MainInnerLayout>
            <Footer/>
        </MainLayout>
    );

};