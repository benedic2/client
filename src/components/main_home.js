import React, {Component} from 'react';

import Content from './content';
import Banner from './banner';

export default class MainHome extends Component {
    render (){
    return (
        <div>
            <Banner />
            <Content />
        </div>
    );
    }
    };

