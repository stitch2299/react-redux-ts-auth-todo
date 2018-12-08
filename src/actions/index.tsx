import * as constants from "../constants";

export interface TypeAddCount {
  type: string;
}

export interface TypeSubCount {
  type: string;
}

export interface TypeDoubleAddCount {
  type: string;
  payload: any;
}

export interface TypeResetCount {
  type: string;
}

export const getAddCount = ():TypeAddCount => {
  return{
    type: constants.ADD_COUNT
  }
}

export const getSubCount = ():TypeSubCount => {
  return{
    type: constants.SUB_COUNT
  }
}

export const getDoubleAddCount = (num:number):TypeDoubleAddCount => {
  return{
    type: constants.DOUBLE_ADD_COUNT,
    payload: {num:num}
  }
}

export const getResetCount = ():TypeResetCount => {
  return{
    type: constants.RESET_COUNT,
  }
}

export type CountAction = TypeAddCount | TypeSubCount | TypeDoubleAddCount | TypeResetCount;
