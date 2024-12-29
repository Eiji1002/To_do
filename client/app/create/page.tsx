"use client";
import { useState } from "react";
import { CreteTodo } from "@/utils/actions";
import Image from "next/image";
export default function Home() {
  const [description, setdescription] = useState("");
  const [title, setTitle] = useState("");

  const handeleSubmit = () => {
    CreteTodo({ title, description });
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      {" "}
      <div className="text-black flex flex-col justify-center items-center h-screen w-1/3">
        <div className="text-yellow-300">
          <h1 className="text-2xl font-bold">Create you todo</h1>
        </div>

        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          value={title}
          className="border-2 border-black rounded-xl"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="Name">description</label>
        <input
          type="text"
          className="border-2 border-black rounded-xl"
          id="Name"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        <button
          className="bg-yellow-300 rounded-md py-2 px-8 mt-2"
          onClick={() => {
            handeleSubmit();
          }}
        >
          Submit
        </button>
      </div>
      <div className="w-full bg-black h-screen">
        <Image
          className="w-full h-full"
          src="/3d-render-checklist-clipboard-hand-pencil.jpg"
          alt="background"
          objectFit="cover"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
