import { Type } from "class-transformer";
import { IsArray, IsObject, ValidateNested } from "class-validator";
import { Education } from "./education";
import { Language } from "./language";
import { Project } from "./project";
import { Skills } from "./skills";
import { Summary } from "./summary";

export class Dossier {
    @IsObject()
    @ValidateNested()
    public summary: Summary

    @IsObject()
    @ValidateNested()
    public skills: Skills

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Project)
    public projects: Project[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Education)
    public education: Education[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Language)
    public languages: Language[]

    public constructor(input: Dossier) {
        this.summary = input.summary
        this.skills = input.skills
        this.projects = input.projects
        this.education = input.education
        this.languages = input.languages
    }
}