import styled from 'styled-components';

export default function Avatar({ name, picture }) {
  return (
    <>
      <div className="flex items-center">
        <img src={picture} className="avatar" alt={name} />
        <div className="text-xl font-bold">{name}</div>
      </div>

      <style jsx>
        {`
          .avatar {
            height: 100px;
            width: 100px;
            border-radius: 5px 20px 5px;
          }
        `}
      </style>
    </>
  );
}
