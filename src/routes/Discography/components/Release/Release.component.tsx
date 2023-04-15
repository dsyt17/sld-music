import React from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import styles from './Release.module.scss';
import { ReleaseType } from '../../../../types/types';

type ReleaseProps = {
    release: ReleaseType;
    onClick: (id: number) => void;
    className?: string;
};

const Release: React.FC<ReleaseProps> = ({ className, release, onClick }) => {
    const handleActive = () => {
        onClick(release.id);
    };

    return (
        <Link
            to={`/discography/${release.id}`}
            className={classNames(styles.release, className)}
            onClick={handleActive}
        >
            <img alt="Cover" src={release.cover} />
            <div className={styles.title}>{release.title}</div>
            <div className={styles.artist}>{release.artist}</div>
        </Link>
    );
};

export default Release;
