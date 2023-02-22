import React from "react";

const getDataAuthor = async(params) => {
        const res = await fetch(
          `https://gorest.co.in/public/v2/users/${params}`
        );
        return res.json();
}

const AuthorDetails = async({params}) => {
    const data = await getDataAuthor(params.slug);
    return (
      <div>
        <p>ini detail autor {params.slug}</p>
        <div>{JSON.stringify(data)}</div>
      </div>
    );
}

export default AuthorDetails;