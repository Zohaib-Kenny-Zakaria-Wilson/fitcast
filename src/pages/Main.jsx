import { Link } from "react-router-dom";
import useAppContext from "../context/useAppContext";
function Main() {
  const { session } = useAppContext();

  return (
    <main className="flex flex-col-reverse h-screen dark:bg-dark-background bg-foreground md:flex-row lg:flex-row ">
      <div className="flex flex-col justify-center w-full p-36">
        <img
          className="rounded-md shadow-2xl"
          alt="pci"
          width="100%"
          src={require("../components/images/demo2.png")}
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-16 rounded-sm grow bg-dark-background">
        <h1 className="text-5xl font-bold text-center text-dark-primary-tw">
          Get Started With Fitcast
        </h1>

        <div className="flex flex-col justify-between gap-4">
          {session ? (
            <>
              <Link
                to={"/daily"}
                className="px-24 py-3 rounded-sm bg-dark-primary-tw text-primary-tw"
              >
                Log in
              </Link>
              <Link
                to={"/daily"}
                className="px-24 py-3 rounded-sm bg-dark-component-border text-dark-primary-tw"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/daily"}
                className="px-24 py-3 rounded-sm bg-dark-primary-tw text-primary-tw"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
