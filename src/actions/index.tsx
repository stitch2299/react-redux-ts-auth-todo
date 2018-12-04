import * as constants from "../constants";

// ADD_COUNTアクションの型定義
// アクションは{type:-,payload:-}という形なのでその定義
export interface TypeAddCount {
  type: constants.TYPE_ADD_COUNT;
}

export interface TypeSubCount {
  type: constants.TYPE_SUB_COUNT;
}

export interface TypeDoubleAddCount {
  type: constants.TYPE_DOUBLE_ADD_COUNT;
  payload: any;
}

export const getAddCount = () => {
  return{
    type: constants.ADD_COUNT
  }
}

export const getSubCount = () => {
  return{
    type: constants.SUB_COUNT
  }
}

export const getDoubleAddCount = (num:number) => {
  return{
    type: constants.DOUBLE_ADD_COUNT,
    payload: {num:num}
  }
}

export type CountAction = TypeAddCount | TypeSubCount | TypeDoubleAddCount
