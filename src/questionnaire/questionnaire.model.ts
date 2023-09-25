import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table
export class Questionnaire extends Model {
  @Column({ type: DataType.JSONB, defaultValue: null })
  questions: any;

  @Column({ type: DataType.JSONB, defaultValue: null })
  answers: any;

  @BelongsTo(() => User)
  answeredBy: User;

  @Column({ type: DataType.INTEGER, defaultValue: null })
  @ForeignKey(() => User)
  answerdById: number;
}
