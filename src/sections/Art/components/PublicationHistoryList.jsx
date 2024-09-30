export const PublicationHistoryList = ({ picture }) => {
  return (
    <>
      {picture.publicationHistory.map((history, index) => (
        <li key={index}>{history}</li>
      ))}
    </>
  );
};
