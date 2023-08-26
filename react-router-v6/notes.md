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
<BrowserRoute>
    <Routes>
        <Route />
        ...
    <Routes>
</BrowserRoute>
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
- Create list of child routes in a parent route
- Child route element will point to child component
- Parent route component should have an `Outlet` component where the child component will render based on the path

```xml
<Route path="/host" element={<HostLayout />}>
    <Route path="/host/dasbhoard" element={<Dashboard />} />
    <Route path="/host/income" element={<Income />} />
    <Route path="/host/reviews" element={<Reviews />} />
</Route>
```

## Outlet

- It is a hole or a container where the child route will render based on the path

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

- It is the default child route of a parent route from the list of all child routes
- We need not specify path for the index route
- It will render on the parent route path itself

```xml
<Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
</Route>
```

## Relative path

- Instead of using absolute path, we can drop `/` from the route path which will make it relative path
- We only have to mention the `slug` or `path parameter` in the child route's path

```xml
<Route path="host" element={<HostLayout />}>
    <Route path="dasbhoard" element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
</Route>
```

## When to Nest?

- When child element does not share UI with parent element, we don't have to create nested route
- Trivial way is to ignore parent element and set an index route in the children

```xml
<Route path="/vans">
    <Route index element={<Vans />} />
    <Route path=":id" element={<VanDetail />} />
</Route>
```

- Another trivial way is to set element for parent route as `<Outlet/>`

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
- Since react tries to match multiple routes, the styling can apply to the route matching the parent route as well. We can add an `end` prop in case a more nested route matches

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

- With relative linking, the child route path is assumed based on the parent route path

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

- To go back in path instead of route we can do the following

```xml
<Link to="../vans">Back to all vans</Link>`
```

- To go back in path instead of route we can use the `relative` attribute in `Link`

```xml
<Link to=".." relative="path">Back to all vans</Link>`
```

## Outlet context

- We can pass state from parent route to child route using `useOutletContext` hook from `react-router-dom` library
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

- Add a catch-all route as a child of main parent layout route

```xml
<Route path="/" element={<Layout />}>
    <!-- all other routes -->
    <Route path="*" element={<h1>Page not found!</h1>} />
</Route>
```
