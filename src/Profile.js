import React from 'react';
import {WithRouter} from 'react-router-dom';
import WithRouterSample from './WithRouterSample';


const data ={
    seonwoong: {
        name: '남선웅',
        description: '리액트 좋아하는 개발자'
    },
    minhwa: {
        name:'최민화',
        description:'잠꾸러기'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
return (
    <div>
        <h3>{username}({profile.name})</h3>
        <p>{profile.description}</p>
        <WithRouterSample/>
    </div>
);
};

export default Profile;