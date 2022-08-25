import { movieDTO } from "./Movies.Models";
import css from "./InvidualMovies.Module.css";

export default function InvidualMovies(props: movieDTO){
    const buildingLink = () => {props.poster}; // need a arrow function, incase we dont 
    // need binding function later
    
    return(
        <div className={css.div}>
            <a>
        <a href={buildingLink()} />
        <img alt="poster" src={props.poster}/>     
        </a>
        <p>
            <a href={buildingLink()}>{props.title}</a>
        </p>

        </div>
    )
}