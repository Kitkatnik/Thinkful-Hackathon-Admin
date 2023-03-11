import React from "react";

import { LayoutProps } from "@pankod/refine-core";
import { AntdLayout, Grid } from "@pankod/refine-antd";

export const Layout: React.FC<LayoutProps> = ({
  children,
  // Sider,
  Header,
  Footer,
  // OffLayoutArea,
}) => {
  const breakpoint = Grid.useBreakpoint();
  return (
    <AntdLayout style={{ minHeight: "100vh", flexDirection: "row"}}>
      {/* {Sider && <Sider />} */}
      <AntdLayout>
        {Header && <Header />}
        <AntdLayout.Content>
          <div
            style={{
              padding: breakpoint.lg ? "24px 24%" : "12px 2%",
              minHeight: 360, width: "100vw",
            }}
          >
            {children}
          </div>
          {/* {OffLayoutArea && <OffLayoutArea />} */}
        </AntdLayout.Content>
        {Footer && <Footer />}
      </AntdLayout>
    </AntdLayout>
  );
};
