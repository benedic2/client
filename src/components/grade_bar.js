import React, {Component} from 'react';

export default class GradeBar extends Component {
    render (){

        const gradeOverall = this.props.gradeOverall;

        let gradeLetter; 
            switch (true) {
                case (gradeOverall < 20):
                    gradeLetter = "F";
                    break
                case (gradeOverall < 40):
                    gradeLetter = "D";
                    break
                case (gradeOverall < 60):
                    gradeLetter = "C";
                    break
                case (gradeOverall < 80):
                    gradeLetter = "B";
                    break
                case (gradeOverall < 100):
                    gradeLetter = "A";
                    break
                default:
                    gradeLetter = "Ungraded";
                    break;
                       }
        
        const barStyle = {
            width: (gradeOverall) + '%',

        }
        
  
        
        return (
                <div className={this.props.isMain? "progress main-progress":"progress"} >
                    <div className={this.props.isMain? "progress-bar main-progress":"progress-bar progress-other"} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style = {barStyle}>
                        <strong>{gradeLetter}</strong>
                    </div>
                </div>

        )
    };
}
