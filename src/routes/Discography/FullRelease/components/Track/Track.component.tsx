import React from 'react';

import styles from './Track.module.scss';

type TrackType = {
    number: number;
    title: string;
    duration: string;
};

const Track: React.FC<TrackType> = ({ number, duration, title }) => {
    return (
        <div className={styles.track}>
            <span className={styles.numAndTitleWrapper}>
                <div className={styles.number}>{number}</div>
                <div>{title}</div>
            </span>
            <span>{duration}</span>
        </div>
    );
};

export default Track;
