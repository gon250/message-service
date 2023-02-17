export class SendMessageException extends Error {
  constructor(props) {
    super(props);
    Object.setPrototypeOf(this, SendMessageException.prototype);
  }

  static create(to: string, message: string) {
    return new SendMessageException(`Error sending message to ${to} with message ${message}`);
  }
}
