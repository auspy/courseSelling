"use client";
import atomToast from "@/state/atoms/atom.toast";
import { ToastType } from "@/types/types.toast";
import { CloseRounded } from "@mui/icons-material";
import { Alert, AlertColor, Collapse, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const ToastWrapper = ({ children }: { children?: React.PropsWithChildren }) => {
  const [toast, setToast] = useRecoilState(atomToast);
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    // Clear the toast message when it's opened
    if (toast.text !== "") {
      timerId = setTimeout(() => {
        setToast({ ...toast, text: "", type: ToastType.INFO });
        console.log("toast cleared");
      }, toast.secs); // Convert seconds to milliseconds
    }

    // Clear the timer when the component unmounts or when toast.text changes
    return () => clearTimeout(timerId);
  }, [toast.text, toast.secs, setToast]);
  if (!toast.text) {
    // no toast
    return <>{children}</>;
  }
  return (
    <>
      <Collapse in={!!toast.text}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setToast({ ...toast, text: "", type: ToastType.INFO });
              }}
            >
              <CloseRounded fontSize="inherit" />
            </IconButton>
          }
          style={{
            position: "fixed",
            top: 40,
            right: 40,
            zIndex: 1000,
            // backgroundColor: "var(--red)",
            fontFamily: "Raleway,sans-serif",
          }}
          className="medi14"
          variant="filled"
          severity={toast.type as AlertColor}
        >
          {toast.text[0]?.toUpperCase() + toast.text.slice(1)}
        </Alert>
      </Collapse>
      {children}
    </>
  );
};

export default ToastWrapper;
