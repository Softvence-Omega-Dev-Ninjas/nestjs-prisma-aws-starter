import { ApiProperty } from '@nestjs/swagger';

export class LogoutDto {
  @ApiProperty({ example: 'refreshToken' })
  refreshToken: string;
}

export class RefreshTokenDto {
  @ApiProperty({ example: 'refreshToken' })
  refreshToken: string;
}
