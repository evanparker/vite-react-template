import { useState } from "react";
import PropTypes from "prop-types";
import CldThumbnailImage from "../images/CldThumbnailImage";
import ImageModal from "../images/imageModal";
import { Link } from "react-router-dom";


const DisplayFigure = ({ figure }) => {

  const [selectedImage, setSelectedImage] = useState();

  const onClose = () => {
    setSelectedImage(undefined);
  }

  return (
    <>
      <ImageModal onClose={onClose} image={selectedImage} show={!!selectedImage} />
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{figure?.name || "Untitled Figure"}</h1>
        <div className="mt-5 flex flex-wrap gap-4">
          {figure?.images?.map((img) => (
            <div key={img._id} onClick={()=>setSelectedImage(img)} className="cursor-pointer max-w-md flex rounded-lg border overflow-hidden border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <CldThumbnailImage publicId={img.cloudinaryPublicId} width={400} height={400} />
            </div>
          ))}
        </div>
        {figure.manufacturer && (
          <Link to={`/manufacturers/${figure.manufacturer._id}`}>
            <div className="mt-5 p-3 cursor-pointer max-w-md rounded-lg border overflow-hidden border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="mb-1 text-xs text-gray-600 dark:text-gray-400">Manufacturer:</div>
              {figure.manufacturer.name}
            </div>
          </Link>
        )}

      </div>
    </>
  );
};

DisplayFigure.propTypes = {
  figure: PropTypes.object,
};


export default DisplayFigure;