const createTotalPointsFrames = (rolls, frames = [], index = 0) => {
    if(frames.length === 10) return frames;

    const currentRoll = rolls[index];
    const currentRollAndNextRollSum = currentRoll + rolls[index + 1];

    const isStrike = currentRoll === 10;
    const isSpare = currentRollAndNextRollSum === 10;

    if(isStrike || isSpare) {
        const points = currentRollAndNextRollSum + rolls[index + 2];
        const nextIndex = isStrike ? index + 1 : index + 2;

        return createTotalPointsFrames(rolls, [...frames, points] , nextIndex);
    }

    return createTotalPointsFrames(rolls, [...frames, currentRollAndNextRollSum] , index + 2);
};

const score = (rolls = []) => {
    const frames = createTotalPointsFrames(rolls);
    return frames.reduce((totalPoints, currentPoint) => totalPoints + currentPoint);
};

const roll = (pins = 0, accumulatedRolls = []) => [...accumulatedRolls, pins];

export {
    roll,
    score
};
