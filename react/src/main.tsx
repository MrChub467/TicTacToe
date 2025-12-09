import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.scss";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import SignOutPage from "./pages/SignOutPage.tsx";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/sign-in",
        Component: SignInPage,
      },
      {
        path: "/sign-out",
        Component: SignOutPage,
      },
    ],
  },
]);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
);
