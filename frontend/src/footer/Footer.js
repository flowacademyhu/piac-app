import "./Footer.css";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <div className="footer">
      <FooterButton requestParam="/" appelation="PIACOK" logo="market" />
      <FooterButton requestParam="/arusok" appelation="ÁRUSOK" logo="vendor" />
    </div>
  );
};

export default Footer;
