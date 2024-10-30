function Drink({ name }) {
  let tipo;
  let cantidad;
  let antiguedad;
  if (name == "té"){
    tipo="hoja";
    cantidad="15–70 mg/taza";
    antiguedad="4,000+ años";
  }else{
    tipo="grano";
    cantidad="80–185 mg/taza";
    antiguedad="1,000+ años";
  }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{tipo}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{cantidad}</dd>
          <dt>Antigüedad</dt>
          <dd>{antiguedad}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }
  