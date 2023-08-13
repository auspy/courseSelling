import { DeviceTypeEnum } from "@/types/types.ui";
import { createContext } from "react";

export const ContextDeviceType = createContext<DeviceTypeEnum>(
  DeviceTypeEnum.desktop
);
