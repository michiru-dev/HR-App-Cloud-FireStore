import React from 'react'
import { ShowSettingList } from '../ShowSettingList'
import { useAppSelector } from '../../../../redux/hooks'

export function PositionsSetting() {
  const position = useAppSelector((state) => state.option.positionType)

  return (
    <ShowSettingList settingType={position} collectionName={'positionType'} />
  )
}
