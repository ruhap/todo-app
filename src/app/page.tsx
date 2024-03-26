import { SignIn } from "@/components/auth-buttons";

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <SignIn provider="discord" />
    </main>
  );
};

export default Home;
