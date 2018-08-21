// 📁 lib.mjs

export const css_prefix = ((() => {
    return `-${(Array.prototype.slice
        .call(window.getComputedStyle(document.documentElement, ''))
        .join('')
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1]}-`;
})());

export const icons = {

    'search': `<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 489.663 489.663'><path transform='translate(75 75) scale(0.80)' d='M457.423 433.6c-15.6-15.1-32.5-29.1-48.8-43.5-17.5-32.1-45.8-54.4-70.4-80 5.9-7.2 11.3-14.9 16.1-22.9 1.5-2.6 3.3-5.2 4.7-7.9l4-8.3c1.3-2.8 2.8-5.5 3.9-8.3l3.2-8.6c1-2.9 2.2-5.7 3.1-8.7l2.4-8.9 2.3-8.9 1.6-9.6c2-9.9-1.4-21.6-3.6-25.7-4.6-7.9-8.9 1.8-13.2 16.6-8 24.3-20.1 48.2-37 69.6-8.7 10.4-18.1 20.6-29 29.1-5.2 4.6-11.1 8.3-16.8 12.3-2.8 2.1-6 3.5-9 5.3-3 1.7-6 3.6-9.2 4.9-14.9 7.7-31.3 12.1-47.7 14.4-4.1.4-8.2 1.3-12.4 1.2l-6.2.2-3.1.1H189.523l-13.2-1-3.4-.2c-1.1-.1-2-.3-3-.5l-5.8-1.1-5.8-1c-1.9-.4-4-1.1-5.9-1.6-3.9-1.2-8-2-11.8-3.6l-11.5-4.5-11-5.6c-14.4-7.9-27.5-18-38.9-29.7-11.3-11.8-20.5-25.5-27.7-40.1l-2.6-5.5-1.3-2.8-1-2.9-4.1-11.5-3-11.8c-.6-2-.9-4-1.2-6l-.9-6-.9-6-.3-6.1-.3-6.1-.2-3.1v-.7l.1-1.7.6-13.7c.4-4.1 1.1-7.7 1.6-11.5 2.7-15.6 7.8-31.7 15.1-46.3 8.2-14.1 18.6-26.7 30.4-37.7 37.6-35.2 92.7-49.1 142-36.7l9.2 2.3 8.9 3.2 4.5 1.6c1.5.6 2.9 1.3 4.3 2l8.6 4c11.1 6.2 22 13 31.4 21.6 9.8 8.2 18.1 18.1 25.6 28.4 3.4 5.4 7.3 10.6 10 16.4 1.5 2.9 3.1 5.7 4.4 8.6l3.7 8.9c11.3 27.1 13.8 52.8 23.5 50.6 4.1-1.1 7.4-7.5 9.5-18.5.5-5.4.8-12 .3-19.4-.5-3.7-1.1-7.5-1.9-11.6-.4-2-.7-4.1-1.3-6.2-.7-2.1-1.3-4.2-2-6.3-4.6-15.5-12.3-30-20.9-43.9-4.8-6.6-9.2-13.5-14.8-19.5-2.8-3-5.2-6.4-8.3-9.1l-8.9-8.5c-12.4-10.7-26-20.4-41-27.4-7.3-4-15.2-6.5-22.9-9.4-3.9-1.4-8-2.2-11.9-3.3-4-1-7.9-2.2-12.3-2.7l-10.4-1.4-5.1-.7-4.5-.2-9.1-.4-2.3-.1h-3.2l-5 .3c-6.6.5-13.3.4-19.8 1.8-6.5 1.1-13.1 1.9-19.5 3.9-25.7 6.5-49.8 18.6-70.4 35.1-20.5 16.5-37.7 37.1-49.6 60.5-2.7 6-5.8 11.8-8 17.9l-3.2 9.3-1.6 4.6c-.5 1.6-.8 3.2-1.2 4.7-1.4 6.4-3.4 12.5-4.1 19.3-.9 6.6-2.1 13.6-2 19.4-3 22.7-1.4 47.1 5 70.1 6.4 23.1 17.6 45 32.7 64s34 35.1 55.4 47l16.5 8.1c5.7 2.2 11.5 4.3 17.2 6.5 5.9 1.7 11.9 3.2 17.8 4.7 6.2 1.3 12.7 2.1 19.1 3l2.4.3 2.1.1 4.1.2 8.3.4 2.1.1 1 .1h2.2l4.6-.2 9.2-.5 4.6-.3c1.5-.2 3-.4 4.6-.7l9.1-1.4c6.1-.7 12-2.6 18-4.1 23.7-6.6 46.1-17.8 65.5-32.7 4.8-3.7 9.4-7.6 13.9-11.7 2.8 7.8 7 14.8 12.3 21.1 21.1 25.2 41.1 51.5 66.8 72.5 2.6 3.1 5.2 6.3 7.9 9.4 17.1 19.5 35 38.1 56.1 53.4 6 4.3 13.5 5.4 19.6-1.4 5.5-6.2 6.1-14.2 1.5-20.2-8.4-10.7-16.7-21.6-26.4-31z'/><path transform='translate(75 75) scale(0.80)' d='M260.823 209.1c1.1.1 2.8-3.4 3.3-5.8 1.1-4.9-.3-9-2.4-12.1-6.8-10.3-15.1-14.8-23.5-16-10.1-1.4-20.2-3.3-30.3-4.3 2.7-17.7-.3-35.6 1.4-53.4.1-1.1-3.4-2.8-5.8-3.3-4.9-1.1-9 .3-12.1 2.4-10.3 6.8-14.8 15.1-16 23.5-1.4 10.1-3.2 20.1-4.3 30.2-.4-.1-.9-.1-1.3-.2-16-1.7-32-2.2-47.9 1.9-4.5 1.2-8.3 5.8-7.9 14.8.3 8.3 3.5 14.4 8.2 15.3 8.3 1.7 16.7 3.6 25.1 3.4 7.9-.2 15.8-1 23.7-1.9-.2 1.6-.5 3.1-.6 4.7-1.7 16-2.2 32 1.9 47.9 1.2 4.5 5.8 8.3 14.8 7.9 8.3-.3 14.4-3.5 15.3-8.2 1.7-8.3 3.6-16.7 3.4-25.1-.2-7.9-1-15.9-1.9-23.8 18.9 3.7 38 .2 56.9 2.1z'/></svg>`,

    'chat': `<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44.933 44.934'><path transform='translate(5 5) scale(0.80)' d='M43.36 1.305C42.56.467 41.435 0 40.28 0H4.757C2.408 0 .4 1.884.4 4.232v17.813c0 2.348 2.01 4.167 4.358 4.167h1.75v2.167H4.77c-.755 0-1.48.315-1.945.916-.46.6-.62 1.372-.427 2.103l3.12 11.753c.282 1.07 1.253 1.78 2.36 1.78h.012c1.104 0 2.077-.723 2.367-1.784l1.677-6.1h1.873c1.354 0 2.36-1.07 2.36-2.423V26.38l22.954 1.15c.07.003.167.005.237.005 1.06 0 2.088-.394 2.873-1.104.832-.754 1.346-1.83 1.398-2.953l.9-19.038c.057-1.16-.368-2.297-1.17-3.135zM40.73 23.34c-.017.357-.177.7-.44.938-.25.227-.556.336-.98.35l-23.38-1.174-.122-.004c-.63 0-1.207.24-1.667.678-.484.46-.736 1.11-.736 1.777v8.19H11.59c-1.102 0-2.075.782-2.368 1.847l-1.324 4.854-2.503-9.456c.006 0 .012.005.018.005l6.278-.303c.314-.015.582-.25.622-.573.047-.362-.208-.69-.568-.737L9.34 29.42l.127-3.566c0-1.354-1.163-2.4-2.517-2.4H4.758c-.746 0-1.4-.66-1.4-1.407V4.232c0-.747.654-1.276 1.4-1.276h35.52c.37 0 .728.114.98.38s.39.61.373.98l-.898 19.024z'/><path transform='translate(5 5) scale(0.80)' d='M19.39 4.927H6.798c-.534 0-.968.45-.968.985 0 .536.434.986.968.986H19.39c.535 0 .97-.45.97-.986-.002-.535-.435-.985-.97-.985zM31.492 4.927h-8.415c-.536 0-.97.45-.97.985 0 .536.434.986.97.986h8.415c.535 0 .97-.45.97-.986-.002-.535-.435-.985-.97-.985z'/></svg>`,

    'addChat': `<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 485.726 485.726'><path transform='translate(50 50) scale(0.80)' d='M153.893 432.143c-36.3-15.4-61.8-38.4-66.7-29.3-1.9 3.9 1.8 12.1 10.4 23.4 4.8 5.1 10.7 11.1 18.1 17.2 3.9 2.8 8 5.6 12.4 8.6 2.2 1.4 4.5 3 6.9 4.4 2.5 1.2 5 2.5 7.6 3.8 18.4 9.8 38.6 15.9 59 20.6 10.3 1.6 20.7 3.8 31.2 4.1l7.9.5c2.6.2 5.3.4 7.9.2l15.8-.5c21-1.7 42.1-5.2 61.9-12.5 10.2-3 19.6-7.9 29.3-12.3 4.8-2.2 9.2-5.2 13.8-7.8 4.5-2.8 9.2-5.2 13.5-8.6l10.6-7.9 5.3-4 4.4-4 8.8-8 2.2-2 1.1-1 .5-.5.7-.6.1-.1.1-.1.3-.3 4.3-4.7c5.6-6.4 11.6-12.4 16.4-19.5 5-6.9 10.2-13.6 14.2-21.1 17.4-29.1 28.4-62 32.2-95.5 3.8-33.5.8-67.9-9.6-99.9l-4.3-11.9c-1.5-3.9-2.7-8-4.7-11.7l-5.4-11.4-2.7-5.7c-1-1.8-2.1-3.6-3.2-5.4l-6.5-10.8c-1.1-1.8-2.1-3.6-3.4-5.3l-3.9-5.2c-5.2-6.8-10.3-14.2-15.8-19.5-18.4-23.2-42-43.6-68.8-58.4-26.9-15.1-57-24.6-87.8-28s-62.5-.8-92.5 7.9l-22.2 7.6c-7.2 3.1-14.3 6.5-21.4 9.7-6.9 3.8-13.6 7.8-20.3 11.8-6.7 4.4-13.2 9.5-19.7 14.3l-2.4 1.8-2 1.8-4 3.6-8 7.2-2 1.8-1 .9-1 .9-.2.3-.6.8-3.9 4.3-7.9 8.7-3.9 4.4c-1.2 1.5-2.3 3.1-3.5 4.7l-7 9.5c-4.9 6.2-8.5 13.2-12.6 19.9-15.5 27.3-25.6 57.6-29.7 88.6s-2.3 62.8 5.3 93.1c1 3.8 1.7 7.7 3 11.3l3.8 11.1c1.3 3.7 2.4 7.4 4 11l4.9 10.7c1.7 3.5 3.2 7.2 5 10.6l5.9 10.2 5.9 10.1 7.1 9.9c6.9 10.4 20.2 19 25.4 21.3 10.4 4.1 4.5-8.1-5.9-25-16.3-28.7-28.4-61.9-33.4-97.5-.9-4.4-.8-9-1.3-13.5l-.6-6.8-.3-3.4v-3.4c0-4.5 0-9.1.1-13.7v-3.4l.3-3.4.6-6.9c.4-9.2 2.4-18.3 3.9-27.4.7-4.6 2.3-9 3.4-13.5 1.3-4.5 2.2-9 4-13.3 6.8-21.4 17.9-41.1 31.2-58.9 3.5-4.3 6.5-9.1 10.5-13l5.7-6.1 2.8-3 1.4-1.5.7-.8.4-.4.1-.1 13.1-11.5 3.6-2.9c1.1-1 2.2-1.6 3.3-2.4l6.6-4.6 6.5-4.6c2.2-1.5 4.8-2.8 7.1-4.1l7.2-4.1c2.4-1.4 4.8-2.8 7.3-3.8l15.1-6.7c5.2-1.8 10.5-3.5 15.7-5.3 21.1-6.2 43.1-9.3 65.1-9 22 .4 43.8 4.6 64.5 11.6l7.7 2.8 3.9 1.4 3.7 1.7 14.9 7 14.1 8.4c1.2.7 2.4 1.4 3.5 2.1l3.3 2.4 6.6 4.9 6.6 4.8 6.1 5.5 6.1 5.5 3.1 2.7.3.2.6.6 1.5 1.7 12.1 13.3c3.5 4.3 6.3 8.5 9.5 12.7 12.3 17.5 22.6 37.6 29.4 58.6 5.7 21.1 8 43 7.3 64.7-2 69.2-41.1 135.2-100 170.4l-11 6.6-11.6 5.4-5.8 2.8c-2 .8-4 1.5-6 2.2l-12.1 4.3c-16.5 4.6-33.3 8.5-50.5 9.1-8.6.9-17.2.3-25.8.1-4.3.1-8.5-.9-12.8-1.3-4.2-.6-8.6-.8-12.8-1.8-8.4-2-17-3.3-25.1-6.3-4.1-1.4-8.3-2.5-12.3-4l-11.8-5.2z'/><path transform='translate(50 50) scale(0.80)' d='M259.493 174.743c-4.9-1-9 .3-12.1 2.2-10.3 6.4-14.8 14.1-16 21.9-1.4 8.9-3.1 17.9-4.1 26.9h-.2c-14.9-1.7-29.9-2.2-44.7 1.9-4.2 1.2-7.7 5.8-7.4 14.8.3 8.3 3.3 14.4 7.6 15.3 7.8 1.7 15.6 3.6 23.5 3.4 6.9-.2 13.8-.9 20.7-1.7-.2 1.1-.3 2.2-.5 3.3-1.7 14.9-2.2 29.9 1.9 44.7 1.2 4.2 5.8 7.7 14.8 7.4 8.3-.3 14.4-3.3 15.3-7.6 1.7-7.8 3.6-15.6 3.4-23.5-.2-6.9-.9-13.9-1.7-20.8 17.2 3.3 34.7 0 52 1.8 1 .1 2.6-3.4 3.1-5.8 1-4.9-.3-9-2.2-12.1-6.4-10.3-14.1-14.8-21.9-16-9-1.4-17.9-3.1-26.9-4.1 2.4-16.2-.4-32.6 1.3-48.9 0-1.1-3.4-2.6-5.9-3.1z'/></svg>`,

    'chatList': `<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 489 489'><path transform='translate(50 50) scale(0.80)' d='M86.3 92.6c41 2.9 81.9 7.3 123.1 4 5.1.4 10.2.8 15.3 1.1 32.3 1.7 64.7 2.2 96.8-1.9 2.1-.3 4.2-.8 6.1-1.4 0 2.7.1 5.6 1.1 8.6 3.3 12.2 10.1 23.7 19.6 32.7 9.6 9 21.6 15.4 35 17.6l4.4.6 2.2.3 1.6.1 3.1.1h2.4l2-.1c5.3-.2 10.6-1 15.6-2.4 10.2-2.8 19.7-7.8 27.7-14.4 16.1-13.3 25.7-33.3 26.2-53.9-.6.6-1.3 1-1.9 1.6.6-.7 1.3-1.2 1.9-1.6 2-8.5 2.1-18.4.1-27.8s-6.2-18.5-12.1-26.4S443 14.7 434.3 9.7c-2.2-1.2-4.5-2.3-6.7-3.4-2.3-1-4.7-1.8-7.1-2.7-2.4-.7-4.9-1.4-7.3-2-2.6-.6-5.6-.9-8.3-1.3l-1.1-.1h-.7l-1.4-.1-2.8-.1h-2.5l-1.9.1-3.8.2c-5 .4-10 1.3-14.9 2.7-9.7 2.7-18.9 7.4-26.8 13.5-8 6.1-14.7 13.7-19.9 22.3-1.4 2.1-2.5 4.4-3.6 6.6-1.2 2.2-2.1 4.6-3 6.9-1 2.3-1.7 4.7-2.4 7.2l-1 3.7-.4 2.4c-16.1-1.7-32.3-3.4-48.4-3.2-27.2.4-54.4 2.4-81.6 3.7-48.8-11.5-98.7-4.9-148-7.3-2.2-.1-5.6 3.4-6.7 5.8-2.1 4.9.6 9 4.8 12.1 13.8 10.2 30.5 14.7 47.5 15.9zm249.6-20.8c12.3-16.3 25.5-27 40.2-33.3 4.4-2 9.1-2.9 13.7-3.3 1.2 0 2.3-.3 3.5-.1l2.7.1c3 .3 6.7.7 7.9 1.3.9.2 1.8.4 2.9.9 1.1.4 2.2.7 3.2 1.2l3 1.4 2.9 1.7c3.8 2.4 7.1 5.2 10 8.5 5.6 6.6 9.4 14.6 10.5 23 .2 1 .3 2.1.3 3.2l.1 1.6.1.8v.1l-.2 4.7c-.1 1.1-.3 1.7-.3 2.6-.5 3.7-1.7 8.3-3.3 12.3-2.4 3.6-5.4 6.7-8.7 9.5-10.3 8.7-24.3 11.7-36.9 8.7-6.3-1.4-12.3-4.2-17.5-8.4-5.3-4.1-9.7-9.4-13-15.7-1-1.7-1.8-3.5-3-5.1-.9-1.6-2.3-3.1-3.6-4.4-2.5-2.6-6.1-4.5-10.6-4.2-.9.1-1.7.3-2.5.5-.4-2.3-1.2-4.4-2.5-6.2.5-.5.8-.9 1.1-1.4zM22.4 239.3c-.6.7-1.3 1.2-1.9 1.6-2 8.5-2.1 18.4-.1 27.8 2 9.4 6.2 18.5 12.1 26.4 5.9 7.9 13.5 14.7 22.2 19.7 2.2 1.2 4.5 2.3 6.7 3.4 2.3 1 4.7 1.8 7.1 2.7 2.4.7 4.9 1.4 7.3 2 2.6.6 5.6.9 8.3 1.3l1.1.1h.7l1.4.1 2.8.1h2.5l1.9-.1 3.8-.2c5-.4 10-1.3 14.9-2.7 9.7-2.7 18.9-7.4 26.8-13.5 8-6.1 14.7-13.7 19.9-22.3 1.4-2.1 2.5-4.4 3.6-6.6 1.2-2.2 2.1-4.6 3-6.9 1-2.3 1.7-4.7 2.4-7.2l1-3.7.4-2.4c16.1 1.7 32.3 3.4 48.4 3.2 27.2-.4 54.4-2.4 81.6-3.7 48.8 11.5 98.7 4.9 148 7.3 2.2.1 5.6-3.4 6.7-5.8 2.1-4.9-.6-9-4.8-12.1-13.8-10.3-30.5-14.8-47.5-16-41-2.9-81.9-7.3-123.1-4-5.1-.4-10.2-.8-15.3-1.1-32.3-1.7-64.7-2.2-96.8 1.9-2.1.3-4.2.8-6.1 1.4 0-2.7-.1-5.6-1.1-8.6-3.3-12.2-10.1-23.7-19.6-32.7-9.6-9-21.6-15.4-35-17.6l-4.4-.6-2.2-.3-1.6-.1-3.1-.1H92l-2 .1c-5.3.2-10.6 1-15.6 2.4-10.2 2.8-19.7 7.8-27.7 14.4-16.1 13.3-25.7 33.3-26.2 53.9.7-.5 1.3-1 1.9-1.5zm29.8 6.1l.2-4.7c.1-1.1.3-1.7.3-2.6.5-3.7 1.7-8.3 3.3-12.3 2.4-3.6 5.4-6.7 8.7-9.5 10.3-8.7 24.3-11.7 36.9-8.7 6.3 1.4 12.3 4.2 17.5 8.4 5.3 4.1 9.7 9.4 13 15.7 1 1.7 1.8 3.5 3 5.1.9 1.6 2.3 3.1 3.6 4.4 2.5 2.6 6.1 4.5 10.6 4.2.9-.1 1.7-.3 2.5-.5.4 2.3 1.2 4.4 2.5 6.2-.3.4-.7.9-1 1.3-12.3 16.3-25.5 27-40.2 33.3-4.4 2-9.1 2.9-13.7 3.3-1.2 0-2.3.3-3.5.1l-2.7-.1c-3-.3-6.7-.7-7.9-1.3-.9-.2-1.8-.4-2.9-.9-1.1-.4-2.2-.7-3.2-1.2l-3-1.4-2.9-1.7c-3.8-2.4-7.1-5.2-10-8.5-5.6-6.7-9.4-14.6-10.5-23-.2-1-.3-2.1-.3-3.2l-.1-1.6-.1-.8h-.1zM38.8 411.2c13.8 10.3 30.5 14.8 47.5 16 41 2.9 81.9 7.3 123.1 4 5.1.4 10.2.8 15.3 1.1 32.3 1.7 64.7 2.2 96.8-1.9 2.1-.3 4.2-.8 6.1-1.4 0 2.7.1 5.6 1.1 8.6 3.3 12.2 10.1 23.7 19.6 32.7 9.6 9 21.6 15.4 35 17.6l4.4.6 2.2.3 1.6.1 3.1.1h2.4l2-.1c5.3-.2 10.6-1 15.6-2.4 10.2-2.8 19.7-7.8 27.7-14.4 16.1-13.3 25.7-33.3 26.2-53.9-.6.6-1.3 1-1.9 1.6.6-.7 1.3-1.2 1.9-1.6 2-8.5 2.1-18.4.1-27.8-2-9.4-6.2-18.5-12.1-26.4-5.9-7.9-13.5-14.7-22.2-19.7-2.2-1.2-4.5-2.3-6.7-3.4-2.3-1-4.7-1.8-7.1-2.7-2.4-.7-4.9-1.4-7.3-2-2.6-.6-5.6-.9-8.3-1.3l-1.1-.1h-.7l-1.4-.1-2.8-.1h-2.5l-1.9.1-3.8.2c-5 .4-10 1.3-14.9 2.7-9.7 2.7-18.9 7.4-26.8 13.5-8 6.1-14.7 13.7-19.9 22.3-1.4 2.1-2.5 4.4-3.6 6.6-1.2 2.2-2.1 4.6-3 6.9-1 2.3-1.7 4.7-2.4 7.2l-1 3.7-.4 2.4c-16.1-1.7-32.3-3.4-48.4-3.2-27.2.4-54.4 2.4-81.6 3.7-48.8-11.5-98.7-4.9-148-7.3-2.2-.1-5.6 3.4-6.7 5.8-2.2 4.7.6 8.8 4.8 12zm297.1-4.8c12.3-16.3 25.5-27 40.2-33.3 4.4-2 9.1-2.9 13.7-3.3 1.2 0 2.3-.3 3.5-.1l2.7.1c3 .3 6.7.7 7.9 1.3.9.2 1.8.4 2.9.9 1.1.4 2.2.7 3.2 1.2l3 1.4 2.9 1.7c3.8 2.4 7.1 5.2 10 8.5 5.6 6.6 9.4 14.6 10.5 23 .2 1 .3 2.1.3 3.2l.1 1.6.1.8v.1l-.2 4.7c-.1 1.1-.3 1.7-.3 2.6-.5 3.7-1.7 8.3-3.3 12.3-2.4 3.6-5.4 6.7-8.7 9.5-10.3 8.7-24.3 11.7-36.9 8.7-6.3-1.4-12.3-4.2-17.5-8.4-5.3-4.1-9.7-9.4-13-15.7-1-1.7-1.8-3.5-3-5.1-.9-1.6-2.3-3.1-3.6-4.4-2.5-2.6-6.1-4.5-10.6-4.2-.9.1-1.7.3-2.5.5-.4-2.3-1.2-4.4-2.5-6.2.5-.5.8-.9 1.1-1.4z'/></svg>`,

    'users': `<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 490.947 490.947'><path transform='translate(50 50) scale(0.80)' d='M153.373 220.015c5.3 9.1 12.1 17.8 20.4 25.1 8.2 7.3 17.9 13.2 28.2 16.8 11.7 4.3 22.9 4.5 30.4 3 7.5-2 11.6-5.2 10.8-9.8-1.4-8.6-15-13.8-30.2-21.3-13.9-6.8-23.9-18.8-30.5-33.4-6.7-14.6-10.1-31.4-12-48.5-.8-6.9-1.2-13.9-1.3-20.9-.1-3.5-.1-7 0-10.4l.2-5.1.4-5.8.8-10c.1-3.4 1.2-6.4 1.7-9.7l.9-4.8 1.5-4.5c1.1-3 1.7-6.2 3.3-8.8 5-11.4 13-20.9 23.4-27.6 10.3-6.9 23.2-10.8 36.2-12.1 11.7.7 23.6 3.3 33.8 7.8 10.3 4.5 19 10.7 25.5 18.6 6.6 7.9 11 17.6 14 28.2.8 5.4 2.4 9.3 2.8 16.9l1 10.2c.2 2.5.4 5.8.5 8.8.7 24.8-2.1 50.6-11.3 71.5-2.3 5.2-5 10-8.1 14.4-3.1 4.3-6.6 8-10.5 11.3-7.8 6.1-17.3 10.4-27.6 11.7-.8.1-1.7.4-2.7.9s-1.8 1.2-3.3 1.9c-2.7 1.3-5.2 2.9-6.3 4.2-4.5 5 2 9.2 11.2 11.3 7.6 1.8 16.2 1.8 25 .2 8.9-1.6 17.9-5.7 26-11.5 16.4-11.8 27.7-30.9 33.8-50.3 7.4-23.6 9.9-47.6 9.5-71.9 0-2.9-.3-6.6-.5-9.2l-.6-8.5c0-5.2-1.7-12.6-2.9-19.1-.5-3.4-1.7-6.5-2.7-9.7-1.1-3.2-2-6.3-3.3-9.5-3.1-6.1-5.7-12.4-10-18-7.8-11.5-18.5-21.5-30.7-28.2-12.1-6.8-25.3-11.1-38.5-12.9-6.6-1-13.3-1.4-19.8-1.3-7 .1-13.5.9-20.1 2.2-13.1 2.6-26.2 7.5-37.8 15.2-11.8 7-22.7 16.5-30.4 28.2-12.6 18.3-17.9 39.5-19.5 59.4l-.4 3.8-.2 1.9c-.1 1 .1-1.3.1-1.1v.4l-.1.5-.1 1.1c-.2 2.6-.4 5-.5 7.5-.2 4.9-.3 9.7-.3 14.5.1 9.7.8 19.3 2.2 29 2.7 19.4 8 39.1 18.6 57.4zM456.073 382.915c-.2-5.7-.7-11.7-1.5-17.8-1.7-12.2-5.3-25.4-13.3-37.8s-21.2-22.2-34.7-26.7l-.2-.1c-.4-.1-.9-.3-1.3-.4-22.5-5.8-44.6-15.6-65-27.7-4.9-2.8-14.2-4.6-17.8-4.1-1.7.3-2.9.9-3.5 1.9s-.6 2.3-.2 3.8c.9 3.1 3.9 7.2 8.1 11.4 17.5 18 41.6 34.3 70.9 44.5l-.9-.3c11.8 5.6 18.9 15 22.3 28.5 2.8 10.1 3 22.1 2.8 34.3-.2 6-.6 12.2-1.2 18-.3 2.9-.7 5.8-1.3 8.4-.1.4-.1.7-.2 1-.5.3-1 .5-1.4.7-2.3 1.1-4.5 2.3-6.8 3.3-4.6 2.2-9.4 4.1-14.1 6.1-9.6 3.8-19.4 7.2-29.4 10.1-19.9 5.9-40.4 10.2-61.1 13-5.1.9-10.4 1.2-15.6 1.8-5.2.7-10.4 1-15.6 1.3s-10.4.8-15.7.8l-15.3.4c-10.9-.2-22.1-.2-32.1-.9l-7.7-.4-7.8-.7c-5.2-.5-10.5-.8-15.7-1.6-6.6-1.3-13.2-2.4-19.7-4.1l-9.8-2.3-9.7-2.7c-13.4-3.8-26.6-8.1-39.4-13.4-6.4-2.6-12.7-5.4-18.8-8.3-3-1.5-6.1-3-9-4.6-.5-.3-.9-.5-1.4-.8-.2-1.5-.4-3-.6-4.6-.5-4.5-.7-9.4-.9-14.3-.3-9.6.1-19.8 1.1-28.3 1.1-8.7 3.4-16.2 6.8-21.7 3.5-5.4 7.9-9.1 14.4-11.8l-1.5.4c18.3-5.2 35.5-12.5 51.7-21.1 23.5-12.5 39.3-29 32.4-35.4-6.2-5.8-23.6-1.1-46.4 8.6-15 6.4-30.5 11.5-46.1 14.9-.2 0-.4.1-.6.2l-.6.2c-8.9 2.9-17.8 7.8-25 14.8-7.2 6.9-12.3 15.5-15.7 24-3.4 8.6-5.2 17.2-6.2 25.5-.5 4.2-.8 8.2-1 12.2l-.2 5.7-.1 2.8v3.3c.1 6.7.3 13.4 1 20.3.3 3.5.7 6.9 1.4 10.7.7 3.8 1.4 7.5 3.3 12.5l.1.2c1.2 3 3.2 5.6 6.2 7.4 2.3 1.4 4 2.4 5.9 3.4 1.9 1.1 3.7 2 5.6 3 3.7 2 7.5 3.6 11.2 5.4 7.5 3.3 15.1 6.4 22.8 9.2 15.3 5.5 30.9 10.1 46.7 13.5 7.9 1.9 15.8 3.1 23.8 4.7 8 1 15.9 2.5 24 3.2 8 .8 16 1.6 24.2 1.9l12.2.6 11.7.1c-.6-.3-1.2-.7-1.8-1 .6.3 1.2.7 1.8 1 17.5 2 35 2.2 52.7 1.7 17.6-1 35.4-2.7 53-6.2 17.6-3.4 35-7.9 52.1-13.9 8.5-3 17-6.3 25.4-10.1 4.2-1.8 8.3-3.9 12.5-6 2.1-1.1 4.1-2.1 6.2-3.3 2.2-1.2 4-2.2 6.7-3.9l.3-.2c3.3-2.1 6-5.2 7.4-9.2 3.2-8.9 3.7-14.6 4.4-20.7.6-6 .9-11.7 1.1-17.4.1-2.8.1-5.6.1-8.6l-.4-8.3z'/></svg>`,

    'fullScreen':`<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100.000000 100.000000'><g transform='translate(5.000000,95.0000000) scale(0.0900000,-0.0900000)' stroke='none'><path d='M416 968 c-9 -12 -16 -32 -16 -44 0 -50 -13 -82 -37 -93 -21 -10 -31 -7 -77 24 -29 19 -62 35 -72 35 -10 0 -38 -18 -61 -40 -48 -44 -54 -73 -24 -111 69 -90 54 -138 -44 -139 -17 0 -41 -7 -53 -16 -19 -13 -22 -24 -22 -85 l0 -70 35 -15 c19 -7 47 -14 63 -14 58 0 81 -42 49 -90 -58 -89 -59 -100 -11 -154 44 -51 80 -53 147 -6 41 27 52 31 71 22 23 -10 36 -47 36 -98 0 -43 33 -64 98 -64 73 0 91 17 101 92 5 42 11 55 32 67 24 13 29 12 78 -23 29 -20 62 -36 73 -36 24 0 108 82 108 106 0 9 -16 41 -35 70 -19 29 -35 57 -35 63 0 25 41 51 79 51 24 0 48 8 65 21 23 18 26 28 26 78 0 73 -25 101 -88 101 -29 0 -48 6 -62 20 -27 27 -26 32 15 91 19 28 35 60 35 71 0 26 -81 108 -107 108 -10 0 -43 -16 -73 -35 -30 -19 -58 -35 -62 -35 -21 0 -48 43 -48 75 0 20 -7 49 -15 65 -15 29 -18 30 -85 30 -60 0 -71 -3 -84 -22z m133 -65 c6 -21 11 -48 11 -60 0 -22 37 -55 77 -67 24 -8 90 21 112 48 19 23 34 20 65 -13 l28 -29 -37 -55 c-29 -44 -36 -62 -31 -84 12 -52 38 -74 102 -86 l59 -12 0 -45 0 -45 -58 -10 c-62 -11 -91 -35 -102 -87 -6 -24 9 -56 60 -124 7 -10 1 -22 -20 -44 -16 -16 -32 -30 -36 -30 -4 0 -31 16 -60 36 -57 38 -82 39 -129 5 -19 -14 -28 -33 -35 -77 l-10 -59 -47 -3 -47 -3 -6 48 c-9 70 -19 88 -58 106 -48 23 -55 22 -116 -18 -29 -19 -54 -35 -56 -35 -2 0 -16 11 -30 25 -26 27 -32 50 -15 60 5 3 21 25 35 49 l25 43 -19 46 c-14 32 -27 48 -43 51 -112 23 -103 17 -106 68 l-3 46 53 7 c70 10 81 17 102 63 l18 40 -27 51 c-16 28 -32 51 -37 51 -17 0 -7 30 17 55 14 14 28 25 31 25 3 0 28 -16 57 -35 60 -41 65 -41 116 -15 41 20 51 36 51 78 0 61 9 72 56 72 41 0 43 -2 53 -37z'/><path d='M420 684 c-95 -41 -144 -142 -116 -238 20 -69 67 -118 134 -140 45 -15 60 -16 104 -6 94 23 158 104 158 199 -1 144 -149 242 -280 185z m187 -76 c29 -29 37 -45 41 -87 6 -63 -2 -92 -33 -129 -52 -62 -171 -64 -228 -3 -57 60 -55 166 4 219 43 38 56 42 122 39 51 -3 62 -7 94 -39z'/></g></svg>`,

    'attach':`<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 489.725 489.725'><path transform='translate(50 50) scale(0.80)' d='M59.46 367.6c.8-1.8 1.8-3.5 2.7-5.3.8-1.8 2-3.4 3-5.1l1.6-2.5 1.6-2.1 1.6-2.1c.3-.4.4-.7.8-1.1l1.2-1.3 4.3-4.7 10.3-10.2c43.7-44.2 86.2-89.6 129.2-134.5 10.9-8.8 21.5-17.9 32.1-27.1 1.3-1.1 2.7-2.4 3.9-3.3l2.9-2.2 3-1.9 3.2-1.5c4.3-1.8 8.9-2.8 13.5-2.9 4.6-.1 9.2.7 13.4 2.2 2.1.8 4.1 1.7 6 2.9.9.6 2.1 1.2 2.5 1.7.7.7.9.5 2.5 2l1.9 1.8.2.2.5.6c.7.9 1.6 1.6 2.1 2.6 1.3 1.8 2.5 3.7 3.4 5.6 1.9 4 3 8.3 3.3 12.7.5 8.9-2.5 17.7-8.5 24.4l-.9 1-.4.5-.1.1-1.5 1.5-3.7 3.8-7.5 7.5-14.9 15.1c-19.9 20.1-39.9 40-60.3 59.5-3.6 3.5-6.7 11.5-6.7 15 0 6.9 7.4 5.3 16.4.8 29.5-15 59.8-38.8 88.1-65.4l12.8-12 1.6-1.5.4-.4.9-.9.8-.8c1.1-1.1 1.9-1.9 3.1-3.3 1.3-1.6 2.6-3.2 3.8-4.9 1.2-1.6 2.1-3.2 3.1-4.8 7.7-12.9 11-28.5 9-43.6-1-7.6-3.2-15-6.5-21.9-1.8-3.4-3.7-6.8-6-9.9-1.1-1.6-2.3-3.1-3.6-4.5l-1.9-2.2-.5-.5-.1-.1-.7-.7-.2-.2-.8-.8c-1.1-1.1-1.9-1.9-3.3-3.1-1.7-1.4-3.4-2.7-5.2-4-3.4-2.3-6.6-4.3-10.2-5.9-7.1-3.4-14.7-5.6-22.5-6.5-15.6-1.7-31.9 1.8-45.4 10.3-6.6 4-13.2 10.4-16.6 13.9l-12.5 12.4c-16.6 16.6-33 33.5-49 50.7-8.5 8-17 15.9-25.5 23.9-26.7 25.5-53.2 51.2-79.1 77.4l-4.9 4.9-.6.6-1.3 1.4-1.1 1.3-2.3 2.6-2.3 2.6-2.8 3.7c-1.7 2.5-3.8 5.1-5.2 7.5-6.1 9.5-10.2 20.2-12.8 31.1-2.7 10.9-3.4 22.2-2.3 33.2 1.1 11 3.7 21.9 8.2 31.9 5.1 11.4 12.7 20.3 19.3 24.8 6.9 4.4 12.3 4.9 14.9 1.1 2.5-3.5 2.2-8.8.6-15.1-1.6-6.3-4.1-13.9-6.9-22.5-5.1-15.6-4.3-32.7.8-47.7l2.1-5.8z'/><path transform='translate(50 50) scale(0.80)' d='M74.56 459.9c1.6 2.2 3.4 4.8 6 7.4 8.4 8.5 19.9 15.4 33.3 19.2 13.4 3.8 28.7 4.5 43.7.7 14.9-3.6 30-11.5 41.7-22.6 10.8-9.7 21.6-19.8 32.3-30.1 51.4-49.4 103.1-98.5 154.3-148.2l38.3-37.4 2.4-2.3 1.2-1.2 1.2-1.3.6-.6 4.5-4.9c2.9-2.8 6.4-7.6 9.6-12 6.4-8.8 11.1-17.6 15.3-27.2 16.2-38.1 14-83.2-5.4-119.5-2.2-4.6-4.9-8.9-7.3-13.4-2.8-4.2-5.8-8.4-8.8-12.5l-5-5.8-2.5-2.9-1.3-1.4-.6-.7-1.3-1.2-4.9-4.6-2.4-2.3c-.8-.7-1.6-1.5-2.8-2.4-3.4-2.7-6.9-5.3-10.3-7.9-3.5-2.3-6.9-4.3-10.4-6.4-3.4-2.2-7.3-3.7-10.9-5.5-3.6-1.9-7.5-3.2-11.3-4.6-15.3-5.4-31.6-8.2-47.9-8.3-32.7-.1-65.2 11.9-90.4 32.7l-9 8.2c-2.9 2.7-5 5-7.6 7.6l-14.8 15-29.2 30.5c-19.5 20.2-38.8 40.5-57.8 61-21.7 23.3-37.1 45.3-29 50 7.4 4.3 27.6-7.3 51.4-29.7 21.3-20.2 42.7-40.4 64.2-60.7l31.8-30.7 15.8-15.5 7.2-6.4c2.4-2.2 5.1-3.8 7.6-5.8 8.4-5.8 17.5-10.8 27.3-13.9 9.7-3.3 19.9-5.5 30.2-5.8 10.3-.5 20.7.3 30.7 2.9l3.8.8 3.7 1.2c2.4.9 5 1.5 7.3 2.5 4.7 2.1 9.5 4.1 14 6.8 4.8 2.4 8.3 5.4 12.4 8.1l6.7 5.8 2.8 2.4 2.7 2.9c7.5 7.4 13.3 16.2 18.3 25.4 9.7 18.6 13.8 40.2 11.8 61.3.6-1 1.2-2.1 1.7-3.1-.6 1.2-1.1 2.3-1.7 3.1-1 4.7-1.9 9.3-3.6 13.8-1.2 4.6-3.3 8.8-5 13.2-.8 2.2-2.2 4.2-3.2 6.2-1.2 2-2 4.2-3.4 6.1-2.6 3.8-5.1 7.9-7.9 11-1.5 1.7-2.4 3.2-4.2 5.1l-5.6 5.7-1.4 1.4-.7.7-.2.2-.1.1c.2-.3-.7.7.5-.5l-.4.3-2.9 2.7-5.9 5.5-23.3 22c-31 29.6-61.6 59.7-92.1 90.1-30.4 30.5-60.8 61-91.2 91.6l-11.4 11.4-4.7 4.2c-1.6 1.4-3.4 2.5-5 3.8-6.9 4.7-14.7 8.1-22.8 10.1-16.3 3.9-34 1.5-48.4-6.6-2.5-1.6-6.3-2.7-9.2-3.6l-2.4-.6c-.8-.1-1.9-.8-2.7-1-1.8-.7-3.3-1.2-4.4-1.3-4.4-.7-5.5 1.3-4.4 5.1.3 1.8 1.3 4.2 2.8 6.6z'/></svg>`,

    'send':`<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 492.013 492.013'><path transform='translate(50 50) scale(0.80)' d='M119.8 62.76l-41.4-17.5-10.3-4.4-.6-.3-.3-.1-1.8-.7-1.4-.4-2.7-.9c-3.2-.8-7.7-1.7-10.9-1.8-6.5-.3-13.1.8-19.1 3.1-5.9 2.4-11.5 5.7-16 10.2C6 58.46.4 71.06 0 84.16c.1 6.5 1.1 13.1 3.6 18.8l.9 2.2c.3.8.6 1.5.8 1.8l1.2 2.5 2.5 5 19.8 40.2c13.4 26.8 26.7 53.5 40 80.2l.2.3c2.9 5.8 8.8 10 15.7 10.5 47.3 3.4 94.4 6.4 141.5 9.1 47.2 2.7 86.8 1.3 84.1-8-2.5-8.5-35.5-17.3-83.8-22.3-43.1-4.3-86.4-8.7-129.8-13-16.3-34.4-32.8-68.9-49.7-103.1l-5.8-11.8-2.9-5.9c-.3-.6-.3-.7-.4-1l-.3-.7c-.2-.5-.5-.9-.5-1.4-.6-1.8-.4-3.5-.1-5.2.3-1.7 1.2-3.5 2.4-4.9 2.4-3.1 6.2-4.7 9.6-4.6.4 0 .3.1.6 0 .1 0 .1-.1.3-.1l1.6.5 1.6.5.8.3 2.6 1.1 12.2 5 97.8 39.8 195.7 79.2c28.6 13.5 57.3 26.7 86.2 39.7.4.2 1 .4 1.2.6l.6.4 1.2.6c.5.6 1.4.9 1.7 1.6 1.1 1.1 1.7 2.5 2.3 3.9 1 3 .6 6.6-.9 9.1-.5 1.3-1.9 2.3-2.6 3-.1 0-.1 0-.1.1 0 0 .1 0-.1.1l-.7.3-1.3.6-1.1.5-.3.1-2.8 1.1-22.2 8.8c-59.2 23.5-118.2 47.8-177.3 72.4-59 24.7-118.1 49.5-177.2 74.2l-11.1 4.6-5.5 2.3c-.9.3-.8.2-1.3.4-.3.1-.7.4-1 .3-1.2.3-2.3.2-3.4 0-1.1-.4-2.2-.8-3.3-1.6-2.1-1.6-3.5-4.2-3.5-6.3-.2-.5.1-1.2 0-1.6.1 0 0 .1-.1.1h-.1s-.1 0 0-.3l.6-1.4.6-1.4.2-.6 1-2.1 2.7-5.4c14.2-28.6 28.5-57.2 42.7-85.8 5.1-10.2 9.8-27.7 10.1-33.8.5-12.1-9.6-1-21.9 17-10.2 14.9-20.4 30.7-30.7 47.4-5.1 8.3-10.3 16.9-15.5 25.6-2.6 4.4-5.1 8.8-7.7 13.2l-3.9 6.7-1.9 3.4-1 1.7-1.1 2.4-.8 1.8-.4.9-.4 1.4c-.5 1.8-1.2 3.8-1.4 5.7-.2 1.8-.4 3.5-.5 5.3l.3 5.4c.9 7.2 4 14 8.7 19.6 4.6 5.6 11 10 18.2 12.4 7.3 2.4 15.4 2.4 22.7.3 4.1-1.2 6.2-2.1 8.8-3.1l7.6-2.9c5.1-2 10.2-3.9 15.3-5.9 10.2-4 20.4-8.1 30.6-12.1 98.3-39.4 196.6-78.9 295.1-118.4l36.9-15 4.6-1.9 2.3-.9 1.2-.5.3-.1 1.6-.7.6-.3 2.2-1.1 1.1-.6c.4-.2 1.3-.8 1.9-1.2 2.7-1.8 5.7-3.9 7.4-5.7 8.1-7.7 13.3-18.4 14.2-29.3 1-10.8-1.5-22.2-8-31.4-1.6-2.3-3.3-4.5-5.4-6.5-1.9-2.1-4.1-3.8-6.4-5.3-2.2-1.7-4.7-2.8-7.1-4.1l-1.8-.8-1.1-.5-2.3-1-36.8-15.4c-49.1-20.5-98.3-40.6-147.8-60.4-24.2-10.5-48.4-20.9-72.6-31.4l-82.7-34.6z'/></svg>`,

    'goTo':`<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 483.001 483.001'><path transform='translate(50 50) scale(0.80)' d='M122.394 479.146c29.3-14.7 59.1-38.2 87.1-64.4 54.3-51 109.2-101.2 161.7-154.5l.2-.2c7.3-7.4 7.2-19.3-.2-26.6-12.8-12.6-25.8-25.2-39-37.5-7.9-8.4-15.7-16.8-23.6-25.1-50.4-52.7-101.6-104.6-155.8-153-15.4-13.8-30.8-22.6-36.1-15.1-4.9 6.8 1.2 21.5 15.5 37.2 25.7 28.1 51.4 56.6 78.6 83.4 41.9 41.4 84.9 81.7 127.4 122.4-79.4 67-150 145.5-225.4 217.8-3.6 3.4-6.6 11.4-6.6 14.9 0 6.7 7.4 5.2 16.2.7z'/></svg>`,

    'accept': `<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 533.973 533.973'><path transform='translate(50 50) scale(0.80)' d='M477.93 52.26c-12.82-12.82-33.604-12.82-46.426 0l-266.96 266.955-62.075-62.07c-12.822-12.82-33.605-12.82-46.427 0L9.616 303.573c-12.82 12.82-12.82 33.604 0 46.426l85.29 85.29 46.425 46.425c12.822 12.82 33.612 12.82 46.427 0l46.426-46.426 290.173-290.174c12.82-12.82 12.82-33.605 0-46.426L477.93 52.26z'/></svg>`,

    'decline':`<svg class  = 'footerSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 503.021 503.021'><path transform='translate(50 50) scale(0.80)' d='M491.613 75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056 0L251.507 132.222 130.687 11.407c-15.203-15.202-39.854-15.202-55.056 0L11.4 75.643c-15.2 15.202-15.2 39.854 0 55.056l120.822 120.814-120.82 120.814c-15.203 15.202-15.203 39.854 0 55.056l64.234 64.23c15.202 15.2 39.854 15.2 55.056 0l120.815-120.815L372.33 491.612c15.2 15.202 39.853 15.202 55.055 0l64.235-64.23c15.202-15.2 15.202-39.853 0-55.055L370.793 251.514 491.613 130.7c15.202-15.21 15.202-39.855 0-55.057z'/></svg>`,

    'background_image_url':`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wgARCACWAJYDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDAv/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/9oADAMBAAIQAxAAAAHWuYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA781gAAAAAAAAWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm4AAAAAAAABl2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/EABcQAQEBAQAAAAAAAAAAAAAAABEAYHD/2gAIAQEAAQUC2RERERERERERER2X/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERYHD/2gAIAQMBAT8B2UREREREREREREREREREREREREXZf//EABkRAAIDAQAAAAAAAAAAAAAAAAABAhESYP/aAAgBAgEBPwHstyNyNyNyNyNyNyNyNyNyNyNyNyNyNyNyNyNyNy6CmUymUymUymUymUymUymUymUymUyn2f8A/8QAFBABAAAAAAAAAAAAAAAAAAAAgP/aAAgBAQAGPwI0/wD/xAAYEAADAQEAAAAAAAAAAAAAAAAAARFRYP/aAAgBAQABPyHsoIIIIIIIIIIIIIIIIII6CrSrSrSrSrSrSrSrSrSrSrSrSrSrSrSrSrSrSrez/9oADAMBAAIAAwAAABAkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC222222222222222222222222222222222222222222222222222222222222222222//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERYHD/2gAIAQMBAT8Q7JVVVVVVVFRUVFRUVFRUVFRUVFRUVFRUVbP/xAAWEQEBAQAAAAAAAAAAAAAAAABhAGD/2gAIAQIBAT8Q2TTTTTTTTTTTTTTTTTTTaAooooooooooooooooootn//xAAYEAADAQEAAAAAAAAAAAAAAAAAYZGhYP/aAAgBAQABPxDsk6J0TonROidE6J0TonROidE6J0TonROidE70ClFKKUUopRSilFKKUUopRSilFKKUUopRSil7P//Z`
};

export const css_rules = {

    'button':`{
        width:100%;
        height:100%;
        display: block;
        position: relative;
        margin: 0 auto;
        opacity:1;
        z-index:15;
    }`,

    '#wrapper':`{
        width:totalWidth; 
        height:totalHeight;
        display:block;
        position:absolute;
    }`,

    '#wrapper:before':`{
        content: '';
        position: absolute;
        display:block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: url(${icons.background_image_url}) no-repeat center center fixed;
        background-size: cover;
        ${css_prefix}filter: blur(40px);
    }`,

    '#wrapper:after':`{
        content: '';
        position: absolute;
        display:block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: rgba(0, 0, 0, 0.25);
    }`,


    '#side_bar':`{
        width:side_bar_width; 
        height:side_bar_height; 
        display:block;
        position:absolute; ;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.5);
        top:1.25%; 
        left:1.25%; 
        border-radius: 30px 30px 30px 30px;
    }`,

    '#carousel': `{
        width: carouselWidth;
        height: carouselHeight;
        margin-top:marginHeight;
        margin-left: marginWidth;
        top: 51.25%;
        left: 51.25%;
        display: block;
        position: absolute;
        overflow: hidden;
        perspective: 16000px;
        border-radius:30px;
    }`,

    '#cube': `{
        width:carouselWidth;
        height:carouselHeight;
        top:0;
        left:0;
        display: block;
        position: relative;
        transform-style: preserve-3d;
        ${css_prefix}transform: _Yangle_;
    }`,

    '.face':`{
        width:carouselWidth;
        height:carouselHeight;
        display: block;
        position: absolute;
        backface-visibility: hidden;
    }`,

    '#face1':`{ transform: rotateY(0deg) translate3d(0, 0, z_value);}`,

    '#face2':`{transform: rotateY(90deg) translate3d(0, 0, z_value);}`,

    '#face3':`{transform: rotateY(180deg) translate3d(0, 0, z_value);}`,

    '#face4':`{transform: rotateY(270deg) translate3d(0, 0, z_value);}`,

    'body': '{ margin: 0 auto; background: rgba(0, 0, 0, 0.5);}',

    '.pane':  `{
        width: carouselWidth;
        height: carouselHeight; 
        display: block;
        position: absolute;
        ${css_prefix}backface-visibility: hidden;
        overflow: hidden;
        color: #333;
    }`,

    '.registration_pane_wrapper':  `{
        width: totalWidth;
        height: totalHeight; 
        display: block;
        position: absolute;
        ${css_prefix}backface-visibility: hidden;
        overflow: hidden;
        color: #333;
    }`,

    '.content':`{
        width: carouselWidth;
        height: calc(( carouselHeight - footerHeight - headerHeight) * 0.99);
        top: calc(headerHeight * 1.05);
        overflow-y:scroll;
        overflow-x:hidden;
        left:0;
        display: none;
        position: absolute;-
        ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.5);
    }`,

    '.chat':`{
        opacity:1;
        width:100%;
        position: absolute; 
        display:block;
    }`,
    
    '.chat::before':`{content:'chat'}`,

    '.addChat::before':`{content:'addchat'}`,

    '.search::before':`{content:'search'}`,

    '.chatList::before':`{content:'chat list'}`,

    '.users::before':`{content:'users';}`,

    '.preference::before':`{content:'prefernece';}`,
    
    '.addChat':`{   
        opacity:1;
        width:100%;
        position: absolute; 
        display: block;
    }`,

    '.search':`{
        opacity:0;
        width:100%;
        position: absolute;
        display: block;
    }`,

    '.chatList':`{
        opacity:0;
        width:100%;
        position: absolute;
        display:block;
    }`,

    '.users':`{
        opacity:0;
        width:100%;
        position: absolute;
        display:block;
    }`,

    '.preference':`{
        opacity:0;
        width:100%;
        position: absolute;
        display:block;
    }`,

    '.header':`{
        width: carouselWidth;
        height: headerHeight;
        top:1.5%;
        display: block;
        position: relative;
        z-index: 1600;
        text-align:center;
    }`,

    '.header_bg_right':`{
        height:calc(headerHeight*0.875);
        width:calc(headerHeight*0.5);
        display:block;
        right:1.5%;
        position:absolute;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 0% 500% 500% 0%;
    }`,

    '.header_bg_center':`{
        height:calc(headerHeight * 0.875);
        width:calc(carouselWidth - (headerHeight + 3%));
        display:block;
        position:absolute;
        left:calc(1.5% + headerHeight*0.5);
        background: rgba(0, 0, 0, 0.5);
    }`,

    '.header_bg_left':`{
        height:calc(headerHeight*0.875);
        width:calc(headerHeight*0.5);
        display:block;
        left:1.5%;
        position:absolute;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 500% 0% 0% 500%;
    }`,

    '.header_wrapper':`{
        width:carouselWidth;
        height:headerHeight;
        display:block;
        position:absolute;
        text-align:center; 
    }`,

    '.header_button':`{
        width:calc(0.8*headerHeight);
        height:calc(0.8*headerHeight);
        line-height:calc(0.8*headerHeight);
        display:block;
        position:absolute;
        border-radius:100%;
    }`,

    '.header_button_right':`{right:0;}`,

    '.header_button_left':`{left:0;}`,

    //'.header_after':`{content:'';position:absolute;z-index:-1; ${css_prefix}box-shadow:0 0 20px rgba(0,0,0,0.8);top:50%; bottom:0;left:10px;right:10px;left:auto;${css_prefix}transform:skew(8deg) rotate(3deg);}`,
    
    
    '.title_wrapper': `{
        width:calc(carouselWidth *0.97 - (2.1* headerHeight)); 
        height: calc(0.8*headerHeight);
        line-height: calc(0.8*headerHeight); 
        display:block; 
        position:absolute;
        left:calc(headerHeight);
        border-radius: calc(carouselWidth*0.25);
    }`,

    '.footer_bg_right':`{
        height:calc(footerHeight*0.95);
        width:calc(footerHeight*0.35);
        display:block;
        right:0;
        position:absolute;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 0% 50% 50% 0%;
    }`,

    '.footer_bg_center':`{
        height:calc(footerHeight * 0.95);
        width:calc(carouselWidth *0.97 - footerHeight*0.7);
        display:block;
        position:absolute;
        left:calc(footerHeight*0.35);
        background: rgba(0, 0, 0, 0.5);
    }`,

    '.footer_bg_left':`{
        height:calc(footerHeight*0.95);
        width:calc(footerHeight*0.35);
        display:block;
        left:0;
        position:absolute;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50% 0% 0% 50%;
    }`,

    '.header_border_left':`{
        width:calc(0.90*headerHeight); 
        height:calc(0.90*headerHeight); 
        left:calc(0.45*headerHeight);
        display:inline-block;
        position:relative;
        background: rgba(0, 0, 0, 0.1); 
        top:10%;border-radius:100%;
    }`,

    '.header_border_right':`{
        width:calc(0.90*headerHeight); 
        height:calc(0.90*headerHeight); 
        right:calc(0.45*headerHeight);
        display:inline-block;
        position:relative; 
        background: rgba(0, 0, 0, 0.1); 
        top:10%; border-radius:100%;
    }`,

    '.title':`{
        width: 100%; 
        height: 100%;
        position: absolute;
        display: block;
        text-align: center;
        font-size:calc(chattitleFontSize * 1.33);
        font-weight: bold;
        font-stretch: ultra-expanded;
        background-color: navy;
        color: transparent;
        text-shadow: 2px 2px 3px rgba(255,255,255,0.25);
        ${css_prefix}background-clip: text;
    }`,

    '.footer_wrapper':` {
        width: 115%;
        left:-7.5%;
        height:calc(0.5*footerHeight);
        line-height:calc(0.5*footerHeight);
        display:block;
        position:absolute;
        text-align:center;
    }`,

    '.send_left_wrapper':`{
        height: calc( 0.4 * footerHeight);
        width: calc( 0.4 * footerHeight);
        position: absolute;
        display:inline-block;
        border-radius:25%;
        border-radius:100%;
        left:0;
    }`,

    '.send_right_wrapper':`{
        height: calc( 0.4 * footerHeight);
        width: calc( 0.4 * footerHeight);
        position: absolute;
        display:inline-block;
        border-radius:25%;
        border-radius:100%;
        right:0;
    }`,
    
    '.footer_buttons_wrapper':`{
        height:calc(0.35*footerHeight);
        width:calc(carouselWidth *0.97 - footerHeight*0.7);
        text-align:center;
        display:block;
        position:absolute;
        top: calc(0.525*footerHeight);
    }`,

    '.footerButton':`{;
        width: calc(carouselWidth/8);
        height:calc(0.30*footerHeight);
        position: absolute;
        display: block;
        z-index:5;
    }`,

 /**
  * How to get all the footer buttons lined up nicely and equaly without using display:inline-block and text-align: center
  * 
  * The parent div length is `carouselWidth. `There are 6 buttons. Each button width is: carouselWidth/8 . 
  * To find all the margins: carouselWidth - 6 * carouselWidth/8 ==> 0.25 * carouselWidth . 
  * because there are 6 buttons there are 7 empty areas ( one also on the right side),
  * the general formula for each button margin is: 
  * 
  * (buttonNumber * 0.25/((howManyButtons + 1) * 2) * carouselWidth) + (buttonNumber-1)(carouselWidth/8)
  * 
  * So the first button is: left:calc( 0.25/14 * carouselWidth) 
  * The second is: left:calc((2 * 0.25/14 * carouselWidth) + (carouselWidth/8)) .... and so on.
  * 
  */

    '.footerButton1':`{ left:calc( 0.25/14 * carouselWidth) }`,  // to find all the margins: carouselWidth - 6 * carouselWidth/8 ==> carouselWidth 

    '.footerButton2':`{ left:calc((2 * 0.25/14 * carouselWidth) + (carouselWidth/8)) }`,

    '.footerButton3':`{ left:calc((3 * 0.25/14 * carouselWidth) + (2 * carouselWidth/8)); }`,

    '.footerButton4':`{ left:calc((4 * 0.25/14 * carouselWidth) + (3 * carouselWidth/8)); }`,

    '.footerButton5':`{ left:calc((5 * 0.25/14 * carouselWidth) + (4* carouselWidth/8)); }`,

    '.footerButton6':`{ left:calc((6 * 0.25/14 * carouselWidth) + (5 * carouselWidth/8)); }`,

    '.footerTextWrapper':`{
        width: calc(carouselWidth*0.825);
        margin-left:calc(0.825*carouselWidth/-2); 
        height: calc(0.4*footerHeight);
        line-height: calc(0.4*footerHeight);
        left:50%;
        top:15%; 
        display:block; 
        position:absolute;
        border-radius: calc(carouselWidth*0.25);
        background:rgba(0, 0, 0, 0.25);
    }`,
    
    '.footer':`{
        width: calc(carouselWidth*0.97);
        height: footerHeight;
        line-height: footerHeight;
        left:1.5%;
        bottom:0;
        display: block;
        position: absolute; 
        font-size:1rem; 
        color:white;
    }`,

    '.main_text_input':`{
        width: calc(100% - (0.9* footerHeight));
        height: calc( 0.3 * footerHeight); 
        left:calc(0.45 * footerHeight);
        top: calc(0.025 *footerHeight);
        background: none;
        line-height: calc( 0.3 * footerHeight);
        border: none;
        outline: none !important;
        position: absolute;
        resize: none; 
        overflow: scroll; 
        font-weight: 300;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none; 
        font-size: calc( 0.3 * footerHeight);
        color: black;
        z-index:20000;
    }`,

    '.reg_text_input':`{
        width:calc(registrationMessageWidth * 0.7);
        height: calc( 0.3 * footerHeight); 
        left:calc((100% - (registrationMessageWidth *0.7))/2);
        top: calc(0.025 *footerHeight);
        background: none;
        line-height: calc( 0.3 * footerHeight);
        border: none;
        outline: none !important;
        position: absolute;
        resize: none; 
        overflow: scroll; 
        font-weight: 300;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none; 
        font-size: calc( 0.2 * footerHeight);
        color: white;
        z-index:20000;
    }`,

    '*:focus':`{outline: none;}`,

    '.content::-webkit-scrollbar':`{width: 0 !important;}`,

    '*': `{font-family: Helvetica , Helvetica Neue, San Francisco, Roboto , Sans-Serif;margin: 0 auto;}`,

    '::-webkit-scrollbar':`{display: none;}`,

    '.sendButton': `{
        height: calc( 0.5 * footerHeight);
        width: calc( 0.5 * footerHeight);
        position: absolute;
        display:block;
        right: 0;
        top: 0;
        border-radius:25%;
    }`,

    '.activeButton':`{
        fill: rgba(0, 0, 0, 0.5);
    }`,

    '.activeButtonWrapper':`{
        background-color:white;
    }`,

    'svg':`{ 
        fill: white;
     }`,

    '.showPane':`{ animation: showPaneAnimation 0.5s linear both;}`,
    
    '.hidePane':`{ animation: hidePaneAnimation 0.5s linear both;}`,

    '.showNewMessage':`{animation: showDiv 0.5s linear both;}`,

    '.toggleElement':`{ animation: showDiv 0.5s linear both infinite alternate paused;}`,

    '.footerSVG':`{
        width:80%; 
        height:80%; 
        left:10%;
        top:10%;
        position:absolute; 
        display:block; 
        border-radius:100%;
    }`,
//width: calc(0.825*carouselWidth/7);
    '.footer_svg_wrapper':`{
        width:calc(0.35*footerHeight); 
        height:calc(0.35*footerHeight);
        left:calc((0.825 * carouselWidth / 7 - (0.35*footerHeight))/2);
        top:calc((footerHeight * 0.35 - (0.35*footerHeight))/2);
        position:absolute; 
        display:block;
        border-radius:100%;
    }`,

    '.swipe': `{ animation: spin 0.5s linear both;}`,

    [`@${css_prefix}keyframes showDiv`]:`{
        0% {
            opacity: 0; 
            scale: 0.8; 
        }
        
        100% {
            opacity: 1; 
            scale:1;
        }
    }`,

    '.registration_pane':`{
        height:calc(totalHeight);
        width:calc(totalWidth);
        display:block;
        position:absolute;
        background: rgba(0, 0, 0, 0.5);
    }`,

    '.registration_pane_message':`{
        height:calc(carouselHeight * 0.9);
        width:registrationMessageWidth;
        display:block;
        top:calc(carouselHeight * 0.05);
        left:calc((100% - registrationMessageWidth)/2);
        position:absolute;
    }`,

    '.registrationTextWrapper':`{
        width: calc(registrationMessageWidth * 0.8);
        height: calc(0.075*totalHeight);
        left: calc((100% - (registrationMessageWidth *0.8))/2);
        top: calc(carouselHeight * 0.6);
        line-height: calc(0.075*totalHeight);
        display:block; 
        position:absolute;
        border-radius: calc(carouselWidth*0.25);
        background:rgba(0, 0, 0, 0.25);
        text-align:center;
    }`,

    '.registration_info':`{
        text-align:center;
        width:80%;
        height:30%;
        top:25%;
        display:block;
        position: relative;
        color:white;
    }`,

    '.registrationSendWrapper':`{
        width: calc(registrationMessageWidth * 0.8);
        height: calc(0.075*totalHeight);
        left: calc((100% - (registrationMessageWidth *0.8))/2);
        top: calc(carouselHeight * 0.7);
        line-height: calc(0.075*totalHeight);
        display:block; 
        position:absolute;
        border-radius: calc(carouselWidth*0.25);
        background:green;
        text-align:center;
        color:white;
    }`,

    '.reg_send':`{
        width: calc(carouselWidth * 0.8);
        height: calc(0.4*footerHeight);
        display:block;
        position:absolute;
        top: 0;
        opacity:0.01;
    }`
}

export class registrationPane {

    constructor(index){
        this.index = index;
        this.pane = document.createElement('div');
        this.pane.innerHTML =   `<div class = 'registration_pane'>
                                    <div class = 'registration_pane_message'>
                                        <div class = 'registration_info'>
                                            <div class = 'welcome'>
                                                <h1 style = 'padding-bottom:5px'>CAROUSEL</h1>
                                                <h3>Forums for the future</h3>
                                            </div>    
                                        </div>
                                        <div class = 'registrationTextWrapper'>
                                            <textarea class ='reg_text_input' placeholder = 'choose a user name... '></textarea>
                                        </div>
                                        <div class = 'registrationSendWrapper'>
                                            <div class = 'send_user_name'>Send</div>
                                            <button class = 'reg_send' name = 'send_username'></button>
                                        </div>
                                    </div>
                                </div>`;

        this.pane.classList.add('registration_pane_wrapper');
        this.keyboard = this.pane.querySelector('textarea');
    }

    index(){
        return this.index
    }

    pane(){
        return this.pane
    }

    keyboard(){
        return this.keyboard
    }
}

export const chat  = function(id, title, by, index, type){
    //console.log(id, title, by, index, type)
    let pane = document.createElement('div');
        pane.innerHTML =   `<div class = 'header'>
                                <div class = 'header_wrapper'>
                                    <div class = 'header_bg_right'></div>
                                    <div class = 'header_bg_center'><div class = 'title'>${title}</div></div>
                                    <div class = 'header_bg_left'></div>
                                </div>  
                            </div>
                            <div class = 'content'>
                            </div>
                            <div class = 'footer'>
                                <div class = 'footer_bg_left'></div>
                                <div class = 'footer_bg_center'>
                                    <div class = 'footer_wrapper'>
                                        <div class = 'footerTextWrapper'>
                                            <div class = 'send_left_wrapper'>
                                                <div class = 'send_left'>${icons.send}</div>
                                                <button name = 'send_left'></button>
                                            </div>
                                            <textarea class ='main_text_input' placeholder = 'Aa... '></textarea>
                                            <div class = 'send_right_wrapper'>
                                                <div class = 'send_right'>${icons.send}</div>
                                                <button name = 'send_right'></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class = 'footer_buttons_wrapper'>
                                        <div class = 'footerButton footerButton1'>
                                            <div class = 'footer_svg_wrapper'>${icons.search}</div>
                                            <button name = 'search'></button>
                                        </div>
                                        <div class = 'footerButton footerButton2'>
                                            <div class = 'footer_svg_wrapper'>${icons.chat}</div>
                                            <button name = 'chat'></button>
                                        </div>
                                        <div class = 'footerButton footerButton3'>
                                            <div class = 'footer_svg_wrapper'>${icons.addChat}</div>
                                            <button name = 'addChat'></button>
                                        </div>
                                        <div class = 'footerButton footerButton4'>
                                            <div class = 'footer_svg_wrapper'>${icons.chatList}</div>
                                            <button name = 'chatList'></button>
                                        </div>
                                        <div class = 'footerButton footerButton5'>
                                            <div class = 'footer_svg_wrapper'>${icons.users}</div>
                                            <button name = 'users'></button>
                                        </div>
                                        <div class = 'footerButton footerButton6'>
                                            <div class = 'footer_svg_wrapper'>${icons.fullScreen}</div>
                                            <button name = 'preference'></button>
                                        </div>
                                    </div>
                                </div>
                                <div class = 'footer_bg_right'></div>
                            </div>`;

    pane.classList.add('pane');

    let panes = {},
        panes_id = ['search','chat','users','addChat','chatList','preference'],
        content = pane.getElementsByClassName('content')[0],
        keyboard = pane.getElementsByClassName('main_text_input')[0],
        footer = pane.getElementsByClassName('footer')[0],
        activeMode = 'chat',
        lastActivePane,//  = panes['chatPane'],
        lastActiveButton;

    panes_id.forEach((element) =>{
            let array = pane.querySelectorAll('BUTTON')
            panes[element] = new create_panes(element);
            panes[element].button = register_button(element);
            panes[element].addEventListener('animationiteration', after_animation, false)
    
        return 
    });

    Object.keys(panes).map((objectKey)=>{
        //console.log(`initiating ${objectKey} button`)
    })
    

    //pane.getElementsByTagName('BUTTON')
    panes['chat'].button.parentNode.children[0].classList.add('activeButtonWrapper');
    panes['chat'].button.parentNode.children[0].children[0].classList.add('activeButton');

    togglePane(panes['chat']);

    function register_button(id){
        let temp = pane.getElementsByTagName('BUTTON'),i;
        for (i = 0; i < temp.length; i++){
            if (id == temp[i].name) return temp[i];
        }
        return 
    }

    function create_panes(id){
        let outerWrapper = document.createElement('div'),
            innerWrapper = document.createElement('div');

        outerWrapper.appendChild(innerWrapper);
        outerWrapper.classList.add(id, 'toggleElement');
        innerWrapper.classList.add('dragWrapper');
        return outerWrapper
    }

    function togglePane(element){
        if (element == lastActivePane) {
            panes[element.classList[0]].button.parentNode.children[0].children[0].classList.remove('activeButton');
            panes[element.classList[0]].button.parentNode.children[0].classList.remove('activeButtonWrapper');
            return element.style.webkitAnimationPlayState = 'running';
        } 
        lastActivePane = element;
        content.appendChild(element);
        panes[element.classList[0]].button.parentNode.children[0].children[0].classList.add('activeButton');
        panes[element.classList[0]].button.parentNode.children[0].classList.add('activeButtonWrapper');
        return element.style.webkitAnimationPlayState = 'running';
    }

    function after_animation(event){
        event.target.style.webkitAnimationPlayState = 'paused';
        if (event.target.parentNode.children.length > 1) {
            //event.target.parentNode.removeChild(event.target.parentNode.children[0])
        } 
        return 
    }

    function switchPane(target){
        if (lastActivePane.classList[0] == target) return 
        if (target == 'send' || target == 'send1') return console.log('clicked send');
        togglePane(lastActivePane)
        togglePane(panes[target])
        return afterAnimationController(target)
    }

    function afterAnimationController(element){
        //console.log('button:' , panes[element].button.name)
        switch(element){
            case 'chat'://console.log(panes[element].button.name)
                break;

            case 'addChat'://console.log(panes[element].button.name)
                break;

            case 'search'://console.log(panes[element].button.name)
                break;

            case 'chatList': //console.log(panes[element].button.name)
                break;

            case 'users'://console.log(panes[element].button.name)
                break;

            case 'preference'://console.log(panes[element].button.name)
                break
            default: return;
        }
        return 
    }

    function get_keyboard_text(type){
        console.log('text: ' , type)
    }

    return {

        pane: pane,

        index: index,

        get_keyboard_text: function(type){
            return get_keyboard_text(type);
        }, 

        switchPane: function(data){
            return switchPane(data);
        }
    }
};

export function set_style_sheet(css_rules_object){

    let screen_width = Math.floor(document.getElementById('wrapper').width / document.getElementById('dpi').offsetWidth);// returns dimensions in intches
    let screen_height = Math.floor(document.getElementById('wrapper').height / document.getElementById('dpi').offsetHeight);

    let sheet = new set_sheet();

    process_sheet();

    window.onresize = debounce(function(){
        document.head.removeChild(document.getElementsByTagName('style')[0]);
        sheet = new set_sheet();
        return process_sheet();
    },5)

    function process_sheet(){
        return Object.keys(css_rules_object).map((objectKey) =>  {
            try {
                (sheet.insertRule)? 
                sheet.insertRule (`${objectKey} ${adjust_css(css_rules_object[objectKey])}`, sheet.cssRules.length):
                sheet.addRule (`${objectKey}  ${adjust_css(css_rules_object[objectKey])}`, sheet.cssRules.length)
            } catch(err) { console.log('failed to add rule: ' , err) }
        });
    }

    function set_sheet(){
        this.sheet = document.createElement('style');
        this.sheet.appendChild(document.createTextNode(''));
        document.head.appendChild(this.sheet)
        console.log(this.sheet.sheet.cssRules)
        return this.sheet.sheet ? this.sheet.sheet : this.sheet.styleSheet;
    }

    function adjust_css(css_rule){
        
        //console.log(`screen width: ${screen_width }, height: ${screen_height}`)

        let css_values = {
            'side_bar_width': (window.innerWidth / 1.33 < window.innerHeight)? `${0}px`:`${window.innerWidth*0.33*0.99}px`,
            'side_bar_height': (window.innerWidth / 1.33 < window.innerHeight)? `${0}px`:`${window.innerHeight*0.97}px`,
            'button_space':`${(window.innerWidth - (window.innerHeight * 0.4))/6}px`,
            'z_value':(window.innerWidth / 1.33 < window.innerHeight)?`${Math.floor((window.innerWidth/2)*0.97)}px`:`${Math.floor(0.66*0.97*(window.innerWidth/2))}px`,
            '_Yangle_':`rotateY(${angle}deg)`,
            'totalWidth':`${window.innerWidth}px`,
            'totalHeight':`${window.innerHeight}px`,
            'carouselWidth': (window.innerWidth / 1.33 < window.innerHeight)?`${window.innerWidth*0.97}px`:`${window.innerWidth*0.66*0.97}px`,
            'carouselHeight': `${window.innerHeight*0.97}px`,
            'marginWidth':(window.innerWidth / 1.33 < window.innerHeight)?`${Math.floor(window.innerWidth/-2)}px`:`${Math.floor(0.32*(window.innerWidth/-2))}px`,
            'marginHeight': `${Math.floor(window.innerHeight/-2)}px`,
            'footerHeight':(window.innerWidth > window.innerHeight)?`${Math.floor(window.innerHeight*0.2)}px`:`${Math.floor(window.innerHeight*0.15)}px`,
            'cardHeight':(window.innerWidth > window.innerHeight)?`${Math.floor(Math.min(window.innerWidth*0.1,window.innerHeight*0.1))}px`:`${Math.floor(Math.max(window.innerWidth*0.1,window.innerHeight*0.1))}px`,
            'titleFontSize':(window.innerWidth > window.innerHeight)?`${Math.floor(Math.max(window.innerWidth,window.innerHeight))}px`:`${Math.floor(Math.max(window.innerWidth,window.innerHeight))}px`,
            'headerHeight':(window.innerWidth > window.innerHeight)?`${Math.floor(window.innerHeight*0.1)}px`:`${Math.floor(window.innerHeight*0.1)}px`,
            'registrationMessageWidth': (window.innerWidth / 1.33 < window.innerHeight)?
                (window.innerWidth*0.97 > 400)? `400px`:`${window.innerWidth*0.97}px`:
                (window.innerWidth*0.66*0.97 > 400)? `400px`: `${window.innerWidth*0.66*0.97}px`,
        };

        Object.keys(css_values).map((objectKey) => css_rule = css_rule.replace(new RegExp(objectKey, 'g'), css_values[objectKey]));

        return css_rule;
    }

    return {

        add_rule: (selector,raw_css_rule) => (sheet.insertRule)?sheet.insertRule(`${selector} ${adjust_css(raw_css_rule)}`, sheet.cssRules.length):sheet.addRule (`${selector} ${adjust_css(raw_css_rule)}`, sheet.cssRules.length),

        delete_rule: (selector)=> sheet.deleteRule(Object.keys(sheet.cssRules).filter((objectKey) => sheet.cssRules[Number(objectKey)].selectorText === selector || sheet.cssRules[Number(objectKey)].name === selector)[0]),

        edit_rule:(selector, property ,raw_css_rule) => sheet.cssRules[Object.keys(sheet.cssRules).filter((objectKey) => sheet.cssRules[Number(objectKey)].selectorText === selector || sheet.cssRules[Number(objectKey)].name === selector)[0]].style[property] = adjust_css(raw_css_rule)
    }
};

export function set_user_inputs(){
    let startX, startY, threshold = 100, restraint = 100, startTime, click_handler, swipe_handler;
    
    document.addEventListener('touchstart', (event) => {
        if (event.target.tagName == 'BUTTUN') return 
        event.stopImmediatePropagation();
        event.preventDefault();
        startX = event.changedTouches[0].pageX;
        startY = event.changedTouches[0].pageY;
        startTime = new Date().getTime();
        console.log(`START: target type: `, event.target.tagName, ` X:${startX} Y:${startY} at: ${startTime}`)
        return 
    }, {once: false, passive: false, capture: false});

    document.addEventListener('touchend',(event) => {
        console.log(`END: target type: `, event.target.tagName)//, ` X:${startX} Y:${startY} at: ${startTime}`)
        event.stopImmediatePropagation();
        event.preventDefault(); 

        let touchobj = event.changedTouches[0], target = event.target;
        if (event.target.tagName == 'BUTTON') return (target.name)? throttle(100,click_handler(target.name)):null
        console.log(target , touchobj)
        distX = touchobj.pageX - startX
        distY = touchobj.pageY - startY
        elapsedTime = new Date().getTime() - startTime;

        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
            swipedir = (distX < 0)? 'left' : 'right';
            if (elapsedTime > 350) return
            else return swipe_handler(swipedir)
        }
        return
    }, {once: false, passive: false, capture: false})

    document.addEventListener('click',(event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        let target = event.composedPath()[0] ;
        if (target && target.tagName === 'BUTTON'){
            console.log('click event: ' , target.name)
            return (target.name)? throttle(100,click_handler(target.name)):null//console.log('click: ',event.target)
        }
        return       
    })

    document.addEventListener('keyup',(event) => {
        event.stopImmediatePropagation();
        //event.preventDefault();
        switch(event.which) {
            case 37: return swipe_handler('left') 

            case 39: return swipe_handler('right'); 

            default: return;
        }
    })

    return { 
        set_handlers:(swipe, click) => {
            swipe_handler = swipe; 
            click_handler = click;
        }
    }
};
/*
export  function set_service_worker(){
    if ('serviceWorker' in navigator) {
        document.getElementById('cube').innerHTML = '';
        navigator.serviceWorker.register('service-worker.js').then((reg) => {
            reg.onupdatefound = () => {
                let installingWorker = reg.installing;
                return installingWorker.onstatechange = () => (installingWorker.state == 'installed')?(navigator.serviceWorker.controller)?worker = navigator.serviceWorker.controller:location.reload(false):null; 
            };
        }).catch((error) =>console.error('Error during service worker registration:', error))
    }

    return {

        message_sw:((msg)=> navigator.serviceWorker.controller.postMessage(msg)),

        emmit_msg: ()=> msg
    }
}

*/



export function set_controller(){
    let Chats = { registrator: (new registrationPane('registrator')) }, 
        call_backs = {},
        listners = {}, 
        faces, 
        chats_ids,  
        ActiveChat = 'registrator',
        cube_faces = {next: 0,previous:null}, 
        carousel = document.createElement('div'),// = document.getElementById('carousel'), 
        cube = document.createElement('div'),// = document.getElementById('cube'), 
        Animating = false;

    carousel.appendChild(cube);
    document.getElementById('wrapper').appendChild(Chats.registrator.pane);
    //navigator.serviceWorker.controller.postMessage({ type:'initiate' });

        
/*
    setTimeout(()=> {
        addChat(new chat('Carousel', 'Carousel',{ name:'Carousel', photo:'https://res.cloudinary.com/carousel/image/upload/v1497722400/carouselLogo_mm0z3g.png'}, window.performance.now()))
        addChat(new chat('test1', 'test1',{ name:'test1', photo:'https://res.cloudinary.com/carousel/image/upload/v1497722400/carouselLogo_mm0z3g.png'}, window.performance.now()))
        addChat(new chat('test2', 'test2',{ name:'test2', photo:'https://res.cloudinary.com/carousel/image/upload/v1497722400/carouselLogo_mm0z3g.png'}, window.performance.now()))
        addChat(new chat('test3', 'test3',{ name:'test3', photo:'https://res.cloudinary.com/carousel/image/upload/v1497722400/carouselLogo_mm0z3g.png'}, window.performance.now()))
        addChat(new chat('test4', 'test4',{ name:'test2', photo:'https://res.cloudinary.com/carousel/image/upload/v1497722400/carouselLogo_mm0z3g.png'}, window.performance.now()))
        addChat(new chat('test5', 'test5',{ name:'test3', photo:'https://res.cloudinary.com/carousel/image/upload/v1497722400/carouselLogo_mm0z3g.png'}, window.performance.now()))
    },1150)

    setTimeout(()=> navigator.serviceWorker.controller.postMessage({
        type:'register new user',
        data: { userName:'Ohav', type:'guest' }
    }),1000)
*/
    function create_faces(num){
        let array = [];

        while (array.length < num) {
            array.push(document.createElement('div'));
            array[array.length-1].id = `face${array.length}`;
            array[array.length-1].classList.add('face');
        }
        cube.appendChild(array[0])
        console.log(array)
        return array
    };

    function register_call_back(name, call_back){
        switch(name){
            case 'style_sheet':
                call_backs['add_rule'] = call_back.add_rule;
                call_backs['delete_rule'] = call_back.delete_rule;
                call_backs['edit_rule'] = call_back.edit_rule;
                faces = new create_faces(4)
                return

            case 'touch_input':
                listners['touch'] = call_back.set_handlers(swipe, handle_click)
                return;

            case 'service_worker': 
                break;
            default: return;
        }
        return //console.log('liseteners: ' , listners , ' call backs: ' , call_backs)
    };

    let get_Chats_id = function(direction){
        let length = Object.keys(Chats).length, keys = Object.keys(Chats).sort(),position = keys.indexOf(chats_ids.next.toString());

        return {

            next: Chats[keys[(direction == 'right')? (position +1 > length-1)?0:position + 1: (position -1 < 0)?length - 1:position -1]].index.toString(),

            previous: Chats[keys[position]].index.toString()

        }
    }, 
    
    get_cube_faces = function(direction){
        let previous_cube_face = cube_faces.next;
        
        return {
            next: (direction == 'left')? (previous_cube_face + 1 > 3)?0:previous_cube_face + 1:(previous_cube_face - 1 < 0)?3:previous_cube_face - 1, 

            previous: previous_cube_face
        }
    };

    cube.addEventListener('animationstart', (event) => {
        if (event.target !== cube) return
        Animating = true;
    }, false);

    cube.addEventListener('animationend', (event) => {
        if (event.target !== cube) return
        call_backs.delete_rule(`spin`);
        call_backs.edit_rule('#cube', 'transform', `rotateY(${angle}deg)`);
        event.target.classList.remove('swipe');
        Chats[chats_ids.previous].pane.parentNode.removeChild(Chats[chats_ids.previous].pane);
        cube.removeChild(faces[cube_faces.previous]);
        Animating = false;
    }, false);

    function rotate(from, to, callback) {
        call_backs.add_rule(`@${css_prefix}keyframes spin`,`{0%  {${css_prefix}transform: rotateY(${from}deg);} 100% {${css_prefix}transform: rotateY(${to}deg);}`)
        cube.classList.add('swipe');
        if (callback) return callback();
        return
    };

    function swipe(direction, delVariable){
        if (Animating || Object.keys(Chats).length < 2 ) return
        let from = angle;
        chats_ids = new get_Chats_id(direction);
        cube_faces = new get_cube_faces(direction);
        cube.appendChild(faces[cube_faces.next])
        faces[cube_faces.next].appendChild(Chats[chats_ids.next].pane)
        ActiveChat = chats_ids.next;
        (direction == 'left')? angle -= 90: angle += 90;
        
        return rotate(from , angle, delVariable);
    }

    function deleteChatFromArray(chatToRemove){  
        if (!Chats[chatToRemove]) return 
        let paneToDelete = Chats[chatToRemove].parent.parentNode.parentNode;
        delete Chats[chatToRemove];
        paneToDelete.parentNode.removeChild(paneToDelete);
    }

    function addChat(chat_to_add){
        Chats[chat_to_add.index] = chat_to_add;
        if (Object.keys(Chats).length == 1) {
            chats_ids = {
                next: chat_to_add.index,
                previous: null
            }
            ActiveChat = chats_ids.next;
            return faces[0].appendChild(Chats[chat_to_add.index].pane);
        }
        else return 
    }

    function handle_click(target){
        console.log('click: ' ,target , ' active chat: ' , Chats[ActiveChat].index, ' ' , String(Chats[ActiveChat].keyboard.value))
        switch(target){
            case 'send_right':
                return Chats[ActiveChat].get_keyboard_text()

            case 'send_left':
                return Chats[ActiveChat].get_keyboard_text()

            case 'send_username':
                return (!Chats[ActiveChat].keyboard.value)? null: 
                    navigator.serviceWorker.controller.postMessage({userName: String(Chats[ActiveChat].keyboard.value)});

            default: 
                return Chats[ActiveChat].switchPane(target)
        }
    }

    
    return { 
        register: (name, call_back) => register_call_back(name, call_back)
    }
};

export let angle = 0;

export function debounce(fn, time){
    let timeout; 
    return ()  => {
        const functionCall = () => fn.apply(this, arguments);       
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
};

export function throttle(delay, callback) {
    let previousCall = new Date().getTime();
    return () =>{
        const time = new Date().getTime();
        if ((time - previousCall) >= delay) {
            previousCall = time;
            callback(...arguments);
        }
    };
};

export function storageAvailable(type) {
    try {
        let storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

export class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

export function dbInit() {
    return idb.open('Carousel', 1, (upgradeDb) => {
        if (!upgradeDb.objectStoreNames.contains('Chats')) {
            console.log('upgrading db')
            let chats = upgradeDb.createObjectStore('Chats', {keyPath: 'id', autoIncrement: true});
            chats.createIndex('id', 'id', {unique: true});
        }
        if (!upgradeDb.objectStoreNames.contains('messages')) {
            let messages = upgradeDb.createObjectStore('messages', { keyPath: 'id', autoIncrement: true});
            messages.createIndex('chat_id', 'chat_id', {unique: false});
            messages.createIndex('id', 'id',  {unique: true, autoIncrement: true });
        }
        if (!upgradeDb.objectStoreNames.contains('me')) {
            let me = upgradeDb.createObjectStore('me',{ keyPath: 'id' , autoIncrement: true });
            me.createIndex('id', 'id',  {unique: true, autoIncrement: true });
        }
    })/*.then(db => console.log('db initiated: ' , db))*/.catch(err => console.log('error initiating indexedDB: ' , err))
}

