import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebaseConfig";

const FirebaseData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onValue(ref(db, "/-NdcB9iWcfONRDxaBKiZ"), (querySnapShot) => {
      let data = querySnapShot.val() || null;
      setUser(data);
    });
  }, []);

  return { user };
};

export default FirebaseData;
