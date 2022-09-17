import React from "react";
import background from "../assets/images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg";

const HomePage = () => {
  return (
    <div className={"flex mx-auto my-auto relative"}>
      <img
        className={
          "w-screen h-screen object-cover sm:scale-100 md:scale-125 xl:scale-175"
        }
        // className={"object-fill sm:scale-150"}
        src={background}
        alt="background"
      />
    </div>
  );
};

export default HomePage;
