import React, { useState, useEffect } from "react";
import { headerParamsForPost } from "../actions/Helpers";
import { fetchEndpoint } from "../actions/Endpoints";
import axios from "axios";
import Header from "./Header";
import { Link, useParams,useNavigate } from "react-router-dom";

function ViewUser(props) {
  const [data, setData] = useState([]);
  const [domUpdateStatus, setDomUpdateStatus] = useState(1);
  const [dataAvaillable, setDataAvaillable] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  if (dataAvaillable) {
    axios
      .get(fetchEndpoint(1) + "/" + id, headerParamsForPost())
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setDomUpdateStatus(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setOccupation(response.data.occupation);
        setBio(response.data.bio);
      })
      .catch((error) => {
        console.log(error);
      });
    setDataAvaillable(false);
  }
  
  async function editUser (id) {
    let dat = JSON.stringify({
      "name": name,
      "email": email,
      "occupation": occupation,
      "bio": bio
    });
    console.log(dat)
    
    let config = {
      method: 'patch',
      url: fetchEndpoint(1) + "/" + id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : dat
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    navigate('/');
 }

  const renderOnLoadDom = () => {
    let no = 1;
    return (
      <div className="container">
        <div className="card mt-2">
          <div className="card-header">
            <div className="container">
              <div className="row">
                <div className="col-md-10">User</div>
                <div className="col">
                  <Link to="/" className="btn btn-primary float-right">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="form-group row mt-1">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={data.name}
                />
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={data.email}
                />
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="inputOccupation" className="col-sm-2 col-form-label">
                Occupation
              </label>
              <div className="col-sm-8">
                <input
                  type="occupation"
                  className="form-control"
                  onChange={(e) => setOccupation(e.target.value)}
                  defaultValue={data.occupation}
                />
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="inputBio" className="col-sm-2 col-form-label">
                Bio
              </label>
              <div className="col-sm-8">
                <input
                  type="occupation"
                  className="form-control"
                  onChange={(e) => setBio(e.target.value)}
                  defaultValue={data.bio}
                />
              </div>
            </div>

            <div className="form-group mt-2">
              
            <button onClick={()=>editUser(id)} className="btn btn-success">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return domUpdateStatus === 0 ? "" : renderOnLoadDom();
}

export default ViewUser;
