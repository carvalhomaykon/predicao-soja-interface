import Footer from "../components/Footer";
import About from "../components/About";
import Home from "../components/Home";
import DiseaseForm from "../components/DiseaseForm/DiseaseForm";

function Forecast() {
    return (
        <>  
            <section>
                <Home/>
            </section>

            <section>
                <About/>
            </section>

            <section>
                <DiseaseForm/>
            </section>

            <Footer/>
        </>
    )
}

export default Forecast;