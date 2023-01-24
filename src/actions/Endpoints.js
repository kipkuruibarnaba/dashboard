import React from "react";
// import {applicationServer} from "./Helpers";

export function fetchEndpoint(key) {
    let defaultUrl = "/";
    switch (key) {
        case 0:
            defaultUrl = "https://touchinspiration-0ada.restdb.io/rest/samp";
            break;
        case 1:
            defaultUrl = "https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users";
            break;           
            
        }
        
    return defaultUrl;
}
