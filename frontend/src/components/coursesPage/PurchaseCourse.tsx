"use client";
import PURCHASE from "@/api/graphql/mutations/purchaseCourse.graphql";
import { useMutation } from "@apollo/client";
import ButtonPrimaryLong from "../buttons/ButtonPrimaryLong";
import { useContext, useState } from "react";
import { atomUserName } from "@/state/atoms/atom.username";
import { useRecoilState } from "recoil";
import atomToast from "@/state/atoms/atom.toast";
import Button from "../buttons/Button";
import { ContextDeviceType } from "@/state/contexts/context";
const ButtonBuyNow = ({
  amount,
  _id,
  buttonClass,
}: {
  amount: number;
  _id: string;
  buttonClass?: string;
}) => {
  const deviceType = useContext(ContextDeviceType);
  const isMobile = deviceType === "mobile";
  const [purchase, { loading }] = useMutation(PURCHASE);
  const [clicked, setClicked] = useState<boolean>(false);
  const [atomUserNme] = useRecoilState(atomUserName);
  const [, setToast] = useRecoilState(atomToast);
  const handleClick = () => {
    setClicked(true);
    // purchase will be allowed if the role is user and user is logged in
    if (atomUserNme.role !== "USER" || !atomUserNme.username) {
      console.log("tried to purchase", atomUserNme.role, atomUserNme.username);
      setToast({
        text: "Login with user account to continue!",
        type: "info",
        secs: 5000,
      });
      setClicked(false);
      return;
    }
    purchase({
      variables: {
        courseId: _id,
        amt: amount,
        method: "UPI",
      },
      onCompleted: (data) => {
        console.log("completed purchase", data);
        setToast({
          text: data?.purchaseCourse?.msg,
          type: data?.purchaseCourse?.status == "failed" ? "error" : "success",
          secs: 5000,
        });
        setClicked(false);
      },
      onError: (err) => {
        console.log("error purchase", err);
        setClicked(false);
      },
    });
  };
  if (isMobile) {
    return (
      <Button
        disabled={loading || clicked}
        loading={loading || clicked}
        value="buy now"
        buttonClass={buttonClass}
        onClick={handleClick}
      />
    );
  }
  return (
    <>
      <ButtonPrimaryLong
        disabled={loading || clicked}
        loading={loading || clicked}
        value="buy now"
        buttonClass={buttonClass}
        onClick={handleClick}
      />
    </>
  );
};

export default ButtonBuyNow;
