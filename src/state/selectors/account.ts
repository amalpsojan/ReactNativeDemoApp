import {AccountState} from '@appTypes/account/state';
import {createSelector} from '@reduxjs/toolkit';

const selectAccount = (state: AccountState) => state.account;

const selectUser = createSelector(selectAccount, account => ({
  id: account.id,
  name: account.name,
  username: account.username,
  token: account.token,
}));

export default {selectUser};
