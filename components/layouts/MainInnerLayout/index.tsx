import {IMainInnerLayout} from './layout.interface';
import {FC} from "react";
import styles from './layout.module.scss';

const MainInnerLayout: FC<IMainInnerLayout> = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default MainInnerLayout;