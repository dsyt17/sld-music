import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './ReleaseHead.module.scss';
import BandLink from '../../../../../components/BandLink/BandLink.component';
import PlayOutline from '../../../../../components/Icons/PlayOutline';
import ModalWindow from '../../../../../components/ModalWindow/ModalWindow.component';
import RoundedButton from '../../../../../components/RoundedButton/RoundedButton.component';
import { ReleaseType } from '../../../../../types/types';

type ReleaseHeadType = {
    release: ReleaseType;
};

const ReleaseHead: React.FC<ReleaseHeadType> = ({ release }) => {
    const { artist, cover, title, type, year } = release;
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <div className={styles.head}>
            <img src={cover} alt="Cover" />
            <div className={styles.releaseInfo}>
                <div className={styles.title}>{title}</div>
                <div className={styles.rowInfo}>
                    <span className={styles.type}>{type}</span>•
                    <span className={styles.artist}>{artist}</span>•
                    <span className={styles.year}>{year}</span>
                </div>
                <RoundedButton
                    title={t('fullRelease.listen')}
                    className={styles.button}
                    icon={<PlayOutline />}
                    onClick={() => setShowModal(true)}
                />
                {showModal && (
                    <ModalWindow close={() => setShowModal(false)} borderRadius={20}>
                        <BandLink release={release} />
                    </ModalWindow>
                )}
            </div>
        </div>
    );
};

export default ReleaseHead;
