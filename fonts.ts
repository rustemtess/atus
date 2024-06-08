import { Inter } from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import localFont from 'next/font/local';

const inter: NextFont = Inter({ subsets: ["latin"] });
const VKSans: NextFont = localFont( {
    src: '/fonts/vksans/VK_Sans_Display_Regular.ttf',
    variable: '--font-vksans-regular'
} )

export { inter, VKSans }