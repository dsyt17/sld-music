import React from 'react';

import { motion } from 'framer-motion';

import styles from './Artists.module.scss';
import Artist from './components/Artist/Artist.component';
import SldOutline from '../../components/Icons/SldOutline';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Artists = () => {
    return (
        <div className={styles.root}>
            <motion.div
                className={styles.artists}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {items.map((e, i) => (
                    <div key={e} className={styles.artist} style={{ '--i': i }}>
                        <Artist index={i} className={styles.item} />
                    </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0)' }}
                transition={{ duration: 1 }}
                className={styles.sldIcon}
            >
                <SldOutline />
            </motion.div>
        </div>
    );
};

export default Artists;
