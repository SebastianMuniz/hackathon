interface options {
  bottomWidth: number;
  width: number
}

export default (options: options) => ({
  cardContainer: {
    backgroundColor: '#FF5B5D',
    width: options.bottomWidth,
    height: 48,
    position: 'fixed',
    bottom: 24,
    left: (options.width - options.bottomWidth) / 2,
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 2
  },
  cardHeaderContainer: {
    backgroundColor: '#000',
    width: options.width,
    height: 64,
    position: 'fixed',
    top: 0,
    color: '#FFF',
    textAlign: 'left',
    paddingLeft: 48,
    lineHeight: 1.5,
    paddingTop: 24
  },
  headerBrandText: {
    fontSize: 14,
    fontWeight: 800,
    height: 24
  },
  headerProductText: {
    fontSize: 16,
    height: 24

  }
})