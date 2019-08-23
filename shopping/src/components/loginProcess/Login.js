import React, { Component } from "react";
import Service from "../../service/service";
import "../../assets/css/login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.serv = new Service();
    }

    onClickClear(e) {
        this.setState({ email: "" });
        this.setState({ password: "" });
    }

    onClickSave(e) {
        let log = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(log);

        this.serv
            .login(log)
            //.CheckUser(this.state.UserName,this.state.Password)
            .then((res) => {
                res.json()
            })
            .then(resp => {
                console.log("api values" + JSON.stringify(resp));

                alert(`Successfull login as ${resp}`);
            })
            .catch(err => {
                console.log(err);
            })
    }
    onChangeUser(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div className="bg">
                <div className="mydiv">
                    <h2 className="header">Login</h2>
                    <form>
                        <div className="form-group">
                            <div className="paddingAll">
                                <label ><b>Email</b></label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeUser.bind(this)}
                                    name="email" />
                            </div>
                            <div className="paddingAll">
                                <label><b>Password</b></label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.onChangeUser.bind(this)} name="password" />
                            </div>
                            <div className="paddingAll">
                                <input type="button"
                                    value="Clear"
                                    className="btn btn-secondary"
                                    style={{ borderColor: "#ffffff" }}
                                    onClick={this.onClickClear.bind(this)}
                                />&nbsp;&nbsp;&nbsp;
                            <input type="button"
                                    value="Save"
                                    className="btn btn-success"
                                    onClick={this.onClickSave.bind(this)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;