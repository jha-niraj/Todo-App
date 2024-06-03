import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputBox from "../components/InputBox";
import { FormEvent, useState } from "react";

// Importing all the necessary icons:
import { Menu, CircleCheckBig, Clock4, Pencil, Trash } from "lucide-react";

const Dashboard = () => {
    const [ todoTitle, setTodoTitle ] = useState<string>("");
    const [ todoDescription, setTodoDescription ] = useState<string>("");
    const [ todoList, setTodoList ] = useState<{ id: number, title: string; description: string }[]>([]);
    const [ todoId, setTodoId] = useState<number>(0);

    const [editingTodo, setEditingTodo] = useState<{ id: number; title: string; description: string } | null>(null);

    const handleTodoAddition = (e: FormEvent) => {
        e.preventDefault();
        const newTodo = {
            id: todoId,
            title: todoTitle,
            description: todoDescription
        }
        setTodoList([...todoList, newTodo])
        setTodoId(todoId + 1);
        setTodoTitle("");
        setTodoDescription("");
    }

    const handleTodoEdition = (todo: { id: number; title: string; description: string }) => {
        setEditingTodo(todo);
    };
    const hanldeTodoDeletion = (id: number) => {
        const updatedTodos = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodos);
    };

    return (
        <section className="flex flex-col items-center justify-between w-full">
            <section className="w-full">
                <Navbar />
            </section>
            <section className="mt-5 mb-5 w-[95%] flex flex-col">
                <div className="flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row items-start justify-between">
                        <h1 className="text-3xl font-bold text-left">Dashboard</h1>
                        <form onSubmit={handleTodoAddition} className="flex flex-col sm:flex-row items-center justify-center w-[100%] sm:w-[50%]">
                            <div className="w-full ">
                                <InputBox
                                    label=""
                                    type="text"
                                    id="todoinput"
                                    placeholder="Enter your Todo Title here ..."
                                    name="todoinput"
                                    onChange={(e) => setTodoTitle(e.target.value)}
                                />
                                <InputBox
                                    label=""
                                    type="text"
                                    id="todoinput"
                                    placeholder="Enter your Todo Description here..."
                                    name="todoinput"
                                    onChange={(e) => setTodoDescription(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="w-[97%] sm:w-44 bg-gray-300 hover:bg-black hover:text-white rounded-lg h-10 text-xl font-bold transition-all">Add Todo</button>                    
                        </form>
                    </div>
                    <div className="flex justify-between flex-col sm:flex-row h-full">
                        <div className="w-full sm:w-[65%] flex flex-col gap-3 items-start justify-start h-full">
                            <h1 className="text-2xl font-bold">Todos</h1>
                            <div className="flex flex-col gap-2 w-[95%]">
                                {
                                    todoList.map((todo, index) => {
                                        return (
                                            <div className="flex flex-col gap-2">
                                                <TodosLayout key={index} id={index} title={todo.title} description={todo.description} onDelete={hanldeTodoDeletion} onEdit={handleTodoEdition} />
                                                {
                                                    editingTodo && (
                                                        <div className="flex flex-col gap-1">
                                                            <input
                                                                className="h-10 w-full bg-gray-200 rounded-lg text-mini font-semibold focus:border-collapse pl-3 animation-all"
                                                                type="text"
                                                                value={editingTodo.title}
                                                                onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                                                            />
                                                            <input
                                                                className="h-10 w-full bg-gray-200 rounded-lg text-mini font-semibold focus:border-collapse pl-3 animation-all"
                                                                type="text"
                                                                value={editingTodo.description}
                                                                onChange={(e) => setEditingTodo({ ...editingTodo, description: e.target.value })}
                                                            />
                                                            <button
                                                                className="bg-gray-300 hover:bg-black hover:text-white rounded-lg h-10 text-xl font-bold transition-all"
                                                                onClick={() => {
                                                                    const updatedTodos = todoList.map((todo) =>
                                                                        todo.id === editingTodo.id ? editingTodo : todo
                                                                    );
                                                                    setTodoList(updatedTodos);
                                                                    setEditingTodo(null);
                                                                }}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full sm:w-[35%] flex flex-col gap-3 items-start justify-start h-full">
                            <h1 className="text-2xl font-bold">Overviews</h1>
                            <div className="flex flex-col gap-5">
                                <OverViewsLayout title="Total Todos" content="15" />
                                <OverViewsLayout title="Completed" content="8" />
                                <OverViewsLayout title="Pending" content="7" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full sm:mt-72">
                <Footer />
            </section>
        </section>
    )
}

interface TodosLayoutDesc {
    title: string,
    description: string,
    id: number,
    onDelete: (id: number) => void,
    onEdit: (todo: { id: number; title: string; description: string }) => void,
}
const TodosLayout = ({ id, title, description, onDelete, onEdit } : TodosLayoutDesc) => {
    const handleTodoEdit = () => {
        onEdit({ 
            id, 
            title, 
            description 
        });
    }
    const handleTodoDelete = () => {
        onDelete(id);
    }

    return (
        <div className="flex justify-between p-2 border-black rounded-lg w-full bg-slate-100">
            <div className="flex gap-3 sm:gap-5 items-center justify-start w-full">
                <input type="checkbox" className="size-5 flex items-center justify-center checked:bg-red-500" />
                <div className="flex flex-col">
                    <h1 className="text-md font-semibold">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <button onClick={handleTodoEdit} className="bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                    <Pencil />
                </button>
                <button onClick={handleTodoDelete} className="bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                    <Trash />
                </button>
            </div>
        </div>
    )
}
interface OverviewLayoutDesc {
    title: string,
    content: string
}
const OverViewsLayout = ({ title, content } : OverviewLayoutDesc) => {
    return (
        <div className="flex gap-6 items-center jsutify-center">
            <div className={`flex bg-gray-300 p-2 rounded-lg ${title === "Completed" ? "bg-green-200" : title === "Pending" ? "bg-yellow-100" : ""}`}>
            {
                    title === "Total Todos" ? <Menu className="size-8" /> : title === "Completed" ? <CircleCheckBig /> : <Clock4 />
                }
            </div>
            <div>
                <h1 className="text-mini">{title}</h1>
                <p className="text-xl font-bold">{content}</p>
            </div>
        </div>
    )
}

export default Dashboard;