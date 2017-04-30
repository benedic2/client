import React, {Component} from 'react';
import { Link } from 'react-router';
import emailPic from '../../resource/email.jpg';
import twitter from '../../resource/twitter.png';
import facebook from '../../resource/facebook.ico';
import linkedin from '../../resource/Linkedin.ico';
import { connect } from 'react-redux';

class NavBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }
    
    render (){
    return (
        
<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className="navbar-brand">
          <Link className="primary" to="/">Home</Link>
        </div>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
                    <li>
                        <Link to="/newreview" >Newest</Link>          
                    </li>
                    <li>
                        <Link to="/media" >Active</Link>          
                    </li>
                    <li>
                        <Link to="/personal" >Older</Link>          
                    </li>
                
            </ul>

      <ul className="nav navbar-nav navbar-right">

                    {this.renderLinks()}
                    <li>
                        <a href="mailto:benedic2@outlook.com?Subject=Resume%20interest" target="_top">
                            <img src={emailPic} className="smedia"></img>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/michael-benedict-51a9aa69/">
                            <img src={linkedin} className="smedia"></img>
                        </a>
                    </li>
                    
                    <li>
                        <a target="_blank" href="https://twitter.com/mbengineer" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-show-count="false">
                            <img src={twitter} className="smedia"></img>
                        </a>
                        <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </li>
                    <li>    
                        <a target="_blank" href="https://www.facebook.com/mike.benedict.984">
                            <img src={facebook} className="smedia"></img>
                        </a>
                    </li>
  
      </ul>
      </div>
  </div>
</nav>
        
    );
    }
    };

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavBar);