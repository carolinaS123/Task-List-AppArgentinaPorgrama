export interface Task {
    id?:number;//Cuando creamos podria no venir por eso el ?
    text?:String;
    day?:String;
    reminder?:boolean;
}