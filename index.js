import React from 'react';
import { render } from 'react-dom';
import cssVars from './styles.json';
import classNames from './styles.scss';

console.log(cssVars); // {red: "#FF0000"}
console.log(cssVars); // {red: "#FF0000"}

render(
	<div className={classNames.myDiv}>asdf</div>,
	window.root
);
