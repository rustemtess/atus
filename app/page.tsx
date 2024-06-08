'use client';

import Header from "@/components/ui/header";
import MainLayout from "@/components/layouts/MainLayout";
import styles from './index.module.scss';
import { LucideLogIn } from 'lucide-react';

export default function Index() {

  return (
    <MainLayout>
        <Header />
        <div className={styles.form}>
            <h3 className='text-gray-900 dark:text-gray-300'>
                <LucideLogIn size={18} />
                <span>Вход в учетную запись</span>
            </h3>
            <input type='text' placeholder={'Введите ИИН'} className='bg-[#F6F6F7] text-black border dark:border-gray-700 dark:bg-[#272830] dark:text-gray-100' />
            <input type='password' placeholder={'Введите пароль'} className='bg-[#F6F6F7] text-black border dark:border-gray-700 dark:bg-[#272830] dark:text-gray-100'/>
            <button className='bg-black text-white dark:bg-white dark:text-black'>
                Войти
            </button>
        </div>
    </MainLayout>
  );

}
