import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './ReleaseHead.module.scss';
import { baseURL } from '../../../../../axios';
import BandLink from '../../../../../components/BandLink/BandLink.component';
import InfoOutline from '../../../../../components/Icons/InfoOutline';
import PlayOutline from '../../../../../components/Icons/PlayOutline';
import ModalWindow from '../../../../../components/ModalWindow/ModalWindow.component';
import RoundedButton from '../../../../../components/RoundedButton/RoundedButton.component';
import { ReleaseType } from '../../../../../types/types';

type ReleaseHeadType = {
    release: ReleaseType;
};

const ReleaseHead: React.FC<ReleaseHeadType> = ({ release }) => {
    const { artists, cover, title, genre, year } = release;
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [showInfo, setShowInfo] = React.useState<boolean>(false);
    const { t } = useTranslation();

    const handleInfoVisability = () => setShowInfo(!showInfo);

    return (
        <div>
            <div className={styles.head}>
                <img src={baseURL + cover} alt="Cover" />
                <div className={styles.releaseInfo}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.rowInfo}>
                        <span className={styles.type}>{genre}</span>•
                        <span className={styles.artist}>
                            {artists.map(a => a.nickName)}
                        </span>
                        •<span className={styles.year}>{year}</span>
                    </div>
                    <div className={styles.buttons}>
                        <RoundedButton
                            title={t('fullRelease.listen')}
                            className={styles.button}
                            icon={<PlayOutline />}
                            onClick={() => setShowModal(true)}
                        />
                        <RoundedButton
                            title={t('fullRelease.info')}
                            className={styles.button}
                            icon={<InfoOutline />}
                            onClick={handleInfoVisability}
                        />
                    </div>
                    {showModal && (
                        <ModalWindow close={() => setShowModal(false)} borderRadius={20}>
                            <BandLink release={release} />
                        </ModalWindow>
                    )}
                </div>
            </div>
            <Collapsible visible={showInfo} className={styles.info}>
                {release.about}
            </Collapsible>
        </div>
    );
};

type CollapsibleType = {
    className?: string;
    visible: boolean;
    children: React.ReactNode;
    initial?: boolean;
};

const Collapsible: React.FC<CollapsibleType> = ({
    className,
    visible,
    children,
    initial = false,
}) => {
    return (
        <AnimatePresence initial={initial}>
            {visible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={className}
                >
                    <div>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ReleaseHead;
