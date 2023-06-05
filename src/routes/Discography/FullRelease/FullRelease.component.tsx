import React from 'react';

import { useParams } from 'react-router-dom';

import ReleaseHead from './components/ReleaseHead/ReleaseHead.component';
import Track from './components/Track/Track.component';
import styles from './FullRelease.module.scss';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchReleaseByLink } from '../../../redux/slices/releasesSlice';

const FullRelease = () => {
    const dispatch = useAppDispatch();
    const release = useAppSelector(state => state.releases.releaseByLink);
    const { id } = useParams();

    React.useEffect(() => {
        dispatch(fetchReleaseByLink(id));
    }, []);

    return (
        <div className={styles.root}>
            {release?._id ? (
                <>
                    <ReleaseHead release={release} />
                    <div className={styles.trackList}>
                        {release.songs?.map((s, i) => (
                            <Track
                                key={s._id}
                                duration={s.duration}
                                title={s.title}
                                number={i + 1}
                                artists={s.artists}
                                prod={s.prod}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};

export default FullRelease;
