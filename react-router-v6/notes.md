## Multi-page app vs Single page app

- Multi-page app (MPA) - Client (Browser) makes request to server to fetch each page
- Single page app (SPA)

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

```
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

## Nested Routes

- Create list of child routes in a parent route
- Child route element will point to child component
- Parent route component should have an <code>Outlet</code> component where the child component will render based on the path

## Outlet

- It is a hole or a container where the child route will render based on the path

## Index route

- It is the default child route of a parent route from the list of all child routes
- We need not specify path for the index route
- It will render on the parent route path itself
