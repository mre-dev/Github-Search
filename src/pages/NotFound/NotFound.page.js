import { Navigation } from 'components';
import { Header } from 'layouts';
import React from 'react';

export const NotFoundPage = (props) => {

    return (
        <div>
            <Header title="Github Search" />
            <div style={{
                fontSize: '3.2rem',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textShadow: '0rem 0rem 1rem black',
                textAlign: 'center'
            }}>
                <p>Page Not Found</p>
                <Navigation link='/' text='Go Home' internal/>
            </div>
        </div>
    );
};
