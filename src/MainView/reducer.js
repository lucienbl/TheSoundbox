import { handleActions } from '../reducers';
import * as storeKeys from './storeKeys';
import * as actions from './actionCreators';

const initialState = {

};

export default handleActions({
  [actions.PLAY_SOUND]: (state, action) => ({
    ...state,
    [storeKeys.KEY_PLAY_SOUND]: action.payload.currentSound,
  }),
}, initialState);
