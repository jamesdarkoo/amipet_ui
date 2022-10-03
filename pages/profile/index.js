import LinearProgress from '@material-ui/core/LinearProgress';
import { useQuery } from '@apollo/client';
import withAuthorization from '../../components/features/auth/auth.hoc';
import ProfileUser from '../../components/features/account/ProfileUser';
import profileQL from '../../graphql/queries/profile';

const Profile = () => {
  const {loading, data} = useQuery(profileQL);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <ProfileUser isAuthenticated user={data?.myProfile} />
  );
};

export default withAuthorization(Profile);
