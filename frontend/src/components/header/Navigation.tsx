import Link from "next/link";
import { LinkItem } from "@/types/types.text";
import { cookies } from "next/dist/client/components/headers";
import ButtonLogin from "../buttons/ButtonLogin";

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
  const authToken = cookies().get("authToken");
  const userLoggedIn = authToken ? true : false;
  console.log("authToken", authToken);
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
