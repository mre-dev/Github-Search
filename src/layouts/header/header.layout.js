import React from 'react';
import Styles from './header.module.css';
import { AiFillGithub } from 'assets/images/icons';
import { Navigation } from 'components';
import { PATHS } from 'configs/routes.config';

export const Header = (props) => {
    return (
        <header>
            <div className={Styles.headerLeft}>
                <AiFillGithub />
                <h1>{props.title}</h1>
            </div>
            <div className={Styles.headerRight}>
                <ul>
                    <li><Navigation link={PATHS.HOME} text="Home" internal/></li>
                    <li><Navigation link={PATHS.ABOUT} text="About" internal/></li>
                </ul>
            </div>
        </header>
    );
}
