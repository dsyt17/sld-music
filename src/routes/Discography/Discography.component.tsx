import React from 'react';

import styles from './Discography.module.scss';

const Discography = () => {
    return (
        <div className={styles.root}>
            <Divider year={2021} />
            <ReleaseCarousel>
                <Release />
                <Release />
                <Release />
            </ReleaseCarousel>
            <Divider year={2021} />
            <ReleaseCarousel>
                <Release />
                <Release />
                <Release />
            </ReleaseCarousel>
            <Divider year={2021} />
            <ReleaseCarousel>
                <Release />
                <Release />
                <Release />
            </ReleaseCarousel>
        </div>
    );
};

const Release = () => {
    return (
        <div className={styles.release}>
            <img alt="Cover" src="./public/assets/secta.jpg" />
            <div className={styles.title}>Секта</div>
            <div className={styles.artist}>Yung Sleep</div>
        </div>
    );
};

const ReleaseCarousel = ({ children }) => {
    return <div className={styles.carousel}>{children}</div>;
};

const Divider = ({ year }) => {
    return (
        <div className={styles.divider}>
            {year}
            <div className={styles.dividerLine}></div>
        </div>
    );
};

export default Discography;
