import { createClient } from "@/prismicio";
import "./nav.scss";
import NavLayout from "./NavLayout";

export default async function Nav() {
  const client = createClient();
  const nav = await client.getSingle("nav");
  return nav && <NavLayout nav={nav} />;
}
