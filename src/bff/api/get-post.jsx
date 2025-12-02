import { transformPost } from '../transformers/transform-post';

export const getPost = async (postId) =>
	fetch(`http://localhost:3004/posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error =
				res.status === 404
					? 'Такая страница не существует'
					: 'Что-то пошло не так. Попробуйте еще раз позднее';

			return Promise.reject(error);
		})
		.then((response) => response.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
