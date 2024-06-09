'use client';

export const getTheme = (): string => {
    if (typeof window !== 'undefined') {
        const currentTheme: string | null = localStorage.getItem('theme');
        if (currentTheme === 'light' || currentTheme === 'dark') {
            return currentTheme;
        }
        localStorage.setItem('theme', 'light');
        return 'light';
    }
    return 'light';
};

export const changeTheme = (): string => {
    if (typeof window !== 'undefined') {
        if (isDark()) {
            changeToHTML();
            localStorage.setItem('theme', 'light');
        } else {
            changeToHTML(true);
            localStorage.setItem('theme', 'dark');
        }
        return getTheme();
    }
    return 'light';
};

export const changeToHTML = (toDark: boolean = false) => {
    if (typeof document !== 'undefined') {
        if (!toDark) document.documentElement.classList.remove('dark');
        else document.documentElement.classList.add('dark');
    }
};

export const isDark = (): boolean => {
    return getTheme() === 'dark';
};

export const isLight = (): boolean => {
    return getTheme() === 'light';
};

export const initTheme = () => {
    const theme = getTheme();
    if (theme === 'dark') changeToHTML(true);
    else changeToHTML();
    document.documentElement.classList.remove('hidden');
};
