export class NuggetsModel{
    public dateTaken: string;
    public title: String;
    public description: String; 

    constructor(
        dt: string,
        title: string, 
        description: string,  
        ){
            this.dateTaken = dt;
            this.title  = title;
            this.description  = description; 
        }
}