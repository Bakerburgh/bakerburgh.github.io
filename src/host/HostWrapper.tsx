import { ReactNode } from "react";
import { VerticalLayout } from "../common/VertivalLayout";
import Header from "./Header";
import { useAppSelector } from "../store";
import { AppBody } from "../common/AppBody";

function HostWrapper(props: {children: ReactNode}) {
  const selectedApp = useAppSelector(store => store.appSwitcher.selectedApp);
  return <VerticalLayout>
    <Header headerText={selectedApp.headerText ?? selectedApp.key}/>
    <AppBody>
      {props.children}
    </AppBody>
  </VerticalLayout>
}

export default HostWrapper;