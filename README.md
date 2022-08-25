# MyTodoList_Redux

`Goal`
- React 입문 주차 개인 과제 를 react-router-dom, styled-components, redux를 사용해서 My Todo List 를 다시 만들어봅니다.

`구현해야 할 기능`
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

`과제에 요구되는 사항`

▶  **공통**
- **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.**
- todos 모듈은 **Ducks 패턴**으로 구현합니다.
- **컴포넌트 구조는 자유롭게 구현**하되, 본인이 그렇게 나눈 이유에 대해서 `README`에 작성합니다.

▶ **메인 페이지**
- **디자인과 화면 구성은 자유롭게 구현합니다.**
- **Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현**합니다. 예시 영상 꼭 위, 아래가 아니어도 되며 창의적으로 구현해도 됩니다.
- Todo를 추가하면  제목 input과 내용 input은 다시 빈 값이 되도록 구현합니다.
- input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현합니다.
- - Todo의 완료상태**가 `true`**이면**,** 상태 버튼의 라벨을 **“취소”,  `false`** 이면 라벨을 “**완료”** 로 보이도록 구현합니다.
- 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
- 상세보기 클릭하면 Todo의 상세 페이지로 이동합니다. 상세 페이지에서 보여야 하는 내용은 아래 토글에서 별도 안내합니다.

▶ **상세 페이지**
- 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼
        - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.

▶ **제한 사항**
- map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
- Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.

▶ **힌트**
- 예시에서 생성한 action creator는 총 4개 입니다.
    - `addTodo`, `deleteTodo`, `toggleStatusTodo`, `getTodoById`
- 중앙 정렬은 flex를 사용했습니다.
- 예시 사이트 : [http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/](http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/)

