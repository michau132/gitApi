import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.searchUser = this.searchUser.bind(this);
    }
    searchUser(event){
        event.preventDefault();
        if (this.input.value !== '') {
            this.props.handler(this.input.value);
        }
        this.input.value = '';
    }
    render(){
        return (
            <form onSubmit={event => this.searchUser(event)}>
                <h1>Znajdz uzytkownika</h1>
                <input ref={inputRef => this.input = inputRef} type="text"/>
                <button>Szukaj</button>
            </form>
        )
    }
}

export default Form