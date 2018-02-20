import React from 'react';

class UserRepoInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <ul>
                    {
                        this.props.repo.map(element => {
                            return (

                                <li key={element.id}>
                                    <b><i>{element.name}</i></b>
                                    <br/>
                                    <b>modified:</b> {element.pushed_at}
                                </li>
                            )
                        })
                    }
                </ul>
        )
    }
}

export default UserRepoInfo