import { FaStar } from 'react-icons/fa';

function Ratings(props) {
  return (
    <div className='ratings'>
      {[1, 2, 3, 4, 5].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label className='start-label' key={i}>
            <input
              className='start-radio'
              type='radio'
              name='rating'
              value={ratingValue}
            />
            <FaStar
              className={
                ('star',
                ratingValue <= props.value ? 'yellow-star' : 'gray-star')
              }
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Ratings;
