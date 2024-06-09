import {LucideIcon} from "lucide-react";

export interface IAboutUser {
    full_name: string,
    post: string,
    img: string,
    socialNetwork: Array<ISocialNetwork>
};

export interface ISocialNetwork {
    name: string,
    svg: LucideIcon,
    link: string,
}