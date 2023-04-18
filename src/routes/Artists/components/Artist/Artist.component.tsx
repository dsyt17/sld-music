import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Artist.module.scss';

const Artist = () => {
    return (
        <Link to={`/artists/3`} className={styles.root}>
            <img src="./src/assets/vadim.jpg" alt="Artist"></img>
            <div>Yung Sleep</div>
        </Link>
    );
};

export default Artist;
