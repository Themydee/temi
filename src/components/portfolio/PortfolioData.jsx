
import Amethyst from "../../assets/ameth.png";
import CAS from "../../assets/casss.png"
import Vote from "../../assets/cas.png"
import MovieApp from "../../assets/movie.png"
import GPT3 from"../../assets/gpt.png"
import Admin from "../../assets/dboard.png"
import Dragger from "../../assets/dragger.png"
const projectsData = [
  {
    image: Amethyst,
    title: "Ecommerce App",
    desc: "Ecommerce Application built with ReactJS, MUI",
    url: "https://amethshop.brimble.app/",
    category: "React JS",
  },
  {
    image: MovieApp,
    title: "Movie App",
    desc: "Movie Applicaion built during HNG Internship.Built with ReactJS and API usage",
    url: "https://movieapp.brimble.app/",
    category: "React JS",
  },
  {
    image: Admin,
    title: "Admin Dashboard",
    desc: "Admin Dashboard Built with ReactJS, MUI",
    url: "https://movieapp.brimble.app/",
    category: "React JS",
  },
  {
    image: Dragger,
    title: "Image Dragger",
    desc: "An Image Carousel Page created using ReactJs,  DND, useDraggable and useDroppable, Login using user@example.com and password :1Password",
    url: "https://hng-task-three-pearl.vercel.app",
    category: "React JS",
  },
  {
    image: GPT3,
    title: "GPT3",
    desc: "AI based on-page site butilt with ReactJS",
    url: "https://gpt3.brimble.app/",
    category: "React JS",
  },
  {
    image: Vote,
    title: "Voting App",
    desc: "Full stack voting app built with Php & MySQL, HTML5, CSS3 and Javascript",
    url: "https://votecas.000webhostapp.com/index.php",
    category: "PHP",
  },
  {
    image: CAS,
    title: "Educational App",
    desc: "Full stack edu webpage created with Php & MySQL, HTML5, CSS3 and Javascript",
    url: "",
    category: "PHP",
  },
  
];

const projectsDataNav = [
  {
    name: "All",
  },
  {
    name: "React JS",
  },
  {
    name: "PHP",
  }
];

export { projectsData, projectsDataNav };
