import React from 'react';

import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import styles from './Artists.module.scss';
import Artist from './components/Artist/Artist.component';
import SldOutline from '../../components/Icons/SldOutline';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { fetchArtistsNames } from '../../redux/slices/artistSlice';

const Artists = () => {
    const { t } = useTranslation();
    useDocumentTitle(t('navbar.artists'));

    const dispatch = useAppDispatch();
    const artists = useAppSelector(state => state.artist.artistsNames);

    React.useEffect(() => {
        dispatch(fetchArtistsNames());
    }, []);

    return (
        <div className={styles.root}>
            {artists ? (
                <>
                    <motion.div
                        className={styles.artists}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {artists.map((e, i) => (
                            <div
                                key={e._id}
                                className={styles.artist}
                                style={{ '--i': i }}
                            >
                                <Artist
                                    index={i}
                                    className={styles.item}
                                    link={e.link}
                                    nickName={e.nickName}
                                />
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, filter: 'blur(0)' }}
                        transition={{ duration: 1 }}
                        className={styles.sldIcon}
                    >
                        <SldOutline />
                    </motion.div>
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};

export default Artists;
