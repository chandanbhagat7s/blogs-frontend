import Nav from "../component/Nav";
import Footer from "../component/Footer";

export default function Mainout({ children }) {
  return (
    <>
      <Nav></Nav>
      <div className="my-20">{children}</div>
      <Footer />
    </>
  );
}
