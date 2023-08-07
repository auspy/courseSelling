export const authLogout = ({
  router,
  setUsername,
  localStorage,
  sessionStorage,
  logoutApi,
  setClicked,
}: {
  router: any;
  setUsername: any;
  localStorage: any;
  sessionStorage: any;
  logoutApi: any;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
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
    router.push("/auth");
  } catch (error) {
    setClicked(false);
    console.log("error in clientLogout", error);
  }
};
