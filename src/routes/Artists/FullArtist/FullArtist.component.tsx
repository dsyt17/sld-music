import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './FullArtist.module.scss';
import { ReleaseType } from '../../../types/types';
import Release from '../../Discography/components/Release/Release.component';

const releases: ReleaseType = {
    id: 1,
    artists: [
        {
            _id: 'sdf',
            nickName: 'Ys1',
        },
        {
            _id: 'sdf',
            nickName: 'Ys2',
        },
    ],
    cover: '../src/assets/secta.jpg',
    title: 'Секта1',
    year: '2021',
};

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
    return (
        <div className={styles.root}>
            <img src="../src/assets/vadim.jpg" alt="Artist" className={styles.image} />
            <div className={styles.info}>
                <div className={styles.nickname}>Yung Sleep</div>
                <div className={styles.name}>Vadim Stenin • 21</div>
                <div className={styles.about}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem
                    blanditiis ducimus voluptate libero possimus laudantium fugiat ratione
                    quam labore modi quas voluptas adipisci, ullam nisi eveniet, dolorem
                    temporibus impedit.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eum autem blanditiis ducimus voluptate libero possimus
                    laudantium fugiat ratione quam labore modi quas voluptas adipisci,
                    ullam nisi eveniet, dolorem temporibus impedit.
                </div>
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
                            <Release release={releases} showYear />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                            <Release release={releases} />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullArtist;
