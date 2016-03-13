import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { connect } from 'react-redux';

class Nav extends React.Component {

    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    render() {

        return (

          <nav className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Login dropdown</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/places">Places</Link></li>
                  <li><Link to="/places/add">Add new place</Link></li>

                </ul>
              </div>
            </div>


            {/*
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                  <li><a href="#">Action</a></li>
                                  <li><a href="#">Another action</a></li>
                                  <li><a href="#">Something else here</a></li>
                                  <li className="divider"></li>
                                  <li><a href="#">Separated link</a></li>
                                  <li className="divider"></li>
                                  <li><a href="#">One more separated link</a></li>
                                </ul>
                              </li>

                            </ul>
                            <form className="navbar-form navbar-left" role="search">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                              </div>
                              <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                              <li><p className="navbar-text">Already have an account?</p></li>
                              <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>


                                          <ul id="login-dp" className="dropdown-menu">
                                          				<li>
                                          					 <div className="row">
                                          							<div className="col-md-12">
                                          								Login via
                                          								<div className="social-buttons">
                                          									<a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                                          									<a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                                          								</div>
                                                                          or
                                          								 <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                          										<div className="form-group">
                                          											 <label className="sr-only">Email address</label>
                                          											 <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                                          										</div>
                                          										<div className="form-group">
                                          											 <label className="sr-only">Password</label>
                                          											 <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                                                                       <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                          										</div>
                                          										<div className="form-group">
                                          											 <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                          										</div>
                                          										<div className="checkbox">
                                          											 <label>
                                          											 <input type="checkbox" /> keep me logged-in
                                          											 </label>
                                          										</div>
                                          								 </form>
                                          							</div>
                                          							<div className="bottom text-center">
                                          								New here ? <a href="#"><b>Join Us</b></a>
                                          							</div>
                                          					 </div>
                                          				</li>
                                          			</ul>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </nav>

            */}

          </nav>

        );
    }

}

function mapStateToProps(state) {
	return {
	}
}

export default connect(mapStateToProps)(Nav);
