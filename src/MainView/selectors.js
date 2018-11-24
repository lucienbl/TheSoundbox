import { createSelector } from 'reselect';
import * as storeKeys from './storeKeys';

export const root = state => state[storeKeys.KEY_ROOT];

export const currentSound = createSelector(
  root,
  state => state[storeKeys.KEY_PLAY_SOUND],
);
