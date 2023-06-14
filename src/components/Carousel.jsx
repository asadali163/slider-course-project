import { useEffect, useState } from "react";
import { shortList, list, longList } from ".././data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const prevSlide = () => {
    if (currentPerson > 0)
      setCurrentPerson((currentPerson) => currentPerson - 1);
    else setCurrentPerson(people.length - 1);
  };
  const nextSlide = () => {
    console.log(currentPerson);
    if (currentPerson < people.length - 1)
      setCurrentPerson((currentPerson) => currentPerson + 1);
    else setCurrentPerson(0);
  };

  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
      // console.log(currentPerson);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentPerson]);
  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, name, image, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: currentPerson === index ? 1 : 0,
              visibility: currentPerson === index ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
