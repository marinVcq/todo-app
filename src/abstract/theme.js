import React from 'react';
import { COLORS } from './colors.js';

export const light = {
	mainBackground: COLORS.veryLightGray,
	todoContainerBackground: COLORS.white,
	todoContainerShadow: "rgba(228, 229, 241,0.30)",
	textSoft: COLORS.darkGrayishBlue,
	text: COLORS.veryDarkGrayishBlue,
	textHover: COLORS.veryDarkGrayishBlue,
	textCompleted: COLORS.lightGrayishBlue1,
	buttonCompleted: COLORS.veryLightGrayishBlue,
};

export const dark = {
	mainBackground: COLORS.veryDarkBlue,
	todoContainerBackground: COLORS.veryDarkDesaturatedBlue,
	todoContainerShadow: "rgba(0, 0, 0,0.30)",
	textSoft: COLORS.darkGrayishBlue2,
	textHover: COLORS.lightGrayishBlue3,
	text: COLORS.lightGrayishBlue2,
	textCompleted: COLORS.veryDarkGrayishBlue2,
	buttonCompleted: COLORS.veryLightGrayishBlue
};