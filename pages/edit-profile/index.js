import { useQuery } from '@apollo/client';
import Profilequery from '../../graphql/queries/profile';
import EditProfile from '../../components/features/account/EditProfile';
// import withAuthorization from '../../components/features/auth/auth.hoc';
import { profile } from '../profile/index'

const Account = () => {
  // const { loading, error, data } = useQuery(Profilequery);

  return (
    <>
      {/* {!loading && <EditProfile profile={data.myProfile} />} */}
       <EditProfile profile />
    </>
  );
};

// export default withAuthorization(Account);
export default Account;
