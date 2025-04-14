export const getRandomImage = async(width = 200, height = 300) => {
    const res = await fetch(`https://picsum.photos/${width}/${height}`);
    // console.log(res.url);
    return res.url;
}