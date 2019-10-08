export type ThemeVars =
	| '@primary-color'
	| '@link-color'
	| '@success-color'
	| '@warning-color'
	| '@error-color'
	| '@font-size-base'
	| '@heading-color'
	| '@text-color'
	| '@text-color-secondary'
	| '@disabled-color'
	| '@border-radius-base'
	| '@border-color-base'
	| '@box-shadow-base';

export type Theme = Record<ThemeVars, string>;
