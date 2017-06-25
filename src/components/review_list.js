import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchReviews} from '../actions/index';
import GradeBar from './grade_bar'

class ReviewsList extends Component {
    componentDidMount () {
        this.props.fetchReviews(this.props.criteria);
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
                                <GradeBar gradeOverall={review.gradeOverall} />
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
            //            <div className="full-height container-fluid">
            <div className="container-fluid">
                <div className="row quarter-height" >
                    {this.renderReviews()}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {reviews: state.reviews[ownProps.criteria] };
}

export default connect(mapStateToProps, {fetchReviews})(ReviewsList);
