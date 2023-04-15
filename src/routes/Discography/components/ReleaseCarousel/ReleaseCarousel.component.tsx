import React from 'react';

import styles from './ReleaseCarousel.module.scss';

type ReleaseCarouselProps = {
    children: React.ReactNode;
};

const ReleaseCarousel: React.FC<ReleaseCarouselProps> = ({ children }) => {
    return <div className={styles.carousel}>{children}</div>;
};

export default ReleaseCarousel;
