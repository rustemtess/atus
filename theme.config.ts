export const getTheme = (): string => {
    const currentTheme: string | null = localStorage.getItem('theme');
    if(currentTheme && currentTheme === 'light' || currentTheme === 'dark')
        return currentTheme;
    localStorage.setItem('theme', 'light');
    return 'light';
};

export const changeTheme = (): string => {
    if (isDark()) {
        changeToHTML();
        localStorage.setItem('theme', 'light');
    } else {
        changeToHTML(true);
        localStorage.setItem('theme', 'dark');
    }
    return getTheme();
};

export const changeToHTML = (toDark: boolean = false) => {
    if(!toDark) document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');
};

export const isDark = (): boolean => {
    return getTheme() === 'dark';
};

export const isLight = (): boolean => {
    return getTheme() === 'light';
};
