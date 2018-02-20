import React from 'react';
import Form from './Form.jsx';
import UserInfo from './UserInfo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
        this.state = {
            user: '',
            userRepo: []
        }
    }

    getData(event) {
        if (event === '') {
            this.setState({
                user: '',
                userRepo: []
            })
        } else {
            fetch('https://api.github.com/users/' + event)
                .then( result => result.json())
                .then(that => {
                    this.setState({user: that})
                })
                .catch(err => {
                    console.log('ERROR!' + err)
                });

            fetch('https://api.github.com/users/' + event + '/repos')
                .then( result => result.json())
                .then(that => {
                    that.sort((a, b) => {
                        if (a.pushed_at > b.pushed_at)
                            return -1;
                        if (a.pushed_at < b.pushed_at)
                            return 1;
                        return 0;
                    })
                    this.setState({userRepo: that})
                })
                .catch(err => {
                    console.log('ERROR!' + err)
                })
        }
    }

    render() {
        if (this.state.user === ''){
            return (
                <div>
                    <Form
                        handler={this.getData}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Form
                        handler={this.getData}
                    />
                    <UserInfo
                        personalInfo={this.state.user}
                        repo={this.state.userRepo}
                    />
                </div>
            )
        }
    }

}

export default App;