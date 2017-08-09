import {
    GET_ALERT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    alertAudioFile: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALERT_SUCCESS:
            return { ...state, alertAudioFile: action.payload.alertAudioFile };
        default: 
            return state;
    }
};
