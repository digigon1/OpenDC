import { IsEnum, IsString } from "class-validator"

export enum LanguageLevel {
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2",
}

export class Language {
    @IsString()
    public value: string

    @IsEnum(LanguageLevel)
    public understanding: LanguageLevel

    @IsEnum(LanguageLevel)
    public speaking: LanguageLevel

    @IsEnum(LanguageLevel)
    public writing: LanguageLevel
}