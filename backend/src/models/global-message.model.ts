import { ObjectId } from 'mongoose';

import { MESSAGE_STATUS } from '@constants/message.constant';

export interface GlobalMessageModel {
  _id: string;
  messageIdentifier: string;
  message: {
    text: string;
    status: MESSAGE_STATUS;
  };
  sender: ObjectId;
  createdAt: string;
  updatedAt: string;
}
