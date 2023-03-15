import { Type } from "class-transformer"
import { IsArray, IsBoolean, IsDate, IsEnum, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator"

export enum ContactType {
    PHONE_NUMBER = "PHONE_NUMBER",
    LINK = "LINK",
    EMAIL = "EMAIL",
}

export class Contact {
    @IsEnum(ContactType)
    public type: ContactType

    @IsString()
    public description: string

    @IsString()
    public value: string
}

export class Summary {
    @IsString()
    public name: string

    @IsDate()
    public dateOfBirth: Date

    @IsNumber()
    @Min(0)
    public yearsOfExperience: number

    @IsOptional()
    @IsBoolean()
    public driversLicense?: boolean

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Contact)
    public contacts: Contact[]
}