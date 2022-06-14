import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SWRConfig } from "swr";

const Dashboard = lazy(() => import("pages/Dashboard"));
const Layout = lazy(() => import("pages/Layout"));
const Users = lazy(() => import("pages/Users"));
const UserDetails = lazy(() => import("pages/UserDetails"));

function App() {
  return (
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />}>
                <Route path=":userId" element={<UserDetails />} />
                <Route
                  path="new"
                  element={
                    <div className="text-xl text-sky-500 font-semibold">
                      New User
                    </div>
                  }
                />
              </Route>
              <Route
                path="*"
                element={
                  <div>
                    <div className="text-center text-5xl text-sky-600 font-semibold">
                      Page not found
                    </div>
                  </div>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </SWRConfig>
    </BrowserRouter>
  );
}

export default App;
