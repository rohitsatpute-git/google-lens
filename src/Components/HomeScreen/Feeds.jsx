import { useEffect, useState } from 'react'
import Feed from './Feed'
import { getRandomImage } from '../../utils/searchAPI'

function Feeds() {
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const items = await Promise.all(
        Array.from({ length: 10 }).map(async (_, index) => {
          const imageSrc = await getRandomImage()
          const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt eos delectus...'
          return { imageSrc, text, index }
        })
      )
      setFeeds(items)
    }

    fetchImages()
  }, [getRandomImage])

  return (
    <div className="flex flex-col gap-y-4 max-h-[100%] overflow-y-scroll no-scrollbar">
      {feeds.map(({ imageSrc, text, index }) => (
        <Feed  key={index} imgSrc={imageSrc} text={text} />
      ))}
    </div>
  )
}

export default Feeds
