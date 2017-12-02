import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {fetchPosts} from './actions/index';
import {connect } from 'react-redux';
import _ from 'lodash';
import './App.css';

class App extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPostTitle(){
        return _.map(this.props.posts, post => {
            return (<li className="" key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>)
        });
    }

  render() {
        return (
      <div className="App">
          <div className=''>
              <Link className="btn btn-primary" to="/create_post" >Add a Post</Link>

          </div>
          <div>
            <h3>Posts</h3>
              <ul className="list-group">
                  {this.renderPostTitle()}
              </ul>
          </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
    return {posts: state.posts}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
