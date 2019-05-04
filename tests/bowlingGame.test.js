import { score, roll } from '../src/bowlingGame';

it('When it misses 20 rolls it should return a game score equals 0', () => {
    const frames = roll([0, 0], 10);
    expect(score(frames)).toBe(0);
});

it('When rolls 20 times with 1 pin it should return a game score equals 20', () => {
    const frames = roll([1, 1], 10);
    expect(score(frames)).toBe(20);
});

it('When rolls 20 times with sequences of 3 pins and misses it should return a game score equals 30', () => {
    const frames = roll([3, 0], 10);
    expect(score(frames)).toBe(30);
});

it('When rolls 20 times with sequences of 5 pins and spares and rolls 1 extra roll with 5 pins ' +
    'should return a score equals 150', () => {
    const frames = roll([5, 5], 10).concat(5);
    expect(score(frames)).toBe(150);
});

it('When rolls 12 times with 12 strikes it should return a perfect game score', () => {
    const frames = roll([10], 12);
    expect(score(frames)).toBe(300);
});

it('When rolls 3 times with strikes, rolls 8 times with 4 pins, rolls 8 times with sequences of 5 pins and spares' +
    'and rolls 1 extra roll with 9 pins should return a game score equals 160', () => {
    const frames = roll([10], 3)
        .concat(roll([4, 4], 3))
        .concat(roll([5, 5], 4))
        .concat(9);
    expect(score(frames)).toBe(160);
});
