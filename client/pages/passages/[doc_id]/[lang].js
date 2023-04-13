import { newApiRequest } from "@/services/newApiRequest";
import { newNodeRequest } from "@/services/newNodeRequest";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  const { lang, doc_id } = router.query;
  console.log(lang, doc_id);

  //   blocked CORS
  //   access to XMLHttpRequest at 'http://dev-oracle.tesoract.com:8000/translations' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: Redirect is not allowed for a preflight request.

  useEffect(() => {
    newApiRequest("/translations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        text: "some text",
        language: lang,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang, doc_id]);
  return <div></div>;
};

export default index;
