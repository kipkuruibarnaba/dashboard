import React from "react";
// import {applicationServer} from "./Helpers";

export function fetchEndpoint(key) {
  let defaultUrl = "/";
  switch (key) {
    case 0:
      defaultUrl =
        "https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users";
      break;
    case 1:
      defaultUrl =
        "https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user";
      break;
  }
  return defaultUrl;
}
