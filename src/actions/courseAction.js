import  * as type from './actionTypes';
export default function createCourse (course)
{
  return {
      type : type.CREATE_COURSE_SUCCESS,
      course
  };
}
