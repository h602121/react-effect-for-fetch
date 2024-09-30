import { PublicationHistoryList } from "./PublicationHistoryList";

export const ArtListItem = ({ picture }) => {
  return (
    <div className="frame">
      <img
        key={picture.id}
        src={"https://boolean-uk-api-server.fly.dev" + picture.imageURL}
      />
      <h3>Title: {picture.title}</h3>
      <p>Artist: {picture.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList picture={picture}></PublicationHistoryList>
    </div>
  );
};

export default ArtListItem;
