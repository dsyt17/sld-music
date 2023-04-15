import React from 'react';

import ReleaseHead from './components/ReleaseHead/ReleaseHead.component';
import Track from './components/Track/Track.component';
import styles from './FullRelease.module.scss';
import { ReleaseType } from '../../../types/types';

const release: ReleaseType = {
    artist: 'Yung Sleep',
    cover: '../src/assets/secta.jpg',
    title: 'Секта',
    type: 'Сингл',
    year: '2021',
};

const FullRelease = () => {
    return (
        <div className={styles.root}>
            <ReleaseHead release={release} />
            <div className={styles.trackList}>
                <Track duration="2:28" title="Секта" number={1} />
                <Track duration="2:28" title="Секта" number={10} />
                <Track duration="2:28" title="Секта" number={12} />
                <Track duration="2:28" title="Секта" number={4} />
                <Track duration="2:28" title="Секта" number={6} />
            </div>
        </div>
    );
};

export default FullRelease;
