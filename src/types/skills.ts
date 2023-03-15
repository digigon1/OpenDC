import { Type } from "class-transformer";
import { IsArray, IsInt, IsOptional, IsString, Max, Min, ValidateNested } from "class-validator";

export class Skill {
    @IsString()
    public value: string

    @IsInt()
    @Min(1)
    @Max(5)
    public level: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => String)
    public versions?: string[]
}

export class Skills {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Skill)
    public languages: Skill[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Skill)
    public frameworks: Skill[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Skill)
    public tools: Skill[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Skill)
    public operatingSystems: Skill[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Skill)
    public others: Skill[]
}