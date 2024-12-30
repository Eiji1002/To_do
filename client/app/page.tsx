import Link from "next/link";
import Image from "next/image";
import TodoItem from "@/components/todoItem";
import { GetAllTodo } from "@/utils/actions";
export default async function Home() {
  const getAllTodo = await GetAllTodo();

  return (
    <div className="text-black flex  w-full h-screen">
      <div className="flex flex-col items-center justify-center w-1/2">
        <Image
          className="w-full h-full"
          src="/3d-render-checklist-clipboard-hand-pencil.jpg"
          alt="background"
          objectFit="cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col items-center mt-8 w-1/2">
        <h1 className="text-3xl font-semibold mb-6">Your Todo List</h1>
        <TodoItem todos={getAllTodo} />
        <Link href="/create" className="bg-yellow-300 p-3 rounded-xl my-12">
          create your todo
        </Link>
      </div>
    </div>
  );
}
