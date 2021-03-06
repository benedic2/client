import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import MainHome from './components/main_home';
import NewReviewForm from './components/superUser/review_form';
import ReviewShow from './components/review_show';

//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// removed redux thunk and used promise instead as in the reduxblog project
const createStoreWithMiddleware = applyMiddleware(promise,reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path = "/" component={App} />
                <Switch>
                    <Route path="/signin" component={Signin} />
                    <Route path="/signout" component={Signout} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/feature" component={RequireAuth(Feature)} />
                    <Route path="/newreview" component={RequireAuth(NewReviewForm)} />
                    <Route path="/reviews/:_id" component={ReviewShow} />
                    <Route path="/" component={MainHome} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.target'));
