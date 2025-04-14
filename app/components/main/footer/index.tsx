import MainForm from "../form/mainForm";
import FooterLeft from "./footer-left";

export default function Footer() {
    return(
        <div className="mt-5 gap-4 flex">
            <FooterLeft />
            <MainForm />
        </div>
    )
}