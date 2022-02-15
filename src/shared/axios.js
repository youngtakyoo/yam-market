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
        'token': token,
      },
});

export const apis = {
  // test code
  test: () => instance.get('/test'),

  // 회원가입용 요청
  signup: (id,nick,pwd) => instance.post('/user/signup',{userId: id, nickname: nick, password: pwd}),

  // 로그인 요청
  login: (id,pwd) => instance.post('/user/login',{userId: id,password: pwd}),

  // 로그인 체크
  usercheck: (token) => instance.post('/user/check',{authorization: token}),

  // 로그아웃 요청
  logout: ()=> instance.post('/user/logout'),

  // 전체 게시글 요청
  postlist: () => instance.get('/views/postList'),

}