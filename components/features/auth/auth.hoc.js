import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import MEquery from '../../../graphql/queries/me';
import { authenticateFailed, setUser } from '../../../redux/auth.slice';

function withAuthorization(Component) {
  const Authorization = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loading, error } = useQuery(MEquery, {
      onCompleted({ me }) {
        dispatch(setUser(me));
      },
      onError(err) {
        dispatch(authenticateFailed(err.message));
        router.push('/login');
      },
    });

    if (loading) {
      return (<div>loading</div>);
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return <Component {...props} />;
  };

  return Authorization;
}

export default withAuthorization;
