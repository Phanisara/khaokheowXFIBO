import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Container, Header, Table} from 'semantic-ui-react';

function HomePage() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   Axios.get('https://script.google.com/macros/s/AKfycbwrcLx1RKgmrEw8KJqjdZ6xhPKA5ffU9_AnDmf3zwdWfODyfBlIN8AGI0qi7-npfai6/exec?read=Somchai')
  //     .then(res => setData(res))
  //     .catch(err => console.log(err.response.data))
  // }, []);

  // if (!data) {
  //   return <div />;
  // }
  // console.log(data);

  // const postDelete = (id, e) => {
  //   e.preventDefault();
  //   id += 1
  //   Axios.get("https://script.google.com/macros/s/AKfycbwrcLx1RKgmrEw8KJqjdZ6xhPKA5ffU9_AnDmf3zwdWfODyfBlIN8AGI0qi7-npfai6/exec?read=Somchai&deleteRow=" + id)
  //       // .then(res => console.log('Deleted data!!', res))
  //       // .catch(err => console.log(err.response.data))
  // }

  // return (
  //   <Container className="container">
  //     <br />
  //     <Header as="h2">
  //         TAPIR DATABASE
  //     </Header>
  //     <hr />     

  //     <Table celled>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Date</th>
  //           <th>Time</th>
  //           <th>Name</th>
  //           <th>Type animal</th>
  //           <th>Body weight (kg.)</th>
  //           <th>Quantity of food consumed (kg.)</th>
  //           <th>Eating period</th>
  //           <th>Delete</th>
  //         </tr>
  //       </thead>

  //       <tbody>
  //         {data.data.map((val, idx) => (
  //           <tr key={idx}>
  //             <td>{val.ID}</td>
  //             <td>{val.Date}</td>
  //             <td>{val.Time}</td>
  //             <td>{val.Name}</td>
  //             <td>{val.TypeAnimal}</td>
  //             <td>{val.BodyWeight}</td>
  //             <td>{val.QuantityConsumed}</td>
  //             <td>{val.EatingPeriod}</td>
  //             <td><button onClick={(e) => postDelete(val.ID, e)}>Delete</button></td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </Table>

  //   </Container>
  // );
}

export default HomePage;