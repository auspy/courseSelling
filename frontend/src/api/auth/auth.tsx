import { ApolloClient } from "@apollo/client";

export const authLogout = ({
  router,
  setUsername,
  localStorage,
  sessionStorage,
  logoutApi,
  setClicked,
  changePage = true,
  client,
}: {
  router: any;
  setUsername: any;
  localStorage: any;
  sessionStorage: any;
  logoutApi: any;
  setClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  changePage?: boolean;
  client: ApolloClient<Object>;
}) => {
  try {
    // call logout api
    logoutApi();
    // clear browser storage
    localStorage.clear();
    sessionStorage.clear();
    // clear atom
    setUsername("");
    // redirect to login page
    if (changePage) {
      router.push("/auth");
    }
    client.clearStore();
  } catch (error) {
    setClicked && setClicked(false);
    console.log("error in clientLogout", error);
  }
};
