import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 54320,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    autoLoadModels: true,
    synchronize: true
  }), ConfigModule.forRoot({ isGlobal: true }), UserModule, QuestionnaireModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
