import React from 'react';

import styles from './Divider.module.scss';

type DividerProps = {
    year: number;
};

const Divider: React.FC<DividerProps> = ({ year }) => {
    return (
        <div className={styles.divider}>
            {year}
            <div className={styles.dividerLine}></div>
        </div>
    );
};

export default Divider;
