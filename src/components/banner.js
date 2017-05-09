import React, {Component} from 'react';
import head from '../../resource/Head.png';
import {connect} from 'react-redux';
import _ from 'lodash';

 class Banner extends Component {
    render (){
        const review =_.map(this.props.reviews)[0]  
         if(!review){
            console.log("nothing");
             return(
         <div>loading...</div>
         )}else{
        const sectionStyle = {
          backgroundImage: "url(" + ( review.photoMain ) + ")"
        }
                 
    return (
    <div className="under-nav ">
      <div className="my_jumbotron jumbotron" style={sectionStyle}>
        <div className="container">
                <div className="col-xs-4" > 
                </div>
                <div className ="col-xs-8 container-fluid">
                    <div className = "highlighter">
                    <h1>Our newest review</h1>      
                    <p>{review.projectName}</p>
                    </div>
                </div>
        </div>
    </div>
</div>
    );
    }
    };}

function mapStateToProps(state) {
    return {reviews: state.reviews };
}

export default connect(mapStateToProps)(Banner);

   