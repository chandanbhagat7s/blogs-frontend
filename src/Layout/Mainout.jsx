import Nav from "../component/Nav";
import Footer from "../component/Footer";

export default function Mainout({ children }) {
  return (
    <>
      <Nav></Nav>
      {children}
      <Footer />
    </>
  );
}
