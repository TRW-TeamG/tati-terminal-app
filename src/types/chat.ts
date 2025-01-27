export enum ChatMessageType {
  MESSAGE = 'MESSAGE',
  ACTION = 'ACTION',
}

export interface ChatAction {
  type: ChatMessageType;
  message: string;
}

export interface ChatResponse {
  message: string;
  actions?: ChatAction[];
}
