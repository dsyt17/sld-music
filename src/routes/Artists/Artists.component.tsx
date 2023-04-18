import React from 'react';

import styles from './Artists.module.scss';
import Artist from './components/Artist/Artist.component';

const Artists = () => {
    return (
        <div className={styles.root}>
            <div className={styles.artists}>
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        </div>
    );
};

export default Artists;
