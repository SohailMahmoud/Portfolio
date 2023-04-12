import { FiClock, FiTag } from "react-icons/fi";
import { motion } from "framer-motion";
import { singleProjectData } from "../data/singleProjectData";

const ReactQuiz = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {singleProjectData.reactQuiz.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {singleProjectData.reactQuiz.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {singleProjectData.reactQuiz.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {singleProjectData.reactQuiz.ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={project.id}>
              <img
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                key={project.id}
              />
            </div>
          );
        })}
      </div>
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {singleProjectData.reactQuiz.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {singleProjectData.reactQuiz.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {singleProjectData.reactQuiz.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {singleProjectData.reactQuiz.ProjectInfo.Technologies[0].techs.join(
                ", "
              )}
            </p>
          </div>
        </div>

        {/*  Single project right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {singleProjectData.reactQuiz.ProjectInfo.ProjectDetailsHeading}
          </p>
          {singleProjectData.reactQuiz.ProjectInfo.ProjectDetails.map(
            (details) => {
              if (!details.url) {
                return (
                  <p
                    key={details.id}
                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                  >
                    {details.details}
                  </p>
                );
              } else {
                return (
                  <p
                    key={details.id}
                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                  >
                    {details.details}
                    <br></br>
                    <br></br>
                    Click{" "}
                    <a href={details.url} style={{ color: "blue" }}>
                      here
                    </a>{" "}
                    to visit the website.
                  </p>
                );
              }
            }
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ReactQuiz;
