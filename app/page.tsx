import Footer from "./UX/components/layout/Footer";
import Header from "./UX/components/layout/Header";
export default function Home() {
  return (
    <>
      <Header />

      <section>
        <h2>Hola, soy Stiben </h2>
        <p>Desarrollo experiencias digitales que conectan, convierten y comunican.</p>
        <p>Medellín, Colombia</p>
      </section>

      <section>
        <h2>Sobre mí</h2>
        <p>Me enfoco en crear sitios web rápidos, modernos y con buena experiencia de usuario. Si necesitas alguien que entienda tanto lo técnico como lo humano detrás de un proyecto, llegaste al lugar correcto.</p>
      </section>

      <section>
        <h2>Servicios</h2>

        <h3>Diseño y desarrollo web personalizado</h3>
        <p>Sitios que no solo se ven bien, sino que también convierten visitantes en clientes.</p>

        <h3>Optimización SEO y performance</h3>
        <p>Posiciónate mejor en Google y carga tu sitio en menos de 2 segundos.</p> 

        <h3>Integraciones y automatizaciones</h3>
        <p>   Conecta tu sitio con herramientas como WhatsApp, Mailchimp o CRMs.</p>
      </section>

      <section>
        <h2>¿Por qué trabajar conmigo?</h2>
        <p>Enfoque en resultados: Me concentro en que tu sitio realmente funcione y cumpla objetivos.</p>
        <p>Diseño responsivo: Que se vea increíble en cualquier pantalla.</p>
        <p>Pensamiento analítico: No solo diseño, también entiendo el negocio.</p>
        <p>Aprendizaje continuo: Estoy en constante formación para darte lo mejor de las tecnologías modernas.</p>   
      </section>

      <section>
        <h2>Tecnologías y herramientas</h2>
        <p>Frontend: Next.js, React, Tailwind CSS y TypeScript</p>
        <p>Backend: Node.js, API REST, Prisma, MongoDB/MySQL.</p>
        <p>Herramientas: Git, Vercel.</p>
      </section>

      <section>
        <h2>Contacto</h2>
      </section>

      <Footer/>
    </>
  )
}
