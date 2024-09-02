export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lX3jIJ2oQKv5AeXBf5NG2r25wMcestAT&q=${category}&limit=4`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifts = data.map(dataImg => ({
        id: dataImg.id,
        title: dataImg.title,
        url: dataImg.images.downsized_medium.url
    }))
    return gifts
}
