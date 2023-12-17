export class Utils {
  static shuffle<T>(array: T[]): T[] {
    const shuffledArray = array.slice();
    let currentIndex = shuffledArray.length;
    let randomIndex: number
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
    return shuffledArray;
  }
}
