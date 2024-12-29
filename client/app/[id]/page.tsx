import React from "react";
import { GetTodoById } from "@/utils/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log("this is my slug :" + id);

  const todo = await GetTodoById(id);

  return (
    <div>
      <h1>Your Todo</h1>
      <p>{todo?.title || "Todo not found"}</p>
      <p>{todo?.description || "No description available"}</p>
    </div>
  );
};

export default Page;
