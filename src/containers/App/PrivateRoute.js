import React from "react";
import { Route, Redirect } from "react-router-dom";
import PageLayout from "../PageLayout";
// import {isAuthenticated} from '../../ApiHandlers/AuthHandler';
// import Layout from 'components/Layout';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem("maharaToken") ? (
				<div>
					<PageLayout match={props.match} location={props.location}>
						<Component key={props.location.pathname} {...props} />
					</PageLayout>
				</div>
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

export default PrivateRoute;
