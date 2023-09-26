import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
  AUDITOR = 'AUDITOR',
}

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  submittedBy: string;

  @IsString()
  @IsOptional()
  district: string;

  @IsString()
  @IsOptional()
  parish: string;

  @IsString()
  @IsOptional()
  village: string;

  @IsString()
  @IsOptional()
  identificationType: string;

  @IsString()
  @IsOptional()
  identificationId: string;

  @IsString()
  @IsOptional()
  dateOfBirth: string;

  @IsString()
  @IsOptional()
  highestEducationLevel: string;

  @IsString()
  @IsOptional()
  martialStatus: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  registrationDate: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsBoolean()
  @IsOptional()
  hasBankAccount: boolean;

  @IsString()
  @IsOptional()
  @IsEnum(ROLE)
  role: string;
}
