import AboutComponent from "./components/AboutComponent";
import BannerComponent from "./components/BannerComponent";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 pt-5">
      <BannerComponent />
      <AboutComponent />
    </section>
  );
}
