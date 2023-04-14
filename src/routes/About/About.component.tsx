import React from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <motion.div initial={{ x: '200%', opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    SLD Music
                </motion.div>
            </div>
            <Text>
                Творческое объединение молодых музыкантов основанное в 2017 году и создающую музыку
                различных жанров. Творческое объединение молодых музыкантов основанное в 2017 году и
                создающую музыку различных жанров. Творческое объединение молодых музыкантов
                основанное в 2017 году и создающую музыку различных жанров.Творческое объединение
                молодых музыкантов основанное в 2017 году и создающую музыку различных
                жанров.Творческое объединение молодых музыкантов основанное в 2017 году и создающую
                музыку различных жанров.
            </Text>
            <Card direction="left">Тут картинки или чето крутое</Card>
            <Text>
                Творческое объединение молодых музыкантов основанное в 2017 году и создающую музыку
                различных жанров. Творческое объединение молодых музыкантов основанное в 2017 году и
                создающую музыку различных жанров. Творческое объединение молодых музыкантов
                основанное в 2017 году и создающую музыку различных жанров.Творческое объединение
                молодых музыкантов основанное в 2017 году и создающую музыку различных
                жанров.Творческое объединение молодых музыкантов основанное в 2017 году и создающую
                музыку различных жанров.
            </Text>
            <Card direction="right">Тут картинки или чето крутое</Card>
            <Text>
                Творческое объединение молодых музыкантов основанное в 2017 году и создающую музыку
                различных жанров. Творческое объединение молодых музыкантов основанное в 2017 году и
                создающую музыку различных жанров. Творческое объединение молодых музыкантов
                основанное в 2017 году и создающую музыку различных жанров.Творческое объединение
                молодых музыкантов основанное в 2017 году и создающую музыку различных
                жанров.Творческое объединение молодых музыкантов основанное в 2017 году и создающую
                музыку различных жанров.
            </Text>
            <Card direction="left">Тут картинки или чето крутое</Card>
        </div>
    );
};

const Card: React.FC<{ children: React.ReactNode; direction: 'left' | 'right' }> = ({
    children,
    direction,
}) => {
    return (
        <motion.div
            initial={{
                x: direction === 'left' ? '-50%' : '50%',
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={classNames(styles.card, direction === 'left' ? styles.left : styles.right)}
        >
            {children}
        </motion.div>
    );
};

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.title}
        >
            {children}
        </motion.div>
    );
};

export default About;
