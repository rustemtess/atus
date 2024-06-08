'use client';

import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/ui/header";
import Menu from "@/components/ui/menu";
import MainInnerLayout from "@/components/layouts/MainInnerLayout";

export default function Home() {
    return (
      <MainLayout>
          <Header isAuth={true} />
          <MainInnerLayout>
              123
          </MainInnerLayout>
          <Menu />
      </MainLayout>
    );
};