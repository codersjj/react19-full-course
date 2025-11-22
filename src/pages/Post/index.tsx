import { useParams, useSearchParams } from "react-router";

const Post = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  return (
    <div>
      <p>Post ID: {id}</p>
      <p>Post query: {query}</p>
    </div>
  );
};

export default Post;
