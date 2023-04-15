import React from 'react';

import classNames from 'classnames';

import styles from './RoundedButton.module.scss';

type RoundedButtonType = {
    title: string;
    className?: string;
    icon?: React.ReactNode;
    onClick: () => void;
};

const RoundedButton: React.FC<RoundedButtonType> = ({ title, className, icon, onClick }) => {
    return (
        <button className={classNames(styles.root, className)} onClick={onClick}>
            {icon}
            {title}
        </button>
    );
};

export default RoundedButton;
