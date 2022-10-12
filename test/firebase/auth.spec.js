import { loginUser, loginGoogle, newUser } from '../../src/firebase/auth.js';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');

describe('loginUser', () => {
  it('should be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('should call another function one time', () => {
    loginUser('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});

describe('loginGoogle', () => {
  it('should be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('should call another function one time', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, {});
  });
});

describe('newUser', () => {
  it('should be a function', () => {
    expect(typeof newUser).toBe('function');
  });
  it('should call another function one time', () => {
    newUser('email', 'password');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});
