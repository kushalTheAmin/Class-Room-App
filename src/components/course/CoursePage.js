import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createCourse  from '/Users/kushal/WebstormProjects/Class-Room-App/src/actions/courseAction';

class CoursePage extends Component {

  constructor(props,context)
  {
    super (props,context);
    this.state =
      {
        course : {title : ""}
      };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onTitleChange(event)
  {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState ({ course });
  }

  onClickAdd(event)
  {
    event.preventDefault();
    this.props.createCourse(this.state.course);
    this.setState({course : {title : ''}});
  }


  arrangeRowWise(course, index)
  {
   return(<div key ={index}>
            {course.title}
         </div>);
  }

  render(){

     return(
       <div>
         Course :
         <div>
           {this.props.course.map(this.arrangeRowWise)}
         </div>


         <div>
           Add courses :
         </div>
          <input type="text"
                 value = {this.state.course.title}
                 onChange= {this.onTitleChange}
          />

          <input type = "submit"
                 value ="ADD"
                 onClick = {this.onClickAdd}
          />
        </div>
    );
  }
}

CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  course: PropTypes.array.isRequired,
  createCourse : PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      createCourse: createCourse
  },dispatch);
}

function mapStateToProps (state)
{

  return{
    course : state.course
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
