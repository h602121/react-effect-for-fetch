import ArtListItem from "./ArtListItem";

export const ArtList = ({ pictures }) => {
  return (
    <>
      {pictures.map((picture) => (
        <ArtListItem key={picture.id} picture={picture} />
      ))}
    </>
  );
};
