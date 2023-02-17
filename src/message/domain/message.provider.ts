export const MESSAGE_PROVIDER = 'MESSAGE_PROVIDER';

export interface MessageProvider {
  send(to: string, message: string): Promise<void>;
}
