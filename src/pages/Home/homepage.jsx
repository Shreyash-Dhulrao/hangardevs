import Header from "../../components/home/header"
import About from "../../components/about/about"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const homepage = () => {

    const location = useLocation();

  useEffect(() => {
    // Remove leading slash to get the section ID
    const sectionId = location.pathname.substring(1); // e.g., 'about'
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [location]);

    return (
        <div className="pt-22 dark:bg-zinc-900">
            <Header />
            <section id="about">
              <About />
            </section>
        </div>
    )
}

export default homepage
