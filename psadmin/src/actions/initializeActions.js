
const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const AuthorApi = require('../api/authorApi');
const CourseApi = require('../api/courseApi');
const FansApi = require('../api/fanApi');

const InitializeActions = {
    initApp() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
                courses: CourseApi.getAllCourses(),
                fans: FansApi.getAllFans(),
            },
        });
    }
}

module.exports = InitializeActions;