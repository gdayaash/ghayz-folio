import SelectedWorksScene from "@/components/sections/SelectedWorkScene";
import "../../styles/selectedWorks.css";
import SelectedWorkText from "@/components/sections/SelectedWorkText";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function WorksLayout() {
  return (
    <>
      <Header btnBgColor="bg-white" btnTxtColor="text-black"/>
      <SelectedWorkText />
      <SelectedWorksScene />
      <Footer
        backgroundImage="/images/footer/footer-dark-bg.png"
        textColorClass="text-white"
        brandIcon={[
          "/images/footer/qoruz.png",
          "/images/footer/hashfame.png",
        ]}
      />
    </>
  );
}
