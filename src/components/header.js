import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authenticate} from '../actions/index';

class Header extends Component{
    authButton(){
        if(this.props.authenticated) {
            return (<button onClick={() => this.props.authenticate(false)}>Sign Out</button>);
        }
        return (<button onClick={()=>this.props.authenticate(true)}>Sign In</button>)
    }
    render(){
        return(<nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resource">Resource</Link>
                </li>
                <li className="nav-item">
                    {this.authButton()}
                </li>
            </ul>
        </nav>)
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({authenticate}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);