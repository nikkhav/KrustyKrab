import React, { Fragment } from "react";
import background from "../assets/images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg";
import aboutImage from "../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";

const HomePage = () => {
  return (
    <Fragment>
      {/*Main Image*/}
      <div className={"w-full sm:h-28"} />
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
      {/*Section about*/}
      <div className={"w-full sm:h-28"} />
      <section
        className={
          "flex sm:flex-row flex-col items-center justify-center sm:h-36 sm:mt-6 sm:py-40 py-14"
        }
      >
        <div className={"sm:pl-14 sm:w-1/2 text-center sm:text-left"}>
          <h1 className={"md:text-6xl text-4xl font-bold text-red-600"}>
            Рыбный ресторан
            <br />
            Krusty Krab
          </h1>
          <p
            className={
              "italic py-8 px-6 sm:px-0 text-xl text-sm whitespace-pre-line"
            }
          >
            Стейки, бургеры, рыбу, даже некоторые десерты и сыр здесь жарят
            самым продвинутым способом: в хоспере. Блюда получаются невероятно
            сочными и ароматными, а готовятся гораздо быстрее, чем на открытом
            гриле.
          </p>
        </div>
        <div className={"flex sm:w-1/2 px-8 justify-center"}>
          <img
            className={
              "sm:object-scale-down object-fill w-10/12 h-full sm:h-72 sm:w-100"
            }
            src={aboutImage}
            alt={"About us"}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
