import { Header } from 'layouts';
import React from 'react';
import Styles from './About.page.module.css';

export const AboutPage = (props) => {

    return (
        <div>
            <Header title="Github Search" />

            <div className={Styles.container}>
                <h2>About Page</h2>
                <p>This app is github search</p>
            </div>

        </div>
    );
};
