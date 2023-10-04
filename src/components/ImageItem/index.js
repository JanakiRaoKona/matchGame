import './index.css'

const ImageItem = props => {
  const {imagesList, onClickThumbMatch} = props
  const {thumbnailUrl, id} = imagesList
  const onClickThumb = () => {
    onClickThumbMatch(id)
  }
  return (
    <li>
      <button type="button" className="image-item">
        <img
          className="image-icon"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={onClickThumb}
        />
      </button>
    </li>
  )
}
export default ImageItem
