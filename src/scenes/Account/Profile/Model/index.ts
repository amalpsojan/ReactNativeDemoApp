import {AuthModel} from '@appModels';

class ProfilenModel extends AuthModel {
  getUser = (): string => {
    return 'hello';
  };
}

export default ProfilenModel;
