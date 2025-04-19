

// function Header() {
//   const judul = useState("Ini dari state");
//   const list = useState("4 Makanan Khas Indonesia");

//     return (
//       <div>
//         <h2>Makanan Khas Indonesia</h2>
//         <p>{list}</p>
//         <p>{judul}</p>
//       </div>
//     );
//   }

import React, {Component} from "react";

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      judul: 'ini dari state ',
      dataMakanan : this.props.list,
    };
  }
  render() {
    return (
      <div>
        <h2>Component dari class header</h2>
        <h3>{ this.state.judul}</h3>
        <p>Mengakses props dari App secara langsung : {this.props.list}</p>
        <p>Mengakses dari state : {this.props.dataMakanan}</p>
      </div>
    );

  }
}


 export default Header;