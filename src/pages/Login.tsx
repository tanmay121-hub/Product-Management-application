// src/pages/Login.tsx
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../utils/storage";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!form.email.trim()) throw new Error("Email is required");
      if (!form.password) throw new Error("Password is required");

      login(form.email.trim(), form.password);
      navigate("/products");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
        />

        {error && <p style={{ color: "crimson", margin: 0 }}>{error}</p>}

        <Button type="submit" variant="contained">
          Login
        </Button>

        <p style={{ margin: 0 }}>
          New here? <Link to="/signup">Create account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
