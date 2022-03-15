import { Header } from 'layouts';
import React, { Fragment, useEffect } from 'react';
import { useParams, Link  } from 'react-router-dom';
import swal from 'sweetalert';

export const UserPage = (props) => {
    const params = useParams();
    const userName = params.userName;


    useEffect(() => {
        if(!userName) {
            swal('Error', 'Product not found', 'error');
        }
    }, [userName])

    return (
        <div>
            <Header title="Github Search" />
            
            {userName ?
                // if productId is found, render product page
                <Fragment>
                    <h1>User Page {userName}</h1>
                </Fragment>
                :
                // if productId is not found, render 404 page
                <Fragment>
                    <h1>Product Not Found</h1>
                    <Link to={'/'}>Go to Home Page</Link>
                </Fragment>
            }
        </div>
    );
};
