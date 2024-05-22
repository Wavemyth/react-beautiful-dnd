// @flow
import React from 'react';
import checkReactVersion from './check-react-version';
import checkDoctype from './check-doctype';
import useDevSetupWarning from '../use-dev-setup-warning';

const requiredReactVersion = '^16.8.5 || ^17.0.0 || ^18.0.0'; // Replace this with the actual React version you are using

export default function useStartupValidation() {
  useDevSetupWarning(() => {
    checkReactVersion(requiredReactVersion, React.version);
    checkDoctype(document);
  }, []);
}
