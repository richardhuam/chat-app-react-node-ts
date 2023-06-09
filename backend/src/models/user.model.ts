import { ObjectId } from 'mongoose';

import { USER_STATUS } from '@constants/user.constant';

export interface UserModel {
  _id: ObjectId;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  status: USER_STATUS;
  isPremium: boolean;
  isAdmin: boolean;
}

export interface LoggedInModel {
  _id: string;
  email: string;
  username: string;
  displayName: string;
  avatar: string;
}
