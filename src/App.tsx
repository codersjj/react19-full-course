import { Suspense, use } from "react";

type UserType = {
  name: string;
  email: string;
};

const fetchUser = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error(
      `Fetch user data failed, response status: ${response.status}`
    );
  }

  return response.json();
};

const UserInfo = ({ userPromise }: { userPromise: Promise<UserType> }) => {
  const user = use(userPromise);

  return (
    <>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </>
  );
};

function App() {
  const userPromise = fetchUser();

  return (
    <div className="p-5">
      <Suspense fallback={<p>⌛Loading user info...</p>}>
        <UserInfo userPromise={userPromise} />
      </Suspense>
    </div>
  );
}

export default App;
