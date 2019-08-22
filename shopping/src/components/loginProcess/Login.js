import React, { Component } from "react";
import "../../assets/css/login.css";

class Login extends Component {
    render() {
        return (
            <div className="bg">
                <div className="mydiv">
                    <h2 className="header">Login</h2>
                    <form>
                        <div className="form-group">
                            <div className="paddingAll">
                                <label ><b>Email</b></label>
                                <input type="text" class="form-control" id="mail" />
                            </div>
                            <div className="paddingAll">
                                <label><b>Password</b></label>
                                <input type="password" class="form-control" id="password" />
                            </div>
                            <div className="paddingAll">
                                <button className="btn btn-info">Clear</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-success">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;