import React from 'react';

import Divider from './components/Divider/Divider.component';
import Release from './components/Release/Release.component';
import ReleaseCarousel from './components/ReleaseCarousel/ReleaseCarousel.component';
import styles from './Discography.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchReleases } from '../../redux/slices/releasesSlice';
import { ReleaseType } from '../../types/types';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Discography = () => {
    const dispatch = useAppDispatch();
    const releases = useAppSelector(state => state.releases.items);

    const { t } = useTranslation();
    useDocumentTitle(t('navbar.music'));

    React.useEffect(() => {
        dispatch(fetchReleases());
    }, []);

    const renderReleasesWithYear = (releases: Array<ReleaseType>, year: number) => {
        return releases.map(r => {
            if (r.year === year) {
                return <Release key={r._id} release={r} />;
            }
            return null;
        });
    };

    return (
        <div className={styles.root}>
            {releases.length ? (
                <>
                    <Divider year={2023} />
                    <ReleaseCarousel>
                        {renderReleasesWithYear(releases, 2023)}
                    </ReleaseCarousel>

                    <Divider year={2022} />
                    <ReleaseCarousel>
                        {renderReleasesWithYear(releases, 2022)}
                    </ReleaseCarousel>

                    <Divider year={2021} />
                    <ReleaseCarousel>
                        {renderReleasesWithYear(releases, 2021)}
                    </ReleaseCarousel>

                    <Divider year={2020} />
                    <ReleaseCarousel>
                        {renderReleasesWithYear(releases, 2020)}
                    </ReleaseCarousel>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Discography;
