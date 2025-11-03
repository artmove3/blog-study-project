export const transformComments = (dbPostComments) => ({
	postId: dbPostComments.post_id,
	userName: dbPostComments.user_name,
	content: dbPostComments.content,
	publishedAt: dbPostComments.published_at,
	id: dbPostComments.id,
});
