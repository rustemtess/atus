'use client';

import styles from './menu.module.scss';
import Link from "next/link";
import { VKSans } from "@/fonts";
import {usePathname} from "next/navigation";
import { MenuList } from './menu.data';

const Menu = () => {

    const pathname: string = usePathname();

    return (
      <nav className={ `${styles.menu} ${VKSans.className}` }>
          { MenuList.map( item => {
              if(pathname === item.href) return (
                  <a className={ styles.linkButton + ' text-[#F04939]' }>
                      <item.svg size={24} className='stroke-[#F04939' />
                      <span>{ item.name }</span>
                  </a>
              )
              else return (
                  <Link className={ styles.linkButton + ' text-[#67676C] dark:text-gray-300' } href={ item.href }>
                      <item.svg size={24} className='stroke-[#67676C] dark:stroke-gray-300' />
                      <span>{ item.name }</span>
                  </Link>
              )
          } ) }
      </nav>
    );
};

export default Menu;