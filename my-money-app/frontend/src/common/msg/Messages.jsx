import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.css';

export default function Messages(props){
	return (
		<ReduxToastr timeOut={8000}
			newestOnTop={true}
			preventDuplicates={true}
			position="top-right"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar />
	);
}
