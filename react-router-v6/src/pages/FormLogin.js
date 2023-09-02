import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api/login";

export const loader = ({ request }) => {
  console.log("form login loader");
  return null;
};

export const action = async ({ request }) => {
  console.log("form login action");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    const redirectTo =
      new URL(request.url).searchParams.get("redirectTo") || "/vans";
    return redirect(redirectTo);
  } catch (e) {
    localStorage.removeItem("loggedIn");
    return e.message;
  }
};

export default function FormLogin() {
  const errorMessage = useActionData();
  const navigation = useNavigation();
  const submit = navigation?.state !== "idle";

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
      <Form replace method="POST" className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button disabled={submit} style={{ backgroundColor: submit && "grey" }}>
          {submit ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
