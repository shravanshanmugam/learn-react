import { Link } from "react-router-dom";
export default function HostVanCard(props) {
  return (
    <section key={props.name} className="host-van-card">
      <Link to={props.id}>
        <figure>
          <img src={props.imageUrl} alt={props.name} width="150" />
          <figcaption>
            <p className="host-van-name">{props.name}</p>
            <p className="host-van-price">${props.price}/day</p>
          </figcaption>
        </figure>
      </Link>
    </section>
  );
}
