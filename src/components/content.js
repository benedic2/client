import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReviewsList from './review_list'

import climb from '../../resource/Climb.jpg';

export default class Content extends Component {
    render (){
        return (

            <div className="text-center main-container-height">   
                <ReviewsList />
            </div>


        );
    }
};
