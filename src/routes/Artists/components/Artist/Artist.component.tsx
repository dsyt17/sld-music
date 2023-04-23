import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './Artist.module.scss';

type ArtistType = {
    index: number;
    className?: string;
};

const Artist: React.FC<ArtistType> = ({ index, className }) => {
    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
        hidden: (i: number) => ({
            opacity: 0,
        }),
    };

    return (
        <motion.div
            initial={'hidden'}
            animate={'visible'}
            transition={{ duration: 0.5 }}
            variants={variants}
            custom={index}
            className={className}
        >
            <Link to={`/artists/yungsleep`} className={styles.root}>
                <img src="./src/assets/vadim.jpg" alt="Artist"></img>
                <div>Yung Sleep</div>
            </Link>
        </motion.div>
    );
};

export default Artist;
