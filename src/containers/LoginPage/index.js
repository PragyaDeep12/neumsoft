import React from "react";

class LoginPage extends React.PureComponent{
    constructor(props)
    {
        super (props);
        this.state ={
            contactNumber: "",
        }
       
    }
    render(){
        return (
            <div>
                This is the Login LoginPage
                <input type="text" onChange={e=>this.setState({contactNumber:e.target.value})} value={this.state.contactNumber}/>
                <button
                onClick={
                    ()=>{
                        if(this.state.contactNumber&& this.state.contactNumber.trim())
                        {
                            localStorage.setItem("maharaToken",this.state.contactNumber);
                            window.location.href="/home";
                        }
                    }
                }
                >
                    redirect after login
                </button>
            </div>
        )
    }
}
export default LoginPage;