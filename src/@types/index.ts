export type TCatImageData = {
  breeds: TBreed[]
  categories: TCatCategory[]
  id: string
  url: string
  height: number
  width: number
}

export type TCatCategory = {
  id: number
  name: string
}

export type TBreed = {
  id: string
  name: string
  origin: string
  reference_image_id: string
}

export type TFavouriteData = {
  created_at: string
  id: number
  image: TImage
  image_id: string
  user_id: string
}

export type TImage = {
  id: string
  url: string
}

export type TImageData = {
  id: string
  url: string
  height: number
  width: number
  breeds?: TBreed[]
}
