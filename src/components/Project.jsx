import React from "react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  return (
    <>
      <div className="flex-wrap items-start justify-between py-10 space-y-6 sm:flex sm:space-y-0">
        <div className="flex-1">
          <p className="text-2xl font-bold mb-2">{title}</p>
          <p className="text-neutral-400 mb-4">{description}</p>
          <div className="space-y-2 mb-4">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-neutral-400 text-sm">
                {subDesc}
              </p>
            ))}
          </div>
          <div className="flex gap-5 mt-4 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;
