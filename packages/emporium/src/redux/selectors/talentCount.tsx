import { createSelector } from 'reselect';

const masterTalents = state => state.masterTalents;
export const talentCount = state => calcTalentCount(state);

const calcTalentCount = createSelector(masterTalents, masterTalents => {
    const count = {};
    Object.keys(masterTalents).forEach(row => {
        Object.keys(masterTalents[row]).forEach(tier => {
            const talent = masterTalents[row][tier];
            if (talent !== '') {
                count[talent] = count[talent] ? count[talent] + 1 : 1;
            }
        });
    });
    return count;
});
