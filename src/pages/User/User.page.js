import React, { useEffect } from 'react';
import Styles from './User.page.module.css';
import { Button, Navigation } from 'components';
import { GetUserDetails, GetUserRepos } from 'api/users.api';
import { Header } from 'layouts';
import { GiConfirmed, MdCancel } from 'assets/images/icons';
import { PATHS } from 'configs/routes.config';
import { RotatingLines } from  'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';

export const UserPage = (props) => {

    const Nav = useNavigate();
    const params = useParams();
    const [userData, setUserData] = React.useState({});
    const [showSpinner, setShowSpinner] = React.useState(true);

    useEffect(() => {
        if(params.userName) {
            GetUserDetails(params.userName).then(res => {
                GetUserRepos(params.userName).then(repos => {
                    setUserData({
                        ...res.data,
                        repos
                    });
                });
            });
        }
    }, [params.userName]);

    useEffect(() => {
        if(Object.keys(userData).length > 0) {
            setShowSpinner(false);
        }
    }, [userData]);

    return (
        <div className={Styles.userPage}>
            <Header title="Github Search" />
            <div className={Styles.spinner}>
                <RotatingLines width="100" strokeColor="#dc3545" visible={showSpinner} className="spinner" />
            </div>
            {
                userData.login &&
                <div className={Styles.container}>
                    <div className={Styles.ccontainerHeader}>
                        <Button
                            className={Styles.btnBack}
                            text="Back To Search"
                            btnType='button'
                            type='light'
                            size='small'
                            click={(e) => {
                                e.preventDefault();
                                Nav(PATHS.HOME);
                            }} />
                            <p>hireable : {
                                userData.hireable ? <GiConfirmed style={{color: "#28a745"}}/> : <MdCancel style={{color: "orangered"}}/>
                            }</p>
                    </div>

                    <div className={Styles.ccontainerBodyHeader}>
                        <div className={Styles.ccontainerBodyHeaderLeft}>
                            <img src={userData.avatar_url} alt="avatar" />
                            <p>{userData.name}</p>
                            <p>{userData.location}</p>
                        </div>
                        <div className={Styles.ccontainerBodyHeaderRight}>
                            <div className={Styles.bio}>
                                <strong>Bio : </strong>
                                <p>{userData.bio}</p>
                            </div>

                            <div className={Styles.visitGithubBox}>
                                <Button text="Visit Github Page" btnType='button' type='dark' size='small' click={(e) => {
                                    e.preventDefault();
                                    window.open(userData.html_url, '_blank');
                                }}/>
                            </div>

                            <div className={Styles.infoBox}>
                                <p>Login : {userData.login}</p>
                                <p>Company : {userData.company}</p>
                                <p>Website : {userData.blog}</p>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.ccontainerBodyUserInfo}>
                        <p> Followers : {userData.followers}</p>
                        <p> Following : {userData.following}</p>
                        <p> Public Repos : {userData.public_repos}</p>
                        <p> Public Gists : {userData.public_gists}</p>
                    </div>

                    <div className={Styles.ccontainerBodyRepos}>
                        {
                            userData.repos.data && userData.repos.data.map((repo, index) => {
                                return (
                                    <div className={Styles.repo} key={index}>
                                        <Navigation text={repo.name} link={repo.html_url} external/>
                                        <p>{repo.description}</p>
                                        <div className={Styles.repoInfo}>
                                            <p>language : {repo.language}</p>
                                            <p>starts : {repo.stargazers_count}</p>
                                            <p>forks : {repo.forks_count}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    );
};
