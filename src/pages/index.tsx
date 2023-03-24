import { OrganizationSwitcher, UserProfile } from "@clerk/nextjs";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <OrganizationSwitcher />
      <UserProfile />
    </>
  );
};

export default Home;
