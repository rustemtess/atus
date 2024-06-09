import {IFooterItem} from "./footer.interface";
import { LucideHome, LucideCircleUser, LucideLayoutGrid } from 'lucide-react';

export const FooterList: Array<IFooterItem> = [
    {
        name: 'Главная',
        href: '/home',
        svg: LucideHome
    },
    {
        name: 'Меню',
        href: '/menu',
        svg: LucideLayoutGrid
    },
    {
        name: 'Профиль',
        href: '/profile',
        svg: LucideCircleUser
    }
];