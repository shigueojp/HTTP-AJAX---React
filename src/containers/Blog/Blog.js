import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: "/new-post",
                                hash: "#submit", 
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/:postId" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;