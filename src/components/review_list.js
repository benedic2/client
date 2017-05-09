import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchReviews} from '../actions/index';

class ReviewsList extends Component {
    componentDidMount () {
        this.props.fetchReviews();
    }


    renderReviews() {
        return _.map(this.props.reviews, review => {
            return (
                <div className="full-height col-md-2 col-sm-3 col-xs-6 text-left" key={review._id}>                
                    <Link to ={`/reviews/${review._id}`}>
                    <div className="full-height project-inner-div">
                        <img src={review.photoMain} className="img-responsive project-img" alt="Responsive Image" />
                        <h4>{review.projectName}</h4>
                        <p className="project-div-text">{review.singleSentance}</p>
                        Overall grade        
                        <div>
                            <div className="progress" >
                                <div className="progress-bar " role="progressbar" aria-valuenow={review.gradeOverall} aria-valuemin="0" aria-valuemax="100" style = {{"width":"80%"}}>
                                    <strong>B</strong>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Link>
                </div>


            );
        });
    }

    render() {
       // console.log(this.props);
        return (
            <div className="full-height container-fluid">
                <h3>Newest Reviews</h3>                
            <div className="row quarter-height" >
                {this.renderReviews()}
            </div>
                <h3>Other Review Category</h3>
            <div className="quarter-height">
            </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {reviews: state.reviews };
}

export default connect(mapStateToProps, {fetchReviews})(ReviewsList);