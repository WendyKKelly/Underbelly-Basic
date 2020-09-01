import styled from 'styled-components';

export default function Avatar({ name, picture }) {
  return (
    <>
      <div className="flex items-center">
        <img src={picture} className="avatar" alt={name} />
        <div className="font-bold">{name}</div>
      </div>

      <style jsx>
        {`
          .avatar {
            height: 100px;
            width: 100px;
            border-radius: 10px;
            box-shadow: 0 8px 6px -6px black;
          }
          .font-bold {
            font-family: Raleway;
            font-size: 16px;
          }
        `}
      </style>
    </>
  );
}
