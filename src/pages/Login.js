import React, { useRef } from 'react';
import { Box } from '../components/Styled/Box';
import { Link } from 'react-router-dom';

const Login = () => {
    const idRef = useRef();
    const pwRef = useRef();

    const onSignIn = async () => {
        if (idRef.current.value === '') {
          alert('아이디를 입력하세요.');
          return;
        }

        if (pwRef.current.value === '') {
          alert('비밀번호를 입력하세요.');
          return;
        }

        const auth = getAuth();

        signInWithEmailAndPassword(auth, idRef.current.value, pwRef.current.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                history.replace('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            });
    };

    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
          onSignIn();
        }
    };

    return (
      <>
        <h1 className="logo" style={{ color: '#ffc83d' }}>
            WELCOME TO FOCUZ
        </h1>
        <Box>
          <input
            placeholder="아이디"
            ref={idRef}
            onChnage={onPressEnter}
          ></input>
          <input
            placeholder="비밀번호"
            type={'password'}
            ref={pwRef}
            onChnage={onPressEnter}
          ></input>
          <button className="loginBtn" onClick={onSignIn}>
            로그인
          </button>
          <a className="findAccount">아이디/비밀번호 찾기</a>
          <div className="signUp">
            아직 계정이 없으신가요?
            <Link to="register">
              <a>회원가입</a>
            </Link>
          </div>
        </Box>
      </>
      
    );
};

export default Login;
