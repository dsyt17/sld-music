import React from 'react';

import styles from './BandLink.module.scss';
import { baseURL } from '../../axios';
import { ReleaseType } from '../../types/types';

type BandLinkType = {
    release: ReleaseType;
};

const BandLink: React.FC<BandLinkType> = ({ release }) => {
    const { artists, cover, title, genre, year } = release;

    return (
        <div className={styles.root}>
            <img src={baseURL + cover} alt="Cover" />
            <div className={styles.info}>
                <div className={styles.artist}>{artists.map(a => a.nickName)}</div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <span>Yandex Music</span>
                    <span className={styles.button}>Слушать</span>
                </div>
                <div className={styles.item}>
                    <span>Apple Music</span>
                    <span className={styles.button}>Слушать</span>
                </div>
                <div className={styles.item}>
                    <span>Spotify</span>
                    <span className={styles.button}>Слушать</span>
                </div>
                <div className={styles.item}>
                    <span>Amazon</span>
                    <span className={styles.button}>Купить</span>
                </div>
                <div className={styles.item}>
                    <span>iTunes</span>
                    <span className={styles.button}>Купить</span>
                </div>
                <div className={styles.item}>
                    <span>VK Музыка</span>
                    <span className={styles.button}>Слушать</span>
                </div>
            </div>
        </div>
    );
};

export default BandLink;
