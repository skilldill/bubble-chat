import { FC, useEffect, useState } from "react";
import styles from './Chat.module.css';
import TailSVG from './message-tail.svg';

type MessageProps = {
    value: string;
    hideTime?: number;
    hidable?: boolean;
}

export const Message: FC<MessageProps> = (props) => {
    const { value, hidable, hideTime = 3000 } = props;

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (hidable) setTimeout(() => setHidden(true), hideTime * 1000);
    }, [hidable, hideTime])

    const classes = hidden ? `${styles.message} ${styles.messageHidden}` : styles.message;

    return (
        <div className={classes}>
            {value}
            <div className={styles.messageTail}>
                <img src={TailSVG} alt="" />
            </div>
        </div>
    );
}