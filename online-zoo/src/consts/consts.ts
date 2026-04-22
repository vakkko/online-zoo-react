import type { AnimalCareSectionProps } from "../pages/About/AnimalCaring/AnimalCareSection/AnimalCareSection.types";
import type { PayAndFeedSectionProps } from "../pages/About/PayAndFeed/PayAndFeedSection/PayAndFeedSection.types";

export const BASE_URL =
  "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod";

export const PAY_AND_FEED_SECTIONS: PayAndFeedSectionProps[] = [
  {
    number: "01",
    imgSrc: "./images/pay-and-feed/monkey1.png",
    imgAlt: "monkey",
    iconSrc: "./images/pay-and-feed/donation.png",
    iconAlt: "heart holded with two hands",
    heading: "Your donation has an impact",
    description:
      "Providing our animals with high-quality nutritious diets is just one element of animal care at our Zoo. We do all the best so that our animals can eat food similar to what they might find in their natural habitats while making sure they get the right mix of nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious food for our animals by donating. The generosity of people like you can help us make sure that our animals enjoy good food that keeps them in great condition.",
  },
  {
    number: "02",
    imgSrc: "./images/pay-and-feed/banana.png",
    imgAlt: "banana",
    iconSrc: "./images/pay-and-feed/card.png",
    iconAlt: "card with hand on it",
    heading: "Make a donation",
    description:
      "You can donate through your credit card without any fees. It is easy and safe. We do not keep donors' personal information on an online network. Choose an amount to give and the pet's name if needed. One of the most effective ways you can give is by making regular donations.",
  },
  {
    number: "03",
    imgSrc: "./images/pay-and-feed/monkey2.png",
    imgAlt: "monkey eating banana",
    iconSrc: "./images/pay-and-feed/grocery.png",
    iconAlt: "grocery",
    heading: "Bring your food charity — straight to your favorites pets.",
    description:
      "After your donation, the animal receives its favorite foods. You can support your favorite animals or any animal you care about and make a real personal impact. Never doubt that your donation can make a difference even if it is small.",
    hasButton: true,
  },
];

export const ANIMAL_CARING_SECTIONS: AnimalCareSectionProps[] = [
  {
    animal: "panda",
    description:
      "Your $30 could give Lucas a slice of panda cake, made with our secret recipe.",
  },
  {
    animal: "tiger",
    description:
      "Your $150 will help to care for Senja, a Sumatran tiger, for three weeks.",
  },
  {
    animal: "lemur",
    description:
      " With your support, we can give Andy his favorite fruits. Especially when it's not fruit season in its natural habitat.",
  },
  {
    animal: "two-eagles",
    description:
      "Sam & Lora have hatched and raised numerous young and will be happy with your help.",
  },
];
