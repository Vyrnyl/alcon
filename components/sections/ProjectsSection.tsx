'use client'

import { useState } from "react";
import ProjectHeader from "../project/ProjectHeader";
import ProjectGallery from "../ui/ProjectGallery";
import ProjectGrid from "../project/ProjectGrid";
import { buildingImages, designBuildImages, landDevImages, slides } from "@/utils/imageData";

const imageMap: Record<number, string[]> = {
  1: landDevImages,
  2: designBuildImages,
  3: buildingImages
}

const ProjectsSection = () => {

  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openGallery = (id: number) => {
    const images = imageMap[id];
    if (!images) return;

    setImages(images);
    setIsOpen(true);
  }
  const closeGallery = () => {
    setIsOpen(false);
  }

  return (
    <section className="py-24 bg-background-dark relative" id="companyprofile">
      <div className="max-w-7xl mx-auto px-6">
        <ProjectHeader />
        <ProjectGrid slides={slides} onCardClick={openGallery}/>
      </div>
      <ProjectGallery images={images} isOpen={isOpen} closeGallery={closeGallery}/>
    </section>
  );
};

export default ProjectsSection;
