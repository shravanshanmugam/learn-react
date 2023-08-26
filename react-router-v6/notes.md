## Multi-page app vs Single page app

### Multi-page app (MPA)

Client (Browser) makes request to server to fetch each page

### Single page app (SPA)

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
- Navigate from one page to another in react app using Link element.
- It works like an anchor tag but it doesn't refresh the page.
- State in App component can be passed to both Home and About component so is not lost.

```js
import { Link } from "react-router-dom";
```

```xml
<Link to="/about">About</Link>
```

## Nested Routes

- Create list of child routes in a parent route
- Child route element will point to child component
- Parent route component should have an <code>Outlet</code> component where the child component will render based on the path

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

- Instead of using absolute path, we can drop <code>/</code> from the route path which will make it relative path
- We only have to mention the <code>slug</code> or <code>path parameter</code> in the child route's path

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
