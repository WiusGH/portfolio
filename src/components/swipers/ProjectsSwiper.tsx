import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ProjectCard from "../cards/ProjectCard";
import s from "./ProjectSwiper.module.css";

interface ProjectsSwiperProps {
  projects: {
    title: string;
    description: string;
    image: string;
    url: string;
    githubUrl?: string;
    techs: string[];
  }[];
}

const ProjectsSwiper: React.FC<ProjectsSwiperProps> = ({ projects }) => {
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
        stretch: 25,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      {projects.map((project, index) => (
        <SwiperSlide className={s.swiperSlide} key={index}>
          <ProjectCard
            title={project.title}
            imageUrl={project.image}
            description={project.description}
            siteUrl={project.url}
            githubUrl={project.githubUrl}
            techs={project.techs}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSwiper;
