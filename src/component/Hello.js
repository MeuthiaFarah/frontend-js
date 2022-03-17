/**
 * Membuat komponen hello
 * componen merender elemen elemen html
 */

function Hello(props) {
  // destructing di parameter = function Hello({name}) {...}
  // diluar return javascript vanilla
  const {name} = props;
  // didalam return JSX
  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} backend engineer</p>
    </div>
  );
}

export default Hello;