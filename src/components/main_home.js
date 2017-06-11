import React, {Component} from 'react';

import Content from './content';
import Banner from './banner';
import SearchResults from './search_results';

export default class MainHome extends Component {
    render (){
    return (
        <div>
            <SearchResults />
            <Banner criteria="reviewDate"/>
            <Content />
        </div>
    );
    }
    };

