import mongoose from 'mongoose';

export type TodoType = {
    id: string;
    title: string;
    name: string;
    status:boolean;
}


const TodoSchema = new mongoose.Schema<TodoType>({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
});

export const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
