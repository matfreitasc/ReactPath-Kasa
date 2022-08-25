import { useState, useRef } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const dropdownItemRef = useRef(null);

  return (
    <section className={props.width ? `dropdown ${props.width}` : 'dropdown'}>
      <article
        className='dropdown-title'
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className='dropdown-title-text'>{props.title}</h1>
        {isOpen ? (
          <FaAngleUp className='dropdown-title-icon' />
        ) : (
          <FaAngleDown className='dropdown-title-icon' />
        )}
      </article>
      <div
        ref={dropdownItemRef}
        className={isOpen ? 'dropdown-item item-display' : 'dropdown-item '}
      >
        {
          (props = props.amenities ? (
            <ul className='dropdown-list'>
              {props.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          ) : (
            <p className='dropdown-description'>{props.description}</p>
          ))
        }
      </div>
    </section>
  );
}

export default Dropdown;
