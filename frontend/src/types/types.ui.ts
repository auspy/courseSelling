export type HeaderProps = {
  style?: React.CSSProperties;
};

export enum DeviceTypeEnum {
  desktop = "desktop",
  mobile = "mobile",
  tablet = "tablet",
}

export type DeviceTypeProps = {
  deviceType: DeviceTypeEnum;
};
