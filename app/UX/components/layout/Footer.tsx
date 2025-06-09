import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className="mt-8 mx-auto p-4 text-center border-t border-powder-blue ">
        <div className="flex  justify-center gap-8 my-8">
            <Github className="hover:text-cinnabar w-8 h-8 text-light-cyan transition-colors duration-200 cursor-pointer hover:scale-110"/>
            <Linkedin className="hover:text-cinnabar w-8 h-8 text-light-cyan transition-colors duration-200 cursor-pointer hover:scale-110"/>
            <Instagram className="hover:text-cinnabar w-8 h-8 text-light-cyan transition-colors duration-200 cursor-pointer hover:scale-110"/>
        </div>
        <p><span className="font-bold">© 2025 Freelancer Stirod.</span> Todos los derechos reservados.</p>
        
      </footer>
    </>
  )
}