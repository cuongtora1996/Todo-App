jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const {EventEmitter} = require('events');
  return EventEmitter;
});

jest.mock('react-native-reanimated', () => {

    const {View} = require('react-native');
    return {
      Value: jest.fn(),
      event: jest.fn(),
      add: jest.fn(),
      eq: jest.fn(),
      set: jest.fn(),
      cond: jest.fn(),
      interpolate: jest.fn(),
      View,
      Extrapolate: { CLAMP: jest.fn() },
      Transition: {
        Together: 'Together',
        Out: 'Out',
        In: 'In',
      },
      Easing: {
        in: jest.fn(),
        out: jest.fn(),
        inOut: jest.fn(),
      },
    };
  });