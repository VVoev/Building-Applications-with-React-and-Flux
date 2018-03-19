const Dispatcher = require('../dispatcher/appDispatcher');
const CourseApi = require('../api/courseApi');
const actionTypes = require('../constants/actionTypes');

const CourseActions = {
    createCourse(course) {
        const newCourse = CourseApi.saveCourse(course);
        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            data: newCourse,
        });
    },
    deleteCourse(courseId) {
        CourseApi.deleteCourse(courseId);
        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            data: courseId,
        })
    }
};

module.exports = CourseActions;