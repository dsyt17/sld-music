import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

const Footer = () => {
    const { t } = useTranslation();

    return <div className={styles.root}>2017 - 2023</div>;
};

export default Footer;
