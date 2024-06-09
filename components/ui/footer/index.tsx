'use client';

import styles from './footer.module.scss';
import Link from "next/link";
import {VKSans} from "@/fonts";
import {usePathname} from "next/navigation";
import {FooterList} from './footer.data';

const Footer = () => {

    const pathname: string = usePathname();

    return (
        <nav className={`bg-white dark:bg-[#0A0A0C] ${styles.footer} ${VKSans.className}`}>
            {FooterList.map(item => {
                if (pathname === item.href) return (
                    <a key={item.name} className={styles.linkButton + ' text-[#F04939]'}>
                        <item.svg size={24} className='stroke-[#F04939'/>
                        <span>{item.name}</span>
                    </a>
                )
                else return (
                    <Link key={item.name} className={styles.linkButton + ' text-[#67676C] dark:text-gray-300'} href={item.href}>
                        <item.svg size={24} className='stroke-[#67676C] dark:stroke-gray-300'/>
                        <span>{item.name}</span>
                    </Link>
                )
            })}
        </nav>
    );
};

export default Footer;