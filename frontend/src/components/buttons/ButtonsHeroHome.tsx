"use client";
import Button from "@/components/buttons/Button";
import ButtonSec from "@/components/buttons/ButtonSec";
import { useRouter } from "next/navigation";

const ButtonsHeroHome = () => {
  const router = useRouter();
  return (
    <>
      <Button
        buttonStyle={{}}
        buttonClass=""
        value="Try demo"
        href="/courses/64d1c6c2abe096cd3b3456b6"
      />
      <ButtonSec value="explore" href="/courses" />
    </>
  );
};

export default ButtonsHeroHome;
