import React, { useState, useEffect } from "react";
import { headerParamsForPost } from "../actions/Helpers";
import { fetchEndpoint } from "../actions/Endpoints";
import axios from "axios";
// import $ from "jquery";
// import 'datatables.net-responsive-bs5'
// import "datatables.net-bs5/js/dataTables.bootstrap5.js";
// import "datatables.net-bs5/css/dataTables.bootstrap5.css";
import Header from "./Header";
import { Link } from "react-router-dom";

function Dashboard() {
  const [fetchedData, setFetchedData] = useState([]);
  const [domUpdateStatus, setDomUpdateStatus] = useState(0);
  const [dataAvaillable, setDataAvaillable] = useState(true);
  if (dataAvaillable) {
    axios
      .get(fetchEndpoint(1), headerParamsForPost())
      .then((response) => {
        console.log(response.data);
        setFetchedData(response.data);
        setDomUpdateStatus(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setDataAvaillable(false);
  }
  const style = {
    width: "100%",
  };

  const styleTop = {
    paddingTop: "5%",
  };

  console.log(dataAvaillable);
  const renderOnLoadDom = () => {
    //   $(document).ready(function () {
    //     // $.fn.dataTable.ext.errMode = 'none';
    //     $('#allTransaction').DataTable();
    // });
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
              <tbody>
                {fetchedData.map((item) => (
                  <tr key={item.id}>
                    <th>{no++}</th>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.occupation}</td>
                    <td>{item.bio}</td>
                    <td>
                      {/* <button className="btn btn-danger">View</button> */}
                      <Link to ={"view" }>
                                        <button  className="btn btn-danger">View</button>
                                        </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return domUpdateStatus === 0 ? "" : renderOnLoadDom();
}

export default Dashboard;
