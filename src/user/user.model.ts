import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Questionnaire } from '../questionnaire/questionnaire.model';

@Table
export class User extends Model {
  @Column({ type: DataType.STRING, defaultValue: null })
  firstName: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  lastName: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  district: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  parish: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  village: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  identificationType: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  identificationId: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  dateOfBirth: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  highestEducationLevel: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  martialStatus: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  phoneNumber: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column({ defaultValue: false })
  hasBankAccount: boolean;

  @HasMany(() => Questionnaire)
  treeSpecies: Questionnaire[];
}
