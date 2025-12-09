export const getCommentsCount = (comments = [], currentPostId) => {
	const commentsCount = comments.filter(
		({ postId }) => postId === currentPostId,
	).length;
	return commentsCount;
};
