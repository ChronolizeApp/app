import React, { FC, Fragment } from "react";

import { Shellbar } from "@/widgets/shell/ui/shell";
import { Menubar } from "@/widgets/menu/ui/menu";
import { menuItems } from "@/shared/lib/utils";
import { Toaster } from "sonner";

interface LayoutProps {
  useNavbar: boolean;
  useMenu: boolean;
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  children,
  useMenu,
  useNavbar,
}) => {
  return (
    <Fragment>
      {useNavbar && <Shellbar />}
      <div className="min-h-[calc(100vh-350px)]">
        {children}
      </div>
      {useMenu && (
        <div className="fixed bottom-2 w-full p-2">
            <Menubar items={menuItems} />
        </div>
      )}
      <Toaster />
    </Fragment>
  );
};
