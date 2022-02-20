import {BaseModel} from '@app/models';

class ProfilenModel extends BaseModel {
  getUser = (): string => {
    return 'hello';
  };
}

export default ProfilenModel;
