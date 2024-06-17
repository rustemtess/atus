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
    }
];