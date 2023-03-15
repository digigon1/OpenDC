import { Type } from "class-transformer";
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from "class-validator";

export class Project {
    @IsString()
    public position: string

    @IsString()
    public company: string

    @IsDate()
    public start: Date

    @IsOptional()
    @IsDate()
    public end?: Date

    @IsString()
    public description: string

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => String)
    public technologies: string[]
}