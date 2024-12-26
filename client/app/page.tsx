
import { GetAllTodo } from '@/utils/actions';
import Link from 'next/link';
export default async function Home() {

  const getAllTodo = await GetAllTodo()

  return (
    <div className="text-black">
      <h1 >Hello World</h1>

      <div>
        <h1>Get All Todo</h1>
        {
          getAllTodo.map((todo) => (
            <>
              <h2 >{todo.title}</h2>
              <p>{todo.name}</p>
            </>
          ))
        }
      </div>

    </div>



  );
}
