import { Button, Input } from 'components';
import { Header } from 'layouts';
import React from 'react';
import Styles from './Home.page.module.css';

export const HomePage = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.searchInput.value;
        console.log("searchValue : ", searchValue);
    }

    return (
        <div>
            <Header title="Github Search" />

            <div className={Styles.container}>
                <form onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Search Users ...' id='searchInput' name='searchInput'/>
                    <Button type='dark' size='large' text='Submit' id='searchBtn' btnType='submit' />
                    <Button type='light' size='large' text='Clear' id='resetBtn' btnType='reset' />
                </form>
            </div>

        </div>
    );
};
