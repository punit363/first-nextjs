import axios from "axios";

const getUserData = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/user"
  );
  return await response.data;
};

//async component only in NEXTJS and only in server side components not client side
export default async function Home() {
  const userDetails = await getUserData();

  return <div>hi there
    {userDetails.email}
    {userDetails.name}
  </div>;
}
