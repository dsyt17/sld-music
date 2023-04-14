import React from 'react';

import { motion } from 'framer-motion';

import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <motion.div
                    initial={{ x: '200%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                // transition={{ delay: 0.2, duration: 0.5 }}
                >
                    SLD Music
                </motion.div>
            </div>
            <motion.div
                className={styles.title}
                initial={{ x: '-200%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            // transition={{ delay: 0.2, duration: 0.5 }}
            >
                Творческое объединение молодых музыкантов основанное в 2017 году и создающую музыку
                различных жанров.
            </motion.div>
        </div>
    );
};

export default About;
