import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';

const Footer = () => {
    const { t } = useTranslation();

    return <footer className={styles.root}>2017 - 2023</footer>;
};

export default Footer;
