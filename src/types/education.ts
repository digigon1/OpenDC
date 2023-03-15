import { IsDate, IsOptional, IsString } from "class-validator";

export class Education {
    @IsString()
    public course: string

    @IsString()
    public institution: string

    @IsDate()
    public start: Date

    @IsOptional()
    @IsDate()
    public end: Date
}