import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Loading() {
  return (
    <div className="container">
      <div className="card mt-2">
      <div className="text-center">
                <div className="lds-facebook">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <h5 className="card-category">
                    PLEASE WAIT...
                </h5>
            </div>
      </div>
    </div>
  );
}

export default Loading;
