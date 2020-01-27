import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage";
// import {isAuthenticated} from '../../ApiHandlers/AuthHandler';
// import LoginLayout from "containers/PageLayout/LoginLayout";

const PublicRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			// isAuthenticated() ? (
			!localStorage.getItem("maharaToken") ? (
				<div>
					{/* <Layout heading={Heading} component /> */}
					{/* <LoginLayout location={props.location}>
						<Component {...props} />
					</LoginLayout> */}
                    <div>
                        <LoginPage/>
                    </div>
				</div>
			) : (
				<Redirect to="/home" />
			)
		}
	/>
);

export default PublicRoute;
