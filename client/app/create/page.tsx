'use client'
import { useState } from 'react';
import { CreteTodo } from '@/utils/actions';

export default async function Home() {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')

    const handeleSubmit = () => {
        CreteTodo({ title, name })
    }
    return (
        <div className="text-black">
            <h1 >Hello World</h1>
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="Title">Title</label>
            <input type="text" id="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => { handeleSubmit() }}>Submit</button>
        </div>
    );
}
