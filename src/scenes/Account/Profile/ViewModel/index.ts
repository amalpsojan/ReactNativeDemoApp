import ProfilenModel from '../Model';

class ProfileViewModel {
  model: ProfilenModel;

  constructor() {
    this.model = new ProfilenModel();
  }

  getUser = (): string => {
    return this.model.getUser();
  };
}

export default ProfileViewModel;
