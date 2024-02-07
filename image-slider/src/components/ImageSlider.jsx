import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [images, setImage] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setImage(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);
  

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-xl mx-auto relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={prevSlide}
      >
        Previous
      </button>
      <img
        src={images.length > 0 ? images[currentImageIndex].url : ""}
        alt="Slide"
        className="mx-auto"
      />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
