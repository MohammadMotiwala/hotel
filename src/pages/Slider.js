import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const Slider = (props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 5000 }}
            EffectFade={100}
            navigation
            pagination={{ clickable: true }}
        >
            <div className="room-slider">
                {props.children}
            </div>


        </Swiper>
    );
}
export default Slider;