import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';

import { REGEX, validateResult } from '@/utils';

const createConversation = [
  body('lastMessage')
    .isString()
    .withMessage('message have to be an string')
    .exists()
    .withMessage('message is required')
    .isLength({ max: 250 })
    .withMessage('min length allowed is 250'),
  body('member1')
    .exists()
    .withMessage('member1 id is required')
    .matches(REGEX.MONGO_ID)
    .withMessage('please provide a valid mongoId'),
  body('member2')
    .exists()
    .withMessage('member2 id is required')
    .matches(REGEX.MONGO_ID)
    .withMessage('please provide a valid mongoId'),
  body('senderId')
    .exists()
    .withMessage('senderId id is required')
    .matches(REGEX.MONGO_ID)
    .withMessage('please provide a valid mongoId'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

const findConversation = [
  body('member1')
    .exists()
    .withMessage('member1 id is required')
    .matches(REGEX.MONGO_ID)
    .withMessage('please provide a valid mongoId'),
  body('member2')
    .exists()
    .withMessage('member2 id is required')
    .matches(REGEX.MONGO_ID)
    .withMessage('please provide a valid mongoId'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

const findAllMyConversations = [
  body('senderId')
    .exists()
    .withMessage('senderId is required')
    .matches(REGEX.MONGO_ID)
    .withMessage('please provide a valid mongoId'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export const ConversationValidation = { createConversation, findConversation, findAllMyConversations };