import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';
import LoginContainer from './LoginContainer';
import SignIn from './SignIn';
import loginGQL from '../../../../graphql/mutations/login.js';
import { authenticateSuccess } from '../../../../redux/auth.slice';

export default function SignInSide() {
  const router = useRouter();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [login, { loading, error }] = useMutation(loginGQL, {
    onCompleted({ login }) {
      if (login?.success) {
        dispatch(authenticateSuccess(login));
        Cookies.set('accessToken', login.accessToken);
        router.push('/edit-profile');
      }
    }
  });

  useEffect(() => {
    if (loggedIn) {
      router.push('/');
    }
  }, []);

  const handleSubmit = (email, password) => {
    login({ variables: { input: { email, password } } });
  }

  return (
    <LoginContainer>
      <SignIn onSubmit={handleSubmit} />
    </LoginContainer>
  );
}
