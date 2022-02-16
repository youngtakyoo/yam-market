import axios from "axios";

// from주석님 : document에 cookie가 있는지 확인한다.
// 이 때 쿠키가 없다면 instance의 헤더에는 토큰값이 null로 지정이 된다.
const tokenCheck = document.cookie;
const token = tokenCheck.split('=')[1];

const instance = axios.create({
    baseURL: 'http://3.35.133.127',
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
        Authorization : token,
      },
});

const imstance = axios.create({
    baseURL: 'http://3.35.133.127',
    headers: {
        "content-type": "multipart/form-data",
        accept: "application/json,",
        Authorization : token,
      },
});

export const apis = {
  // test code
  test: () => instance.get('/test'),
  test2: () => imstance.get('/test'),

  // 회원가입용 요청
  signup: (id,nick,pwd) => instance.post('/user/signup',{userId: id, nickname: nick, password: pwd}),

  // 로그인 요청
  login: (id,pwd) => instance.post('/user/login',{userId: id,password: pwd}),

  // 로그인 체크
  usercheck: () => instance.post('/user/check'),

  // 로그아웃 요청
  logout: ()=> instance.post('/user/logout'),

  // 전체 게시글 요청
  postlist: () => instance.get('/views/postList'),

  // 게시글 작성
  posting: (formdata) => imstance.post('/posts/write',formdata),

  // 게시글 수정
  editing: (post_id) => instance.patch(`/posts/${post_id}`,{}),

  // 게시글 삭제
  deleting: (post_id) => instance.delete(`/posts/${post_id}`,{}),

  // 댓글 조회
  getcom: (post_id) => instance.get(`/comments/${post_id}`,{}),

  // 댓글 작성
  addcom: (post_id) => instance.post(`/comments/${post_id}`,{}),

  // 댓글 수정
  editcom: (commentId) => instance.put(`/comments/${commentId}`,{}),

  // 댓글 삭제
  delcom: (commentId) => instance.delete(`/comments/${commentId}`,{}),
}