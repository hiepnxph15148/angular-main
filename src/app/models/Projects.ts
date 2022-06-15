export interface IProject {
    id?:number,
    name: string,
    image: string,
    createAt: string,
    categoryProjectId?: number,
    shortDesc: string,
    desc: string
}