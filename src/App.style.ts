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
})