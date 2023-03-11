import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import routerProvider from "@pankod/refine-react-router-v6";
import { supabaseClient } from "utility";
import { ColorModeContextProvider } from "contexts";
import {
  Title,
  Header,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import authProvider from "./authProvider";
import { Dashboard } from "components/pages/profiles/dashboard";
import { ProfileEdit } from "components/pages/profiles/edit";
import { LogoList } from "components/pages/logos/list";
import { LogoCreate } from "components/pages/logos/create";
import { LogoShow } from "components/pages/logos/show";
import { LogoEdit } from "components/pages/logos/edit";

function App() {
  return (
    <ColorModeContextProvider>
      <Refine
        dataProvider={dataProvider(supabaseClient)}
        liveProvider={liveProvider(supabaseClient)}
        authProvider={authProvider}
        routerProvider={{
          ...routerProvider,
          routes: [
            {
              path: "/register",
              element: <AuthPage type="register" />,
            },
            {
              path: "/forgot-password",
              element: <AuthPage type="forgotPassword" />,
            },
            {
              path: "/update-password",
              element: <AuthPage type="updatePassword" />,
            }
          ],
        }}
        LoginPage={() => (
          <AuthPage
            type="login"
            providers={[
              {
                name: "github",
                label: "Sign in with Github",
              },
              {
                name: "linkedin",
                label: "Sign in with LinkedIn",
              },
              {
                name: "discord",
                label: "Sign in with Discord",
              },
            ]}
          />
        )}
        notificationProvider={notificationProvider}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "profiles",
            edit: ProfileEdit,
            show: Dashboard,
            canDelete: false,
          },
          {
            name: "logos",
            list: LogoList,
            edit: LogoEdit,
            create: LogoCreate,
            show: LogoShow,
            canDelete: false,
          }
        ]}
        Title={Title}
        Header={Header}
        Footer={Footer}
        Layout={Layout}
        DashboardPage={Dashboard}
        OffLayoutArea={OffLayoutArea}
      />
    </ColorModeContextProvider>
  );
}

export default App;
