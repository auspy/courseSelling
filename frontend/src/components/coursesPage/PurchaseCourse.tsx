"use client";
import PURCHASE from "@/api/graphql/mutations/purchaseCourse.graphql";
import { useMutation } from "@apollo/client";
import ButtonPrimaryLong from "../buttons/ButtonPrimaryLong";
import { useState } from "react";
import { atomUserName } from "@/state/atoms/atom.username";
import { useRecoilState } from "recoil";
import atomToast from "@/state/atoms/atom.toast";
const ButtonBuyNow = ({ amount, _id }: { amount: number; _id: string }) => {
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

  return (
    <>
      <ButtonPrimaryLong
        disabled={loading || clicked}
        loading={loading || clicked}
        value="buy now"
        buttonClass="mt20"
        onClick={handleClick}
      />
    </>
  );
};

export default ButtonBuyNow;
