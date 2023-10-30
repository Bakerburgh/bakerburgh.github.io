import { useLocation } from "react-router-dom";

export function LocationToReduxTracker() {
  const location = useLocation();
  console.log(location);

  return <>
  </>;
}