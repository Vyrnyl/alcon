
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  slides: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
  }[];
  onCardClick: (id: number) => void;
}

const ProjectGrid = ({ slides, onCardClick }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-3">
      {slides.map((slide) => (
        <ProjectCard key={slide.id} slide={slide} openGallery={() => onCardClick(slide.id)} />
      ))}
    </div>
  );
};

export default ProjectGrid;
