const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const { EventEmitter } = require('events');

const CHANGE_EVENT = 'change';

let fans = [];

const FansStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange(callback) {
        this.emit(CHANGE_EVENT);
    },
    getAllFans() {
        return fans;
    },
    getFanById(id) {
        return fans.find(a => a.id === id) || {};
    }
});

Dispatcher.register((action) => {
    switch (action.actionType) {
        case ActionTypes.CREATE_FAN:
            fans.push(action.data);
            FansStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            fans = action.initialData.fans;
            FansStore.emitChange();
            break;
        case ActionTypes.DELETE_FAN:
            const fandId = action.data;
            const targetIndex = fans.findIndex(c => c.id === fandId);
            if (targetIndex >= 0) {
                fans.splice(targetIndex, 1);
                FansStore.emitChange();
            }
            break;
        default: break;
    }
});

module.exports = FansStore;