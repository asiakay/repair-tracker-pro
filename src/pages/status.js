// import { withAuth } from "@/hoc/withAuth";

import { useContext } from "react";
import AuthContext from "@/contexts/AuthContext";

function StatusPage() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please login to access this page.</div>;
  }

  return <div>Welcome {user.displayName}!</div>;
}

export default StatusPage;



/* import { useContext } from "react";

const StatusPage = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>
            Loading...
        </div>;
    }

    if (!user) {
        return <div>Please login to view this page</div>;
    }

    return 
<div>

</div>
        Status: Private Route
   

};

export default withAuth(StatusPage); */
