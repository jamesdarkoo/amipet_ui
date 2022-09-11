import withAuthorization from '../components/features/auth/auth.hoc';
import Layout from '../components/Shared/Layout';
import ProfileUser from '../components/features/account/ProfileUser';

const Profile = () => {
  return (
    <Layout>
      <ProfileUser />
    </Layout>
  );
};

export default withAuthorization(Profile);
