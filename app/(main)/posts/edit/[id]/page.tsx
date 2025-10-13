import BackButton from "@/components/BackButton";
import MyForm from "@/components/dashboard/MyForm";
import posts from "@/data/posts";


interface PostEditPageProps {
    params: Promise<{
        id: string
    }>
}

const EditPostPage = async ({params}: PostEditPageProps) => {
    const {id} = await params
    const post = posts.find((post) => post.id === id);

    return (
        <div className="px-4 md:px-8">
            <BackButton text='back to post' link="/posts" />
            <h3 className="text-2l my-4">Edit Post</h3>
            <MyForm  post={post} />
        </div>
    );
};

export default EditPostPage;