'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Footer from "../../components/ui/footer";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";
import {FC, ReactNode} from "react";

export default function ProfilePage(): ReactNode {

    return (
        <MainLayout>
            <Header isAuth={true}/>
            <MainInnerLayout>

            </MainInnerLayout>
            <Footer/>
        </MainLayout>
    );
};