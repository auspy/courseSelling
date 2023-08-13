import { DeviceTypeEnum } from "@/types/types.ui";
import { createContext } from "react";

export const DeviceTypeContext = createContext<DeviceTypeEnum>(
  DeviceTypeEnum.desktop
);
