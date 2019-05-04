const normalizeFrames = (frames, normalizedFrame=[], index=0) => {
    if(normalizedFrame.length === 10) return normalizedFrame;

    const frameSum = frames[index] + frames[index+1];

    const isStrike = frames[index] === 10;
    const isSpare = frameSum === 10;

    if(isStrike || isSpare) {
        const points = frameSum + frames[index+2];
        const nextIndex = isStrike ? index + 1 : index + 2;
        return normalizeFrames(frames, [... normalizedFrame, points] , nextIndex);
    }

    return normalizeFrames(frames, [... normalizedFrame, frameSum] , index+2);
};

const score = (frames=[]) => {
    const normalizedFrames = normalizeFrames(frames);
    return normalizedFrames.reduce((acc, cur) => acc + cur);
};

const roll = (pins=0, repeat=0, accumulator=0, accumulatedRolls=[]) => {
    if(accumulator === repeat) return accumulatedRolls;
    return roll(pins, repeat, accumulator + 1, accumulatedRolls.concat(pins))
};

export {
    roll,
    score
};
