import { CreateMessageDto, GetAllMessagesDto } from '@/shared/dtos/messages';
import { MessageService } from '@/shared/services';
import { errorMessageResolver, generateUUID, ioSocket } from '@/shared/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllMessages = createAsyncThunk(
  'message/getAllMessages',
  async (data: GetAllMessagesDto, thunkApi) => {
    try {
      const result = await MessageService.getAllMessages(data);
      if (result.ok) {
        console.log('get-all-messages', result.data);
        return result.data;
      }
    } catch (error) {
      const errMessage = errorMessageResolver(error);
      /* toast.error(errMessage); */
      return thunkApi.rejectWithValue(errMessage);
    }
  }
);

const createMessage = createAsyncThunk(
  'message/createMessage',
  async (data: CreateMessageDto, thunkApi) => {
    try {
      const socket = ioSocket();
      socket.emit('sendMessage', {
        senderId: data.from,
        receiverId: data.to,
        message: data.message,
        messageIdentifier: data.messageIdentifier
      });
      const result = await MessageService.createMessage(data);
      if (result.ok) {
        console.log('create-message', result.data);
        return result.data;
      }
    } catch (error) {
      const errMessage = errorMessageResolver(error);
      /* toast.error(errMessage); */
      return thunkApi.rejectWithValue(errMessage);
    }
  }
);

export const MessageThunk = { getAllMessages, createMessage };
