import './Navitem.css';

const Navitem = (props) => {
  return (
    <li className='nav-item'>
          {props.children}
          
    </li>
  )
}

export default Navitem;

const NavitemDropDown = (props) => {
  return (
    <li className='nav-item dropdown'>
          {props.children}
          
    </li>
  )
}

export { NavitemDropDown };
    // لانو ممنوع اعمل اتنين بعتتها هيك 

