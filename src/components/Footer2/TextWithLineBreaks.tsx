import React from 'react';

interface TextWithLineBreaksProps {
  text: string;
}

const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({ text }) => {
  const parts = text.split('<br />');
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {part}
        </React.Fragment>
      ))}
    </>
  );
};

export default TextWithLineBreaks;
