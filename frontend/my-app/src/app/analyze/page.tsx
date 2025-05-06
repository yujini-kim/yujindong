"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface IAnalyzeProps {
  text: string;
  friend_name: string;
}

export default function Analyze() {
  const { register, handleSubmit, setValue } = useForm<IAnalyzeProps>();
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
  const onSubmit = async ({ text, friend_name }: IAnalyzeProps) => {
    const res = await fetch(`${BASE_URL}/api/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, friend_name }),
      credentials: "include",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.log(errorText);
      return;
    }
    const data = await res.json();
    console.log("✅ 분석 결과:", data);
    return data;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      setValue("text", content);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="h-dvh flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex bg-[#E3DBCE] w-6xl h-[600px] border-2 justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-[40%] gap-8">
            <label
              htmlFor="file"
              className="w-[400px] flex justify-center p-4 border-2 bg-[#FAC656]"
            >
              파일업로드하기
              <input
                className="hidden"
                type="file"
                id="file"
                accept=".txt"
                onChange={handleFileChange}
              />
            </label>

            <textarea
              {...register("text", { required: true })}
              className="w-[400px] h-[400px] border-2 p-4 bg-white"
              placeholder="분석할 내용을 입력해 주세요"
            />
          </div>
          <div className="w-[2px] h-[500px] bg-black ml-12 mr-16"></div>
          <div className="flex flex-col justify-center items-center">
            <img src="/analyze.png" className="w-md" />
            <div className="flex justify-between w-full">
              <input
                {...register("friend_name", { required: true })}
                className="w-[60%] border-2 p-2 pl-4 bg-white placeholder:text-sm"
                placeholder="친구이름을 입력해주세요"
              />
              <button
                type="submit"
                className="w-[30%] p-2 border-2 border-black text-white bg-[#242020] cursor-pointer"
              >
                분석하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
