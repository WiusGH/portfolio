import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import s from "./CustomSwiper.module.css";
import CertificationCard from "../cards/CertificationCard";
import ProjectCard from "../cards/ProjectCard";
import useScreenSize from "../hooks/useScreenSize";

interface CustomSwiperProps {
  itemsList: {
    title: string;
    description: string;
    image1: string;
    image2: string;
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
  const isSmallScreen = useScreenSize(768);
  return (
    <Swiper
      className={s.swiperContainer}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      spaceBetween={isSmallScreen ? -20 : -400}
      slidesPerView={1.3}
      centeredSlides={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: isSmallScreen ? 15 : 35,
        stretch: isSmallScreen ? 20 : 0,
        depth: 200,
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
                image1Url={item.image1}
                image2Url={item.image2}
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
                image1={item.image1}
                image2={item.image2}
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
