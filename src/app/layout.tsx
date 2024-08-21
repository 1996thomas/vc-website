import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Poppins } from "next/font/google";
import "./sass/reset.scss";
import Nav from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import { Suspense } from "react";
import Loading from "./components/Loading/loading";

const poppins = Poppins({
  weight: ["300", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Nav />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
