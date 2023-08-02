"use client";
import { CourseCardProps } from "@/types/types.card";
import { Avatar, AvatarGroup } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  course: {
    id,
    title,
    price,
    creator,
    purchaseCount,
    img: { img, alt, style },
  },
  cardClass,
  cardStyle,
}: CourseCardProps) => {
  const avatarStyle = { border: "2px solid #2e2e2e", height: 30, width: 30 };
  return (
    <Link
      href={`/courses/${id}`}
      className={`hover ${cardClass}`}
      style={{
        width: 260,
        border: "1px solid #565656",
        overflow: "hidden",
        borderRadius: 5,
        flexShrink: 0,
        ...cardStyle,
      }}
    >
      {/* IMAGE */}
      <Image src={img} alt={alt} height={150} width={260} style={style} />
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
        <h5>{title}</h5>
        {/* price */}
        <h5 className="os">₹ {price}</h5>
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
    </Link>
  );
};

export default CourseCard;
