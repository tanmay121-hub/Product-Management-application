// src/pages/Signup.tsx
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../utils/storage";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!form.name.trim()) throw new Error("Name is required");
      if (!form.email.trim()) throw new Error("Email is required");
      if (!form.password) throw new Error("Password is required");

      signup(form.name.trim(), form.email.trim(), form.password);
      navigate("/products");
    } catch (err: any) {
      setError(err.message || "Signup failed");
    }
  };

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Create account</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
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
          Sign up
        </Button>

        <p style={{ margin: 0 }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
