export class Task {
    /*
    Ici je définis ce à quoi correspond une tâche.
     */
    id: number = Date.now();
    title: string;
    status = false;
    dueDate?: number;
}
