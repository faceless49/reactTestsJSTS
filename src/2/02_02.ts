export type StreetType = {
  title: string
}

export type AdressType = {
  number?: number,
  street: StreetType
}
export type HouseType = {
  buildedAt: number,
  repaired: boolean,
  address: AdressType,

}

export type GovermentBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION',
  budget: number,
  staffCount: number,
  address: AdressType
}

export type CityType = {
  title: string
  houses: Array<HouseType>
  govermentBuildings: Array<GovermentBuildingsType>
  citizensNumber: number
}