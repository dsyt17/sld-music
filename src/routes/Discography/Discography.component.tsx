import React from 'react';

import Divider from './components/Divider/Divider.component';
import Release from './components/Release/Release.component';
import ReleaseCarousel from './components/ReleaseCarousel/ReleaseCarousel.component';
import styles from './Discography.module.scss';
import { ReleaseType } from '../../types/types';

const releases: Array<ReleaseType> = [
    {
        id: 1,
        artist: 'Yung Sleep',
        cover: './src/assets/secta.jpg',
        title: 'Секта1',
    },
    {
        id: 2,
        artist: 'Yung Sleep',
        cover: './src/assets/secta.jpg',
        title: 'Секта2',
    },
    {
        id: 3,
        artist: 'Yung Sleep',
        cover: './src/assets/secta.jpg',
        title: 'Секта3',
    },
    { id: 4, artist: 'Yung Sleep', cover: './src/assets/secta.jpg', title: 'Секта4' },
    { id: 5, artist: 'Yung Sleep', cover: './src/assets/secta.jpg', title: 'Секта5' },
];

const Discography = () => {
    const [active, setActive] = React.useState<number>(1);

    return (
        <div className={styles.root}>
            <Divider year={2021} />
            <ReleaseCarousel>
                {releases.map(r => (
                    <Release
                        key={r.id}
                        release={r}
                        onClick={setActive}
                        className={r.id === active ? styles.activeRelease : ''}
                    />
                ))}
            </ReleaseCarousel>
        </div>
    );
};

export default Discography;
