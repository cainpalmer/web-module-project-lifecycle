import React from 'react';

const User = (props) => {
    return(
        <div className = 'cards'>
            <div className = 'card'>
                <img src = {props.avatar} alt = '' />
                <div className = 'title-container'>
                    <h3 className = 'title'>{props.login}</h3>
                    <p>{props.login} is following these engineers in the making!</p>
                </div>
            </div>
        </div>
    );
}

export default User;