import Link from "next/link";
import { LinkItem } from "@/types/types.text";
import ButtonLogin from "../buttons/ButtonLogin";

const linkClass = `semi14-os caps`;
const items: LinkItem[] = [
  { name: "explore", href: "/courses", class: linkClass },
  // { name: "purchased", href: "/courses/purchased", class: linkClass },
];

// type NavigationProps = {
//   active: string;
//   setActive: React.Dispatch<React.SetStateAction<string>>;
// };

const Navigation = () => {
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
        <ButtonLogin />
      </div>
    </>
  );
};

export default Navigation;
