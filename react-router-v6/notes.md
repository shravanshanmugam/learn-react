# Multi-page app vs Single page app

## Multi-page app (MPA)

- Client (Browser) makes request to server to fetch each page

## Single page app (SPA)

1. Client makes request to server to fetch page one time
   which returns an entire (react) application and the app makes incremental updates
   to the existing document through different methods like internal state changes,
   fetch requests etc.
2. Client makes request to server to fetch additional data via API.
3. Server only returns the required data (not a page or an app) and the app consumes the
   data and makes changes to the view based on the data.
4. Entire page is not reloaded. Only content is changed

## Browser Route

- This is a context provider for routes
- We can add our routes inside browser route like below
- React matches multiple routes in our definition

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

```xml
<BrowserRouter>
    <Routes>
        <Route />
        ...
    <Routes>
</BrowserRouter>
```

## Link

- Using anchor tag will refresh the page and lose state.
- Navigate from one page to another in react app using `Link` element.
- It works like an anchor tag but it doesn't refresh the page.
- State in App component can be passed to both Home and About component so is not lost.

```js
import { Link } from "react-router-dom";
```

```xml
<Link to="/about">About</Link>
```

## Route by path parameter

- Typically used to get details for particular resource
- We can use `useParams` hook from `react-router-dom` library to get the path parameter

```xml
<Route path="/vans/:id" element={<VanDetail />} />
```

```js
import { useParams } from "react-router-dom";
// inside functional component
const params = useParams();
// params = { id: 1 } when routed to /vans/1
```

## Nested Routes

- Use when we have shared UI where we only want to update a container instead of reloading the entire page
- Create list of child `Route` elements in a parent `Route`
- Child `Route` element will point to child component
- Parent `Route` component should have an `Outlet` component where the child component will render based on the path

```xml
<Route path="/host" element={<HostLayout />}>
    <Route path="/host/dasbhoard" element={<Dashboard />} />
    <Route path="/host/income" element={<Income />} />
    <Route path="/host/reviews" element={<Reviews />} />
</Route>
```

## Outlet

- It is a hole or a container where the child `Route` will render based on the path

```js
import { Outlet } from "react-router-dom";
```

```xml
<>
    <h1>Host layout goes here</h1>
    <Outlet />
</>
```

## Index route

- It is the default child `Route` of a parent `Route` from the list of all child `Route` definitions
- We need not specify path for the index `Route`
- It will render on the parent `Route` path itself

```xml
<Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
</Route>
```

## Relative path

- Instead of using absolute path, we can drop `/` from the `Route` path which will make it relative path
- We only have to mention the `slug` or `path parameter` in the child `Route`'s path

```xml
<Route path="host" element={<HostLayout />}>
    <Route path="dasbhoard" element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
</Route>
```

## When to Nest?

- When child element does not share UI with parent element, we don't have to create nested `Route`
- Trivial way is to ignore parent element and set an index `Route` in the children

```xml
<Route path="/vans">
    <Route index element={<Vans />} />
    <Route path=":id" element={<VanDetail />} />
</Route>
```

- Another trivial way is to set element for parent `Route` as `<Outlet/>`

```xml
<Route path="/vans" element={<Outlet/>}>
    <Route index element={<Vans />} />
    <Route path=":id" element={<VanDetail />} />
</Route>
```

## NavLink

- Allows to use `className` or inline `style` prop
- We can use it to highlight the page user is currently on by applying some CSS
- We can check that by using `event.isActive` property
- Since react tries to match multiple routes, the styling can apply to the `Route` matching the parent `Route` as well. We can add an `end` prop in case a more nested `Route` matches

```css
.active-link {
  font-weight: bold;
  text-decoration: underline;
  color: red;
}
```

```js
const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "red",
};
```

```xml
<NavLink to="/" end style={({isActive}) => isActive ? activeStyle : null }>Home</NavLink>
<NavLink to="/about" className={({isActive}) => isActive ? "active-link" : null }>About</NavLink>
```

## Relative Link

- With relative linking, the child `Route` path is assumed based on the parent `Route` path

```xml
<Route path="host" element={<HostLayout />}>
    <Route path="dasbhoard" element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<HostVans />} />
    <Route path="vans/:id" element={<HostVanDetail />} />
</Route>
```

- To navigate to current path we can use following

```xml
<Link to=".">Home</Link>`
```

- To go back to parent path we can use following. It will not go back one level in the path.

```xml
<Link to="..">Go back</Link>`
```

- To go back in path instead of `Route` we can do the following

```xml
<Link to="../vans">Back to all vans</Link>`
```

- To go back in path instead of `Route` we can use the `relative` attribute in `Link`

```xml
<Link to=".." relative="path">Back to all vans</Link>`
```

## Outlet context

- We can pass state from parent `Route` to child `Route` using `useOutletContext` hook from `react-router-dom` library
- It is similary to React `useContext` hook

```js
const [currentVan, setCurrentVan] = React.useState(null);
```

#### Context provider

```xml
<Outlet context={[currentVan, setCurrentVan]} />
```

#### Context consumer

```js
import { useOutletContext } from "react-router-dom";
// inside functional component
const [currentVan, setCurrentVan] = useOutletContext();
```

## Query parameters

- They are used to represent a change in the UI
  - Filtering, sorting, pagination
- Used as "single source of truth" for application state
  - When a user should be able to revisit or share the page we can raise the state up to the URL in query parameter
- We can use `useSearchParams` hook from `react-router-dom` library
- We can move the state to the url like following

```xml
<Link to="?type=simple">Simple</Link>
<Link to=".">Clear</Link>
<!-- alternatively -->
<button onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
```

- We can also use the following in case we have multiple query parameters

```js
import { useSearchParams } from "react-router-dom";
// inside functional component
const [searchParams, setSearchParams] = useSearchParams();
const typeFilter = searchParams.get("type");
// inside event handler function
const params = serializeFormQuery(event.target);
setSearchParams(params);
```

#### Merge query parameters

- Using URL string

```js
function genNewSearchParamString(key, value) {
  const sp = new URLSearchParams(searchParams);
  if (value === null) {
    sp.delete(key);
  } else {
    sp.set(key, value);
  }
  return `?${sp.toString()}`;
}
```

```xml
<Link to={genNewSearchParamString("type", "luxury")}>Luxury</Link>
<Link to={genNewSearchParamString("type", null)}>Clear</Link>
```

- Using `setSearchParams` function

```js
function handleFilterChange(key, value) {
  // take previous params, modify and return
  setSearchParams((prevParams) => {
    if (value === null) {
      prevParams.delete(key);
    } else {
      prevParams.set(key, value);
    }
    return prevParams;
  });
}
```

```xml
<button onClick={() => handleFilterChange("type", "Rugged")}>Rugged</button>
<button onClick={() => handleFilterChange("type", null)}>Clear</button>
```

## Query params - Link state

- We can keep track of the query params when we are navigating through pages by passing it as a `state` in `Link`

```xml
<Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
```

- We can consume this in the new page using the `useLocation` hook from `react-router-dom` library
- This state is maintained even when page is refreshed
- `Link` state will not be maintained on new browser or when shared with someone else

```js
import { useLocation } from "react-router-dom";
// inside functional component
const location = useLocation();
const search = location.state?.search || "";
const typeFilter = location.state?.type || "all";
```

- We can route to previous `Link` state using the following

```xml
<Link to={`..${search}`} relative="path">Back to {typeFilter} vans</Link>
```

## Error pages

- Add a catch-all `Route` as a child of main parent layout `Route`

```xml
<Route path="/" element={<Layout />}>
    <!-- all other routes -->
    <Route path="*" element={<h1>Page not found!</h1>} />
</Route>
```

- We can also add a `Link` back to home page in the error page

```xml
<Link to="/">Return to Home</Link>
```

## Data layer API

- We make fetch API request after rendering component which forces us to handle error and loading state in all our components
- This leads to writing lot of boiler plate code
- We can make use of `useLoaderData` hook from `react-router-dom`
- To use this hook we have to write our router using `createBrowserRouter` as it is not supported in `<BrowserRouter>`
- `createBrowserRouter` used JSON definition for router
- We can use `createRoutesFromElements` to convert component based router to JSON based router

```js
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<HomePage />} />)
);

function App() {
  return <RouterProvider router={router} />;
}
```

- We export a `loader` function from the page that fetches the data

```js
export function loader() {
  // sync API call using async-await
  return getVans();
}
```

- We pass a `loader` prop to the `Route` that renders the that page and pass in the `loader` function

```js
import HomePage, { loader as homePageLoader } from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} loader={homePageLoader} />
  )
);
```

- Use the `useLoaderData` hook in the component to get the data
- This hook is called before we are routed to the new page so the data is available before the component is rendered

```js
import { useLoaderData } from "react-router-dom";
// inside functional component
const data = useLoaderData();
// we get the data from the loader function and use it in rendering our component directly
```

- To handle errors we can pass `errorElement` in our `Route`
- Error thrown in child `Route` will be handled by `errorElement` of the nearest parent `Route`
- It catches errors in `loader` and errors inside the component

```xml
<Route path="/" element={<HomePage />} loader={homePageLoader} errorElement={<h1>There was an error!</h1>} />
```

- We can get the error being thrown using `useRouterError` hook from `react-router-dom`

```js
import { useRouteError } from "react-router-dom";
// inside functional component
const error = useRouteError();
```

## Protected Routes

- Purpose is to stop data fetching of sensitive information and only allow logged in users to access their data
- If user isn't logged in, stop data fetching by blocking components from rendering and send to the Login page
- Since fetching is happening inside the components, if those components never render, the fetching never happens

### Implementation

- We check in the parent `Route` component whether user is logged
- If user is not logged in, we use `Navigate` component from `react-router-dom` to take user to the `login` page first
- We can pass `state` in `Navigate` component similar to `Link` component

```js
import { Navigate } from "react-router-dom";
// inside component which requires authentication
if (!loggedIn) {
  return <Navigate to="/login" state={{ message: "You must log-in first" }} />;
}
```

- In login page we can consume this state using `useLocation` hook similar to `Link` component to display any message

```js
// inside funcitonal component
const location = useLocation();
const message = location?.state?.message || "";
console.log(message); // show this message the user
```

### Drawbacks

- Incase we use data loader for fetching data before routing to the component, we will unnecessarily make API calls before checking if user is logged in
- This also defeats the purpose of protecting the information without authentication

## Protected Routes with Loader Redirect

- If user isn't logged in, redirect to Login page when protected route loaders run, before any route rendering happens

### Implementation

- We check if user is logged-in inside the loader function
- If user is not logged-in we use `redirect` to take him to the `login` page first
- This will redirect the user to login even before making API call or rendering the component
- We can pass `state` as a query param and consume in `login` page using `useSearchParams` hook to show message to user

```js
import { redirect, useLoaderData, useLocation } from "react-router-dom";
// util function to check if user is authenticated
function requireAuth() {
  const loggedIn = false; // hard-coding for example
  if (!loggedIn) {
    throw redirect("/login?state=not_logged_in");
  }
}
// inside loader function
await requireAuth();
return fetchData();
```

### Drawbacks

- This needs to happen inside every protected route's loader
- The loaders for parent `Route` and the child `Route` will run in parallel only to decide if user is authenticated
- Due to this adding authentication check only in parent `Route` will not be sufficient as child `Route` can still render
- To verify that both parent and child loaders run in parallel use `setTimeout` to look at out of order execution

```js
const loader = async () => {
  const rand = Math.random() * 2;
  setTimeout(() => {
    console.log("host layout loader");
  }, rand);
  return HostVansLoader();
};
```

## Login state message

- We can use loader function for retrieving login `state` from query params or path params and return the state
- Using `useLoaderData` we can consume the login state and display the mssage

```js
export const loader = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  return searchParams?.get("state");
};

// inside functional component
const loginState = useLoaderData();
if (loginState === "not_logged_in") {
  console.log("You must log-in first!");
}

// showing the message
{
  loginState === "not_logged_in" && (
    <h3 style={{ color: "red" }}>You must log-in first!</h3>
  );
}
```

## React Router Form

- We can use `Form` element from `react-router-dom` to simplify our react forms

```js
import { Form } from "react-router-dom";
```

```xml
// inside functional component
<Form>
<!--form elements-->
</Form>;
```

- We define an `action` function which gets called on form submission
- We set this `action` function in the Login `Route` definition

```xml
<Route
  path="login"
  element={<FormLogin />}
  loader={formLoginLoader}
  action={formLoginAction}
/>
```

- We can defined `method` in `Form`. In case of `GET` the form data comes as query params
- In case of `POST` we get in request form data

```js
// inside action function
const formData = await request.formData();
const email = formData.get("email");
const password = formData.get("password");
// call api
```

```xml
// inside functional component
<Form method="POST">//... form elements</Form>;
```

- Inside `action` function we can call the API
- On success, we store login state in `cookie` or `localStorage`
- Also we redirect back to the protected resource

```js
await loginUser({ email, password });
localStorage.setItem("loggedIn", true);
return redirect("/vans"); // Here /vans is a protected resource
```

- On failure, we reset login state and we show an error message
- To get the data from `action` function response we use `useActionData` hook from `react-router-dom`

```js
// inside action function
try {
  //
} catch (e) {
  localStorage.removeItem("loggedIn");
  return e.message;
}
// inside functional component
const errorMessage = useActionData();
return (
  <>
    // Login form elements
    {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
  </>
);
```

- To track loading state after form submission, we use `useNavigation` hook from `react-router-dom` which return the navigation state
- By default it is `idle`, on submitting form it goes to `submitting`
- We can use this to show our loading state

```js
import { useNavigation } from "react-router-dom";
// inside functional component
const navigation = useNavigation();
const submit = navigation?.state !== "idle";

return (
  <>
    // Login form elements
    <button disabled={submit} style={{ backgroundColor: submit && "grey" }}>
      {submit ? "Logging in..." : "Log in"}
    </button>
  </>
);
```

- In our nested protected resource, inside loader function we check if user is authenticated.
- If not logged in we redirect to the login page using `redirect` function from `react-router-dom`
- After login we want to take user to the original page. So we pass the state in the url to the login page
- In case user lands directly on login page, we have to redirect to a default landing page

```js
// inside loader function
const pathname = new URL(request.url).pathname;
const loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn) {
  throw redirect(`/login?redirectTo=${pathname}`);
}
```

```js
// inside action of Login page
const redirectTo =
  new URL(request.url).searchParams.get("redirectTo") || "/vans"; // /vans is the default landing page
return redirect(redirectTo);
```

- After login, when user clicks on back button, we need to take him to the previous page instead of login page
- We set `replace` attribute in the `Form` element. This will replace the login path with the original path user requested in the navigation history (stack) managed by the browser

```xml
// inside functional component
<Form replace method="POST">
<!--form elements-->
</Form>
```
