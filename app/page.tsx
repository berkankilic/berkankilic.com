import Header from "@/sections/header";
import Main from "@/sections/main";
import Services from "@/sections/services";
import Skills from "@/sections/skills";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="main">
          <Main />
        </section>
        <section id="services">
          <Services />
        </section>
        <div className="divider"></div>
        <section id="skills">
          <Skills />
        </section>
      </main>
      <Footer />
    </>
  );
}
