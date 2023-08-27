export default function HostVanCard(props) {
  return (
    <section key={props.name}>
      <figure>
        <img src={props.imageUrl} alt={props.name} width="200" />
        <figcaption>
          {props.name} <span>${props.price}/dat</span>
        </figcaption>
      </figure>
    </section>
  );
}
