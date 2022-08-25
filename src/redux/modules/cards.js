// 덕스구조로 만드는 리덕스 모듈!

// Action Value
const ADD_TODO = 'cards/ADD_TODO';
const DELETE_TODO = 'cards/DELETE_TODO';
const EDIT_TODO_STATUS = 'cards/EDIT_TODO_STATUS'
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => { //todo객체 하나가 payload로 넘어와야 함
    return {type: ADD_TODO, payload:payload};
};
export const deleteTodo = (payload_id) => { //todo 객체의 id 받아와야 함
    return {type: DELETE_TODO, payload_id};
};
export const editTodoStatus = (payload_id) => { //todo 객체의 id 받아와야 함
    return {type: EDIT_TODO_STATUS, payload_id};
};
export const getTodoByID = (payload_id) => { //todo 객체의 id 받아와야 함
    return {type: GET_TODO_BY_ID, payload_id};
};

// Initial State
const initialState = {
  card_list: [
    {
      id: 1,
      title: 'W4 리액트 숙련',
      body: '라우터와 리덕스를 적용해봅시다.',
      isDone: false,
    },
    {
      id: 2,
      title: 'W3 리액트 입문',
      body: '리액트 기초를 공부해봅시다.',
      isDone: true,
    },
  ],
  todo: {
    id: 0,
    title: '',
    body: '',
    isDone: false,
  },
// 여기에 투두는 왜 있는거지..? todo 초깃값은 Form컴포넌트 내에서 state로 관리하는 것 같은데
// 아하 GET_TODO_BY_ID인 경우에 저 todo안에 id가 일치하는 card를 담아서 활용하는구나
};

// Reducer
const cards =(state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO : 
            return {
              ...state,
              card_list: [...state.card_list, action.payload],
            };
        
        case DELETE_TODO: 
            return {
                ...state,
                card_list: state.card_list.filter((card)=>card.id !== action.payload_id ),
            };

        case EDIT_TODO_STATUS:
            return {
                ...state,
                card_list: state.card_list.map((card)=>{
                    return card.id === action.payload_id ? {...card, isDone: !card.isDone} : card
                }),
            };

        case GET_TODO_BY_ID:
            return {
                ...state,
                todo: state.card_list.find((card)=>{
                    return card.id === action.payload_id;
                }),
            };

        default:
            return state;
    }
};

// export default reducer
export default cards;
