'use server'

import { Todo } from "@/lib/schemaTodo";
import connectMongo from '@/lib/mongo';

export const CreteTodo = async ({
    title, name
}: { title: string, name: string }) => {
    await connectMongo();
    const newTodo = await Todo.create({
        title: title,
        name: name,
    })
    console.log(newTodo)
}

export const GetAllTodo = async () => {
    await connectMongo();
    const allTodo = await Todo.find({})
    return allTodo

}