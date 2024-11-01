import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { todosType } from "@/types";

interface TodoItemProps {
    todo: todosType;
    onEdit: () => void;
    onDelete: () => void;
}
const TodoItem = ({ todo, onEdit, onDelete } : TodoItemProps) => {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className={`p-4 rounded-lg border ${isCompleted ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
            }`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => setIsCompleted(!isCompleted)}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                        <h3 className={`font-medium ${isCompleted ? "text-gray-500 line-through" : "text-gray-900"
                            }`}>
                            {todo.title}
                        </h3>
                        <p className={`text-sm ${isCompleted ? "text-gray-400" : "text-gray-600"
                            }`}>
                            {todo.description}
                        </p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={onEdit}
                        className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                        <Pencil className="h-5 w-5" />
                    </button>
                    <button
                        onClick={onDelete}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                    >
                        <Trash className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;