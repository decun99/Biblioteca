import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const AsignaturaView = () => {
  const { asignaturaName } = useParams();

  const videos = [
    {
      id: 1,
      title: 'Video 1',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID',
    },
    {
      id: 2,
      title: 'Video 2',
      url: 'https://www.youtube.com/watch?v=NtLbDbN_zko',
    },
    // Agrega más videos según sea necesario
  ];

  return (
    <div>
      <h2>Asignatura: {asignaturaName}</h2>

      <div>
        <h3>Videos</h3>
        {videos.map((video) => (
          <div key={video.id}>
            <h4>{video.title}</h4>
            <ReactPlayer url={video.url} controls />
          </div>
        ))}
      </div>

      <div>
        <h3>Archivos PDF</h3>
        {/* Aquí puedes colocar tu código para mostrar los archivos PDF de la asignatura */}
      </div>
    </div>
  );
};

export default AsignaturaView;
