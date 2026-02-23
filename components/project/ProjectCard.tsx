
interface ProjectCardProps {
  slide: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
  };
  openGallery: () => void;
}

const ProjectCard = ({ slide, openGallery }: ProjectCardProps) => {
  return (
    <div
      className="group relative aspect-3/4 rounded-2xl overflow-hidden cursor-pointer"
      onClick={openGallery}>
      <img
        alt="Land Development"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        data-alt="Interior design of a modern industrial office space"
        src={slide.image}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
          {slide.category}
        </span>
        <h3 className="text-2xl font-black uppercase mb-4">{slide.title}</h3>
        <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
