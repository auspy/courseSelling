import { generateRandomInt, randomAlphabet } from "@/helper/common";
import { defaultCourseImg } from "@/helper/constants.global";
import { CourseCardProps } from "@/types/types.card";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarGroup } from "@/components/thirdParty/mui";
const CourseCard = ({
  course: {
    _id,
    title,
    price,
    creator,
    purchaseCount,
    imageLink,
    img: { src, ...imgRest },
  },
  href,
  cardClass,
  cardStyle,
}: CourseCardProps) => {
  const avatarStyle = { border: "2px solid #2e2e2e", height: 30, width: 30 };
  const avatarCount = [1, 1, 1];
  return (
    <Link
      href={href || `/courses/${_id}`}
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
      <div
        className="rPosi"
        style={{
          height: 150,
          width: 260,
          borderRadius: "5px 5px 0 0",
          overflow: "hidden",
        }}
      >
        <Image {...imgRest} src={src || defaultCourseImg.src} />
      </div>
      {/* COURSE DETAILS */}
      <div
        className="fcfs"
        style={{
          padding: "10px 15px",
          gap: 5,
        }}
      >
        {/* creator */}
        <p className="regu12 os caps" style={{ opacity: 0.7 }}>
          {creator?.username}
        </p>
        {/* title */}
        <h5>{title}</h5>
        {/* price */}
        <h5 className="os">₹ {price}</h5>
        {/* purchase count */}
        <div className="frc">
          <AvatarGroup max={3} spacing={"small"}>
            {avatarCount.map((_, i) => (
              <Avatar
                key={i}
                alt={"Remy Sharp"}
                src={`/images/avatar/${generateRandomInt(
                  24,
                  generateRandomInt(23, 1)
                )}.png`}
                className="bold12"
                style={avatarStyle}
              >
                {randomAlphabet()}
              </Avatar>
            ))}
          </AvatarGroup>
          <p className="ml10 regu12 os" style={{ opacity: 0.7 }}>
            +
            {purchaseCount ||
              (Math.random() * 10 ** (Math.random() * 8)).toFixed()}{" "}
            Students
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
