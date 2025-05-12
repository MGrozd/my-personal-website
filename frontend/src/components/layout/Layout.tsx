import { ReactNode } from "react";
import MainNavigation from "./MainNavigation";
import { Box } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MainNavigation />
      {children}
    </Box>
  );
}