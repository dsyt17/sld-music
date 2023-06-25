import React from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';
import AnimatedTextCharacter from '../../components/TextWithAnimate/AnimatedTextCharacter';
import AnimatedTextWord from '../../components/TextWithAnimate/AnimatedTextWord';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const About = () => {
    const { t } = useTranslation();
    useDocumentTitle(t('navbar.about'));

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <AnimatedTextCharacter text="SLD Music" />
            </div>
            <Text header="Первые шаги">
                Наша история началась в 2017 году в спальном районе провинциального города
                России.
                <div className={styles.brake} />
                Это время у многих ассоциируется с расцветом русской музыкальной
                индустрии, что не обошло стороной и двух друзей которые решили попробовать
                свои силы в создании музыки.
                <div className={styles.brake} />
                Yung Sleep и Young Dsyt, тандем который был рожден во время расцвета
                «русского грайма», с 2017 по 2019 подписывая при публикации свои демо-
                версии треков аббревиатурой SLD, стал истоком развития команды
                интернационального уровня.
                <div className={styles.brake} />
                Первый официально выпущенный сингл - «мотоспорт» в 2019 году, сформировал
                основу начального состава команды - SLD GANG.
                <div className={styles.brake} />
                В первый состав команды вошли - битмейкер Deskq B, и исполнитель
                BellFleep, чуть позже к команде присоединились исполнители Medal и KRIK и
                битмейкер/исполнитель Alone (Tenselence).
                <div className={styles.brake} />В этом составе SLD GANG начинает работу
                над первым официальным командным альбомом - “Tokyo Drift” который
                благополучно выходит в свет 26.09.2019
            </Text>
            <Card direction="left" image="./src/assets/temp.jpg">
                Тут картинки или чето крутое
            </Card>
            <Text header="Смена вектора">
                В январе 2020 состав команды претерпевает кардинальные изменения Medal,
                krik, BellFleep и Desq B покидают объединение в связи с отличающимся
                взглядами на творчество и дальнейшее развитие проекта, в то же время к
                команде присоединяются битмейкер/исполнитель Nimb и
                звукорежиссер/исполнитель Young Wake-up.
                <div className={styles.brake} />
                В конце января создается площадка для продажи услуг от членов объединения
                под названием SLD STUDIO которая позже перерастет в отдельное направление
                творчества команды связанное с дизайном, группу ВКонтакте
                BloodMoonWorkshop.
                <div className={styles.brake} />
                В апреле SLD GANG принимает в свои ряды - исполнителя Dirty Mill и
                графического дизайнера Дашу BloodMoon.
                <div className={styles.brake} />
                В конце 2020 года после долгого затишья выходит сатирическая пластинка из
                трех треков - Tik Tok gang.
                <div className={styles.brake} />
                В январе 2021 года к команде присоединяется SINTH.
                <div className={styles.brake} />В июне 2021 года команда подписывает
                договор с sandesaire, после чего переименовывается в SLD Music и открывает
                проект для общей музыкальной дистрибуции IMS (International music station)
            </Text>
            <Card direction="right" image="./src/assets/temp2.jpg">
                Тут картинки или чето крутое
            </Card>
            <Text header="Депрессия">
                В сентябре 2021 года YWU берет перерыв в творчестве, что лишает
                объединение основного звукорежиссера. Помимо этого в ноябре 2021 идейный
                лидер команды Yung Sleep убывает для прохождения военной службы, что
                негативным образом сказывается на творческой деятельности всего
                объединения.
            </Text>
            <Card direction="left" image="./src/assets/temp3.jpg">
                Тут картинки или чето крутое
            </Card>
            <Text header="Новое дыхание">
                В ноябре 2022 Yung Sleep и YWU возвращаются в состав команды так же к
                составу присоединяется исполнитель LidQid.
                <div className={styles.brake} /> Эта история еще не дописана и вы можете
                стать ее частью…
            </Text>
        </div>
    );
};

const Card: React.FC<{
    children: React.ReactNode;
    direction: 'left' | 'right';
    image: string;
}> = ({ children, direction, image }) => {
    return (
        <motion.div
            initial={{
                x: direction === 'left' ? '-50%' : '50%',
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={classNames(
                styles.card,
                direction === 'left' ? styles.left : styles.right,
            )}
        >
            <img src={image} alt="ss" className={styles.cardImage} />
            {children}
        </motion.div>
    );
};

const Text: React.FC<{ children: React.ReactNode; header: string }> = ({
    children,
    header,
}) => {
    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.title}
        >
            <h1>{header}</h1>

            <div className={styles.mainText}>{children}</div>
        </motion.div>
    );
};

export default About;
