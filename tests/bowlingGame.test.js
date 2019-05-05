import { score, roll } from '../src/bowlingGame';

const repeat = (result, times = 0, accumulatedResult = [], accumulator = 0) => {
    if(accumulator >= times) return accumulatedResult;

    return repeat(
        result,
        times,
        accumulatedResult.concat(result),
        accumulator + 1
    )
};

it('When misses 20 rolls it should return a game score equals 0', () => {
    const rolls = repeat(roll(0), 20);
    expect(score(rolls)).toBe(0);
});

it('When rolls 20 times with 1 pin it should return a game score equals 20', () => {
    const rolls = repeat(roll(1), 20);
    expect(score(rolls)).toBe(20);
});

it('When rolls 20 times with sequences of 3 pins and a miss it should return a game score equals 30', () => {
    const rolls = repeat(roll(0), 10)
        .concat(repeat(roll(3), 10));

    expect(score(rolls)).toBe(30);
});

it('When rolls 20 times with sequences of 5 pins and spares and rolls 1 extra roll with 5 pins' +
    'it should return a score equals 150', () => {
    const rolls = repeat(roll(5), 21);
    expect(score(rolls)).toBe(150);
});

it('When rolls 12 times with 12 strikes it should return a perfect game score of 300', () => {
    const rolls = repeat(roll(10), 12);
    expect(score(rolls)).toBe(300);
});

it('When rolls 3 times with strikes, rolls 6 times with 4 pins, rolls 8 times with sequences of 5 pins and spares' +
    'and rolls 1 extra roll with 9 pins should return a game score equals 160', () => {
    const rolls = repeat(roll(10), 3)
        .concat(repeat(roll(4), 6))
        .concat(repeat(roll(5), 8))
        .concat(roll(9));

    expect(score(rolls)).toBe(160);
});
