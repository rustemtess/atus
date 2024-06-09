import {IAboutUser} from "@/app/about/about.interface";
import {LucideGithub, LucideInstagram} from "lucide-react";

export const TeamUsers: Array<IAboutUser> = [
    {
        full_name: 'Жумабек Рустем Русланұлы',
        post: 'Founder · CEO',
        img: 'https://avatars.githubusercontent.com/u/105985698?v=4',
        socialNetwork: [
            {
                name: 'Instagram',
                svg: LucideInstagram,
                link: 'https://www.instagram.com/rustemtess'
            },
            {
                name: 'GitHub',
                svg: LucideGithub,
                link: 'https://github.com/rustemtess'
            }
        ]
    },
    {
        full_name: 'Сүлейменов Азамат',
        post: 'Co-Founder · COO',
        img: 'https://avatars.githubusercontent.com/u/105985698?v=4',
        socialNetwork: [
            {
                name: 'Instagram',
                svg: LucideInstagram,
                link: 'https://www.instagram.com/rustemtess'
            }
        ]
    },
    {
        full_name: 'Калкаманов Нурсултан',
        post: 'Front-end Developer',
        img: 'https://media-fra3-2.cdn.whatsapp.net/v/t61.24694-24/311604234_5722726094450839_4840288826478474000_n.jpg?ccb=11-4&oh=01_Q5AaIPbIR0nlTfG_8MMuzi2-acnyFgrkrSryGsD9ENGEWFRK&oe=666B14AC&_nc_sid=e6ed6c&_nc_cat=111',
        socialNetwork: [
            {
                name: 'Instagram',
                svg: LucideInstagram,
                link: 'https://www.instagram.com/rustemtess'
            }
        ]
    },
    {
        full_name: 'Ерканат ...',
        post: 'Front-end Developer',
        img: 'https://media-fra3-2.cdn.whatsapp.net/v/t61.24694-24/311604234_5722726094450839_4840288826478474000_n.jpg?ccb=11-4&oh=01_Q5AaIPbIR0nlTfG_8MMuzi2-acnyFgrkrSryGsD9ENGEWFRK&oe=666B14AC&_nc_sid=e6ed6c&_nc_cat=111',
        socialNetwork: [
            {
                name: 'Instagram',
                svg: LucideInstagram,
                link: 'https://www.instagram.com/rustemtess'
            }
        ]
    }
];