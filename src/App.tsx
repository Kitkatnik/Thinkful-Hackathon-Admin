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
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import authProvider from "./authProvider";

import List

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
            },
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
            formProps={{
              initialValues: {
                email: "info@refine.dev",
                password: "refine-supabase",
              },
            }}
          />
        )}
        notificationProvider={notificationProvider}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "profile",
            list: AntdInferencer,
            edit: AntdInferencer,
            show: AntdInferencer,
            create: AntdInferencer,
            canDelete: true,
          },
        ]}
        Title={Title}
        Header={Header}
        Sider={Sider}
        Footer={Footer}
        Layout={Layout}
        OffLayoutArea={OffLayoutArea}
      />
    </ColorModeContextProvider>
  );
}

export default App;
