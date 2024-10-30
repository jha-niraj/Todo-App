import { ReactNode, useState } from "react";
import { Menu, CircleCheckBig, Clock4, Plus, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "@/todos/todoSlice";
import { StoreType, todosType } from "@/types";
import TodoItem from "@/components/TodoItem";

const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isAddingTodo, setIsAddingTodo] = useState(false);
    const [editingTodo, setEditingTodo] = useState<todosType | null>(null);

    const dispatch = useDispatch();
    const todos = useSelector((state: StoreType) => state.todos);
    const totalTodos = useSelector((state: StoreType) => state.todosData.totalTasks);
    const completedTodos = useSelector((state: StoreType) => state.todosData.completed);
    const pendingTodos = useSelector((state: StoreType) => state.todosData.pending);

    const handleTodoAddition = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(addTodo({
            title,
            description,
            status: false
        }));

        setTitle("");
        setDescription("");
        setIsAddingTodo(false);
    };

    const handleTodoEdition = (todo: todosType) => {
        setEditingTodo(todo);
        dispatch(updateTodo(todo));
        setEditingTodo(null);
    };

    const handleTodoDeletion = (id: String) => {
        dispatch(removeTodo(id));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 mb-10">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-gray-900">Task Dashboard</h1>
                    <button
                        onClick={() => setIsAddingTodo(true)}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                        <Plus className="mr-2 h-5 w-5" />
                        Add Task
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
                            <div className="space-y-4">
                                <StatCard
                                    icon={<Menu className="h-6 w-6" />}
                                    title="Total Tasks"
                                    value={totalTodos}
                                    color="bg-blue-100 text-blue-600"
                                />
                                <StatCard
                                    icon={<CircleCheckBig className="h-6 w-6" />}
                                    title="Completed"
                                    value={completedTodos}
                                    color="bg-green-100 text-green-600"
                                />
                                <StatCard
                                    icon={<Clock4 className="h-6 w-6" />}
                                    title="Pending"
                                    value={pendingTodos}
                                    color="bg-yellow-100 text-yellow-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tasks</h2>
                            <div className="space-y-4">
                                {
                                    todos.map((todo: todosType, index: number) => (
                                        <TodoItem
                                            key={index}
                                            todo={todo}
                                            onEdit={() => handleTodoEdition(todo)}
                                            onDelete={() => handleTodoDeletion(todo.id)}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {
                (isAddingTodo || editingTodo) && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-xl p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">
                                    {editingTodo ? "Edit Task" : "Add New Task"}
                                </h2>
                                <button
                                    onClick={() => {
                                        setIsAddingTodo(false);
                                        setEditingTodo(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <form onSubmit={handleTodoAddition} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter task title"
                                        required // Added required attribute for validation
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter task description"
                                        rows={3}
                                        required // Added required attribute for validation
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                                >
                                    {editingTodo ? "Save Changes" : "Add Task"}
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }

            <Footer />
        </div>
    );
};

interface StatCardProps {
    icon: ReactNode;
    title: string;
    value: number;
    color: string;
}

const StatCard = ({ icon, title, value, color }: StatCardProps) => (
    <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
        <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    </div>
);

export default Dashboard;