import PropTypes from 'prop-types';
function Video({videoid}) {
    return(
      <div>
        <iframe 
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/${videoid}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-medial; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embeded Video"
        />    
      </div>
    )
  }
  Video.propTypes={
    videoid: PropTypes.string.isRequired
  }
  export default Video;