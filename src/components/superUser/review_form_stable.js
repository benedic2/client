import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class PostNewReview extends Component {
    handleFormSubmit({ projectName, singleSentance, threeSentance, photoMain, team, launchDate, delivery, gradeOverall, gradeMaking, gradeFinancials, gradeFeasible, projectSummary, detailOverall, detailManufacturing, detailBudget, detailEngineering }) {
        // Need to do something to log user in
        this.props.postNewReview({ projectName, singleSentance, threeSentance, photoMain, team, launchDate, delivery, gradeOverall, gradeMaking, gradeFinancials, gradeFeasible, projectSummary, detailOverall, detailManufacturing, detailBudget, detailEngineering });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { projectName, singleSentance, threeSentance, photoMain, team, launchDate, delivery, gradeOverall, gradeMaking, gradeFinancials, gradeFeasible, projectSummary, detailOverall, detailManufacturing, detailBudget, detailEngineering }} = this.props;

        return (
            <form className="under-nav " onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                <fieldset className="form-group">
                    <label>Project Name:</label>
                    <input {...projectName} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Single Sentance Summary:</label>
                    <input {...singleSentance} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Three Sentance Summary:</label>
                    <input {...threeSentance} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Main photo:</label>
                    <input {...photoMain} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Team:</label>
                    <input {...team} className="form-control" />
                </fieldset>                
                <fieldset className="form-group">
                    <label>Launch date:</label>
                    <input {...launchDate} className="form-control" />
                </fieldset>                
                <fieldset className="form-group">
                    <label>Delivery:</label>
                    <input {...delivery} className="form-control" />
                </fieldset>                
                <fieldset className="form-group">
                    <label>Overall grade:</label>
                    <input {...gradeOverall} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Making it:</label>
                    <input {...gradeMaking} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Funding grade:</label>
                    <input {...gradeFinancials} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Feasability:</label>
                    <input {...gradeFeasible} className="form-control" />
                </fieldset>
                 <fieldset className="form-group">
                    <label>Project Summary:</label>
                    <input {...projectSummary} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Overall Opinion:</label>
                    <input {...detailOverall} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Manufacturing Opinion:</label>
                    <input {...detailManufacturing} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Financial Opinion:</label>
                    <input {...detailBudget} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Engineering Challenge:</label>
                    <input {...detailEngineering} className="form-control" />
                </fieldset>
               
                
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary"> post new review</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'newReview',
    fields: ['projectName', 'singleSentance', 'threeSentance', 'photoMain', 'team', 'launchDate', 'delivery', 'gradeOverall', 'gradeMaking', 'gradeFinancials', 'gradeFeasible', 'projectSummary', 'detailOverall', 'detailManufacturing', 'detailBudget', 'detailEngineering']
}, mapStateToProps, actions)(PostNewReview);
