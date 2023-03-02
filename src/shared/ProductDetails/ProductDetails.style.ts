export default {
  container: {
    display: 'flex',
    flexDirection: 'column'
  } as React.CSSProperties,
  headerContainer: {
    height: 60,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  } as React.CSSProperties,
  icon: {
    width: '20%',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 1
  } as React.CSSProperties,
  title: {
    width: '60%',
    justifyContent: 'center',
    display: 'flex'
  } as React.CSSProperties,
  detailsContainer: {
    marginLeft: 12,
    marginRight: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  } as React.CSSProperties,
  raitingsContainer: {
    height: 21,
    marginTop: 14,
    marginBottom: 7
  } as React.CSSProperties,
  hyperlink: {
    fontSize: 16,
    fontWeight: 400,
    textDecoration: 'underline'
  } as React.CSSProperties,
  priceContainer: {
    marginTop: 18,
    marginBottom: 18,
    color: '#000',
    fontWeight: 800,
    fontSize: 24
  } as React.CSSProperties,
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 12
  } as React.CSSProperties,
  descriptionContainer: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 12,
    whiteSpace: 'normal',
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  } as React.CSSProperties,
  ctaContainer: {
    height: 48,
    backgroundColor: '#FF5B5D',
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 12
  } as React.CSSProperties
}