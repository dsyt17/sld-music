import React from 'react';

import styles from './Home.module.scss';
import backVideo from '../../assets/freesst555555_1.mp4';

const Home = () => {
    return (
        <div className={styles.root}>
            {backVideo && (
                <div className={styles.videoWrapper}>
                    <video
                        src={backVideo}
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className={styles.video}
                    />
                </div>
            )}
            <div style={{ fontWeight: 700, fontSize: 50 }}>Hello Bitches!</div>
        </div>
    );
};

export default Home;
