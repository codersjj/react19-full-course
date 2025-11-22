import { useParams, useSearchParams, useNavigate } from "react-router";
import Button from "../../components/Button";

const Post = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q");

  return (
    <div>
      <p>Post ID: {id}</p>
      <p>Post query: {query}</p>

      <Button variant="outline" onClick={() => navigate("/")}>
        Go home
      </Button>
    </div>
  );
};

export default Post;
