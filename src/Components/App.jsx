import React from 'react';
import Form from './Form.jsx';
const xxx = '?client_id=fccd37f38519b0d71cd7&client_secret=61572c304be174f925b52e267794cf5c9f768e00';
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
        console.log(event)
        this.setState({userName: event});
        fetch('https://api.github.com/users/' + event +xxx)
            .then( result => result.json())
            .then(that => {
                this.setState({user: that})
            })
            .catch(err => {
                console.log('ERROR!' + err)
            });

        fetch('https://api.github.com/users/' + event + '/repos' + xxx)
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

    render() {
        return (
            <div>
                <Form
                    handler={this.getData}
                />
                <section>
                    <h2>{this.state.user.name}</h2>
                    <h3>{this.state.user.login}</h3>
                    <p>Email: {this.state.user.email}</p>
                    <img src={this.state.user.avatar_url} alt="avatar"/>
                    <ul>
                    {
                        this.state.userRepo.map(element => {
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
                </section>
            </div>
        )
    }
}

export default App;