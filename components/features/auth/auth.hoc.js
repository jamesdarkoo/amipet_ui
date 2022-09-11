import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function withAuthorization(Component) {
  const Authorization = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!Cookies.get('accessToken')) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />
  }

  return Authorization;
}

export default withAuthorization;
