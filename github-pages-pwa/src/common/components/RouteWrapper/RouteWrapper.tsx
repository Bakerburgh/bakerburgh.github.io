import { styled } from "@mui/joy";
import Header from "./Header";
import { ReactNode } from "react";

const VerticalLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}))

function RouteWrapper(props: {children: ReactNode}) {
  return <VerticalLayout>
    <Header />
    {props.children}
  </VerticalLayout>
}

export default RouteWrapper;