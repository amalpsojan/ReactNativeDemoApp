import {AccountState} from '@app/types/account/state';
import {createSelector} from '@reduxjs/toolkit';

const selectAccount = (state: AccountState) => state.account;

const selectUserProfile = createSelector(selectAccount, account => ({
  id: account.id,
  name: account.name,
  username: account.username,
}));

export default {selectUserProfile};
