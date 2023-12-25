import Choice, { initChoice } from "./Choice";

export default interface Question {
  name: string;
  choices: Choice[];
}

export const initQuestion: Question = {
  name: '',
  choices: new Array(4).fill(initChoice),
};
