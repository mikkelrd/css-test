import React from 'react';
import { render } from 'react-dom';
import cssVars from './styles.json';
import classNames from './styles.scss';

console.log(cssVars); // {red: "#FF0000"}
console.log(classNames); // {myDiv: "_3x9aPH9WBIFskhaiKvhWqN"}

render(
	<div className={classNames.myDiv}>asdf</div>,
	window.root
);
