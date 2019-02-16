import React from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import styled from 'styled-components';

const Track = styled.div`
  display: flex;
`;

const PlayPause = styled.div``;

const Title = styled.div`
  font-size: 20px;
  flex-grow: 1;
`;

console.log(process.env.REACT_APP_TRACK1);

const track1 = process.env.REACT_APP_TRACK1;
const track2 = process.env.REACT_APP_TRACK2;
const track3 = process.env.REACT_APP_TRACK3;
const track4 = process.env.REACT_APP_TRACK4;

const playlist = [
  { title: 'Yoho', audio: track1 },
  { title: 'El Despota', audio: track2 },
  { title: 'Crackadoom', audio: track3 },
  { title: 'Digital Shaman', audio: track4 }
];

const TrackPlayer = withCustomAudio(props => {
  const { trackTitle } = props;

  return (
    <Track>
      <PlayPause>
        <PlayButton {...props}>Test</PlayButton>
      </PlayPause>
      <Title>{trackTitle}</Title>
      <Timer {...props} />
    </Track>
  );
});

const CrackadoomPlayer = () => (
  <div>
    {playlist.map(track => (
      <TrackPlayer
        key={track.title}
        streamUrl={track.audio}
        trackTitle={track.title}
        preloadType="metadata"
      />
    ))}
  </div>
);

export default CrackadoomPlayer;
