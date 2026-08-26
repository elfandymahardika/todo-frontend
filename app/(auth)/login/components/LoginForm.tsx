"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const savedUser = localStorage.getItem("todo-user");

    if (!savedUser) {
      setError("Akun belum terdaftar. Silakan register terlebih dahulu.");
      return;
    }

    const user = JSON.parse(savedUser) as { email: string; password: string };
    if (user.email !== email || user.password !== password) {
      setError("Email atau password salah.");
      return;
    }

    localStorage.setItem("todo-authenticated", "true");
    router.push("/todos");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email / Username
        </label>
        <input
          type="email"
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          Login
        </button>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}