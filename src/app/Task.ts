// es una interface que permite que haya consistencia de tipo de datos
export interface Task {
    id?: number; //cuando creamos podria no venir
    text: string;
    day: string;
    reminder: boolean;
}