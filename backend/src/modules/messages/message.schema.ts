import mongoose, { model, Schema } from 'mongoose';

import { MESSAGE_STATUS } from '@constants/index';
import { MessageModel } from '@models/index';

const Message = new Schema<MessageModel>(
  {
    messageIdentifier: {
      type: String,
      required: false,
    },
    message: {
      text: {
        type: String,
        required: true,
      },
      status: {
        enum: MESSAGE_STATUS,
        type: String,
        required: true,
        default: MESSAGE_STATUS.DELIVERED,
      },
    },
    users: [
      {
        type: String,
        required: true,
      },
    ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const MessageSchema = model('messages', Message);
