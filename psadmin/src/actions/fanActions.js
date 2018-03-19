const Dispatcher = require('../dispatcher/appDispatcher');
const FanApi = require('../api/fanApi');
const actionTypes = require('../constants/actionTypes');

const CourseActions = {
    createFan(fan) {
        const newFan = FanApi.saveFan(fan);
        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_FAN,
            data: newFan,
        });
    },
    deleteFan(fanId) {
        FanApi.deleteFan(fanId);
        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_FAN,
            data: fanId,
        })
    }
};

module.exports = CourseActions;