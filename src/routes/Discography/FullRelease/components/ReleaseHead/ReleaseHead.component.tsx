import React from 'react';

import styles from './ReleaseHead.module.scss';
import PlayOutline from '../../../../../components/Icons/PlayOutline';
import RoundedButton from '../../../../../components/RoundedButton/RoundedButton.component';

type ReleaseHeadType = {
    cover: string;
    title: string;
    type: string;
    artist: string;
    year: string;
};

const ReleaseHead: React.FC<ReleaseHeadType> = ({ artist, cover, title, type, year }) => {
    const [showModal, setShowModal] = React.useState<boolean>(false);

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
                    title="Прослушать"
                    className={styles.button}
                    icon={<PlayOutline />}
                    onClick={() => setShowModal(true)}
                />
                {showModal && <ModalWindow />}
            </div>
        </div>
    );
};

const ModalWindow = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}></div>
        </div>
    );
};

export default ReleaseHead;
