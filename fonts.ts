import { Inter } from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import localFont from 'next/font/local';

const inter: NextFont = Inter({ subsets: ["latin"] });
const VKSans: NextFont = localFont( {
    src: '/fonts/vksans/VK_Sans_Display_Regular.ttf',
    variable: '--font-vksans-regular'
} );
const VKSansMedium: NextFont = localFont( {
    src: '/fonts/vksans/VKSansDisplay-Medium.ttf',
    variable: '--font-vksans-medium'
} );
const GoogleSans: NextFont = localFont( {
    src: '/fonts/googlesans/GoogleSans-Regular.ttf',
    variable: '--font-googlesans-regular'
} );
const GoogleSansMedium: NextFont = localFont( {
    src: '/fonts/googlesans/GoogleSans-Medium.ttf',
    variable: '--font-googlesans-medium'
} );
export { inter, VKSans, VKSansMedium, GoogleSans, GoogleSansMedium };