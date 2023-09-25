import { Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    district: string;

    @Column
    parish: string;

    @Column
    village: string;

    @Column
    identificationType: string;

    @Column
    identificationId: string;

    @Column
    dateOfBirth: string;

    @Column
    highestEducationLevel: string;

    @Column
    martialStatus: string;

    @Column
    phoneNumber: number;

    @Column({ defaultValue: true})
    isActive: boolean;

    @Column({ defaultValue: true})
    hasBankAccount: boolean;
}