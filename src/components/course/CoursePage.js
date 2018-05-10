import React, { Component, PropTypes} from 'react';


class CoursePage extends Component {

  constructor(props,context)
  {
    super (props,context);

    this.state =
      {
        course : {title : null}
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

  onClickAdd()
  {

  }


  render(){
    return(
      <div>
        Course :
        <div>
          <input type="text"
                 value = {this.state.course.title}
                 onChange= {this.onTitleChange}
          />

          <input type = "submit"
                 value ="ADD"
                 onClick = {this.onClickAdd}
          />
        </div>
      </div>
    );
  }
}

export default CoursePage;
