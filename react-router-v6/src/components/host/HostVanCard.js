import { Link } from "react-router-dom";
export default function HostVanCard(props) {
  console.log("render HostVanCard");
  return (
    <section key={props.name} className="host-van-card">
      <Link to={props.id}>
        <figure>
          <img src={props.imageUrl} alt={props.name} width="150" />
          <figcaption>
            <h2 className="host-van-name">{props.name}</h2>
            <h3 className="host-van-price">${props.price}/day</h3>
          </figcaption>
        </figure>
      </Link>
    </section>
  );
}
