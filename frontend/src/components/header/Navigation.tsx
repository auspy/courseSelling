import Link from "next/link";
import ButtonThird from "../buttons/ButtonThird";

const linkClass = `semi14-os caps`
type LinkItem = {
    name: string;
    href: string;
    class: string;
};
const items: LinkItem[] = [{ name: "courses", href: "/courses", class: linkClass }, { name: "course", href: "/courses/testId", class: linkClass }, { name: "purchased", href: "/courses/purchased", class: linkClass }, { name: "login", href: "/login", class: linkClass }, { name: "register", href: "/register", class: linkClass }]
const Navigation = () => {
    return (
        <>
            <div className="frc" style={{ gap: 25 }}>
                {items.map((item, index) => (
                    <Link className={item.class} href={item.href} key={item.name + index}>{item.name}</Link>
                ))}
                <ButtonThird value="Login" />
            </div>
        </>
    );
}

export default Navigation;