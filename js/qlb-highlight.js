Rainbow.extend('qlb', [
  {
    'matches': {
      1: "paren",
      2: 'special-form'
    },
    'pattern': /(\()(لامدا|حرفي|إفعل|حدد|عدل|إذا)/g
  },
  {
    'name': 'comment',
    'pattern': /؛.*/g
  },
  {
    'name': 'string',
    'pattern': /\"[^\"]+\"/g
  },
  {
    'matches': {
      1: "paren",
      2: "function"
    },
    'pattern': /(\()([ؤئـأابجدهوزحتيكلمنقشعرتطةسدفغخصذنمظىآإضث][١٢٣٤٥٦٧٨٩٠ؤئـأابجدهوزحتيكلمنقشعرتطةسدفغخصذنمظىآإضث\-؟]*)/g
  },
  {
    'matches': {
      1: "symbol",
    },
    'pattern': /([ؤئـأابجدهوزحتيكلمنقشعرتطةسدفغخصذنمظىآإضث][١٢٣٤٥٦٧٨٩٠ؤئـأابجدهوزحتيكلمنقشعرتطةسدفغخصذنمظىآإضث\-؟]*)/g
  },
  {
    'matches': {
      1: 'number',
    },
    'pattern': /([-١٢٣٤٥٦٧٨٩٠،]+)/g
  },
  {
    'name': 'paren',
    'pattern': /[\(\)]+/g
  },
  {
    'matches': {
      1: 'latin'
    },
    'pattern': /\s(\w+)/g
  }
], true);

