//앞글자에는 모듈의 이름을 넣는다. 다른 모듈의 액션들과 혼동이 없게 하기 위함이다.
const CHANGE_COLOR = "counter/CHANGE_COLOR";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    color
  };
};
export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};

const initialState = {
  color: "red",
  number: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    case INCREMENT:
      return {
        ...state,
        number: action.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: action.number - 1
      };
    default:
      return {
        ...state
      };
  }
}
