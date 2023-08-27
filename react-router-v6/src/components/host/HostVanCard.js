export default function HostVanCard(props) {
  return (
    <section key={props.name} className="host-van-card">
      <figure>
        <img src={props.imageUrl} alt={props.name} width="150" />
        <figcaption>
          <p>{props.name}</p>
          <p>${props.price}/day</p>
        </figcaption>
      </figure>
    </section>
  );
}
