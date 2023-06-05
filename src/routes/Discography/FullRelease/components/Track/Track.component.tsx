import React from 'react';

import styles from './Track.module.scss';
import { Link } from 'react-router-dom';

type TrackType = {
    number: number;
    title: string;
    duration: string;
    artists: Array<{
        _id: string;
        nickName: string;
        link: string;
    }>;
    prod?: string | null;
};

const Track: React.FC<TrackType> = ({ number, duration, title, artists, prod }) => {
    return (
        <div className={styles.track}>
            <span className={styles.numAndTitleWrapper}>
                <div className={styles.number}>{number}</div>
                <div>{title}</div>
                <div className={styles.artists}>
                    {artists.map(a => (
                        <Link to={`/artists/${a.link}`}>{a.nickName}</Link>
                    ))}
                </div>
                {prod && <div className={styles.prod}>(prod. by {prod})</div>}
            </span>
            <span>{duration}</span>
        </div>
    );
};

export default Track;
