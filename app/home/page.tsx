'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Footer from "../../components/ui/footer";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";
import {FC, ReactNode} from "react";
import {IListInClassRoom, IStudentInClassRoom} from './home.interface';
import styles from './home.module.scss';

export default function HomePage(): ReactNode {

    {
        /**
         * ДОПИСАТЬ КОМПОНЕНТ ТЕКУЩЕГО ЗАНЯТИЯ
         */
    }

    const StudentInClassRoom: FC<IStudentInClassRoom> = ({img, name}) => {
        return (
            <img className={styles.student} src={img} width={30} height={30}/>
        );
    };

    const ListInClassRoom: FC<IListInClassRoom> = ({children}): ReactNode => {
        return (
            <div className={styles.classroom}>
                <div className={styles.classroomTitle}>
                    <h1 className='text-gray-900 dark:text-gray-100'>Операционные системы и сервисные программы</h1>
                    <h3 className='text-gray-500 dark:text-gray-300'>Алпысова Айнур Слямбековна</h3>
                    <h3 className='text-gray-500 dark:text-gray-300'>7 корпус, 149 аудитория</h3>
                </div>
                <div className={styles.classroomList}>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <MainLayout>
            <Header isAuth={true}/>
            <MainInnerLayout>
                <ListInClassRoom>
                    <StudentInClassRoom
                        img='https://avatars.githubusercontent.com/u/105985698?v=4'
                        name='Рустем'
                    />
                    <StudentInClassRoom
                        img='https://media-fra3-2.cdn.whatsapp.net/v/t61.24694-24/438418774_1648645669294108_6689958913668907967_n.jpg?ccb=11-4&oh=01_Q5AaIGPfvmDdbNNSc7vTmecgsAbudzA3CEX6VnoxZf4-zWkM&oe=666B2775&_nc_sid=e6ed6c&_nc_cat=106'
                        name='Азамат'
                    />
                    <StudentInClassRoom
                        img='https://media-fra3-2.cdn.whatsapp.net/v/t61.24694-24/328786604_430718426480907_8533670300413777917_n.jpg?ccb=11-4&oh=01_Q5AaIBGtuXFBmXHrUMCqzU3f7xCgJTU4Zwv2XydWBdUHLsb6&oe=66719BF3&_nc_sid=e6ed6c&_nc_cat=111'
                        name='Нурсултан'
                    />
                    <StudentInClassRoom
                        img='https://media-fra3-2.cdn.whatsapp.net/v/t61.24694-24/311604234_5722726094450839_4840288826478474000_n.jpg?ccb=11-4&oh=01_Q5AaIPbIR0nlTfG_8MMuzi2-acnyFgrkrSryGsD9ENGEWFRK&oe=666B14AC&_nc_sid=e6ed6c&_nc_cat=111'
                        name='Бекмырза'
                    />
                    <StudentInClassRoom
                        img='https://media-fra3-2.cdn.whatsapp.net/v/t61.24694-24/380031688_208130662378716_5098166767387452390_n.jpg?ccb=11-4&oh=01_Q5AaIFyscYhc98kk3LXX7sNtsQ-_rkXyDoMKbhocmC4a-0Az&oe=666B0681&_nc_sid=e6ed6c&_nc_cat=109'
                        name='Бекмырза'
                    />
                </ListInClassRoom>
            </MainInnerLayout>
            <Footer/>
        </MainLayout>
    );
};