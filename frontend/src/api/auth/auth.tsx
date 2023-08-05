export const authLogout = ({
  router,
  setUsername,
  localStorage,
  sessionStorage,
  logoutApi,
}: {
  router: any;
  setUsername: any;
  localStorage: any;
  sessionStorage: any;
  logoutApi: any;
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
    console.log("error in clientLogout", error);
  }
};
