import React, { useState } from 'react';
import { updateAlbum, deleteAlbum } from '../../../redux/reducers';

function Album({ album: { id, title, userId }, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);
  const [customTitle, setCustomTitle] = useState(title || '');

  const handleSubmit = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title: customTitle,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(updateAlbum(res));
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(deleteAlbum(id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isEdit ? (
        <div className="flex flex-col gap-1 h-48 bg-[#5B4B8A] justify-between py-3 rounded-sm text-white">
          <div className="flex flex-row gap-1 grow">
            <label className="w-1/5 text-center" htmlFor="title">
              Title
            </label>
            <textarea
              className="text-black w-4/5 mr-5"
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-center gap-8 h-8">
            <button
              className="bg-[#4C3575] p-1 rounded-lg"
              onClick={() => setIsEdit(false)}
            >
              Cancle
            </button>
            <button
              className="bg-[#4C3575] p-1 rounded-lg"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-4 bg-[#5B4B8A] rounded-sm text-white">
          <div className="flex flex-col h-48 gap-8 justify-center flex-grow pl-5">
            <strong>{`Title: ${title}`}</strong>
            <strong>{`User-id: ${userId}`}</strong>
          </div>
          <div className="flex flex-col w-1/6 justify-center items-center p-1 gap-8">
            {/* <button className="text-[#4C3575]"> */}
            <img
              className="text-[#4C3575] cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png"
              width={20}
              onClick={() => setIsEdit(true)}
            />
            {/* </button>
        <button className="text-[#4C3575]"> */}
            <img
              className="text-[#4C3575] cursor-pointer"
              src="https://cdn-icons.flaticon.com/png/512/2874/premium/2874821.png?token=exp=1656868081~hmac=c34366eb3f34753eb3c74c358dc0522d"
              width={25}
              onClick={() => handleDelete()}
            />
            {/* </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Album;