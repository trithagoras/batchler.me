import Link from 'next/link';
import metadata from './framework/metadata';
import PostModel from './models/postModel';

const PostEntry = ({ model }: { model: PostModel }) => (
    <div className='p-4'>
        <span>Mon Jul 24 2023</span>
        <Link href={`/posts/${model.id}`}>
            <h2 className='text-3xl text-blue-700 dark:text-blue-300'>{model.title}</h2>
        </Link>
    </div>

)

const Posts = () => (
    <div>
        {metadata.map(md => <PostEntry key={md.id} model={md} />)}
    </div>
)

export default Posts;
