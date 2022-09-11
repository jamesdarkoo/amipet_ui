import Layout from '../../components/Shared/Layout';
import EditProfile from '../../components/features/account/EditProfile';
import withAuthorization from '../../components/features/auth/auth.hoc';

const Account = () => {
  return (
    <Layout>
      <EditProfile />
    </Layout>
  );
};

export default withAuthorization(Account);
