import ServiceList from "../components/ServiceList"
import Header from '../components/Header';
import { CiSearch } from "react-icons/ci";
import { LuAmbulance } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi";


const servicios = [
  { id: 1, nombre: 'Consultas', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <CiSearch className="h-6 w-6 text-blue-500" /> },
  { id: 2, nombre: 'Urgencias', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <LuAmbulance className="h-6 w-6 text-blue-500" /> },
  { id: 3, nombre: 'Especialidades', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <GiHealthNormal className="h-6 w-6 text-blue-500" /> }
];

const Inicio = () => {
    return (
        <div>
            <Header title="Bienvenido a mi PuntoSalud" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, ante id pellentesque ullamcorper, purus ex pellentesque mi, id tempor ligula arcu et nisi. Sed sit amet orci facilisis, posuere erat sed, luctus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut purus sit amet mi tristique facilisis. Curabitur scelerisque erat vel lorem fringilla pharetra. Donec nisl metus, semper eget pretium a, pellentesque eget eros. Sed aliquet faucibus porttitor. Maecenas tempor ligula ipsum, id tempus lorem congue a. Etiam eget fringilla magna. Vestibulum at sem nisl. Sed pellentesque non augue ut elementum. " className="header-style"/>
            <ServiceList servicios={servicios} />
        </div>
    )
}

export default Inicio
