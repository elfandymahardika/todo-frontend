"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || !email || !password || password !== confirmPassword) {
      setError("Lengkapi data dan pastikan password sesuai.");
      return;
    }

    localStorage.setItem("todo-user", JSON.stringify({ name, email, password }));
    router.push("/login");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nama Lengkap
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Masukkan nama"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Masukkan email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Konfirmasi Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Masukkan ulang password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          Register
        </button>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="text-center text-sm text-gray-600">
        <Link href="/login" className="text-blue-600 hover:underline font-medium">
          Login
        </Link>
      </div>
    </form>
  );
}