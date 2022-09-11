import React from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';
import LoginContainer from './LoginContainer';
import SignIn from './SignIn';
import loginGQL from '../../../../graphql/mutations/login.js';

export default function SignInSide() {
  const router = useRouter();
  const [login, { loading, error }] = useMutation(loginGQL, {
    onCompleted({ login }) {
      if (login?.success) {
        Cookies.set('accessToken', login.accessToken);
        router.push('/');
      }
    }
  });

  const handleSubmit = (email, password) => {
    login({ variables: { input: { email, password } } });
  }

  return (
    <LoginContainer>
      <SignIn onSubmit={handleSubmit} />
    </LoginContainer>
  );
}
