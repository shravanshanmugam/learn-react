import React from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const loader = ({ request }) => {
  console.log("login loader");
  const searchParams = new URL(request.url).searchParams;
  return searchParams?.get("state");
};

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const message = location?.state?.message || "";
  if (message) {
    console.log("[useLocation] " + message);
  }
  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get("state");
  if (state === "not_logged_in") {
    console.log("[useSearchParams] You must log-in first!");
  }
  const loginState = useLoaderData();
  if (loginState === "not_logged_in") {
    console.log("[useLoaderData] You must log-in first!");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {loginState === "not_logged_in" && (
        <h3 style={{ color: "red" }}>You must log-in first!</h3>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          autoComplete="username"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
