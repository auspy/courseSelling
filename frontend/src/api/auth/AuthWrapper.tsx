"use client";
import { authLogout } from "@/api/auth/auth";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { atomUserName } from "@/state/atoms/atom.username";
import { useMutation } from "@apollo/client";
import LOGOUT from "@/api/graphql/mutations/logout.graphql";
import { ContextAuthLogout } from "@/state/contexts/context.auth";

const AuthWrapper = ({ children }: React.PropsWithChildren) => {
  const [, setUserState] = useRecoilState(atomUserName);
  const router = useRouter();
  const [logout, { client }] = useMutation(LOGOUT);
  const logoutFunc = (changePage: boolean = false) => {
    authLogout({
      router,
      setUsername: setUserState,
      localStorage,
      sessionStorage,
      logoutApi: logout,
      changePage,
      client,
    });
  };
  return (
    <ContextAuthLogout.Provider
      value={(changePage?: boolean) => logoutFunc(changePage)}
    >
      {children}
    </ContextAuthLogout.Provider>
  );
};

export default AuthWrapper;
