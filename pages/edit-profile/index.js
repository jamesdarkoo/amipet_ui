import { useQuery } from '@apollo/client';
import Profilequery from '../../graphql/queries/profile';
import EditProfile from '../../components/features/account/EditProfile';
import withAuthorization from '../../components/features/auth/auth.hoc';


const Account = () => {
  const { loading, error, data } = useQuery(Profilequery);

  return (
    <>
      {!loading && <EditProfile profile={data.myProfile} />}
    </>
  );
};

export default withAuthorization(Account);
