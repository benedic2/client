import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GradeBar from './grade_bar';


class CommentList extends Component {

    renderComments() {

        const criteria = this.props.criteria;

        return _.map(this.props.comments[criteria].comments, comment => {
            return (
                <div className="col-xs-12 text-left comment" key={comment._id}>    
                    <div className="full-height project-inner-div">
                        <p className="project-div-text">  {comment.user.email} said:</p>
                        <p className="project-div-text">{comment.comment}</p>
                        <p className="project-div-text">weeks late: {comment.late}</p>
                        Overall grade        
                        <div>
                            <GradeBar gradeOverall={comment.grade} />
                        </div>

                    </div>
                </div>

            );
        });
    }

    render() {
        return (
            <div className="container-fluid" >
                {this.renderComments()}
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {comments: state.reviews[ownProps.criteria] };
}

export default connect(mapStateToProps)(CommentList);

