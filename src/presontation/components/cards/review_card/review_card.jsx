
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import kitchen from '../../../../assets/kitchen.svg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function ReviewCard() {
    return(
        <div className="review_card">
            <section className='customer_profile'>
                <img src={kitchen} alt="" />
            </section>
            <section className='review_info'>
                <span>
                    <FontAwesomeIcon icon={faStar} className='start_active'/>
                    <FontAwesomeIcon icon={faStar} className='start_active'/>
                    <FontAwesomeIcon icon={faStar} className='start_active'/>
                    <FontAwesomeIcon icon={faStar} className='start_active'/>
                    <FontAwesomeIcon icon={faStar} className='start_off'/>
                </span>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nostrum quidem accusamus aperiam iusto, accusantium commodi error ducimus veniam voluptate!
                </p>
                <label>Customer name</label>
            </section>
        </div>
    )
}

export default ReviewCard;