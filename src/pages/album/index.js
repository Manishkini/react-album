import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllAlbums } from '../../redux/reducers';
import Albums from '../../components/albums';

function Album({ dispatch }) {
  console.log(dispatch);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getAllAlbums(res));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-full bg-slate-200">
      <div className="w-3/4 mx-auto">
        <div className="flex flex-col h-full">
          <div className="w-full h-20">
            <div className="w-1/4 mx-auto text-center mt-5">
              <Link to={'/album/create'} className="">
                <button className="bg-[#4C3575] text-xl py-1 px-4 rounded-lg align-middle text-white">
                  Add Album
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full h-full grow mb-10">
            <Albums />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Album);
