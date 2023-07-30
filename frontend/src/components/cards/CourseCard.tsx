"use client";
import { CardProps } from "@/types/types.card";
import { Avatar, AvatarGroup } from "@mui/material";
import Image from "next/image";

const CourseCard = ({
  img: { img, alt },
  course: { title, price, creator, purchaseCount },
}: CardProps) => {
  const avatarStyle = { border: "2px solid #2e2e2e", height: 30, width: 30 };
  return (
    <div
      style={{
        width: 260,
        // height: 300,
        border: "1px solid #565656",
        overflow: "hidden",
        borderRadius: 5,
      }}
    >
      {/* IMAGE */}
      <Image src={img} alt={alt} height={150} width={260} />
      {/* COURSE DETAILS */}
      <div
        className="fcfs"
        style={{
          padding: "10px 15px",
          gap: 5,
        }}
      >
        {/* creator */}
        <p className="regu12 os" style={{ opacity: 0.7 }}>
          {creator}
        </p>
        {/* title */}
        <h4>{title}</h4>
        {/* price */}
        <h4 className="os">₹ {price}</h4>
        {/* purchase count */}
        <div className="frc">
          <AvatarGroup max={3} spacing={"small"}>
            <Avatar alt={"Remy Sharp"} style={avatarStyle} />
            <Avatar alt={"Remy Sharp"} style={avatarStyle} />
            <Avatar alt={"Remy Sharp"} style={avatarStyle} />
          </AvatarGroup>
          <p className="ml10 regu12 os" style={{ opacity: 0.7 }}>
            +{purchaseCount} Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
