import { Link } from "react-router-dom";
export default function HostVanCard(props) {
  console.log("render HostVanCard");
  return (
    <Link to={props.id}>
      <section key={props.name} className="host-van-card">
        <figure>
          <img src={props.imageUrl} alt={props.name} width="150" />
          <figcaption>
            <p>{props.name}</p>
            <p>${props.price}/day</p>
          </figcaption>
        </figure>
      </section>
    </Link>
  );
}
