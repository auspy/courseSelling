"use client";
import { atomUserName } from "@/state/atoms/atom.username";
import { useRecoilState } from "recoil";
import ButtonThird from "../buttons/ButtonThird";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserAvatarMenu from "../header/UserAvatarMenu";

const ButtonLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useRecoilState(atomUserName);
  // console.log(username, "is the username in button login");
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUsername(JSON.parse(userData));
    }
    setLoading(false);
  }, []);
  if (username.username) {
    return <UserAvatarMenu username="username" />;
  }
  return (
    <ButtonThird
      value="Login"
      disabled={loading}
      loading={loading}
      onClick={() => {
        setLoading(true);
        router.push("/auth");
      }}
    />
  );
};

export default ButtonLogin;
