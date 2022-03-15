import { GetUsers } from 'api/users.api';
import { Button, Input, UserCard } from 'components';
import { Header } from 'layouts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from 'redux/actions';
import Styles from './Home.page.module.css';

export const HomePage = (props) => {

    const customDispatch = useDispatch();
    const [userSelector , setUserSelector] = React.useState(useSelector(state => state.userReducer));

    const [users, setUsers] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.searchInput.value;
        GetUsers(searchValue).then(response => {
            setUsers(response.data.items);
            customDispatch(addUsers(response.data.items));
        });
    }

    useEffect(() => {
        if(userSelector.length > 0){
            setUsers(userSelector);
        }
    }, [userSelector]);

    return (
        <div>
            <Header title="Github Search" />

            <div className={Styles.container}>
                <form onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Search Users ...' id='searchInput' name='searchInput'/>
                    <Button type='dark' size='large' text='Submit' id='searchBtn' btnType='submit' />
                    <Button type='light' size='large' text='Clear' id='resetBtn' btnType='reset' />
                </form>

                <div className={Styles.resultContainer}>
                    {
                        users.length > 0 &&
                        users.map((user, index) => {
                            return <UserCard key={index} avatar={user.avatar_url} user={user.login}/>
                        })
                    }
                </div>
            </div>

        </div>
    );
};
