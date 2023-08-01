"use client";
import Link from "next/link";
import ButtonThird from "../buttons/ButtonThird";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LinkItem } from "@/types/types.text";

const linkClass = `semi14-os caps`;
const items: LinkItem[] = [
  { name: "courses", href: "/courses", class: linkClass },
  { name: "purchased", href: "/courses/purchased", class: linkClass },
];

// type NavigationProps = {
//   active: string;
//   setActive: React.Dispatch<React.SetStateAction<string>>;
// };

const Navigation = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="frc" style={{ gap: 25 }}>
        {items.map((item, index) => (
          <Link
            className={item.class}
            // style={{
            //   color: active == item.name ? "var(--primary)" : "var(--white)",
            // }}
            href={item.href}
            key={item.name + index}
          >
            {item.name}
          </Link>
        ))}
        {true ? (
          <ButtonThird
            value="Login"
            disabled={loading}
            onClick={() => {
              setLoading(true);
              router.push("/login");
            }}
          />
        ) : (
          <div
            style={{
              height: 40,
              width: 40,
              background: `trasparent`,
              border: "1px solid var(--primary)",
              borderRadius: "50%",
              color: "var(--white)",
            }}
            className="upper semi16 gcc"
          >
            {"username"[0]}
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
