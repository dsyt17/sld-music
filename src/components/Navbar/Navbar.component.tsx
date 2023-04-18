import React from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

type menuItemType = {
    to: string;
    title: string;
};

const Navbar = () => {
    const pathname = window.location.pathname;
    const isHome = pathname === '/';

    const [active, setActive] = React.useState(pathname);
    const { t } = useTranslation();

    const menuItems: Array<menuItemType> = [
        { to: '/', title: t('navbar.home') },
        { to: '/about', title: t('navbar.about') },
        { to: '/discography', title: t('navbar.music') },
        { to: '/projects', title: t('navbar.projects') },
        { to: '/artists', title: t('navbar.artists') },
    ];

    return (
        <div className={classNames(styles.root, isHome && styles.noBG)}>
            {menuItems.map(el => (
                <MenuItem
                    to={el.to}
                    title={el.title}
                    key={el.to}
                    active={active === el.to}
                    onClick={() => setActive(el.to)}
                />
            ))}
        </div>
    );
};

const MenuItem: React.FC<{
    to: string;
    title: string;
    active: boolean;
    onClick: () => void;
}> = ({ title, to, active, onClick }) => {
    return (
        <motion.div>
            <Link to={to} className={styles.item} onClick={onClick}>
                {title}
                {active && <ActiveLine />}
            </Link>
        </motion.div>
    );
};

const ActiveLine = () => {
    return <motion.div layoutId="activeItem" className={styles.activeLine} />;
};

export default Navbar;
