export const removePostAsync = (requestServer, postId) => () => {
	return requestServer('removePost', postId);
};
