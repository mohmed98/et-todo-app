export type Action = {
    type: typeof TodoActionTypes[keyof typeof TodoActionTypes];
    id?: string;
    text?: string;
  };
  
  export interface TodoType {
    id: number;
    title: string;
    complete: boolean;
  }
  
  export type State = {
    todos: Map<number, Todo>;
  };