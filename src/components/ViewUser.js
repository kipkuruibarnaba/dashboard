import React, { useState, useEffect } from "react";
import { headerParamsForPost } from "../actions/Helpers";
import { fetchEndpoint } from "../actions/Endpoints";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

function ViewUser() {
  const [fetchedData, setFetchedData] = useState([]);
  const [domUpdateStatus, setDomUpdateStatus] = useState(1);
  const [dataAvaillable, setDataAvaillable] = useState(true);
  const renderOnLoadDom = () => {
    let no = 1;
    return (
      <div className="container">
        <div className="card mt-2">
          <div className="card-header">Users</div>
          <div className="card-body table-responsive">
            <table className="table table-stripped table-bordered table-hover table-responsive">
              <thead>
                <tr>
                  <th scope="col">Counter</th>
                  <th scope="col">ID</th>
                  <th scope="col">name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Ocupation</th>
                  <th scope="col">Bio</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return domUpdateStatus === 0 ? "" : renderOnLoadDom();
}

export default ViewUser;
