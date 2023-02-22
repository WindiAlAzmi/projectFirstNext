import React from "react";


async function getDataComments(params) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${params}/comments`);
  return res.json();
}

export default async function CommentsResults({ slug}) {
    console.log(slug.post_id, 'ini slug');
  const data = await getDataComments(slug.post_id);
  return (
    <div>
      ini detail comments {slug.post_id}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
