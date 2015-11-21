/*
   Language: blacklight
   Author: Anthony M. Cook <github@anthonymcook.com>
   Category: misc
   */

function blacklight(hljs) {
  var KEYWORDS = {
    keyword: 'decap depth drop dup over purge rot swap',
    built_in: 'print',
    literal: 'true nil'
  }

  return {
    aliases: ['bl'],
    lexemes: /\S+/,
    keywords: KEYWORDS,
    contains: [
      {
        className: 'string',
        variants: [
        {begin: '\'', end: '\''},
        {begin: /\\/, end: /\s/}
        ]
      },
      {
        className: 'comment',
        begin: ';;', end: '\n'
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE
      },
      {
        className: 'keyword',
        begin: '\\$new|\\$swap|\\$drop|\\$|@|\\^|nil|true'
      },
      {
        className: 'variable',
        variants: [
        {begin: '~', end: /\s/},
        {begin: ':', end: /\s/},
        {begin: /\S+:/}
        ]
      }

    ]
  }
}

/*hljs.registerLanguage('blacklight', blacklight)*/
