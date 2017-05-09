import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReview} from '../actions';

class ReviewShow extends Component {
  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchReview(_id);
  }


  render() {
    const { review } = this.props;

    if (!review) {
      return <div>Loading...</div>;
    }

    return (
                <div className="under-nav full-height col-md-2 col-sm-3 col-xs-6 text-left" >                <Link to ={`/reviews/${review._id}`} key={review._id}>
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
  }
}

function mapStateToProps({ reviews }, ownProps) {
  return { review: reviews[ownProps.match.params._id] };
}

export default connect(mapStateToProps, {fetchReview})(ReviewShow);
