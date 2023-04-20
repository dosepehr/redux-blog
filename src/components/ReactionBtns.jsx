import { useDispatch } from 'react-redux';
import { blogReacted } from '../reducers/blogsSlice';

const ReactionBtns = ({ blogId, ...reactions }) => {
    const reactionEmoji = {
        thumbsUp: '👍',
        hooray: '🎉',
        heart: '❤️',
        rocket: '🚀',
        eyes: '👀',
    };

    const dispatch = useDispatch();
    const reactionHandler = (name) => {
        dispatch(blogReacted({ blogId, reaction: name }));
    };
    return (
        <div className='my-5'>
            {Object.entries(reactionEmoji).map(([name, emoji]) => {
                return (
                    <button
                        className='mx-2 border border-gray-300 p-2 mb-2'
                        key={name}
                        type='button'
                        onClick={() => reactionHandler(name)}
                    >
                        {emoji} {reactions[name]}
                    </button>
                );
            })}
        </div>
    );
};

export default ReactionBtns;
