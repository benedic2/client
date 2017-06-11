import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReview} from '../actions';


import Banner from './banner';
import GradeBar from './grade_bar';

class ReviewShow extends Component {
    componentDidMount() {
        const { _id } = this.props.match.params;
        this.props.fetchReview(_id);
    }

    render() {
        const review =_.map(this.props.reviews)[0]  
        if (!review) {
            return <div className="under-nav">Loading...</div>;
        }else{
            return (
                <div>
                    <Banner criteria={review._id}/>

                    <div className="container-fluid bg-3 text-center">    
                        <div className="row">

                            <div className="col-md-2 col-sm-1 text-right">
                            </div>

                            <div className="col-md-5 col-sm-6 col-xs-8 text-left" style = {{"padding-bottom":"15px"}}> 



                                {/* The basic info drop down. Team, dates, etc*/}                                
                                <div className="panel-group infobar" role="tablist"> 
                                    <div className="panel panel-default"> 
                                        <div className="primary-bg-light"href="#collapseListGroup1" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseListGroup1">
                                            <div className="panel-heading " role="tab" id="collapseListGroupHeading1"> 
                                                <h4 className="panel-title "> 
                                                    <a href="#collapseListGroup1" className="collapsed" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseListGroup1"> The basic info </a> 
                                                </h4> 
                                            </div>
                                        </div>
                                        <div className="collapse panel-collapse" role="tabpanel" id="collapseListGroup1" aria-labelledby="collapseListGroupHeading1"> 
                                            <ul className="list-group"> 
                                                <li className="list-group-item">Team:  {review.team}</li> 
                                                <li className="list-group-item">Launch:     {review.launchDate}</li> 
                                                <li className="list-group-item">Delivery:   {review.delivery}</li> 
                                            </ul> 
                                        </div> 
                                    </div> 
                                </div>

                                Overall Grade
                                <GradeBar gradeOverall={review.gradeOverall}  isMain="true"/>
                                
                                Manufacturing Plan
                                <GradeBar gradeOverall={review.gradeMaking} />

                                Funding level 
                                <GradeBar gradeOverall={review.gradeFinancials} />
                                
                                Engineering challenge 
                                <GradeBar gradeOverall={review.gradeFeasible} />
                                
                                <div className="text-center">      
                                    <div id="myCarousel" className="carousel slide carousel-my" data-ride="carousel" data-interval="false">
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                            <li data-target="#myCarousel" data-slide-to="3"></li>
                                        </ol>

                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <h3 className="carousel-text">Project Summary</h3>
                                                <p className="carousel-text text-left">{review.projectSummary} </p>

                                                <h3 className="carousel-text">Engineering Opinion</h3>
                                                <p className="carousel-text text-left">{review.detailOverall}  </p>        
                                            </div>

                                            <div className="item">
                                                <h3 className="carousel-text">Detail: Manufacturing</h3>
                                                <p className="carousel-text text-left">{review.detailManufacturing}</p>


                                            </div>

                                            <div className="item">
                                                <h3 className="carousel-text">Detial: costs and funding</h3>
                                                <p className="carousel-text text-left">{review.detailBudget}</p>        
                                            </div>

                                            <div className="item">
                                                <h3 className="carousel-text">Engineering Challenge</h3>
                                                <p className="carousel-text text-left">{review.detailEngineering}</p>        
                                            </div>
                                        </div>

                                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>

                                </div>

                            </div>

                            <div className="comment-container col-sm-3 col-xs-4 text-left"> 

                                <div className="comment">
                                    <h4><strong>Johnathen Doe</strong> yesterday </h4>
                                    <h5>Rating: B, Late: 2 months</h5>
                                    <p className="text-left">IMHO these guys have no idea what they are doing on timing. I have seen a lot of projects like these set ambitious goals and not meet them..  </p>        
                                </div>

                                <div className="comment">
                                    <h4><strong>Janey Doe</strong>2 days ago</h4>
                                    <h5>Rating: C, Late: 0 months</h5>
                                    <p className="text-left">Jane has the following things to say. I hope you find them interesting. They may not be...</p>        </div>              

                                <div className="comment">
                                    <h4><strong>Johnathen Doe</strong> yesterday </h4>
                                    <h5>Rating: B, Late: 2 months</h5>
                                    <p className="text-left">IMHO these guys have no idea what they are doing on timing. I have seen a lot of projects like these set ambitious goals and not meet them..  </p>        
                                </div>

                                <div className="comment">
                                    <h4><strong>Johnathen Doe</strong> yesterday </h4>
                                    <h5>Rating: B, Late: 2 months</h5>
                                    <p className="text-left">IMHO these guys have no idea what they are doing on timing. I have seen a lot of projects like these set ambitious goals and not meet them..  </p>        
                                </div>

                                <div className="comment">
                                    <h4><strong>Janey Doe</strong>2 days ago</h4>
                                    <h5>Rating: C, Late: 0 months</h5>
                                    <p className="text-left">Jane has the following things to say. I hope you find them interesting. They may not be...</p>        </div>              

                                <div className="comment">
                                    <h4><strong>Janey Doe</strong>2 days ago</h4>
                                    <h5>Rating: C, Late: 0 months</h5>
                                    <p className="text-left">Jane has the following things to say. I hope you find them interesting. They may not be...</p>        </div>              

                                <div className="comment">
                                    <h4><strong>Janey Doe</strong>2 days ago</h4>
                                    <h5>Rating: C, Late: 0 months</h5>
                                    <p className="text-left">Jane has the following things to say. I hope you find them interesting. They may not be...</p>        </div>              

                                <div className="comment">
                                    <h4><strong>Janey Doe</strong>2 days ago</h4>
                                    <h5>Rating: C, Late: 0 months</h5>
                                    <p className="text-left">Jane has the following things to say. I hope you find them interesting. They may not be...</p>        </div>              

                            </div>

                            <div className="col-sm-2 text-right"></div>



                        </div>
                    </div>
                </div>
            );
        }
    }
}


function mapStateToProps(state, ownProps) {
    return { reviews: state.reviews[ownProps.match.params._id]};
}


export default connect(mapStateToProps, {fetchReview})(ReviewShow);
