import React from 'react';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

import styles from './Release.module.scss';
import { baseURL } from '../../../../axios';
import { splitArtistsNames } from '../../../../utils/splitArtistsNames';

type ReleaseProps = {
    release: {
        _id: string;
        cover: string;
        title: string;
        artists: Array<{
            _id: string;
            nickName: string;
        }>;
        year: number;
        link: string;
    };
    onClick?: (id: number) => void;
    className?: string;
    showYear?: boolean;
};

const Release: React.FC<ReleaseProps> = ({
    className,
    release,
    onClick,
    showYear = false,
}) => {
    return (
        <Link
            to={`/discography/${release.link}`}
            className={classNames(styles.release, className)}
        >
            <img alt="Cover" src={`${baseURL}${release.cover}`} />
            <div className={styles.title}>{release.title}</div>
            <div className={styles.artist}>{splitArtistsNames(release.artists)}</div>
            {showYear && <div className={styles.year}>{release.year}</div>}
        </Link>
    );
};

export default Release;
