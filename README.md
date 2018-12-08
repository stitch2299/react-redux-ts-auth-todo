## react-redux-ts-counter

### about
* React + Redux + Typescript でつくられたカウンターアプリ
* Presententional Component と Container Component を分けています。
* Typescirpt 練習のため

### demo
https://yonedaco.github.io/react-redux-ts-counter/

### how to run
```
cd react-redux-ts-counter
npm install
npm run start
```

### learning log
* Stateless Functional Component の型付け
```
// カウンターの値を受け取って表示するコンポーネント
export interface Props{
	count: number;
}

const Counter = ({count}:Props) => {
	return(
		<div>
			<p>counter: {count}</p>
		</div>
	)
}
export default Counter;
```
* action の型付け
```
// カウンターを1つ上げるアクションの型
export interface IAddCount{
	type: string;
}

// カウンターを1つ上げるためのアクションクリエイター
export const getAddCount = ():IAddCount => {
	return{
		type: constant.ADD_COUNT
	}
}
```
* reducer の型付け

```
// state の型
export interface StoreState{
	count: number;
	reseted: number;
}

// reducer の型付け
const reducer = (state: StoreState, action: IAddCount): StoreState => {
	switch(action.type){
		case ADD_COUNT:
			return {...state, count: state.count + 1};
	}
}
export default reducer;
```
