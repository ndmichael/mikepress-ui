import {Table, TableBody, TableCell, TableHead, TableHeader, TableCaption, TableRow} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts'
import { Post } from '@/types/posts';

interface PostsTableProps {
    limit? : number
    title? : string
}

const PostsTable = ({limit, title}: PostsTableProps) => {
    return (
        <div className='mt-10'>
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title : "Posts"}
            </h3>
            
            <Table>
                <TableCaption>List of recent posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className='hidden md:table-cell'>Author</TableHead>
                        <TableHead className='hidden text-right md:table-cell'>Date</TableHead>
                        <TableHead>Views</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        posts.map(post => (
                            <TableRow key={post.id}>
                                <TableCell>{post.title}</TableCell>
                                <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
                                <TableCell className='hidden md:table-cell text-right'>{post.date}</TableCell>
                                <TableCell>
                                    <Link href={`/posts/edit/${post.id}`}>
                                        <button 
                                            className='bg-blue-500 text-white font-bold 
                                            py-2 px-4 rounded text-xs cursor-pointer hover:bg-blue-700'
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default PostsTable;