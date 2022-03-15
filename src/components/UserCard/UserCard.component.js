import PropTypes from 'prop-types';
import React from 'react';
import Styles from "assets/styles/components/UserCard/UserCard.module.css";
import { Button } from 'components/Button/Button.component';
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'configs/routes.config';

export const UserCard = (props) => {

    const Nav = useNavigate();

    return (
        <div className={Styles.userCardContainer}>
            <img className={Styles.avatar} src={props.avatar} alt={`${props.user} avatar`} />
            <p className={Styles.userName}>{props.user}</p>
            <Button type='dark' size='small' text='More' id='moreBtn' btnType='button' click={(e) => {
                e.preventDefault();
                Nav(PATHS.USER_DETAILS + props.user);
            }} />
        </div>
    );
};

UserCard.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.string
};