// Real photos of Shree Krishna Children Hospital, Karond, Bhopal
import buildingEntrance from '../assets/hospital/building-entrance.jpg'
import buildingFront from '../assets/hospital/building-front.jpg'
import generalWard from '../assets/hospital/general-ward.jpg'
import generalWard2 from '../assets/hospital/general-ward-2.jpg'
import hduWard from '../assets/hospital/hdu-ward.jpg'
import privateRoom from '../assets/hospital/private-room.jpg'
import privateRoom2 from '../assets/hospital/private-room-2.jpg'
import privateRoomAc from '../assets/hospital/private-room-ac.jpg'
import reception from '../assets/hospital/reception.jpg'
import waterTreatmentPlant from '../assets/hospital/water-treatment-plant.jpg'
import waterTreatmentPlant2 from '../assets/hospital/water-treatment-plant-2.jpg'

export const photos = {
  buildingEntrance,
  buildingFront,
  generalWard,
  generalWard2,
  hduWard,
  privateRoom,
  privateRoom2,
  privateRoomAc,
  reception,
  waterTreatmentPlant,
  waterTreatmentPlant2,
}

// Where the subject sits in each photo, so wide banners crop to it
// instead of an empty wall (used as CSS object-position)
const photoFocus = {
  [buildingFront]: '50% 30%',
  [buildingEntrance]: '50% 40%',
  [reception]: '50% 55%',
  [generalWard]: '50% 80%',
  [generalWard2]: '50% 80%',
  [hduWard]: '50% 95%',
  [privateRoom]: '50% 85%',
  [privateRoom2]: '50% 85%',
  [privateRoomAc]: '50% 80%',
  [waterTreatmentPlant]: '50% 65%',
  [waterTreatmentPlant2]: '50% 60%',
}

export const focusOf = (src) => photoFocus[src] ?? '50% 50%'
