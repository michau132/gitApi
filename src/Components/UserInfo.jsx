import React from 'react';
import UserRepoInfo from './UserRepoInfo.jsx';

class UserInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section>
                <h2>{this.props.personalInfo.name}</h2>
                <h3>{this.props.personalInfo.login}</h3>
                <p>Email: {this.props.personalInfo.email}</p>
                <img src={this.props.personalInfo.avatar_url} alt="avatar"/>
                <UserRepoInfo
                    repo={this.props.repo}
                />
            </section>
        )
    }
}

export default UserInfo