"use server";

import { Todo } from "@/lib/schemaTodo";
import connectMongo from "@/lib/mongo";
import { describe } from "node:test";

export const CreteTodo = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  await connectMongo();
  const newTodo = await Todo.create({
    title: title,
    description: description,
  });
  console.log(newTodo);
};

export const GetAllTodo = async () => {
  await connectMongo();
  const allTodo = await Todo.find({});
  return allTodo;
};

export const GetTodoById = async (id: string) => {
  await connectMongo();
  const totoById = await Todo.findOne({ _id: id });
  return totoById;
};

export const DeleteTodo = async (id: string) => {
  await connectMongo();
  const deletedTodo = await Todo.deleteOne({ _id: id });
  console.log("todo deleted :" + deletedTodo);
};
