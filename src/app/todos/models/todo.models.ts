export interface Todo {
  id?: string;
  name: string;
  completed?: boolean;
  completedTime?: Date | null;
}
