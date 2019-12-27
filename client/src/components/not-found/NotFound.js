import React from "react";
import { Redirect } from "react-router-dom";
import RedirectNotFound from "./RedirectNotFound";

function NotFound() {
  return <Redirect to={RedirectNotFound} />;
}

export default NotFound;
