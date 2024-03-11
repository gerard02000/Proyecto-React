import React, { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(0);

  const reviews = [
    {
      text:
        "CurtainCrafters has provided outstanding service. Their curtains are of exceptional quality and have added a touch of elegance to our home. We are delighted with their products and highly recommend them to anyone in need of beautiful curtains.",
      author: "Jane Smith",
      role: "Interior Designer",
      image:
        "https://img.freepik.com/free-photo/portrait-young-man-smiling-camera_171337-7528.jpg",
    },
    {
      text:
        "I'm extremely satisfied with CurtainCrafters. Their curtains are not only stylish but also durable. The customer service provided by their team was excellent, and they helped me choose the perfect curtains for my space. I highly recommend CurtainCrafters to anyone looking for high-quality curtains.",
      author: "John Doe",
      role: "Homeowner",
      image:
        "https://img.freepik.com/free-photo/happy-businessman-looking-camera_1303-16073.jpg",
    },
    {
      text:
        "I recently purchased curtains from CurtainCrafters, and I couldn't be happier with my decision. The curtains are beautiful and have completely transformed the look of my living room. I would like to thank the CurtainCrafters team for their exceptional service and high-quality products.",
      author: "Emily Johnson",
      role: "Home Decor Enthusiast",
      image:
        "https://img.freepik.com/free-photo/cheerful-student-happy-smiling-posing-at-campus-showing-thumbs-up_171337-27692.jpg",
    },
  ];

  const handleReviewChange = () => {
    setSelectedReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Let’s hear What they say
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500 transition-colors hover:text-primary">
          {reviews[selectedReview].text}
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {reviews.map((review, index) => (
            <img
              key={index}
              src={review.image}
              className={`w-8 h-8 md:w-14 md:h-14 object-cover rounded-full transition-transform hover:scale-110 cursor-pointer ${index === selectedReview ? "ring-4 ring-primary p-1 bg-white" : ""
                }`}
              onClick={() => setSelectedReview(index)}
              alt={`Reviewer ${index + 1}`}
            />
          ))}
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold transition-colors hover:text-primary">
            {reviews[selectedReview].author}
          </h3>
          <h5 className="text-center text-[20px] text-gray-500 transition-colors hover:text-primary">
            {reviews[selectedReview].role}
          </h5>
        </div>
      </div>
      <button
        onClick={handleReviewChange}
        className="bg-primary text-white py-2 px-8 rounded-xl self-center transition-colors hover:bg-secondary"
      >
        Change Review
      </button>
    </div>
  );
};

export default Reviews;
