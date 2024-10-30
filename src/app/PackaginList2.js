function Item({ name, importance }) {
    return (
      <li className="item">
        {importance<1 && name} {importance>0 && <i>{name}</i>}
      </li>
    );
  }
  
  export default function PackingList2() {
    return (
      <section>
        <h1>Lista de equipaje de Sally Ride</h1>
        <ul>
          <Item 
            importance={9} 
            name="Traje de vuelo" 
          />
          <Item 
            importance={0} 
            name="Casco con dorado a la hoja" 
          />
          <Item 
            importance={6} 
            name="Fotografía de Tam" 
          />
        </ul>
      </section>
    );
  }
  