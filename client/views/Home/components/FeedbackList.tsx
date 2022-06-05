import Feedback from './Feedback';
import type { FeedbackType } from './Feedback';

type Props = {
    feedback: FeedbackType[];
};

const FeedbackList: React.FC<Props> = ({ feedback }) => {
    return (
        <>
            {
                feedback && feedback.map((el) => {
                    return <Feedback key={ el.id } feedback={el} />
                })
            }
        </>
    );
};

export default FeedbackList;