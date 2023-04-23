import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useParams } from 'react-router-dom';

import styles from './FullArtist.module.scss';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchArtist } from '../../../redux/slices/artistSlice';
import { getYearFromBirthdate } from '../../../utils/date';
import Release from '../../Discography/components/Release/Release.component';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1920 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1500, min: 1140 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1139, min: 930 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 929, min: 0 },
        items: 1,
    },
};

const FullArtist = () => {
    const dispatch = useAppDispatch();
    const artist = useAppSelector(state => state.artist.artist);

    const { id } = useParams();

    React.useEffect(() => {
        dispatch(fetchArtist(id));
    }, []);

    return (
        <div className={styles.root}>
            {artist ? (
                <>
                    <img
                        src="../src/assets/vadim.jpg"
                        alt="Artist"
                        className={styles.image}
                    />
                    <div className={styles.info}>
                        <div className={styles.nickname}>{artist.nickName}</div>
                        <div className={styles.name}>
                            {artist.fullName} • {getYearFromBirthdate(artist.birthDate)}
                        </div>
                        <div className={styles.about}>{artist.about}</div>
                        <div className={styles.carouselWrapper}>
                            <div className={styles.carouselContainer}>
                                <Carousel
                                    responsive={responsive}
                                    containerClass={styles.carouselContainer}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    itemClass={styles.carouselItem}
                                >
                                    {artist.releases.map(r => (
                                        <Release release={r} showYear />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};

export default FullArtist;
