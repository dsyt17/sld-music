import React from 'react';

import { motion } from 'framer-motion';

import styles from './ModalWindow.module.scss';

type ModalWindowType = {
    close: () => void;
    children: React.ReactNode;
    borderRadius?: number;
};

const ModalWindow: React.FC<ModalWindowType> = ({ close, children, borderRadius = 50 }) => {
    const variantsModal = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const variantsContent = {
        visible: { y: [1000, 0, 0], scale: 1 },
        hidden: { scale: 0 },
    };

    return (
        <motion.div
            animate={'visible'}
            initial={'hidden'}
            exit={'hidden'}
            variants={variantsModal}
            className={styles.modal}
            onClick={close}
        >
            <motion.div
                animate={'visible'}
                initial={'hidden'}
                exit={'hidden'}
                transition={{ duration: 0.4 }}
                variants={variantsContent}
                className={styles.content}
                onClick={e => e.stopPropagation()}
                style={{ borderRadius: borderRadius }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default ModalWindow;
