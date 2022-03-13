// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const request = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USERNAME}&api_key=${process.env.LAST_FM_API_KEY}&format=json`
  );

  try {
    const response = await request.json();
    let attrList = response.recenttracks.track.filter((tk) => "@attr" in tk);

    if (attrList.length > 0) {
      const img = attrList[0].image.filter((img) => img.size == "small");
      console.log();
      const trackInfo = {
        name: attrList[0].name,
        image: img.length > 0 ? img[0]["#text"] : "",
      };
      res.status(200).json({ isPlaying: true, ...trackInfo });
    } else {
      res.status(200).json({ isPlaying: false });
    }
  } catch (error) {
    res.status(200).json({ isPlaying: false });
  }
}
