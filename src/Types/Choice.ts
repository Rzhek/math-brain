export default interface Choice {
    name: number;
    correct: boolean;
}
  
export const initChoice: Choice = {
    name: 0,
    correct: false,
};
