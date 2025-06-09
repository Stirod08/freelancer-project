import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-between max-w-7xl mx-auto p-4">
        <div>
          <h1 className="text-3xl font-bold">&lt;Freelancer<span className="text-cinnabar">Stirod/&gt;</span></h1>
        </div>

        <div className="flex gap-4">
            <Link className="hover:text-cinnabar transition" href="/">Inicio</Link>
            <Link className="hover:text-cinnabar transition" href="/">Sobre mí</Link>
            <Link className="hover:text-cinnabar transition" href="/">Servicios</Link>
            <Link className="hover:text-cinnabar transition" href="/">Tecnologías</Link>
            <Link className="hover:text-cinnabar transition" href="/">Contacto</Link>
        </div>
      </header>
    </>
  )
}