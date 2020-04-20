import Card1 from "../assets/card-1.png";
import Card2 from "../assets/card-2.png";
import Card3 from "../assets/card-3.png";
import Card4 from "../assets/card-4.png";
import Card5 from "../assets/card-5.png";
import Card6 from "../assets/card-6.png";
import Card7 from "../assets/card-7.png";
import Card8 from "../assets/card-8.png";
import Card9 from "../assets/card-9.png";
import Card10 from "../assets/card-10.png";
import Card11 from "../assets/card-11.png";
import Card12 from "../assets/card-12.png";
import CardBack from "../assets/card-back.jpg";

export const handleCardImage = id => {
  switch (id) {
    case 1:
      return Card1
    case 2:
      return Card2
    case 3:
      return Card3
    case 4:
      return Card4
    case 5:
      return Card5
    case 6:
      return Card6
    case 7:
      return Card7
    case 8:
      return Card8
    case 9:
      return Card9
    case 10:
      return Card10
    case 11:
      return Card11
    case 12:
      return Card12
    default:
      return CardBack
  }
}