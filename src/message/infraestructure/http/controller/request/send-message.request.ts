import { IsNotEmpty, IsString } from "class-validator";

export class SendMessageRequest {
  @IsNotEmpty()
  @IsString()
  declare to: string;

  @IsNotEmpty()
  @IsString()
  declare message: string;
}
