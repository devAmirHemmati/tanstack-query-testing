"use client";
import Link from "next/link";
import { useGetPostQuery } from "./query";

export default function Home() {
  const { data: postQuery, isLoading } = useGetPostQuery(1);

  return (
    <div>
      {isLoading && (
        <div className="text-3xl font-bold text-center" data-testid="loading">
          Loading...
        </div>
      )}

      {postQuery && (
        <div className="border-b-2 pb-4">
          <h1 className="text-lg font-bold italic">{postQuery.data.title}</h1>
          <p className="text-sm mt-3 bg-gray-200 p-4 rounded">
            {postQuery.data.body}
          </p>
        </div>
      )}

      <Link href="/add">
        <button className="border rounded p-2 cursor-pointer bg-green-200 w-full mt-4 disabled:opacity-50">
          Add new post
        </button>
      </Link>
    </div>
  );
}
