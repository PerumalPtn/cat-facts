
const url = 'https://catfact.ninja/fact';

export const getCatFacts = (noOfCatFacts) => {

    const promises = [];

    for (let i = 1; i <= noOfCatFacts; i++) {

        promises.push(fetch(url).then((res) => res.json()));

    }

    return Promise.all(promises);

}