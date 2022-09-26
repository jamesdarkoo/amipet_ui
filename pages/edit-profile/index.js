import { useQuery } from '@apollo/client';
import Profilequery from '../../graphql/queries/profile';
import Layout from '../../components/Shared/Layout';
import EditProfile from '../../components/features/account/EditProfile';
import withAuthorization from '../../components/features/auth/auth.hoc';


const Account = () => {
  const { loading, error, data } = useQuery(Profilequery);
  console.info('profile loading==', loading, error, data);
  return (
    <Layout>
      {!loading && <EditProfile profile={data.me} />}
    </Layout>
  );
};

export default withAuthorization(Account);
