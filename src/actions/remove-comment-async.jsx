import { setPostData } from './set-post-data';

export const removeCommentAsync = (requestServer, id, postId) => (dispatch) => {
	requestServer('removeComment', id, postId).then((postData) => {
		return dispatch(setPostData(postData.res));
	});
};
