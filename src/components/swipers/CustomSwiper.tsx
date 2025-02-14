import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import s from "./CustomSwiper.module.css";
import CertificationCard from "../cards/CertificationCard";
import ProjectCard from "../cards/ProjectCard";

interface CustomSwiperProps {
  itemsList: {
    title: string;
    description: string;
    image: string;
    date?: string;
    url: string;
    githubUrl?: string;
    techs?: string[];
  }[];
  projects?: boolean;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  itemsList,
  projects = false,
}) => {
  return (
    <Swiper
      className={s.swiperContainer}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1.3}
      centeredSlides={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 20,
        stretch: 100,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      pagination={{ clickable: true }}
    >
      {projects ? (
        <>
          {itemsList.map((item, index) => (
            <SwiperSlide className={s.swiperSlide} key={index}>
              <ProjectCard
                title={item.title}
                imageUrl={item.image}
                description={item.description}
                siteUrl={item.url}
                githubUrl={item.githubUrl}
                techs={item.techs ?? []}
              />
            </SwiperSlide>
          ))}
        </>
      ) : (
        <>
          {itemsList.map((item, index) => (
            <SwiperSlide className={s.swiperSlide} key={index}>
              <CertificationCard
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date ?? ""}
                url={item.url}
              />
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
};

export default CustomSwiper;
