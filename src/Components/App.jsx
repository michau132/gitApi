import React from 'react';
import git from './git.jsx';

const user = {
    "login": "michau132",
    "id": 33072182,
    "avatar_url": "https://avatars0.githubusercontent.com/u/33072182?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/michau132",
    "html_url": "https://github.com/michau132",
    "followers_url": "https://api.github.com/users/michau132/followers",
    "following_url": "https://api.github.com/users/michau132/following{/other_user}",
    "gists_url": "https://api.github.com/users/michau132/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/michau132/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/michau132/subscriptions",
    "organizations_url": "https://api.github.com/users/michau132/orgs",
    "repos_url": "https://api.github.com/users/michau132/repos",
    "events_url": "https://api.github.com/users/michau132/events{/privacy}",
    "received_events_url": "https://api.github.com/users/michau132/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Michał Lutecki",
    "company": null,
    "blog": "https://www.linkedin.com/in/michał-lutecki-5163b1157/",
    "location": "Warsaw",
    "email": null,
    "hireable": null,
    "bio": "Junior Front End Developer looking for a job",
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-10-24T20:28:35Z",
    "updated_at": "2018-01-30T09:53:59Z"
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: user,
            usersRepo: git
        }
    }
    // componentDidMount() {
    //     fetch(`https://api.github.com/users/michau132`)
    //         .then( result => result.json())
    //         .then(that => {
    //                this.setState({user: that})
    //             console.log(that.login)
    //             })
    //         .catch(err => {
    //             console.log('ERROR!' + err)
    //         })
    // }


    render() {

        git.sort((a, b) => {
            if (a.pushed_at > b.pushed_at)
                return -1;
            if (a.pushed_at < b.pushed_at)
                return 1;
            return 0;
        });

        return (
            <div>
                <form>
                    <h1>Znajdz uzytkownika</h1>
                    <input type="text"/>
                    <button>Szukaj</button>
                </form>
                <section>
                    <h2>{this.state.user.name}</h2>
                    <h3>{this.state.user.login}</h3>
                    <p>Email: {this.state.user.email}</p>
                    <img src={this.state.user.avatar_url} alt="avatar"/>
                    <ul>
                    {
                        this.state.usersRepo.map(element => {
                            return (

                                    <li key={element.id}>{element.name} modified: {element.pushed_at}</li>


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