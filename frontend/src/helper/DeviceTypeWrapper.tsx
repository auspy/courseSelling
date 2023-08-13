"use client";
import { useEffect, useState } from "react";
import { ContextDeviceType } from "../state/contexts/context";
import { DeviceTypeEnum } from "@/types/types.ui";

// uses recoil and react code
const DeviceTypeWrapper = ({ children }: React.PropsWithChildren) => {
  const [device, setDeviceType] = useState<DeviceTypeEnum>(
    DeviceTypeEnum.desktop
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 620) {
        setDeviceType(DeviceTypeEnum.mobile);
      } else if (window.innerWidth < 992) {
        setDeviceType(DeviceTypeEnum.tablet);
      } else {
        setDeviceType(DeviceTypeEnum.desktop);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <ContextDeviceType.Provider value={device}>
        {children}
      </ContextDeviceType.Provider>
    </>
  );
};

export default DeviceTypeWrapper;
