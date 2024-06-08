import {IMenuItem} from "./menu.interface";
import { LucideHome, LucideCircleUser, LucideLayoutGrid } from 'lucide-react';

export const MenuList: Array<IMenuItem> = [
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