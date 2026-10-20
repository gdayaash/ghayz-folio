import SelectedWorksScene from "@/components/sections/SelectedWorkScene";
import "../../styles/selectedWorks.css";
import SelectedWorkText from "@/components/sections/SelectedWorkText";
import Footer from "@/components/footer/Footer";
export default function WorksLayout() {
  return (
    <>
      <SelectedWorkText />
      <SelectedWorksScene />
      <Footer
        backgroundImage="/images/footer/footer-dark-bg.png"
        textColorClass="text-white"
      />
    </>
  );
}
