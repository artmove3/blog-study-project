import { setPostData } from './set-post-data';

export const addCommentAsync =
	(requestServer, postId, userName, content) => (dispatch) => {
		requestServer('addComment', postId, userName, content).then((postData) => {
			return dispatch(setPostData(postData.res));
		});
	};
