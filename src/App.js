// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// /**
//  * app.js
//  *
//  * This is the entry file for the application, only setup and boilerplate
//  * code.
//  */

// // Needed for redux-saga es6 generator support
// // import "@babel/polyfill";

// // Import all the third party stuff
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router/immutable";
// // import FontFaceObserver from "fontfaceobserver";
// import history from "./utils/history";
// // import "sanitize.css/sanitize.css";
// // import "./assets/styles/app.scss";

// // Import root app
// import App from "./containers/App";
// import configureStore from "./configureStore";

// // Import i18n messages
// // import { translationMessages } from "./i18n";

// // Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// // the index.html file and this observer)
// // const openSansObserver = new FontFaceObserver("Open Sans", {});

// // When Open Sans is loaded, add a font-family using Open Sans to the body
// // openSansObserver.load().then(() => {
// // 	document.body.classList.add("fontLoaded");
// // });


// // Create redux store with history
// const initialState = {};
// // const store = configureStore(initialState, history);
// // const MOUNT_NODE = document.getElementById("app");
// export default function app() {

// return (
//   <div>
//     hello
//   </div>
// 			// <Provider store={store}>
// 			// 			<ConnectedRouter history={history}>
// 							// <App />
// 			// 			</ConnectedRouter>
// 			// </Provider>
// 	);

// // if (module.hot) {
// // 	// Hot reloadable React components and translation json files
// // 	// modules.hot.accept does not accept dynamic dependencies,
// // 	// have to be constants at compile-time
// // 	module.hot.accept(["./i18n", "containers/App"], () => {
// // 		ReactDOM.unmountComponentAtNode(MOUNT_NODE);
// // 		render(translationMessages);
// // 	});
// }

// // // Chunked polyfill for browsers without Intl support
// // if (!window.Intl) {
// // 	new Promise(resolve => {
// // 		resolve(import("intl"));
// // 	})
// // 		.then(() =>
// // 			Promise.all([
// // 				import("intl/locale-data/jsonp/en.js"),
// // 				import("intl/locale-data/jsonp/de.js"),
// // 			]),
// // 		) 
// // 		.then(() => render(translationMessages))
// // 		.catch(err => {
// // 			throw err;
// // 		});
// // } else {
// // 	render(translationMessages);
// //