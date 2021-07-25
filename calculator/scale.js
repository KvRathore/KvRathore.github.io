/* THEME SELECTORS */
const scale = document.querySelector('.calc__theme-scale');
const dot = document.querySelector('.dot');
const root = document.querySelector(':root');

/*
  --color-dark: #2c2e43;
  --color-calc-scale: #11121a;
  --color-dispay: #11121a;
  --color-numpad: #393c58;

  color_num_color: '#eeeeee',
  color_del_reset: '#a8abc6',

  color_num_hover: '#aaa',
  color_del_reset_hover: '#9397b9',

  color_equal: '#ff616d',
  color_equal_hover: '#ff3f4e',
*/

const initialColor = {
  color_dark: '#2c2e43',
  color_calc_scale: '#11121a',
  color_dispay: '#11121a',
  color_numpad: '#393c58',

  color_num_color: '#eeeeee',
  color_del_reset: '#a8abc6',

  color_num_hover: '#aaa',
  color_del_reset_hover: '#9397b9',

  color_scale_dot: '#ff6767',

  color_equal: '#ff616d',
  color_equal_hover: '#ff3f4e',

  primary_color: '#fff',
  numpad_color: '#000',

  display_num_color: '#fff',
};

const themeLight = {
  color_dark: '#E8F6EF',
  color_calc_scale: '#c3e8d6',
  color_dispay: '#fff',
  color_numpad: '#cbd1c9',

  color_num_color: '#e6e8e5',
  color_del_reset: '#83de8a',

  color_num_hover: '#9faa9b',
  color_del_reset_hover: '#2a9e33',

  color_scale_dot: '#0A1D37',

  color_equal: '#e1a985',
  color_equal_hover: '#a55928',

  primary_color: '#000',
  numpad_color: '#000',

  display_num_color: '#000',
};

const funkyTheme = {
  color_dark: '#583D72',
  color_calc_scale: '#362546',
  color_dispay: '#cfc0dd',
  color_numpad: '#2d1f3b',

  color_num_color: '#835ca8',
  color_del_reset: '#47315c',

  color_num_hover: '#61437d',
  color_del_reset_hover: '#2d1f3b',

  color_scale_dot: '#ffff73',

  color_equal: '#67eaf9',
  color_equal_hover: '#08cae1',

  display_num_color: '#ffff0d',

  primary_color: '#ffff73',
  numpad_color: '#000',
};

let currentTheme = initialColor;

let dark_color = '--color-dark';
let display_color = '--color-display';

// scale logic.
scale.addEventListener('click', () => {
  if (dot.classList.contains('initial')) {
    dot.classList.remove('initial');
    dot.classList.add('middle');

    functionLight();
  } else if (dot.classList.contains('middle')) {
    dot.classList.remove('middle');
    dot.classList.add('end');
    functionFunky();
  } else if (dot.classList.contains('end')) {
    dot.classList.remove('end');
    dot.classList.add('initial');
    functionNormal();
  }
});

const functionLight = () => {
  document.documentElement.style.setProperty(
    '--color-dark',
    themeLight.color_dark
  );

  document.documentElement.style.setProperty(
    '--color-calc-scale',
    themeLight.color_calc_scale
  );

  document.documentElement.style.setProperty('--color-dispay', '#fff');

  document.documentElement.style.setProperty(
    '--color-numpad',
    themeLight.color_numpad
  );

  document.documentElement.style.setProperty(
    '--color-num-color',
    themeLight.color_num_color
  );

  document.documentElement.style.setProperty(
    '--color-del-reset',
    themeLight.color_del_reset
  );

  document.documentElement.style.setProperty(
    '--color-num-hover',
    themeLight.color_num_hover
  );

  document.documentElement.style.setProperty(
    '--color-del-reset-hover',
    themeLight.color_del_reset_hover
  );

  document.documentElement.style.setProperty(
    '--color_scale-dot',
    themeLight.color_scale_dot
  );

  document.documentElement.style.setProperty(
    '--color-equal',
    themeLight.color_equal
  );

  document.documentElement.style.setProperty(
    '--color-equal-hover',
    themeLight.color_equal_hover
  );

  document.documentElement.style.setProperty(
    '--display-num-color',
    themeLight.display_num_color
  );

  document.documentElement.style.setProperty(
    '--primary-color',
    themeLight.primary_color
  );
};

const functionFunky = () => {
  document.documentElement.style.setProperty(
    '--color-dark',
    funkyTheme.color_dark
  );

  document.documentElement.style.setProperty(
    '--color-calc-scale',
    funkyTheme.color_calc_scale
  );

  document.documentElement.style.setProperty(
    '--color-dispay',
    funkyTheme.color_dispay
  );

  document.documentElement.style.setProperty(
    '--color-numpad',
    funkyTheme.color_numpad
  );

  document.documentElement.style.setProperty(
    '--color-num-color',
    funkyTheme.color_num_color
  );

  document.documentElement.style.setProperty(
    '--color-del-reset',
    funkyTheme.color_del_reset
  );

  document.documentElement.style.setProperty(
    '--color-num-hover',
    funkyTheme.color_num_hover
  );

  document.documentElement.style.setProperty(
    '--color-del-reset-hover',
    funkyTheme.color_del_reset_hover
  );

  document.documentElement.style.setProperty(
    '--color_scale-dot',
    funkyTheme.color_scale_dot
  );

  document.documentElement.style.setProperty(
    '--color-equal',
    funkyTheme.color_equal
  );

  document.documentElement.style.setProperty(
    '--color-equal-hover',
    funkyTheme.color_equal_hover
  );

  document.documentElement.style.setProperty(
    '--display-num-color',
    funkyTheme.display_num_color
  );

  document.documentElement.style.setProperty(
    '--primary-color',
    funkyTheme.primary_color
  );
};

const functionNormal = () => {
  document.documentElement.style.setProperty(
    '--color-dark',
    initialColor.color_dark
  );

  document.documentElement.style.setProperty(
    '--color-calc-scale',
    initialColor.color_calc_scale
  );

  document.documentElement.style.setProperty(
    '--color-dispay',
    initialColor.color_dispay
  );

  document.documentElement.style.setProperty(
    '--color-numpad',
    initialColor.color_numpad
  );

  document.documentElement.style.setProperty(
    '--color-num-color',
    initialColor.color_num_color
  );

  document.documentElement.style.setProperty(
    '--color-del-reset',
    initialColor.color_del_reset
  );

  document.documentElement.style.setProperty(
    '--color-num-hover',
    initialColor.color_num_hover
  );

  document.documentElement.style.setProperty(
    '--color-del-reset-hover',
    initialColor.color_del_reset_hover
  );

  document.documentElement.style.setProperty(
    '--color_scale-dot',
    initialColor.color_scale_dot
  );

  document.documentElement.style.setProperty(
    '--color-equal',
    initialColor.color_equal
  );

  document.documentElement.style.setProperty(
    '--color-equal-hover',
    initialColor.color_equal_hover
  );

  document.documentElement.style.setProperty(
    '--display-num-color',
    initialColor.display_num_color
  );

  document.documentElement.style.setProperty(
    '--primary-color',
    initialColor.primary_color
  );
};
