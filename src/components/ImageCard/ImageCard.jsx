export default function ImageCard({ open, descr, url, large }) {
    return (
      <div
        id="imageCard"
        onClick={() => {
          open(large);
        }}
      >
        <img src={url} alt={descr} height={220} width={343} />
      </div>
    );
  }