import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function PageLayout() {
  console.log("rendering PageLayout");
  return (
    <>
      <Header />
      <main className="page-outlet-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
