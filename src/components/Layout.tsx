import { FunctionComponent, ReactChild } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children?: ReactChild | ReactChild[];
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
