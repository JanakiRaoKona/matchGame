import './index.css'

const TabItem = props => {
  const {tabsList, onChangeTabButton, isActive} = props
  const {displayText, tabId} = tabsList
  const onClickTab = () => {
    onChangeTabButton(tabId)
  }
  const isActiveClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-btn active-tab-btn2 ${isActiveClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
