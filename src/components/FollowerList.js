import React from 'react';

class FollowerList extends React.Component {
    render() {
        return(
            <div>
                <div className = 'cards'>
                    <div className = 'card'>
                        <img src = {this.props.following.avatar_url} alt = '' />
                        <div className = 'title-container'>
                            <h4 className = 'title'>{this.props.following.login}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowerList;