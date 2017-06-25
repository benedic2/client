import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReviewsList from './review_list'


export default class Content extends Component {
    render (){
        return (

            <div className="text-center main-container-height">   
                <h3>Newest Reviews</h3>
                <ReviewsList criteria = "reviewDate" />
                <h3>Longest to go</h3>
                <ReviewsList criteria = "launchDate" />
            </div>


        );
    }
};
