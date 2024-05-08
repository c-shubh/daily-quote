import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "Bookmarks", href: "/bookmarks" },
];
export default function NavBar() {
  return (
    <div className="space-x-4">
      {links.map((link) => (
        <Link as={NextLink} href={link.href} key={link.href}>
          <span className="underline text-blue-700">{link.title}</span>
        </Link>
      ))}
    </div>
  );
}
