import React from 'react';

import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

import styles from './Error404.module.scss';
import RoundedButton from '../RoundedButton/RoundedButton.component';

const Error404 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.root}>
            <div>{t('error404.title')}</div>
            <div className={styles.buttons}>
                <RoundedButton
                    className={styles.button}
                    title={t('error404.back')}
                    onClick={goBack}
                />
                <RoundedButton
                    className={styles.button}
                    title={t('error404.home')}
                    onClick={goHome}
                />
            </div>
        </div>
    );
};

export default Error404;
