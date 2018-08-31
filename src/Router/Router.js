import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { translate } from "react-i18next";
import faker from 'faker'
import Clients from '../Clients'
import Admin from '../Admin'
import './Router.css';

class Router extends Component {
    state = {
        users: [],
        adminInput: '',
        newRating: '',
        newName: '',
    }
    componentDidMount() {
        this.createUsers();
    }
    createUsers = () => {
        const users = new Array(105).fill(null).map(() => ({ //Number of clients
            name: faker.internet.userName(),
            avatar: faker.internet.avatar(),
            rating: Math.floor(Math.random() * 5) + 1 //Rating from 1 to 5
        }));
        this.setState({ users });
    }
    searchName = (e) => {
        this.setState({ adminInput: e.currentTarget.value });
    }

    changeName = (e) => {
        this.setState({ newName: e.currentTarget.value });
    }

    changeRating = (e) => {
        this.setState({ newRating: e.currentTarget.value });
    }

    handleSubmit = (e) => {
        let { users, adminInput, newRating, newName } = this.state
        let newUsers = users.map(user => user.name === adminInput ? { ...user, name: newName, rating: newRating } : user)
        this.setState({
            users: newUsers, adminInput: '',
            newRating: '',
            newName: '',
        })
        //alert('Data has been changed')
        e.preventDefault()
    }
    render() {
        const { users, adminInput } = this.state;
        const filtered = users.filter(user =>
            user.name.includes(adminInput));

        const { t, i18n } = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        return (
            <div className='Router'>
                <header>
                    <nav>
                        <NavLink to="/">
                            {t('Home')}
                        </NavLink>

                        <NavLink to="/admin">
                            {t('Admin')}
                        </NavLink>
                        <button onClick={() => changeLanguage("ru")}>ru</button>
                        <button onClick={() => changeLanguage("en")}>en</button>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact render={() => <Clients users={users} />} />
                    <Route path="/admin" render={() => <Admin
                        filtered={filtered}
                        searchName={this.searchName}
                        changeName={this.changeName}
                        changeRating={this.changeRating}
                        handleSubmit={this.handleSubmit}
                        adminInput={this.state.adminInput}
                        newRating={this.state.newRating}
                        newName={this.state.newName}


                    />} />
                </Switch>
            </div>
        );
    }
}
export default translate("translations")(Router);