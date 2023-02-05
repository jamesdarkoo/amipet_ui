import LinearProgress from '@material-ui/core/LinearProgress';
// import { useQuery } from '@apollo/client';
// import withAuthorization from '../../components/features/auth/auth.hoc';
import ProfileUser from '../../components/features/account/ProfileUser';
// import profileQL from '../../graphql/queries/profile';

export const data = {
  id: 665,
  avatarUrl: 'https://source.unsplash.com/random',
  birthdate: '17122991',
  biography: '17122991',
  gender: '17122991',
  address: '17122991',
  phone: '17122991',
  cellPhone: '17122991',
  career: '17122991',
  school: '17122991',
  region : {
    id: 123,
    name: 'Reg1'
  },
  comune : {
    id: 123,
    name: 'Reg1'
  },
  rut: '17122991',
  avatarUrl:  'https://source.unsplash.com/random',
  periodEnd: '17122991',
  periodStart: '17122991',
  email: 'bamboo@gmail.com',
  firstName: 'bamboo',
  lastName: '1210',
}

const Profile = () => {
  // const {loading, data} = useQuery(profileQL);

  if (false) {
    return <LinearProgress />;
  }

  return (
    // <ProfileUser isAuthenticated user={data?.myProfile} />
    <ProfileUser isAuthenticated user={data} />
  );
};

// export default withAuthorization(Profile);
export default Profile;
