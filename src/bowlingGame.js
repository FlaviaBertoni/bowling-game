const createTotalPointsFrames = (rolls, frames = [], index = 0) => {
    if(frames.length === 10) return frames;

    const currentRoll = rolls[index];
    const currentPlusNextRoll = currentRoll + rolls[index + 1];

    const isStrike = currentRoll === 10;
    const isSpare = currentPlusNextRoll === 10;

    if(isStrike || isSpare) {
        const points = currentPlusNextRoll + rolls[index + 2];
        const nextIndex = isStrike ? index + 1 : index + 2;

        return createTotalPointsFrames(rolls, [...frames, points] , nextIndex);
    }

    return createTotalPointsFrames(rolls, [...frames, currentPlusNextRoll] , index + 2);
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
