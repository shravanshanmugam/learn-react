# Multi-page app vs Single page app

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

# Link

- Using anchor tag will refresh the page and lose state.
- Navigate from one page to another in react app using Link element.
- It works like an anchor tag but it doesn't refresh the page.
- State in App component can be passed to both Home and About component so is not lost.
