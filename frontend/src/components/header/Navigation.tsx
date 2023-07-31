"use client";
import Link from "next/link";
import ButtonThird from "../buttons/ButtonThird";
import { useRouter } from "next/navigation";
import { useState } from "react";

const linkClass = `semi14-os caps`;
type LinkItem = {
  name: string;
  href: string;
  class: string;
};
const items: LinkItem[] = [
  { name: "courses", href: "/courses", class: linkClass },
  { name: "course", href: "/courses/testId", class: linkClass },
  { name: "purchased", href: "/courses/purchased", class: linkClass },
];
const Navigation = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="frc" style={{ gap: 25 }}>
        {items.map((item, index) => (
          <Link className={item.class} href={item.href} key={item.name + index}>
            {item.name}
          </Link>
        ))}
        <ButtonThird
          value="Login"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            router.push("/login");
          }}
        />
      </div>
    </>
  );
};

export default Navigation;
