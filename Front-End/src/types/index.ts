// Types of State or Store:
export type StoreType = {
    userData: {
        id: string;
        name: string;
        email: string;
    },
    todosData: {
        totalTasks: number;
        completed: number;
        pending: number;
    },
    todos: {
        id: string;
        title: string;
        description: string;
        status: string;
    }[]
}

// Types of Todos:
export type todosType = {
    id: String,
    title: String,
    description: String,
    status: String
}