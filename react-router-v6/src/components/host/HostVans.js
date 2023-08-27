export default function HostVans() {
  console.log("render HostVans");
  return (
    <>
      <h2>Your listed vans</h2>
    </>
  );
}

function HostVanCard() {
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
