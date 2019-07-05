import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    state = {
        auth: true,
    }
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts">Posts</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: "/new-post",
                                hash: "#submit", 
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? (<Route path="/new-post" component={AsyncNewPost}/>) : null}
                    {/* <Route path="/new-post" exact component={NewPost}/> */}
                    <Route path="/posts"  component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;