"use client";
import { DeleteTodo } from "@/utils/actions";
import { CiTrash } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";

export default async function TodoItem({ todos }: { todos: any[] }) {
  const handleDelete = async (id: string) => {
    DeleteTodo(id);
    alert("todo deleted : " + id);
  };

  const handleEdit = async (id: string) => {
    alert("todo edited : " + id);
  };

  return (
    <div className="overflow-y-auto max-h-screen w-2/3">
      {todos.map((todo: any, index: number) => (
        <div key={index} className="bg-white rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">{todo.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <CiTrash
                className="text-2xl text-red-500 cursor-pointer"
                onClick={() => handleDelete(todo._id)}
              />
              <FaPencilAlt
                onClick={() => handleEdit(todo._id)}
                className="text-2xl text-blue-500 cursor-pointer"
              />
            </div>
          </div>
          <p className="text-gray-500">{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
