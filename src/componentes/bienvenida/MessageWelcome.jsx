import React from "react";

const MessageWelcome = ({email}) => {
    console.log(email)
  return (
    <>
      {/* Bienvenida */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Bienvenido:{" "}
          <span className="text-blue-700 hover:text-blue-950">{email}</span>
        </h1>
      </div>
    </>
  );
};

export default MessageWelcome;
