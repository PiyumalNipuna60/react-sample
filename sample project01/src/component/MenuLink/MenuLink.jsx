import './MenuLink.css'
import PropTypes from 'prop-types';

function MenuLink(props) {
  return (
    <div>
       <>
       <a href={props.url} className="link">{props.linkName}</a>
       </>
    </div>
  )
}

MenuLink.propTypes = {
    linkName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

export default MenuLink
