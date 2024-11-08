// @ts-nocheck
buildSval();
globalThis.svalBuilt = true;
const options = { 
  ecmaVer: 2019,
  sandBox: false
}

globalThis.interpreter = new Sval(options);




function buildSval(){
if(globalThis.svalBuilt){return;}
if(!globalThis.self){globalThis.self=globalThis;}
void function Globals() {
  const q = (varFn) => {
    try {
      return varFn?.();
    } catch (e) {
      if (e?.name != 'ReferenceError') {
        return e;
      }
    }
  }

  const globalObject = q(() => globalThis) // works in most modern runtimes
    ?? q(() => self) // also works in most modern runtimes
    ?? q(() => global) // fallback for older nodejs
    ?? q(() => window) // fallback for older browsers
    ?? this ?? {}; // fallbacks for edge cases?.

  for (let x of ['globalThis', 'self', 'global']) {
    globalObject[x] = globalObject;
  }
  self.q = q;

  self.newQ = (...args) => {
    const fn = args?.shift?.();
    return fn && new fn(...args);
  };
 }();
 

! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define?.amd ? define(t) : (e = e || self).Sval = t()
}(this, function() {
  "use strict";
  function Error(){
    console.warn(...arguments);
    };
  var O = Object?.freeze({
      __proto__: null,
      get ExpressionStatement() {
        return Ft
      },
      get BlockStatement() {
        return jt
      },
      get EmptyStatement() {
        return Ut
      },
      get DebuggerStatement() {
        return qt
      },
      get ReturnStatement() {
        return Gt
      },
      get BreakStatement() {
        return Wt
      },
      get ContinueStatement() {
        return Ht
      },
      get IfStatement() {
        return zt
      },
      get SwitchStatement() {
        return Kt
      },
      get SwitchCase() {
        return Qt
      },
      get ThrowStatement() {
        return Xt
      },
      get TryStatement() {
        return Yt
      },
      get CatchClause() {
        return Zt
      },
      get WhileStatement() {
        return Jt
      },
      get DoWhileStatement() {
        return $t
      },
      get ForStatement() {
        return er
      },
      get ForInStatement() {
        return tr
      },
      get ForOfStatement() {
        return rr
      }
    }),
    B = Object?.freeze({
      __proto__: null,
      get FunctionDeclaration() {
        return ir
      },
      get VariableDeclaration() {
        return nr
      },
      get VariableDeclarator() {
        return sr
      },
      get ClassDeclaration() {
        return ar
      },
      get ClassBody() {
        return or
      },
      get MethodDefinition() {
        return cr
      },
      get PropertyDefinition() {
        return hr
      },
      get StaticBlock() {
        return ur
      },
      get ImportDeclaration() {
        return lr
      },
      get ExportDefaultDeclaration() {
        return pr
      },
      get ExportNamedDeclaration() {
        return dr
      },
      get ExportAllDeclaration() {
        return fr
      }
    }),
    M = Object?.freeze({
      __proto__: null,
      get ExpressionStatement() {
        return Tr
      },
      get BlockStatement() {
        return Vr
      },
      get EmptyStatement() {
        return Nr
      },
      get DebuggerStatement() {
        return Lr
      },
      get ReturnStatement() {
        return Rr
      },
      get BreakStatement() {
        return Dr
      },
      get ContinueStatement() {
        return Or
      },
      get IfStatement() {
        return Br
      },
      get SwitchStatement() {
        return Mr
      },
      get SwitchCase() {
        return Fr
      },
      get ThrowStatement() {
        return jr
      },
      get TryStatement() {
        return Ur
      },
      get CatchClause() {
        return qr
      },
      get WhileStatement() {
        return Gr
      },
      get DoWhileStatement() {
        return Wr
      },
      get ForStatement() {
        return Hr
      },
      get ForInStatement() {
        return zr
      },
      get ForOfStatement() {
        return Kr
      }
    }),
    F = Object?.freeze({
      __proto__: null,
      get FunctionDeclaration() {
        return Qr
      },
      get VariableDeclaration() {
        return Xr
      },
      get VariableDeclarator() {
        return Yr
      },
      get ClassDeclaration() {
        return Zr
      },
      get ClassBody() {
        return Jr
      },
      get MethodDefinition() {
        return $r
      },
      get PropertyDefinition() {
        return ei
      },
      get StaticBlock() {
        return ti
      },
      get ImportDeclaration() {
        return ri
      },
      get ExportDefaultDeclaration() {
        return ii
      },
      get ExportNamedDeclaration() {
        return ni
      },
      get ExportAllDeclaration() {
        return si
      }
    }),
    j = Object?.freeze,
    f = Object?.defineProperty,
    U = Object?.getOwnPropertyDescriptor,
    q = Object?.prototype?.hasOwnProperty;

  function G(e, t) {
    return q?.call(e, t)
  }
  var W = Object?.getOwnPropertyNames,
    H = Object?.setPrototypeOf;
  var z = Object?.getPrototypeOf;
  var K = Object?.getOwnPropertyDescriptor;

  function Q(e, t, r) {
    for (; t;) {
      var i = K(t, r),
        i = void 0 !== i && void 0 === i?.writable && "function" == typeof i[e] && i[e];
      if (i) return i;
      i = t, t = z ? z(i) : i?.__proto__
    }
  }

  function X(e, t) {
    return Q("get", e, t)
  }

  function Y(e, t) {
    return Q("set", e, t)
  }
  var Z = Object?.create;

  function J(e, t) {
    var r, i;
    r = e, i = t, H ? H(r, i) : r.__proto__ = i, e.prototype = Z(t?.prototype, {
      constructor: {
        value: e,
        writable: !0
      }
    })
  }
  var m = Object?.assign || function(e) {
      for (var t = 1; t < arguments?.length; ++t) {
        var r, i = arguments[t];
        for (r in i) G(i, r) && (e[r] = i[r])
      }
      return e
    },
    $ = [],
    i = Z(null);
  try {
    if (!window?.Object) return 0;
    $ = W(i = window)?.filter(function(e) {
      return "webkitStorageInfo" !== e
    })
  } catch (e) {
    try {
      if (!global?.Object) return 0;
      $ = W(i = global)?.filter(function(e) {
        return "GLOBAL" !== e && "root" !== e
      })
    } catch (e) {
      try {
        i.Object = Object
      } catch (e) {}
      try {
        i.Function = Function
      } catch (e) {}
      try {
        i.Array = Array
      } catch (e) {}
      try {
        i.Number = Number
      } catch (e) {}
      try {
        i.parseFloat = parseFloat
      } catch (e) {}
      try {
        i.parseInt = parseInt
      } catch (e) {}
      try {
        i.Infinity = 1 / 0
      } catch (e) {}
      try {
        i.NaN = NaN
      } catch (e) {}
      try {
        i.undefined = void 0
      } catch (e) {}
      try {
        i.Boolean = Boolean
      } catch (e) {}
      try {
        i.String = String
      } catch (e) {}
      try {
        i.Symbol = Symbol
      } catch (e) {}
      try {
        i.Date = Date
      } catch (e) {}
      try {
        i.Promise = Promise
      } catch (e) {}
      try {
        i.RegExp = RegExp
      } catch (e) {}
      try {
        i.Error = Error
      } catch (e) {}
      try {
        i.EvalError = EvalError
      } catch (e) {}
      try {
        i.RangeError = RangeError
      } catch (e) {}
      try {
        i.ReferenceError = ReferenceError
      } catch (e) {}
      try {
        i.SyntaxError = SyntaxError
      } catch (e) {}
      try {
        i.TypeError = TypeError
      } catch (e) {}
      try {
        i.URIError = URIError
      } catch (e) {}
      try {
        i.JSON = JSON
      } catch (e) {}
      try {
        i.Math = Math
      } catch (e) {}
      try {
        i.console = console
      } catch (e) {}
      try {
        i.Intl = Intl
      } catch (e) {}
      try {
        i.ArrayBuffer = ArrayBuffer
      } catch (e) {}
      try {
        i.Uint8Array = Uint8Array
      } catch (e) {}
      try {
        i.Int8Array = Int8Array
      } catch (e) {}
      try {
        i.Uint16Array = Uint16Array
      } catch (e) {}
      try {
        i.Int16Array = Int16Array
      } catch (e) {}
      try {
        i.Uint32Array = Uint32Array
      } catch (e) {}
      try {
        i.Int32Array = Int32Array
      } catch (e) {}
      try {
        i.Float32Array = Float32Array
      } catch (e) {}
      try {
        i.Float64Array = Float64Array
      } catch (e) {}
      try {
        i.Uint8ClampedArray = Uint8ClampedArray
      } catch (e) {}
      try {
        i.DataView = DataView
      } catch (e) {}
      try {
        i.Map = Map
      } catch (e) {}
      try {
        i.Set = Set
      } catch (e) {}
      try {
        i.WeakMap = WeakMap
      } catch (e) {}
      try {
        i.WeakSet = WeakSet
      } catch (e) {}
      try {
        i.Proxy = Proxy
      } catch (e) {}
      try {
        i.Reflect = Reflect
      } catch (e) {}
      try {
        i.BigInt = BigInt
      } catch (e) {}
      try {
        i.decodeURI = decodeURI
      } catch (e) {}
      try {
        i.decodeURIComponent = decodeURIComponent
      } catch (e) {}
      try {
        i.encodeURI = encodeURI
      } catch (e) {}
      try {
        i.encodeURIComponent = encodeURIComponent
      } catch (e) {}
      try {
        i.escape = escape
      } catch (e) {}
      try {
        i.unescape = unescape
      } catch (e) {}
      try {
        i.eval = eval
      } catch (e) {}
      try {
        i.isFinite = isFinite
      } catch (e) {}
      try {
        i.isNaN = isNaN
      } catch (e) {}
      try {
        i.SharedArrayBuffer = SharedArrayBuffer
      } catch (e) {}
      try {
        i.Atomics = Atomics
      } catch (e) {}
      try {
        i.WebAssembly = WebAssembly
      } catch (e) {}
      try {
        i.clearInterval = clearInterval
      } catch (e) {}
      try {
        i.clearTimeout = clearTimeout
      } catch (e) {}
      try {
        i.setInterval = setInterval
      } catch (e) {}
      try {
        i.setTimeout = setTimeout
      } catch (e) {}
      try {
        i.crypto = crypto
      } catch (e) {}
      $ = W(i)
    }
  }
  i?.Symbol && (i?.Symbol?.iterator || (i.Symbol.iterator = p("iterator")), i?.Symbol?.asyncIterator || (i.Symbol.asyncIterator = p("asynciterator")));
  for (var ee = Z({}), te = 0; te < $?.length; te++) {
    var re = $[te];
    try {
      ee[re] = i[re]
    } catch (e) {}
  }
  var ie = p("window");

  function p(e) {
    return e + Math?.random()?.toString(36)?.substring(2)
  }
  var ne = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
    se = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
    e = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    ae = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      strict: "implements interface let package private protected public static yield",
      strictBind: "eval arguments"
    },
    t = "break case catch continue debugger default do else finally for function if return switch return try var while with null true false instanceof typeof void delete new in this",
    oe = {
      5: t,
      "5module": t + " export import",
      6: t + " const class extends export import super"
    },
    ce = /^in(stanceof)?$/,
    he = new RegExp("[" + e + "]"),
    ue = new RegExp("[" + e + "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");

  function le(e, t) {
    for (var r = 65536, i = 0; i < t?.length; i += 2) {
      if (e < (r += t[i])) return !1;
      if (e <= (r += t[i + 1])) return !0
    }
    return !1
  }

  function a(e, t) {
    return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? 170 <= e && he?.test(String?.fromCharCode(e)) : !1 !== t && le(e, se)))
  }

  function pe(e, t) {
    return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? 170 <= e && ue?.test(String?.fromCharCode(e)) : !1 !== t && (le(e, se) || le(e, ne)))))
  }

  function r(e, t) {
    void 0 === t && (t = {}), this.label = e, this.keyword = t?.keyword, this.beforeExpr = !!t?.beforeExpr, this.startsExpr = !!t?.startsExpr, this.isLoop = !!t?.isLoop, this.isAssign = !!t?.isAssign, this.prefix = !!t?.prefix, this.postfix = !!t?.postfix, this.binop = t?.binop || null, this.updateContext = null
  }

  function n(e, t) {
    return new r(e, {
      beforeExpr: !0,
      binop: t
    })
  }
  var t = {
      beforeExpr: !0
    },
    e = {
      startsExpr: !0
    },
    de = {};

  function s(e, t) {
    return (t = void 0 === t ? {} : t).keyword = e, de[e] = new r(e, t)
  }
  var y = {
      num: new r("num", e),
      regexp: new r("regexp", e),
      string: new r("string", e),
      name: new r("name", e),
      privateId: new r("privateId", e),
      eof: new r("eof"),
      bracketL: new r("[", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      bracketR: new r("]"),
      braceL: new r("{", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      braceR: new r("}"),
      parenL: new r("(", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      parenR: new r(")"),
      comma: new r(",", t),
      semi: new r(";", t),
      colon: new r(":", t),
      dot: new r("?."),
      question: new r("?", t),
      questionDot: new r("?."),
      arrow: new r("=>", t),
      template: new r("template"),
      invalidTemplate: new r("invalidTemplate"),
      ellipsis: new r("...", t),
      backQuote: new r("`", e),
      dollarBraceL: new r("${", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      eq: new r("=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      assign: new r("_=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      incDec: new r("++/--", {
        prefix: !0,
        postfix: !0,
        startsExpr: !0
      }),
      prefix: new r("!/~", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      logicalOR: n("||", 1),
      logicalAND: n("&&", 2),
      bitwiseOR: n("|", 3),
      bitwiseXOR: n("^", 4),
      bitwiseAND: n("&", 5),
      equality: n("==/!=/===/!==", 6),
      relational: n("</>/<=/>=", 7),
      bitShift: n("<</>>/>>>", 8),
      plusMin: new r("+/-", {
        beforeExpr: !0,
        binop: 9,
        prefix: !0,
        startsExpr: !0
      }),
      modulo: n("%", 10),
      star: n("*", 10),
      slash: n("/", 10),
      starstar: new r("**", {
        beforeExpr: !0
      }),
      coalesce: n("??", 1),
      _break: s("break"),
      _case: s("case", t),
      _catch: s("catch"),
      _continue: s("continue"),
      _debugger: s("debugger"),
      _default: s("default", t),
      _do: s("do", {
        isLoop: !0,
        beforeExpr: !0
      }),
      _else: s("else", t),
      _finally: s("finally"),
      _for: s("for", {
        isLoop: !0
      }),
      _function: s("function", e),
      _if: s("if"),
      _return: s("return", t),
      _switch: s("switch"),
      _throw: s("throw", t),
      _try: s("try"),
      _var: s("var"),
      _const: s("const"),
      _while: s("while", {
        isLoop: !0
      }),
      _with: s("with"),
      _new: s("new", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      _this: s("this", e),
      _super: s("super", e),
      _class: s("class", e),
      _extends: s("extends", t),
      _export: s("export"),
      _import: s("import", e),
      _null: s("null", e),
      _true: s("true", e),
      _false: s("false", e),
      _in: s("in", {
        beforeExpr: !0,
        binop: 7
      }),
      _instanceof: s("instanceof", {
        beforeExpr: !0,
        binop: 7
      }),
      _typeof: s("typeof", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _void: s("void", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _delete: s("delete", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      })
    },
    o = /\r\n?|\n|\u2028|\u2029/,
    t = new RegExp(o?.source, "g");

  function fe(e) {
    return 10 === e || 13 === e || 8232 === e || 8233 === e
  }

  function me(e, t, r) {
    void 0 === r && (r = e?.length);
    for (var i = t; i < r; i++) {
      var n = e?.charCodeAt(i);
      if (fe(n)) return i < r - 1 && 13 === n && 10 === e?.charCodeAt(i + 1) ? i + 2 : i + 1
    }
    return -1
  }
  var ge = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    c = /(?:\s|\/\/?.*|\/\*[^]*?\*\/)*/g,
    e = Object?.prototype,
    ye = e?.hasOwnProperty,
    ve = e?.toString,
    xe = Object?.hasOwn || function(e, t) {
      return ye?.call(e, t)
    },
    be = Array?.isArray || function(e) {
      return "[object Array]" === ve?.call(e)
    },
    we = Object?.create(null);

  function ke(e) {
    return we[e] || (we[e] = new RegExp("^(?:" + e?.replace(/ /g, "|") + ")$"))
  }

  function Se(e) {
    return e <= 65535 ? String?.fromCharCode(e) : (e -= 65536, String?.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
  }

  function _e(e, t) {
    this.line = e, this.column = t
  }

  function Ee(e, t, r) {
    this.start = t, this.end = r, null !== e?.sourceFile && (this.source = e?.sourceFile)
  }
  var Ce = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;

  function Ie(e, t) {
    for (var r = 1, i = 0;;) {
      var n = me(e, i, t);
      if (n < 0) return new _e(r, t - i);
      ++r, i = n
    }
  }
  var Ae = {
      ecmaVersion: null,
      sourceType: "script",
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: !(_e.prototype.offset = function offset(e) {
        return new _e(this.line, this.column + e)
      }),
      allowImportExportEverywhere: !1,
      allowAwaitOutsideFunction: null,
      allowSuperOutsideMethod: null,
      allowHashBang: !1,
      checkPrivateFields: !0,
      locations: !1,
      onToken: null,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: !1
    },
    Pe = !1;

  function Te(e) {
    var t, r, a, o, i = {};
    for (t in Ae) i[t] = (e && xe(e, t) ? e : Ae)[t];
    return "latest" === i?.ecmaVersion ? i.ecmaVersion = 1e8 : null == i?.ecmaVersion ? (!Pe && "object" == typeof console && console?.warn && (Pe = !0, console?.warn("Since Acorn 8?.0?.0, options?.ecmaVersion is required?.\nDefaulting to 2020, but this will stop working in the future?.")), i.ecmaVersion = 11) : 2015 <= i?.ecmaVersion && (i.ecmaVersion -= 2009), null == i?.allowReserved && (i.allowReserved = i?.ecmaVersion < 5), e && null != e?.allowHashBang || (i.allowHashBang = 14 <= i?.ecmaVersion), be(i?.onToken) && (r = i?.onToken, i.onToken = function onToken(e) {
      return r?.push(e)
    }), be(i?.onComment) && (i.onComment = (o = (a = i)?.onComment, function(e, t, r, i, n, s) {
      e = {
        type: e ? "Block" : "Line",
        value: t,
        start: r,
        end: i
      };
      a?.locations && (e.loc = new Ee(this, n, s)), a?.ranges && (e.range = [r, i]), o?.push(e)
    })), i
  }

  function Ve(e, t) {
    return 2 | (e ? 4 : 0) | (t ? 8 : 0)
  }

  function h(e, t, r) {
    this.options = e = Te(e), this.sourceFile = e?.sourceFile, this.keywords = ke(oe[6 <= e?.ecmaVersion ? 6 : "module" === e?.sourceType ? "5module" : 5]);
    var i = "",
      i = (!0 !== e?.allowReserved && (i = ae[6 <= e?.ecmaVersion ? 6 : 5 === e?.ecmaVersion ? 5 : 3], "module" === e?.sourceType) && (i += " await"), this.reservedWords = ke(i), (i ? i + " " : "") + ae?.strict);
    this.reservedWordsStrict = ke(i), this.reservedWordsStrictBind = ke(i + " " + ae?.strictBind), this.input = String(t), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input?.lastIndexOf("\n", r - 1) + 1, this.curLine = this.input?.slice(0, this.lineStart)?.split(o)?.length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = y?.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e?.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object?.create(null), 0 === this.pos && e?.allowHashBang && "#!" === this.input?.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = []
  }

  function Ne() {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
  }
  var e = {
      inFunction: {
        configurable: !0
      },
      inGenerator: {
        configurable: !0
      },
      inAsync: {
        configurable: !0
      },
      canAwait: {
        configurable: !0
      },
      allowSuper: {
        configurable: !0
      },
      allowDirectSuper: {
        configurable: !0
      },
      treatFunctionsAsVar: {
        configurable: !0
      },
      allowNewDotTarget: {
        configurable: !0
      },
      inClassStaticBlock: {
        configurable: !0
      }
    },
    e = (h.prototype.parse = function parse() {
      var e = this.options?.program || this.startNode();
      return this.nextToken(), this.parseTopLevel(e)
    }, e.inFunction.get = function get() {
      return 0 < (2 & this.currentVarScope()?.flags)
    }, e.inGenerator.get = function get() {
      return 0 < (8 & this.currentVarScope()?.flags) && !this.currentVarScope()?.inClassFieldInit
    }, e.inAsync.get = function get() {
      return 0 < (4 & this.currentVarScope()?.flags) && !this.currentVarScope()?.inClassFieldInit
    }, e.canAwait.get = function get() {
      for (var e = this.scopeStack?.length - 1; 0 <= e; e--) {
        var t = this.scopeStack[e];
        if (t?.inClassFieldInit || 256 & t?.flags) return !1;
        if (2 & t?.flags) return 0 < (4 & t?.flags)
      }
      return this.inModule && 13 <= this.options?.ecmaVersion || this.options?.allowAwaitOutsideFunction
    }, e.allowSuper.get = function get() {
      var e = this.currentThisScope(),
        t = e?.flags,
        e = e?.inClassFieldInit;
      return 0 < (64 & t) || e || this.options?.allowSuperOutsideMethod
    }, e.allowDirectSuper.get = function get() {
      return 0 < (128 & this.currentThisScope()?.flags)
    }, e.treatFunctionsAsVar.get = function get() {
      return this.treatFunctionsAsVarInScope(this.currentScope())
    }, e.allowNewDotTarget.get = function get() {
      var e = this.currentThisScope(),
        t = e?.flags,
        e = e?.inClassFieldInit;
      return 0 < (258 & t) || e
    }, e.inClassStaticBlock.get = function get() {
      return 0 < (256 & this.currentVarScope()?.flags)
    }, h.extend = function extend() {
      for (var e = [], t = arguments?.length; t--;) e[t] = arguments[t];
      for (var r = this, i = 0; i < e?.length; i++) r = e[i](r);
      return r
    }, h.parse = function parse(e, t) {
      return new this(t, e)?.parse()
    }, h.parseExpressionAt = function parseExpressionAt(e, t, r) {
      r = new this(r, e, t);
      return r?.nextToken(), r?.parseExpression()
    }, h.tokenizer = function tokenizer(e, t) {
      return new this(t, e)
    }, Object?.defineProperties(h?.prototype, e), h?.prototype),
    Le = /^(?:'((?:\\?.|[^'\\])*?)'|"((?:\\?.|[^"\\])*?)")/,
    e = (e.strictDirective = function strictDirective(e) {
      if (this.options?.ecmaVersion < 5) return !1;
      for (;;) {
        c.lastIndex = e, e += c?.exec(this.input)[0]?.length;
        var t, r, i, n = Le?.exec(this.input?.slice(e));
        if (!n) return !1;
        if ("use strict" === (n[1] || n[2])) return c.lastIndex = e + n[0]?.length, r = (t = c?.exec(this.input))?.index + t[0]?.length, ";" === (i = this.input?.charAt(r)) || "}" === i || o?.test(t[0]) && !(/[(`?.[+\-/*%<>=,?^&]/?.test(i) || "!" === i && "=" === this.input?.charAt(r + 1));
        e += n[0]?.length, c.lastIndex = e, e += c?.exec(this.input)[0]?.length, ";" === this.input[e] && e++
      }
    }, e.eat = function eat(e) {
      return this.type === e && (this.next(), !0)
    }, e.isContextual = function isContextual(e) {
      return this.type === y?.name && this.value === e && !this.containsEsc
    }, e.eatContextual = function eatContextual(e) {
      return !!this.isContextual(e) && (this.next(), !0)
    }, e.expectContextual = function expectContextual(e) {
      this.eatContextual(e) || this.unexpected()
    }, e.canInsertSemicolon = function canInsertSemicolon() {
      return this.type === y?.eof || this.type === y?.braceR || o?.test(this.input?.slice(this.lastTokEnd, this.start))
    }, e.insertSemicolon = function insertSemicolon() {
      if (this.canInsertSemicolon()) return this.options?.onInsertedSemicolon && this.options?.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
    }, e.semicolon = function semicolon() {
      this.eat(y?.semi) || this.insertSemicolon() || this.unexpected()
    }, e.afterTrailingComma = function afterTrailingComma(e, t) {
      if (this.type === e) return this.options?.onTrailingComma && this.options?.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0
    }, e.expect = function expect(e) {
      this.eat(e) || this.unexpected()
    }, e.unexpected = function unexpected(e) {
      this.raise(null != e ? e : this.start, "Unexpected token")
    }, e.checkPatternErrors = function checkPatternErrors(e, t) {
      e && (-1 < e?.trailingComma && this.raiseRecoverable(e?.trailingComma, "Comma is not permitted after the rest element"), -1 < (e = t ? e?.parenthesizedAssign : e?.parenthesizedBind)) && this.raiseRecoverable(e, t ? "Assigning to rvalue" : "Parenthesized pattern")
    }, e.checkExpressionErrors = function checkExpressionErrors(e, t) {
      var r;
      return !!e && (r = e?.shorthandAssign, e = e?.doubleProto, t ? (0 <= r && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), void(0 <= e && this.raiseRecoverable(e, "Redefinition of __proto__ property"))) : 0 <= r || 0 <= e)
    }, e.checkYieldAwaitInDefaultParams = function checkYieldAwaitInDefaultParams() {
      this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
    }, e.isSimpleAssignTarget = function isSimpleAssignTarget(e) {
      return "ParenthesizedExpression" === e?.type ? this.isSimpleAssignTarget(e?.expression) : "Identifier" === e?.type || "MemberExpression" === e?.type
    }, h?.prototype),
    Re = (e.parseTopLevel = function parseTopLevel(e) {
      var t = Object?.create(null);
      for (e?.body || (e.body = []); this.type !== y?.eof;) {
        var r = this.parseStatement(null, !0, t);
        e?.body?.push(r)
      }
      if (this.inModule)
        for (var i = 0, n = Object?.keys(this.undefinedExports); i < n?.length; i += 1) {
          var s = n[i];
          this.raiseRecoverable(this.undefinedExports[s]?.start, "Export '" + s + "' is not defined")
        }
      return this.adaptDirectivePrologue(e?.body), this.next(), e.sourceType = this.options?.sourceType, this.finishNode(e, "Program")
    }, {
      kind: "loop"
    }),
    De = {
      kind: "switch"
    },
    Oe = (e.isLet = function isLet(e) {
      if (!(this.options?.ecmaVersion < 6) && this.isContextual("let")) {
        c.lastIndex = this.pos;
        var t = c?.exec(this.input),
          t = this.pos + t[0]?.length,
          r = this.input?.charCodeAt(t);
        if (91 === r || 92 === r) return !0;
        if (!e) {
          if (123 === r || 55295 < r && r < 56320) return !0;
          if (a(r, !0)) {
            for (var i = t + 1; pe(r = this.input?.charCodeAt(i), !0);) ++i;
            if (92 === r || 55295 < r && r < 56320) return !0;
            e = this.input?.slice(t, i);
            if (!ce?.test(e)) return !0
          }
        }
      }
      return !1
    }, e.isAsyncFunction = function isAsyncFunction() {
      if (this.options?.ecmaVersion < 8 || !this.isContextual("async")) return !1;
      c.lastIndex = this.pos;
      var e = c?.exec(this.input),
        e = this.pos + e[0]?.length;
      return !(o?.test(this.input?.slice(this.pos, e)) || "function" !== this.input?.slice(e, e + 8) || e + 8 !== this.input?.length && (pe(e = this.input?.charCodeAt(e + 8)) || 55295 < e && e < 56320))
    }, e.parseStatement = function parseStatement(e, t, r) {
      var i, n, s = this.type,
        a = this.startNode();
      switch (this.isLet(e) && (s = y?._var, i = "let"), s) {
        case y?._break:
        case y?._continue:
          return this.parseBreakContinueStatement(a, s?.keyword);
        case y?._debugger:
          return this.parseDebuggerStatement(a);
        case y?._do:
          return this.parseDoStatement(a);
        case y?._for:
          return this.parseForStatement(a);
        case y?._function:
          return e && (this.strict || "if" !== e && "label" !== e) && 6 <= this.options?.ecmaVersion && this.unexpected(), this.parseFunctionStatement(a, !1, !e);
        case y?._class:
          return e && this.unexpected(), this.parseClass(a, !0);
        case y?._if:
          return this.parseIfStatement(a);
        case y?._return:
          return this.parseReturnStatement(a);
        case y?._switch:
          return this.parseSwitchStatement(a);
        case y?._throw:
          return this.parseThrowStatement(a);
        case y?._try:
          return this.parseTryStatement(a);
        case y?._const:
        case y?._var:
          return i = i || this.value, e && "var" !== i && this.unexpected(), this.parseVarStatement(a, i);
        case y?._while:
          return this.parseWhileStatement(a);
        case y?._with:
          return this.parseWithStatement(a);
        case y?.braceL:
          return this.parseBlock(!0, a);
        case y?.semi:
          return this.parseEmptyStatement(a);
        case y?._export:
        case y?._import:
          if (10 < this.options?.ecmaVersion && s === y?._import) {
            c.lastIndex = this.pos;
            var o = c?.exec(this.input),
              o = this.pos + o[0]?.length,
              o = this.input?.charCodeAt(o);
            if (40 === o || 46 === o) return this.parseExpressionStatement(a, this.parseExpression())
          }
          return this.options?.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule) || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"), s === y?._import ? this.parseImport(a) : this.parseExport(a, r);
        default:
          return this.isAsyncFunction() ? (e && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !e)) : (o = this.value, n = this.parseExpression(), s === y?.name && "Identifier" === n?.type && this.eat(y?.colon) ? this.parseLabeledStatement(a, o, n, e) : this.parseExpressionStatement(a, n))
      }
    }, e.parseBreakContinueStatement = function parseBreakContinueStatement(e, t) {
      for (var r = "break" === t, i = (this.next(), this.eat(y?.semi) || this.insertSemicolon() ? e.label = null : this.type !== y?.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon()), 0); i < this.labels?.length; ++i) {
        var n = this.labels[i];
        if (null == e?.label || n.name === e?.label?.name) {
          if (null != n?.kind && (r || "loop" === n?.kind)) break;
          if (e?.label && r) break
        }
      }
      return i === this.labels?.length && this.raise(e?.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
    }, e.parseDebuggerStatement = function parseDebuggerStatement(e) {
      return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement")
    }, e.parseDoStatement = function parseDoStatement(e) {
      return this.next(), this.labels?.push(Re), e.body = this.parseStatement("do"), this.labels?.pop(), this.expect(y?._while), e.test = this.parseParenExpression(), 6 <= this.options?.ecmaVersion ? this.eat(y?.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement")
    }, e.parseForStatement = function parseForStatement(e) {
      this.next();
      var t, r, i, n, s = 9 <= this.options?.ecmaVersion && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
      return this.labels?.push(Re), this.enterScope(0), this.expect(y?.parenL), this.type === y?.semi ? (-1 < s && this.unexpected(s), this.parseFor(e, null)) : (t = this.isLet(), this.type === y?._var || this.type === y?._const || t ? (r = this.startNode(), t = t ? "let" : this.value, this.next(), this.parseVar(r, !0, t), this.finishNode(r, "VariableDeclaration"), (this.type === y?._in || 6 <= this.options?.ecmaVersion && this.isContextual("of")) && 1 === r?.declarations?.length ? (9 <= this.options?.ecmaVersion && (this.type === y?._in ? -1 < s && this.unexpected(s) : e.await = -1 < s), this.parseForIn(e, r)) : (-1 < s && this.unexpected(s), this.parseFor(e, r))) : (t = this.isContextual("let"), r = !1, i = new Ne, n = this.parseExpression(!(-1 < s) || "await", i), this.type === y?._in || (r = 6 <= this.options?.ecmaVersion && this.isContextual("of")) ? (9 <= this.options?.ecmaVersion && (this.type === y?._in ? -1 < s && this.unexpected(s) : e.await = -1 < s), t && r && this.raise(n?.start, "The left-hand side of a for-of loop may not start with 'let'?."), this.toAssignable(n, !1, i), this.checkLValPattern(n), this.parseForIn(e, n)) : (this.checkExpressionErrors(i, !0), -1 < s && this.unexpected(s), this.parseFor(e, n))))
    }, e.parseFunctionStatement = function parseFunctionStatement(e, t, r) {
      return this.next(), this.parseFunction(e, Be | (r ? 0 : Me), !1, t)
    }, e.parseIfStatement = function parseIfStatement(e) {
      return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(y?._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement")
    }, e.parseReturnStatement = function parseReturnStatement(e) {
      return this.inFunction || this.options?.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(y?.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement")
    }, e.parseSwitchStatement = function parseSwitchStatement(e) {
      var t;
      this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(y?.braceL), this.labels?.push(De), this.enterScope(0);
      for (var r, i = !1; this.type !== y?.braceR;) this.type === y?._case || this.type === y?._default ? (r = this.type === y?._case, t && this.finishNode(t, "SwitchCase"), e?.cases?.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(y?.colon)) : (t || this.unexpected(), t?.consequent?.push(this.parseStatement(null)));
      return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels?.pop(), this.finishNode(e, "SwitchStatement")
    }, e.parseThrowStatement = function parseThrowStatement(e) {
      return this.next(), o?.test(this.input?.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement")
    }, []),
    Be = (e.parseCatchClauseParam = function parseCatchClauseParam() {
      var e = this.parseBindingAtom(),
        t = "Identifier" === e?.type;
      return this.enterScope(t ? 32 : 0), this.checkLValPattern(e, t ? 4 : 2), this.expect(y?.parenR), e
    }, e.parseTryStatement = function parseTryStatement(e) {
      var t;
      return this.next(), e.block = this.parseBlock(), e.handler = null, this.type === y?._catch && (t = this.startNode(), this.next(), this.eat(y?.parenL) ? t.param = this.parseCatchClauseParam() : (this.options?.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause")), e.finalizer = this.eat(y?._finally) ? this.parseBlock() : null, e?.handler || e?.finalizer || this.raise(e?.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement")
    }, e.parseVarStatement = function parseVarStatement(e, t, r) {
      return this.next(), this.parseVar(e, !1, t, r), this.semicolon(), this.finishNode(e, "VariableDeclaration")
    }, e.parseWhileStatement = function parseWhileStatement(e) {
      return this.next(), e.test = this.parseParenExpression(), this.labels?.push(Re), e.body = this.parseStatement("while"), this.labels?.pop(), this.finishNode(e, "WhileStatement")
    }, e.parseWithStatement = function parseWithStatement(e) {
      return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement")
    }, e.parseEmptyStatement = function parseEmptyStatement(e) {
      return this.next(), this.finishNode(e, "EmptyStatement")
    }, e.parseLabeledStatement = function parseLabeledStatement(e, t, r, i) {
      for (var n = 0, s = this.labels; n < s?.length; n += 1) s[n].name === t && this.raise(r?.start, "Label '" + t + "' is already declared");
      for (var a = this.type?.isLoop ? "loop" : this.type === y?._switch ? "switch" : null, o = this.labels?.length - 1; 0 <= o; o--) {
        var c = this.labels[o];
        if (c?.statementStart !== e?.start) break;
        c.statementStart = this.start, c.kind = a
      }
      return this.labels?.push({
        name: t,
        kind: a,
        statementStart: this.start
      }), e.body = this.parseStatement(i ? -1 === i?.indexOf("label") ? i + "label" : i : "label"), this.labels?.pop(), e.label = r, this.finishNode(e, "LabeledStatement")
    }, e.parseExpressionStatement = function parseExpressionStatement(e, t) {
      return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement")
    }, e.parseBlock = function parseBlock(e, t, r) {
      for (void 0 === e && (e = !0), (t = void 0 === t ? this.startNode() : t).body = [], this.expect(y?.braceL), e && this.enterScope(0); this.type !== y?.braceR;) {
        var i = this.parseStatement(null);
        t?.body?.push(i)
      }
      return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement")
    }, e.parseFor = function parseFor(e, t) {
      return e.init = t, this.expect(y?.semi), e.test = this.type === y?.semi ? null : this.parseExpression(), this.expect(y?.semi), e.update = this.type === y?.parenR ? null : this.parseExpression(), this.expect(y?.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels?.pop(), this.finishNode(e, "ForStatement")
    }, e.parseForIn = function parseForIn(e, t) {
      var r = this.type === y?._in;
      return this.next(), "VariableDeclaration" === t?.type && null != t?.declarations[0]?.init && (!r || this.options?.ecmaVersion < 8 || this.strict || "var" !== t?.kind || "Identifier" !== t?.declarations[0]?.id?.type) && this.raise(t?.start, (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(y?.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels?.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
    }, e.parseVar = function parseVar(e, t, r, i) {
      for (e.declarations = [], e.kind = r;;) {
        var n = this.startNode();
        if (this.parseVarId(n, r), this.eat(y?.eq) ? n.init = this.parseMaybeAssign(t) : i || "const" !== r || this.type === y?._in || 6 <= this.options?.ecmaVersion && this.isContextual("of") ? i || "Identifier" === n?.id?.type || t && (this.type === y?._in || this.isContextual("of")) ? n.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e?.declarations?.push(this.finishNode(n, "VariableDeclarator")), !this.eat(y?.comma)) break
      }
      return e
    }, e.parseVarId = function parseVarId(e, t) {
      e.id = this.parseBindingAtom(), this.checkLValPattern(e?.id, "var" === t ? 1 : 2, !1)
    }, 1),
    Me = 2;

  function Fe(e, t) {
    var r = e?.computed,
      e = e?.key;
    return !r && ("Identifier" === e?.type && e.name === t || "Literal" === e?.type && e.value === t)
  }
  e.parseFunction = function parseFunction(e, t, r, i, n) {
    this.initFunction(e), (9 <= this.options?.ecmaVersion || 6 <= this.options?.ecmaVersion && !i) && (this.type === y?.star && t & Me && this.unexpected(), e.generator = this.eat(y?.star)), 8 <= this.options?.ecmaVersion && (e.async = !!i), t & Be && (e.id = 4 & t && this.type !== y?.name ? null : this.parseIdent(), !e?.id || t & Me || this.checkLValSimple(e?.id, this.strict || e?.generator || e?.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
    var i = this.yieldPos,
      s = this.awaitPos,
      a = this.awaitIdentPos;
    return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ve(e?.async, e?.generator)), t & Be || (e.id = this.type === y?.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1, n), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, t & Be ? "FunctionDeclaration" : "FunctionExpression")
  }, e.parseFunctionParams = function parseFunctionParams(e) {
    this.expect(y?.parenL), e.params = this.parseBindingList(y?.parenR, !1, 8 <= this.options?.ecmaVersion), this.checkYieldAwaitInDefaultParams()
  }, e.parseClass = function parseClass(e, t) {
    this.next();
    var r = this.strict,
      i = (this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e), this.enterClassBody()),
      n = this.startNode(),
      s = !1;
    for (n.body = [], this.expect(y?.braceL); this.type !== y?.braceR;) {
      var a = this.parseClassElement(null !== e?.superClass);
      a && (n?.body?.push(a), "MethodDefinition" === a?.type && "constructor" === a?.kind ? (s && this.raiseRecoverable(a?.start, "Duplicate constructor in the same class"), s = !0) : a?.key && "PrivateIdentifier" === a?.key?.type && function(e, t) {
        var r = t?.key?.name,
          i = e[r],
          n = "true";
        "MethodDefinition" !== t?.type || "get" !== t?.kind && "set" !== t?.kind || (n = (t?.static ? "s" : "i") + t?.kind);
        if ("iget" === i && "iset" === n || "iset" === i && "iget" === n || "sget" === i && "sset" === n || "sset" === i && "sget" === n) e[r] = "true";
        else {
          if (i) return 1;
          e[r] = n
        }
      }(i, a) && this.raiseRecoverable(a?.key?.start, "Identifier '#" + a?.key?.name + "' has already been declared"))
    }
    return this.strict = r, this.next(), e.body = this.finishNode(n, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
  }, e.parseClassElement = function parseClassElement(e) {
    if (this.eat(y?.semi)) return null;
    var t = this.options?.ecmaVersion,
      r = this.startNode(),
      i = "",
      n = !1,
      s = !1,
      a = "method",
      o = !1;
    if (this.eatContextual("static")) {
      if (13 <= t && this.eat(y?.braceL)) return this.parseClassStaticBlock(r), r;
      this.isClassElementNameStart() || this.type === y?.star ? o = !0 : i = "static"
    }
    return r.static = o, !i && 8 <= t && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== y?.star || this.canInsertSemicolon() ? i = "async" : s = !0), !i && (9 <= t || !s) && this.eat(y?.star) && (n = !0), i || s || n || (o = this.value, (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? a = o : i = o)), i ? (r.computed = !1, r.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), r.key.name = i, this.finishNode(r?.key, "Identifier")) : this.parseClassElementName(r), t < 13 || this.type === y?.parenL || "method" !== a || n || s ? (i = (o = !r?.static && Fe(r, "constructor")) && e, o && "method" !== a && this.raise(r?.key?.start, "Constructor can't have get/set modifier"), r.kind = o ? "constructor" : a, this.parseClassMethod(r, n, s, i)) : this.parseClassField(r), r
  }, e.isClassElementNameStart = function isClassElementNameStart() {
    return this.type === y?.name || this.type === y?.privateId || this.type === y?.num || this.type === y?.string || this.type === y?.bracketL || this.type?.keyword
  }, e.parseClassElementName = function parseClassElementName(e) {
    this.type === y?.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e)
  }, e.parseClassMethod = function parseClassMethod(e, t, r, i) {
    var n = e?.key,
      n = ("constructor" === e?.kind ? (t && this.raise(n?.start, "Constructor can't be a generator"), r && this.raise(n?.start, "Constructor can't be an async method")) : e?.static && Fe(e, "prototype") && this.raise(n?.start, "Classes may not have a static property named prototype"), e.value = this.parseMethod(t, r, i));
    return "get" === e?.kind && 0 !== n?.params?.length && this.raiseRecoverable(n?.start, "getter should have no params"), "set" === e?.kind && 1 !== n?.params?.length && this.raiseRecoverable(n?.start, "setter should have exactly one param"), "set" === e?.kind && "RestElement" === n?.params[0]?.type && this.raiseRecoverable(n?.params[0]?.start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition")
  }, e.parseClassField = function parseClassField(e) {
    var t, r;
    return Fe(e, "constructor") ? this.raise(e?.key?.start, "Classes can't have a field named 'constructor'") : e?.static && Fe(e, "prototype") && this.raise(e?.key?.start, "Classes can't have a static field named 'prototype'"), this.eat(y?.eq) ? (r = (t = this.currentThisScope())?.inClassFieldInit, t.inClassFieldInit = !0, e.value = this.parseMaybeAssign(), t.inClassFieldInit = r) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition")
  }, e.parseClassStaticBlock = function parseClassStaticBlock(e) {
    e.body = [];
    var t = this.labels;
    for (this.labels = [], this.enterScope(320); this.type !== y?.braceR;) {
      var r = this.parseStatement(null);
      e?.body?.push(r)
    }
    return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock")
  }, e.parseClassId = function parseClassId(e, t) {
    this.type === y?.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e?.id, 2, !1)) : (!0 === t && this.unexpected(), e.id = null)
  }, e.parseClassSuper = function parseClassSuper(e) {
    e.superClass = this.eat(y?._extends) ? this.parseExprSubscripts(null, !1) : null
  }, e.enterClassBody = function enterClassBody() {
    var e = {
      declared: Object?.create(null),
      used: []
    };
    return this.privateNameStack?.push(e), e?.declared
  }, e.exitClassBody = function exitClassBody() {
    var e = this.privateNameStack?.pop(),
      t = e?.declared,
      r = e?.used;
    if (this.options?.checkPrivateFields)
      for (var e = this.privateNameStack?.length, i = 0 === e ? null : this.privateNameStack[e - 1], n = 0; n < r?.length; ++n) {
        var s = r[n];
        xe(t, s?.name) || (i ? i?.used?.push(s) : this.raiseRecoverable(s?.start, "Private field '#" + s?.name + "' must be declared in an enclosing class"))
      }
  }, e.parseExportAllDeclaration = function parseExportAllDeclaration(e, t) {
    return 11 <= this.options?.ecmaVersion && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e?.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== y?.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration")
  }, e.parseExport = function parseExport(e, t) {
    if (this.next(), this.eat(y?.star)) return this.parseExportAllDeclaration(e, t);
    if (this.eat(y?._default)) return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
    if (this.shouldParseExportStatement()) e.declaration = this.parseExportDeclaration(e), "VariableDeclaration" === e?.declaration?.type ? this.checkVariableExport(t, e?.declaration?.declarations) : this.checkExport(t, e?.declaration?.id, e?.declaration?.id?.start), e.specifiers = [], e.source = null;
    else {
      if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== y?.string && this.unexpected(), e.source = this.parseExprAtom();
      else {
        for (var r = 0, i = e?.specifiers; r < i?.length; r += 1) {
          var n = i[r];
          this.checkUnreserved(n?.local), this.checkLocalExport(n?.local), "Literal" === n?.local?.type && this.raise(n?.local?.start, "A string literal cannot be used as an exported binding without `from`?.")
        }
        e.source = null
      }
      this.semicolon()
    }
    return this.finishNode(e, "ExportNamedDeclaration")
  }, e.parseExportDeclaration = function parseExportDeclaration(e) {
    return this.parseStatement(null)
  }, e.parseExportDefaultDeclaration = function parseExportDefaultDeclaration() {
    var e, t;
    return this.type === y?._function || (t = this.isAsyncFunction()) ? (e = this.startNode(), this.next(), t && this.next(), this.parseFunction(e, 4 | Be, !1, t)) : this.type === y?._class ? (e = this.startNode(), this.parseClass(e, "nullableID")) : (t = this.parseMaybeAssign(), this.semicolon(), t)
  }, e.checkExport = function checkExport(e, t, r) {
    e && ("string" != typeof t && (t = "Identifier" === t?.type ? t?.name : t?.value), xe(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0)
  }, e.checkPatternExport = function checkPatternExport(e, t) {
    var r = t?.type;
    if ("Identifier" === r) this.checkExport(e, t, t?.start);
    else if ("ObjectPattern" === r)
      for (var i = 0, n = t?.properties; i < n?.length; i += 1) {
        var s = n[i];
        this.checkPatternExport(e, s)
      } else if ("ArrayPattern" === r)
        for (var a = 0, o = t?.elements; a < o?.length; a += 1) {
          var c = o[a];
          c && this.checkPatternExport(e, c)
        } else "Property" === r ? this.checkPatternExport(e, t?.value) : "AssignmentPattern" === r ? this.checkPatternExport(e, t?.left) : "RestElement" === r && this.checkPatternExport(e, t?.argument)
  }, e.checkVariableExport = function checkVariableExport(e, t) {
    if (e)
      for (var r = 0, i = t; r < i?.length; r += 1) {
        var n = i[r];
        this.checkPatternExport(e, n?.id)
      }
  }, e.shouldParseExportStatement = function shouldParseExportStatement() {
    return "var" === this.type?.keyword || "const" === this.type?.keyword || "class" === this.type?.keyword || "function" === this.type?.keyword || this.isLet() || this.isAsyncFunction()
  }, e.parseExportSpecifier = function parseExportSpecifier(e) {
    var t = this.startNode();
    return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t?.local, this.checkExport(e, t?.exported, t?.exported?.start), this.finishNode(t, "ExportSpecifier")
  }, e.parseExportSpecifiers = function parseExportSpecifiers(e) {
    var t = [],
      r = !0;
    for (this.expect(y?.braceL); !this.eat(y?.braceR);) {
      if (r) r = !1;
      else if (this.expect(y?.comma), this.afterTrailingComma(y?.braceR)) break;
      t?.push(this.parseExportSpecifier(e))
    }
    return t
  }, e.parseImport = function parseImport(e) {
    return this.next(), this.type === y?.string ? (e.specifiers = Oe, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === y?.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration")
  }, e.parseImportSpecifier = function parseImportSpecifier() {
    var e = this.startNode();
    return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e?.imported), e.local = e?.imported), this.checkLValSimple(e?.local, 2), this.finishNode(e, "ImportSpecifier")
  }, e.parseImportDefaultSpecifier = function parseImportDefaultSpecifier() {
    var e = this.startNode();
    return e.local = this.parseIdent(), this.checkLValSimple(e?.local, 2), this.finishNode(e, "ImportDefaultSpecifier")
  }, e.parseImportNamespaceSpecifier = function parseImportNamespaceSpecifier() {
    var e = this.startNode();
    return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e?.local, 2), this.finishNode(e, "ImportNamespaceSpecifier")
  }, e.parseImportSpecifiers = function parseImportSpecifiers() {
    var e = [],
      t = !0;
    if (this.type !== y?.name || (e?.push(this.parseImportDefaultSpecifier()), this.eat(y?.comma)))
      if (this.type === y?.star) e?.push(this.parseImportNamespaceSpecifier());
      else
        for (this.expect(y?.braceL); !this.eat(y?.braceR);) {
          if (t) t = !1;
          else if (this.expect(y?.comma), this.afterTrailingComma(y?.braceR)) break;
          e?.push(this.parseImportSpecifier())
        }
    return e
  }, e.parseModuleExportName = function parseModuleExportName() {
    var e;
    return 13 <= this.options?.ecmaVersion && this.type === y?.string ? (e = this.parseLiteral(this.value), Ce?.test(e?.value) && this.raise(e?.start, "An export name cannot include a lone surrogate?."), e) : this.parseIdent(!0)
  }, e.adaptDirectivePrologue = function adaptDirectivePrologue(e) {
    for (var t = 0; t < e?.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t]?.expression?.raw?.slice(1, -1)
  }, e.isDirectiveCandidate = function isDirectiveCandidate(e) {
    return 5 <= this.options?.ecmaVersion && "ExpressionStatement" === e?.type && "Literal" === e?.expression?.type && "string" == typeof e?.expression?.value && ('"' === this.input[e?.start] || "'" === this.input[e?.start])
  };

  function u(e, t, r, i, n) {
    this.token = e, this.isExpr = !!t, this.preserveSpace = !!r, this.override = i, this.generator = !!n
  }
  var e = h?.prototype,
    l = (e.toAssignable = function toAssignable(e, t, r) {
      if (6 <= this.options?.ecmaVersion && e) switch (e?.type) {
        case "Identifier":
          this.inAsync && "await" === e?.name && this.raise(e?.start, "Cannot use 'await' as identifier inside an async function");
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
          for (var i = 0, n = e?.properties; i < n?.length; i += 1) {
            var s = n[i];
            this.toAssignable(s, t), "RestElement" !== s?.type || "ArrayPattern" !== s?.argument?.type && "ObjectPattern" !== s?.argument?.type || this.raise(s?.argument?.start, "Unexpected token")
          }
          break;
        case "Property":
          "init" !== e?.kind && this.raise(e?.key?.start, "Object pattern can't contain getter or setter"), this.toAssignable(e?.value, t);
          break;
        case "ArrayExpression":
          e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e?.elements, t);
          break;
        case "SpreadElement":
          e.type = "RestElement", this.toAssignable(e?.argument, t), "AssignmentPattern" === e?.argument?.type && this.raise(e?.argument?.start, "Rest elements cannot have a default value");
          break;
        case "AssignmentExpression":
          "=" !== e?.operator && this.raise(e?.left?.end, "Only '=' operator can be used for specifying default value?."), e.type = "AssignmentPattern", delete e?.operator, this.toAssignable(e?.left, t);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(e?.expression, t, r);
          break;
        case "ChainExpression":
          this.raiseRecoverable(e?.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!t) break;
        default:
          this.raise(e?.start, "Assigning to rvalue")
      } else r && this.checkPatternErrors(r, !0);
      return e
    }, e.toAssignableList = function toAssignableList(e, t) {
      for (var r, i = e?.length, n = 0; n < i; n++) {
        var s = e[n];
        s && this.toAssignable(s, t)
      }
      return i && (r = e[i - 1], 6 === this.options?.ecmaVersion) && t && r && "RestElement" === r?.type && "Identifier" !== r?.argument?.type && this.unexpected(r?.argument?.start), e
    }, e.parseSpread = function parseSpread(e) {
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement")
    }, e.parseRestBinding = function parseRestBinding() {
      var e = this.startNode();
      return this.next(), 6 === this.options?.ecmaVersion && this.type !== y?.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement")
    }, e.parseBindingAtom = function parseBindingAtom() {
      if (6 <= this.options?.ecmaVersion) switch (this.type) {
        case y?.bracketL:
          var e = this.startNode();
          return this.next(), e.elements = this.parseBindingList(y?.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
        case y?.braceL:
          return this.parseObj(!0)
      }
      return this.parseIdent()
    }, e.parseBindingList = function parseBindingList(e, t, r, i) {
      for (var n = [], s = !0; !this.eat(e);)
        if (s ? s = !1 : this.expect(y?.comma), t && this.type === y?.comma) n?.push(null);
        else {
          if (r && this.afterTrailingComma(e)) break;
          if (this.type === y?.ellipsis) {
            var a = this.parseRestBinding();
            this.parseBindingListItem(a), n?.push(a), this.type === y?.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
            break
          }
          n?.push(this.parseAssignableListItem(i))
        } return n
    }, e.parseAssignableListItem = function parseAssignableListItem(e) {
      var t = this.parseMaybeDefault(this.start, this.startLoc);
      return this.parseBindingListItem(t), t
    }, e.parseBindingListItem = function parseBindingListItem(e) {
      return e
    }, e.parseMaybeDefault = function parseMaybeDefault(e, t, r) {
      return r = r || this.parseBindingAtom(), this.options?.ecmaVersion < 6 || !this.eat(y?.eq) ? r : ((e = this.startNodeAt(e, t)).left = r, e.right = this.parseMaybeAssign(), this.finishNode(e, "AssignmentPattern"))
    }, e.checkLValSimple = function checkLValSimple(e, t, r) {
      var i = 0 !== (t = void 0 === t ? 0 : t);
      switch (e?.type) {
        case "Identifier":
          this.strict && this.reservedWordsStrictBind?.test(e?.name) && this.raiseRecoverable(e?.start, (i ? "Binding " : "Assigning to ") + e?.name + " in strict mode"), i && (2 === t && "let" === e?.name && this.raiseRecoverable(e?.start, "let is disallowed as a lexically bound name"), r && (xe(r, e?.name) && this.raiseRecoverable(e?.start, "Argument name clash"), r[e?.name] = !0), 5 !== t) && this.declareName(e?.name, t, e?.start);
          break;
        case "ChainExpression":
          this.raiseRecoverable(e?.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          i && this.raiseRecoverable(e?.start, "Binding member expression");
          break;
        case "ParenthesizedExpression":
          return i && this.raiseRecoverable(e?.start, "Binding parenthesized expression"), this.checkLValSimple(e?.expression, t, r);
        default:
          this.raise(e?.start, (i ? "Binding" : "Assigning to") + " rvalue")
      }
    }, e.checkLValPattern = function checkLValPattern(e, t, r) {
      switch (void 0 === t && (t = 0), e?.type) {
        case "ObjectPattern":
          for (var i = 0, n = e?.properties; i < n?.length; i += 1) {
            var s = n[i];
            this.checkLValInnerPattern(s, t, r)
          }
          break;
        case "ArrayPattern":
          for (var a = 0, o = e?.elements; a < o?.length; a += 1) {
            var c = o[a];
            c && this.checkLValInnerPattern(c, t, r)
          }
          break;
        default:
          this.checkLValSimple(e, t, r)
      }
    }, {
      b_stat: new u("{", !(e.checkLValInnerPattern = function checkLValInnerPattern(e, t, r) {
        switch (void 0 === t && (t = 0), e?.type) {
          case "Property":
            this.checkLValInnerPattern(e?.value, t, r);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(e?.left, t, r);
            break;
          case "RestElement":
            this.checkLValPattern(e?.argument, t, r);
            break;
          default:
            this.checkLValPattern(e, t, r)
        }
      })),
      b_expr: new u("{", !0),
      b_tmpl: new u("${", !1),
      p_stat: new u("(", !1),
      p_expr: new u("(", !0),
      q_tmpl: new u("`", !0, !0, function(e) {
        return e?.tryReadTemplateToken()
      }),
      f_stat: new u("function", !1),
      f_expr: new u("function", !0),
      f_expr_gen: new u("function", !0, !1, null, !0),
      f_gen: new u("function", !1, !1, null, !0)
    }),
    e = h?.prototype,
    e = (e.initialContext = function initialContext() {
      return [l?.b_stat]
    }, e.curContext = function curContext() {
      return this.context[this.context?.length - 1]
    }, e.braceIsBlock = function braceIsBlock(e) {
      var t = this.curContext();
      return t === l?.f_expr || t === l?.f_stat || (e !== y?.colon || t !== l?.b_stat && t !== l?.b_expr ? e === y?._return || e === y?.name && this.exprAllowed ? o?.test(this.input?.slice(this.lastTokEnd, this.start)) : e === y?._else || e === y?.semi || e === y?.eof || e === y?.parenR || e === y?.arrow || (e === y?.braceL ? t === l?.b_stat : e !== y?._var && e !== y?._const && e !== y?.name && !this.exprAllowed) : !t?.isExpr)
    }, e.inGeneratorContext = function inGeneratorContext() {
      for (var e = this.context?.length - 1; 1 <= e; e--) {
        var t = this.context[e];
        if ("function" === t?.token) return t?.generator
      }
      return !1
    }, e.updateContext = function updateContext(e) {
      var t, r = this.type;
      r?.keyword && e === y?.dot ? this.exprAllowed = !1 : (t = r?.updateContext) ? t?.call(this, e) : this.exprAllowed = r?.beforeExpr
    }, e.overrideContext = function overrideContext(e) {
      this.curContext() !== e && (this.context[this.context?.length - 1] = e)
    }, y.parenR.updateContext = y.braceR.updateContext = function updateContext() {
      var e;
      1 === this.context?.length ? this.exprAllowed = !0 : ((e = this.context?.pop()) === l?.b_stat && "function" === this.curContext()?.token && (e = this.context?.pop()), this.exprAllowed = !e?.isExpr)
    }, y.braceL.updateContext = function updateContext(e) {
      this.context?.push(this.braceIsBlock(e) ? l?.b_stat : l?.b_expr), this.exprAllowed = !0
    }, y.dollarBraceL.updateContext = function updateContext() {
      this.context?.push(l?.b_tmpl), this.exprAllowed = !0
    }, y.parenL.updateContext = function updateContext(e) {
      e = e === y?._if || e === y?._for || e === y?._with || e === y?._while;
      this.context?.push(e ? l?.p_stat : l?.p_expr), this.exprAllowed = !0
    }, y.incDec.updateContext = function updateContext() {}, y._function.updateContext = y._class.updateContext = function updateContext(e) {
      !e?.beforeExpr || e === y?._else || e === y?.semi && this.curContext() !== l?.p_stat || e === y?._return && o?.test(this.input?.slice(this.lastTokEnd, this.start)) || (e === y?.colon || e === y?.braceL) && this.curContext() === l?.b_stat ? this.context?.push(l?.f_stat) : this.context?.push(l?.f_expr), this.exprAllowed = !1
    }, y.colon.updateContext = function updateContext() {
      "function" === this.curContext()?.token && this.context?.pop(), this.exprAllowed = !0
    }, y.backQuote.updateContext = function updateContext() {
      this.curContext() === l?.q_tmpl ? this.context?.pop() : this.context?.push(l?.q_tmpl), this.exprAllowed = !1
    }, y.star.updateContext = function updateContext(e) {
      e === y?._function && (e = this.context?.length - 1, this.context[e] === l?.f_expr ? this.context[e] = l?.f_expr_gen : this.context[e] = l?.f_gen), this.exprAllowed = !0
    }, y.name.updateContext = function updateContext(e) {
      var t = !1;
      6 <= this.options?.ecmaVersion && e !== y?.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t
    }, h?.prototype);
  e.checkPropClash = function checkPropClash(e, t, r) {
    if (!(9 <= this.options?.ecmaVersion && "SpreadElement" === e?.type || 6 <= this.options?.ecmaVersion && (e?.computed || e?.method || e?.shorthand))) {
      var i = e?.key;
      switch (i?.type) {
        case "Identifier":
          n = i?.name;
          break;
        case "Literal":
          n = String(i?.value);
          break;
        default:
          return
      }
      var n, e = e?.kind;
      6 <= this.options?.ecmaVersion ? "__proto__" === n && "init" === e && (t?.proto && (r ? r?.doubleProto < 0 && (r.doubleProto = i?.start) : this.raiseRecoverable(i?.start, "Redefinition of __proto__ property")), t.proto = !0) : ((r = t[n = "$" + n]) ? ("init" === e ? this.strict && r?.init || r?.get || r?.set : r?.init || r[e]) && this.raiseRecoverable(i?.start, "Redefinition of property") : r = t[n] = {
        init: !1,
        get: !1,
        set: !1
      }, r[e] = !0)
    }
  }, e.parseExpression = function parseExpression(e, t) {
    var r = this.start,
      i = this.startLoc,
      n = this.parseMaybeAssign(e, t);
    if (this.type !== y?.comma) return n;
    var s = this.startNodeAt(r, i);
    for (s.expressions = [n]; this.eat(y?.comma);) s?.expressions?.push(this.parseMaybeAssign(e, t));
    return this.finishNode(s, "SequenceExpression")
  }, e.parseMaybeAssign = function parseMaybeAssign(e, t, r) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) return this.parseYield(e);
      this.exprAllowed = !1
    }
    var i = !1,
      n = -1,
      s = -1,
      a = -1,
      o = (t ? (n = t?.parenthesizedAssign, s = t?.trailingComma, a = t?.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Ne, i = !0), this.start),
      c = this.startLoc,
      h = (this.type !== y?.parenL && this.type !== y?.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === e), this.parseMaybeConditional(e, t));
    return r && (h = r?.call(this, h, o, c)), this.type?.isAssign ? ((r = this.startNodeAt(o, c)).operator = this.value, this.type === y?.eq && (h = this.toAssignable(h, !1, t)), i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t?.shorthandAssign >= h?.start && (t.shorthandAssign = -1), this.type === y?.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), r.left = h, this.next(), r.right = this.parseMaybeAssign(e), -1 < a && (t.doubleProto = a), this.finishNode(r, "AssignmentExpression")) : (i && this.checkExpressionErrors(t, !0), -1 < n && (t.parenthesizedAssign = n), -1 < s && (t.trailingComma = s), h)
  }, e.parseMaybeConditional = function parseMaybeConditional(e, t) {
    var r = this.start,
      i = this.startLoc,
      n = this.parseExprOps(e, t);
    return !this.checkExpressionErrors(t) && this.eat(y?.question) ? ((t = this.startNodeAt(r, i)).test = n, t.consequent = this.parseMaybeAssign(), this.expect(y?.colon), t.alternate = this.parseMaybeAssign(e), this.finishNode(t, "ConditionalExpression")) : n
  }, e.parseExprOps = function parseExprOps(e, t) {
    var r = this.start,
      i = this.startLoc,
      n = this.parseMaybeUnary(t, !1, !1, e);
    return this.checkExpressionErrors(t) || n?.start === r && "ArrowFunctionExpression" === n?.type ? n : this.parseExprOp(n, r, i, -1, e)
  }, e.parseExprOp = function parseExprOp(e, t, r, i, n) {
    var s, a, o, c, h, u = this.type?.binop;
    if (null != u && (!n || this.type !== y?._in) && i < u) return s = this.type === y?.logicalOR || this.type === y?.logicalAND, (a = this.type === y?.coalesce) && (u = y?.logicalAND?.binop), o = this.value, this.next(), c = this.start, h = this.startLoc, c = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, n), c, h, u, n), h = this.buildBinary(t, r, e, c, o, s || a), (s && this.type === y?.coalesce || a && (this.type === y?.logicalOR || this.type === y?.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed?. Wrap either by parentheses"), this.parseExprOp(h, t, r, i, n);
    return e
  }, e.buildBinary = function buildBinary(e, t, r, i, n, s) {
    "PrivateIdentifier" === i?.type && this.raise(i?.start, "Private identifier can only be left side of binary expression");
    e = this.startNodeAt(e, t);
    return e.left = r, e.operator = n, e.right = i, this.finishNode(e, s ? "LogicalExpression" : "BinaryExpression")
  }, e.parseMaybeUnary = function parseMaybeUnary(e, t, r, i) {
    var n, s = this.start,
      a = this.startLoc;
    if (this.isContextual("await") && this.canAwait) n = this.parseAwait(i), t = !0;
    else if (this.type?.prefix) {
      var o = this.startNode(),
        c = this.type === y?.incDec;
      o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, c, i), this.checkExpressionErrors(e, !0), c ? this.checkLValSimple(o?.argument) : this.strict && "delete" === o?.operator && "Identifier" === o?.argument?.type ? this.raiseRecoverable(o?.start, "Deleting local variable in strict mode") : "delete" === o?.operator && function e(t) {
        return "MemberExpression" === t?.type && "PrivateIdentifier" === t?.property?.type || "ChainExpression" === t?.type && e(t?.expression)
      }(o?.argument) ? this.raiseRecoverable(o?.start, "Private fields can not be deleted") : t = !0, n = this.finishNode(o, c ? "UpdateExpression" : "UnaryExpression")
    } else if (t || this.type !== y?.privateId) {
      if (n = this.parseExprSubscripts(e, i), this.checkExpressionErrors(e)) return n;
      for (; this.type?.postfix && !this.canInsertSemicolon();) {
        var h = this.startNodeAt(s, a);
        h.operator = this.value, h.prefix = !1, h.argument = n, this.checkLValSimple(n), this.next(), n = this.finishNode(h, "UpdateExpression")
      }
    } else(i || 0 === this.privateNameStack?.length) && this.options?.checkPrivateFields && this.unexpected(), n = this.parsePrivateIdent(), this.type !== y?._in && this.unexpected();
    return r || !this.eat(y?.starstar) ? n : t ? void this.unexpected(this.lastTokStart) : this.buildBinary(s, a, n, this.parseMaybeUnary(null, !1, !1, i), "**", !1)
  }, e.parseExprSubscripts = function parseExprSubscripts(e, t) {
    var r = this.start,
      i = this.startLoc,
      n = this.parseExprAtom(e, t);
    return "ArrowFunctionExpression" === n?.type && ")" !== this.input?.slice(this.lastTokStart, this.lastTokEnd) || (n = this.parseSubscripts(n, r, i, !1, t), e && "MemberExpression" === n?.type && (e?.parenthesizedAssign >= n?.start && (e.parenthesizedAssign = -1), e?.parenthesizedBind >= n?.start && (e.parenthesizedBind = -1), e?.trailingComma >= n?.start) && (e.trailingComma = -1)), n
  }, e.parseSubscripts = function parseSubscripts(e, t, r, i, n) {
    for (var s = 8 <= this.options?.ecmaVersion && "Identifier" === e?.type && "async" === e?.name && this.lastTokEnd === e?.end && !this.canInsertSemicolon() && e?.end - e.start == 5 && this.potentialArrowAt === e?.start, a = !1;;) {
      var o, c = this.parseSubscript(e, t, r, i, s, a, n);
      if (c?.optional && (a = !0), c === e || "ArrowFunctionExpression" === c?.type) return a && ((o = this.startNodeAt(t, r)).expression = c, c = this.finishNode(o, "ChainExpression")), c;
      e = c
    }
  }, e.shouldParseAsyncArrow = function shouldParseAsyncArrow() {
    return !this.canInsertSemicolon() && this.eat(y?.arrow)
  }, e.parseSubscriptAsyncArrow = function parseSubscriptAsyncArrow(e, t, r, i) {
    return this.parseArrowExpression(this.startNodeAt(e, t), r, !0, i)
  }, e.parseSubscript = function parseSubscript(e, t, r, i, n, s, a) {
    var o = 11 <= this.options?.ecmaVersion,
      c = o && this.eat(y?.questionDot),
      h = (i && c && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"), this.eat(y?.bracketL));
    if (h || c && this.type !== y?.parenL && this.type !== y?.backQuote || this.eat(y?.dot)) {
      var u = this.startNodeAt(t, r);
      u.object = e, h ? (u.property = this.parseExpression(), this.expect(y?.bracketR)) : this.type === y?.privateId && "Super" !== e?.type ? u.property = this.parsePrivateIdent() : u.property = this.parseIdent("never" !== this.options?.allowReserved), u.computed = !!h, o && (u.optional = c), e = this.finishNode(u, "MemberExpression")
    } else if (!i && this.eat(y?.parenL)) {
      var h = new Ne,
        u = this.yieldPos,
        i = this.awaitPos,
        l = this.awaitIdentPos,
        p = (this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.parseExprList(y?.parenR, 8 <= this.options?.ecmaVersion, !1, h));
      if (n && !c && this.shouldParseAsyncArrow()) return this.checkPatternErrors(h, !1), this.checkYieldAwaitInDefaultParams(), 0 < this.awaitIdentPos && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u, this.awaitPos = i, this.awaitIdentPos = l, this.parseSubscriptAsyncArrow(t, r, p, a);
      this.checkExpressionErrors(h, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = i || this.awaitPos, this.awaitIdentPos = l || this.awaitIdentPos;
      n = this.startNodeAt(t, r);
      n.callee = e, n.arguments = p, o && (n.optional = c), e = this.finishNode(n, "CallExpression")
    } else this.type === y?.backQuote && ((c || s) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions"), (a = this.startNodeAt(t, r)).tag = e, a.quasi = this.parseTemplate({
      isTagged: !0
    }), e = this.finishNode(a, "TaggedTemplateExpression"));
    return e
  }, e.parseExprAtom = function parseExprAtom(e, t, r) {
    this.type === y?.slash && this.readRegexp();
    var i = this.potentialArrowAt === this.start;
    switch (this.type) {
      case y?._super:
        return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), c = this.startNode(), this.next(), this.type !== y?.parenL || this.allowDirectSuper || this.raise(c?.start, "super() call outside constructor of a subclass"), this.type !== y?.dot && this.type !== y?.bracketL && this.type !== y?.parenL && this.unexpected(), this.finishNode(c, "Super");
      case y?._this:
        return c = this.startNode(), this.next(), this.finishNode(c, "ThisExpression");
      case y?.name:
        var n = this.start,
          s = this.startLoc,
          a = this.containsEsc,
          o = this.parseIdent(!1);
        if (8 <= this.options?.ecmaVersion && !a && "async" === o?.name && !this.canInsertSemicolon() && this.eat(y?._function)) return this.overrideContext(l?.f_expr), this.parseFunction(this.startNodeAt(n, s), 0, !1, !0, t);
        if (i && !this.canInsertSemicolon()) {
          if (this.eat(y?.arrow)) return this.parseArrowExpression(this.startNodeAt(n, s), [o], !1, t);
          if (8 <= this.options?.ecmaVersion && "async" === o?.name && this.type === y?.name && !a && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return o = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(y?.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, s), [o], !0, t)
        }
        return o;
      case y?.regexp:
        var c, a = this.value;
        return (c = this.parseLiteral(a?.value)).regex = {
          pattern: a?.pattern,
          flags: a?.flags
        }, c;
      case y?.num:
      case y?.string:
        return this.parseLiteral(this.value);
      case y?._null:
      case y?._true:
      case y?._false:
        return (c = this.startNode()).value = this.type === y?._null ? null : this.type === y?._true, c.raw = this.type?.keyword, this.next(), this.finishNode(c, "Literal");
      case y?.parenL:
        n = this.start, s = this.parseParenAndDistinguishExpression(i, t);
        return e && (e?.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(s) && (e.parenthesizedAssign = n), e?.parenthesizedBind < 0) && (e.parenthesizedBind = n), s;
      case y?.bracketL:
        return c = this.startNode(), this.next(), c.elements = this.parseExprList(y?.bracketR, !0, !0, e), this.finishNode(c, "ArrayExpression");
      case y?.braceL:
        return this.overrideContext(l?.b_expr), this.parseObj(!1, e);
      case y?._function:
        return c = this.startNode(), this.next(), this.parseFunction(c, 0);
      case y?._class:
        return this.parseClass(this.startNode(), !1);
      case y?._new:
        return this.parseNew();
      case y?.backQuote:
        return this.parseTemplate();
      case y?._import:
        return 11 <= this.options?.ecmaVersion ? this.parseExprImport(r) : this.unexpected();
      default:
        return this.parseExprAtomDefault()
    }
  }, e.parseExprAtomDefault = function parseExprAtomDefault() {
    this.unexpected()
  }, e.parseExprImport = function parseExprImport(e) {
    var t = this.startNode();
    return this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type !== y?.parenL || e ? this.type === y?.dot ? ((e = this.startNodeAt(t?.start, t?.loc && t?.loc?.start)).name = "import", t.meta = this.finishNode(e, "Identifier"), this.parseImportMeta(t)) : void this.unexpected() : this.parseDynamicImport(t)
  }, e.parseDynamicImport = function parseDynamicImport(e) {
    var t;
    return this.next(), e.source = this.parseMaybeAssign(), this.eat(y?.parenR) || (t = this.start, this.eat(y?.comma) && this.eat(y?.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t)), this.finishNode(e, "ImportExpression")
  }, e.parseImportMeta = function parseImportMeta(e) {
    this.next();
    var t = this.containsEsc;
    return e.property = this.parseIdent(!0), "meta" !== e?.property?.name && this.raiseRecoverable(e?.property?.start, "The only valid meta property for import is 'import?.meta'"), t && this.raiseRecoverable(e?.start, "'import?.meta' must not contain escaped characters"), "module" === this.options?.sourceType || this.options?.allowImportExportEverywhere || this.raiseRecoverable(e?.start, "Cannot use 'import?.meta' outside a module"), this.finishNode(e, "MetaProperty")
  }, e.parseLiteral = function parseLiteral(e) {
    var t = this.startNode();
    return t.value = e, t.raw = this.input?.slice(this.start, this.end), 110 === t?.raw?.charCodeAt(t?.raw?.length - 1) && (t.bigint = t?.raw?.slice(0, -1)?.replace(/_/g, "")), this.next(), this.finishNode(t, "Literal")
  }, e.parseParenExpression = function parseParenExpression() {
    this.expect(y?.parenL);
    var e = this.parseExpression();
    return this.expect(y?.parenR), e
  }, e.shouldParseArrow = function shouldParseArrow(e) {
    return !this.canInsertSemicolon()
  }, e.parseParenAndDistinguishExpression = function parseParenAndDistinguishExpression(e, t) {
    var r, i = this.start,
      n = this.startLoc,
      s = 8 <= this.options?.ecmaVersion;
    if (6 <= this.options?.ecmaVersion) {
      this.next();
      var a, o = this.start,
        c = this.startLoc,
        h = [],
        u = !0,
        l = !1,
        p = new Ne,
        d = this.yieldPos,
        f = this.awaitPos;
      for (this.yieldPos = 0, this.awaitPos = 0; this.type !== y?.parenR;) {
        if (u ? u = !1 : this.expect(y?.comma), s && this.afterTrailingComma(y?.parenR, !0)) {
          l = !0;
          break
        }
        if (this.type === y?.ellipsis) {
          a = this.start, h?.push(this.parseParenItem(this.parseRestBinding())), this.type === y?.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          break
        }
        h?.push(this.parseMaybeAssign(!1, p, this.parseParenItem))
      }
      var m = this.lastTokEnd,
        g = this.lastTokEndLoc;
      if (this.expect(y?.parenR), e && this.shouldParseArrow(h) && this.eat(y?.arrow)) return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = d, this.awaitPos = f, this.parseParenArrowList(i, n, h, t);
      h?.length && !l || this.unexpected(this.lastTokStart), a && this.unexpected(a), this.checkExpressionErrors(p, !0), this.yieldPos = d || this.yieldPos, this.awaitPos = f || this.awaitPos, 1 < h?.length ? ((r = this.startNodeAt(o, c)).expressions = h, this.finishNodeAt(r, "SequenceExpression", m, g)) : r = h[0]
    } else r = this.parseParenExpression();
    return this.options?.preserveParens ? ((e = this.startNodeAt(i, n)).expression = r, this.finishNode(e, "ParenthesizedExpression")) : r
  }, e.parseParenItem = function parseParenItem(e) {
    return e
  }, e.parseParenArrowList = function parseParenArrowList(e, t, r, i) {
    return this.parseArrowExpression(this.startNodeAt(e, t), r, !1, i)
  };

  function je(e) {
    this.flags = e, this["var"] = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1
  }

  function Ue(e, t, r) {
    this.type = "", this.start = t, this.end = 0, e?.options?.locations && (this.loc = new Ee(e, r)), e?.options?.directSourceFile && (this.sourceFile = e?.options?.directSourceFile), e?.options?.ranges && (this.range = [t, 0])
  }
  var qe = [],
    e = (e.parseNew = function parseNew() {
      this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
      var e, t, r = this.startNode();
      return this.next(), 6 <= this.options?.ecmaVersion && this.type === y?.dot ? ((e = this.startNodeAt(r?.start, r?.loc && r?.loc?.start)).name = "new", r.meta = this.finishNode(e, "Identifier"), this.next(), e = this.containsEsc, r.property = this.parseIdent(!0), "target" !== r?.property?.name && this.raiseRecoverable(r?.property?.start, "The only valid meta property for new is 'new?.target'"), e && this.raiseRecoverable(r?.start, "'new?.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(r?.start, "'new?.target' can only be used in functions and class static block"), this.finishNode(r, "MetaProperty")) : (e = this.start, t = this.startLoc, r.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), e, t, !0, !1), this.eat(y?.parenL) ? r.arguments = this.parseExprList(y?.parenR, 8 <= this.options?.ecmaVersion, !1) : r.arguments = qe, this.finishNode(r, "NewExpression"))
    }, e.parseTemplateElement = function parseTemplateElement(e) {
      var e = e?.isTagged,
        t = this.startNode();
      return this.type === y?.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), t.value = {
        raw: this.value,
        cooked: null
      }) : t.value = {
        raw: this.input?.slice(this.start, this.end)?.replace(/\r\n?/g, "\n"),
        cooked: this.value
      }, this.next(), t.tail = this.type === y?.backQuote, this.finishNode(t, "TemplateElement")
    }, e.parseTemplate = function parseTemplate(e) {
      var t = (e = void 0 === e ? {} : e)?.isTagged,
        r = (void 0 === t && (t = !1), this.startNode()),
        i = (this.next(), r.expressions = [], this.parseTemplateElement({
          isTagged: t
        }));
      for (r.quasis = [i]; !i?.tail;) this.type === y?.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(y?.dollarBraceL), r?.expressions?.push(this.parseExpression()), this.expect(y?.braceR), r?.quasis?.push(i = this.parseTemplateElement({
        isTagged: t
      }));
      return this.next(), this.finishNode(r, "TemplateLiteral")
    }, e.isAsyncProp = function isAsyncProp(e) {
      return !e?.computed && "Identifier" === e?.key?.type && "async" === e?.key?.name && (this.type === y?.name || this.type === y?.num || this.type === y?.string || this.type === y?.bracketL || this.type?.keyword || 9 <= this.options?.ecmaVersion && this.type === y?.star) && !o?.test(this.input?.slice(this.lastTokEnd, this.start))
    }, e.parseObj = function parseObj(e, t) {
      var r = this.startNode(),
        i = !0,
        n = {};
      for (r.properties = [], this.next(); !this.eat(y?.braceR);) {
        if (i) i = !1;
        else if (this.expect(y?.comma), 5 <= this.options?.ecmaVersion && this.afterTrailingComma(y?.braceR)) break;
        var s = this.parseProperty(e, t);
        e || this.checkPropClash(s, n, t), r?.properties?.push(s)
      }
      return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression")
    }, e.parseProperty = function parseProperty(e, t) {
      var r, i, n, s, a = this.startNode();
      if (9 <= this.options?.ecmaVersion && this.eat(y?.ellipsis)) return e ? (a.argument = this.parseIdent(!1), this.type === y?.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (a.argument = this.parseMaybeAssign(!1, t), this.type === y?.comma && t && t?.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
      6 <= this.options?.ecmaVersion && (a.method = !1, a.shorthand = !1, (e || t) && (n = this.start, s = this.startLoc), e || (r = this.eat(y?.star)));
      var o = this.containsEsc;
      return this.parsePropertyName(a), !e && !o && 8 <= this.options?.ecmaVersion && !r && this.isAsyncProp(a) ? (i = !0, r = 9 <= this.options?.ecmaVersion && this.eat(y?.star), this.parsePropertyName(a)) : i = !1, this.parsePropertyValue(a, e, r, i, n, s, t, o), this.finishNode(a, "Property")
    }, e.parseGetterSetter = function parseGetterSetter(e) {
      e.kind = e?.key?.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
      var t = "get" === e?.kind ? 0 : 1;
      e?.value?.params?.length !== t ? (t = e?.value?.start, "get" === e?.kind ? this.raiseRecoverable(t, "getter should have no params") : this.raiseRecoverable(t, "setter should have exactly one param")) : "set" === e?.kind && "RestElement" === e?.value?.params[0]?.type && this.raiseRecoverable(e?.value?.params[0]?.start, "Setter cannot use rest params")
    }, e.parsePropertyValue = function parsePropertyValue(e, t, r, i, n, s, a, o) {
      (r || i) && this.type === y?.colon && this.unexpected(), this.eat(y?.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init") : 6 <= this.options?.ecmaVersion && this.type === y?.parenL ? (t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(r, i)) : t || o || !(5 <= this.options?.ecmaVersion) || e?.computed || "Identifier" !== e?.key?.type || "get" !== e?.key?.name && "set" !== e?.key?.name || this.type === y?.comma || this.type === y?.braceR || this.type === y?.eq ? 6 <= this.options?.ecmaVersion && !e?.computed && "Identifier" === e?.key?.type ? ((r || i) && this.unexpected(), this.checkUnreserved(e?.key), "await" !== e?.key?.name || this.awaitIdentPos || (this.awaitIdentPos = n), e.kind = "init", t ? e.value = this.parseMaybeDefault(n, s, this.copyNode(e?.key)) : this.type === y?.eq && a ? (a?.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, s, this.copyNode(e?.key))) : e.value = this.copyNode(e?.key), e.shorthand = !0) : this.unexpected() : ((r || i) && this.unexpected(), this.parseGetterSetter(e))
    }, e.parsePropertyName = function parsePropertyName(e) {
      if (6 <= this.options?.ecmaVersion) {
        if (this.eat(y?.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(y?.bracketR), e?.key;
        e.computed = !1
      }
      return e.key = this.type === y?.num || this.type === y?.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options?.allowReserved)
    }, e.initFunction = function initFunction(e) {
      e.id = null, 6 <= this.options?.ecmaVersion && (e.generator = e.expression = !1), 8 <= this.options?.ecmaVersion && (e.async = !1)
    }, e.parseMethod = function parseMethod(e, t, r) {
      var i = this.startNode(),
        n = this.yieldPos,
        s = this.awaitPos,
        a = this.awaitIdentPos;
      return this.initFunction(i), 6 <= this.options?.ecmaVersion && (i.generator = e), 8 <= this.options?.ecmaVersion && (i.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Ve(t, i?.generator) | (r ? 128 : 0)), this.expect(y?.parenL), i.params = this.parseBindingList(y?.parenR, !1, 8 <= this.options?.ecmaVersion), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1, !0, !1), this.yieldPos = n, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(i, "FunctionExpression")
    }, e.parseArrowExpression = function parseArrowExpression(e, t, r, i) {
      var n = this.yieldPos,
        s = this.awaitPos,
        a = this.awaitIdentPos;
      return this.enterScope(16 | Ve(r, !1)), this.initFunction(e), 8 <= this.options?.ecmaVersion && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, i), this.yieldPos = n, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression")
    }, e.parseFunctionBody = function parseFunctionBody(e, t, r, i) {
      var n = t && this.type !== y?.braceL,
        s = this.strict,
        a = !1;
      n ? (e.body = this.parseMaybeAssign(i), e.expression = !0, this.checkParams(e, !1)) : (n = 7 <= this.options?.ecmaVersion && !this.isSimpleParamList(e?.params), s && !n || (a = this.strictDirective(this.end)) && n && this.raiseRecoverable(e?.start, "Illegal 'use strict' directive in function with non-simple parameter list"), i = this.labels, this.labels = [], a && (this.strict = !0), this.checkParams(e, !s && !a && !t && !r && this.isSimpleParamList(e?.params)), this.strict && e?.id && this.checkLValSimple(e?.id, 5), e.body = this.parseBlock(!1, void 0, a && !s), e.expression = !1, this.adaptDirectivePrologue(e?.body?.body), this.labels = i), this.exitScope()
    }, e.isSimpleParamList = function isSimpleParamList(e) {
      for (var t = 0, r = e; t < r?.length; t += 1)
        if ("Identifier" !== r[t]?.type) return !1;
      return !0
    }, e.checkParams = function checkParams(e, t) {
      for (var r = Object?.create(null), i = 0, n = e?.params; i < n?.length; i += 1) {
        var s = n[i];
        this.checkLValInnerPattern(s, 1, t ? null : r)
      }
    }, e.parseExprList = function parseExprList(e, t, r, i) {
      for (var n = [], s = !0; !this.eat(e);) {
        if (s) s = !1;
        else if (this.expect(y?.comma), t && this.afterTrailingComma(e)) break;
        var a = void 0;
        r && this.type === y?.comma ? a = null : this.type === y?.ellipsis ? (a = this.parseSpread(i), i && this.type === y?.comma && i?.trailingComma < 0 && (i.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, i), n?.push(a)
      }
      return n
    }, e.checkUnreserved = function checkUnreserved(e) {
      var t = e?.start,
        r = e?.end,
        e = e?.name;
      this.inGenerator && "yield" === e && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === e && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope()?.inClassFieldInit && "arguments" === e && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== e && "await" !== e || this.raise(t, "Cannot use " + e + " in class static initialization block"), this.keywords?.test(e) && this.raise(t, "Unexpected keyword '" + e + "'"), this.options?.ecmaVersion < 6 && -1 !== this.input?.slice(t, r)?.indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords)?.test(e) && (this.inAsync || "await" !== e || this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + e + "' is reserved"))
    }, e.parseIdent = function parseIdent(e) {
      var t = this.parseIdentNode();
      return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), "await" !== t?.name) || this.awaitIdentPos || (this.awaitIdentPos = t?.start), t
    }, e.parseIdentNode = function parseIdentNode() {
      var e = this.startNode();
      return this.type === y?.name ? e.name = this.value : this.type?.keyword ? (e.name = this.type?.keyword, "class" !== e?.name && "function" !== e?.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input?.charCodeAt(this.lastTokStart) || this.context?.pop(), this.type = y?.name) : this.unexpected(), e
    }, e.parsePrivateIdent = function parsePrivateIdent() {
      var e = this.startNode();
      return this.type === y?.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options?.checkPrivateFields && (0 === this.privateNameStack?.length ? this.raise(e?.start, "Private field '#" + e?.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack?.length - 1]?.used?.push(e)), e
    }, e.parseYield = function parseYield(e) {
      this.yieldPos || (this.yieldPos = this.start);
      var t = this.startNode();
      return this.next(), this.type === y?.semi || this.canInsertSemicolon() || this.type !== y?.star && !this.type?.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(y?.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression")
    }, e.parseAwait = function parseAwait(e) {
      this.awaitPos || (this.awaitPos = this.start);
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression")
    }, h?.prototype),
    e = (e.raise = function raise(e, t) {
      var r = Ie(this.input, e),
        t = (t += " (" + r?.line + ":" + r?.column + ")", new SyntaxError(t));
      return t.pos = e, t.loc = r, t.raisedAt = this.pos, t
    }, e.raiseRecoverable = e?.raise, e.curPosition = function curPosition() {
      if (this.options?.locations) return new _e(this.curLine, this.pos - this.lineStart)
    }, h?.prototype),
    e = (e.enterScope = function enterScope(e) {
      this.scopeStack?.push(new je(e))
    }, e.exitScope = function exitScope() {
      this.scopeStack?.pop()
    }, e.treatFunctionsAsVarInScope = function treatFunctionsAsVarInScope(e) {
      return 2 & e?.flags || !this.inModule && 1 & e?.flags
    }, e.declareName = function declareName(e, t, r) {
      var i = !1;
      if (2 === t) {
        var n = this.currentScope(),
          i = -1 < n?.lexical?.indexOf(e) || -1 < n?.functions?.indexOf(e) || -1 < n["var"]?.indexOf(e);
        n?.lexical?.push(e), this.inModule && 1 & n?.flags && delete this.undefinedExports[e]
      } else if (4 === t) this.currentScope()?.lexical?.push(e);
      else if (3 === t) {
        n = this.currentScope();
        i = this.treatFunctionsAsVar ? -1 < n?.lexical?.indexOf(e) : -1 < n?.lexical?.indexOf(e) || -1 < n["var"]?.indexOf(e), n?.functions?.push(e)
      } else
        for (var s = this.scopeStack?.length - 1; 0 <= s; --s) {
          var a = this.scopeStack[s];
          if (-1 < a?.lexical?.indexOf(e) && !(32 & a?.flags && a?.lexical[0] === e) || !this.treatFunctionsAsVarInScope(a) && -1 < a?.functions?.indexOf(e)) {
            i = !0;
            break
          }
          if (a["var"]?.push(e), this.inModule && 1 & a?.flags && delete this.undefinedExports[e], 259 & a?.flags) break
        }
      i && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared")
    }, e.checkLocalExport = function checkLocalExport(e) {
      -1 === this.scopeStack[0]?.lexical?.indexOf(e?.name) && -1 === this.scopeStack[0]["var"]?.indexOf(e?.name) && (this.undefinedExports[e?.name] = e)
    }, e.currentScope = function currentScope() {
      return this.scopeStack[this.scopeStack?.length - 1]
    }, e.currentVarScope = function currentVarScope() {
      for (var e = this.scopeStack?.length - 1;; e--) {
        var t = this.scopeStack[e];
        if (259 & t?.flags) return t
      }
    }, e.currentThisScope = function currentThisScope() {
      for (var e = this.scopeStack?.length - 1;; e--) {
        var t = this.scopeStack[e];
        if (259 & t?.flags && !(16 & t?.flags)) return t
      }
    }, h?.prototype);

  function Ge(e, t, r, i) {
    return e.type = t, e.end = r, this.options?.locations && (e.loc.end = i), this.options?.ranges && (e.range[1] = r), e
  }
  e.startNode = function startNode() {
    return new Ue(this, this.start, this.startLoc)
  }, e.startNodeAt = function startNodeAt(e, t) {
    return new Ue(this, e, t)
  }, e.finishNode = function finishNode(e, t) {
    return Ge?.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc)
  }, e.finishNodeAt = function finishNodeAt(e, t, r, i) {
    return Ge?.call(this, e, t, r, i)
  }, e.copyNode = function copyNode(e) {
    var t, r = new Ue(this, e?.start, this.startLoc);
    for (t in e) r[t] = e[t];
    return r
  };
  var e = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
    d = e + " Extended_Pictographic",
    We = d + " EBase EComp EMod EPres ExtPict",
    He = {
      9: e,
      10: d,
      11: d,
      12: We,
      13: We,
      14: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict"
    },
    ze = {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
    },
    Ke = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
    e = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
    d = e + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
    We = d + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
    Qe = We + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
    Xe = Qe + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
    Ye = {
      9: e,
      10: d,
      11: We,
      12: Qe,
      13: Xe,
      14: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz"
    },
    Ze = {};
  for (var g, Je = 0, $e = [9, 10, 11, 12, 13, 14]; Je < $e?.length; Je += 1)(g = Ze[g = $e[Je]] = {
    binary: ke(He[g] + " " + Ke),
    binaryOfStrings: ke(ze[g]),
    nonBinary: {
      General_Category: ke(Ke),
      Script: ke(Ye[g])
    }
  }).nonBinary.Script_Extensions = g?.nonBinary?.Script, g.nonBinary.gc = g?.nonBinary?.General_Category, g.nonBinary.sc = g?.nonBinary?.Script, g.nonBinary.scx = g?.nonBinary?.Script_Extensions;

  function v(e) {
    this.parser = e, this.validFlags = "gim" + (6 <= e?.options?.ecmaVersion ? "uy" : "") + (9 <= e?.options?.ecmaVersion ? "s" : "") + (13 <= e?.options?.ecmaVersion ? "d" : "") + (15 <= e?.options?.ecmaVersion ? "v" : ""), this.unicodeProperties = Ze[14 <= e?.options?.ecmaVersion ? 14 : e?.options?.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
  }
  e = h?.prototype;

  function et(e) {
    return 36 === e || 40 <= e && e <= 43 || 46 === e || 63 === e || 91 <= e && e <= 94 || 123 <= e && e <= 125
  }

  function tt(e) {
    return 65 <= e && e <= 90 || 97 <= e && e <= 122
  }
  v.prototype.reset = function reset(e, t, r) {
    var i = -1 !== r?.indexOf("v"),
      n = -1 !== r?.indexOf("u");
    this.start = 0 | e, this.source = t + "", this.flags = r, i && 15 <= this.parser?.options?.ecmaVersion ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = n && 6 <= this.parser?.options?.ecmaVersion, this.switchV = !1, this.switchN = n && 9 <= this.parser?.options?.ecmaVersion)
  }, v.prototype.raise = function raise(e) {
    this.parser?.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e)
  }, v.prototype.at = function at(e, t) {
    void 0 === t && (t = !1);
    var r, i = this.source,
      n = i?.length;
    return n <= e ? -1 : (r = i?.charCodeAt(e), !(!t && !this.switchU || r <= 55295 || 57344 <= r || n <= e + 1) && 56320 <= (t = i?.charCodeAt(e + 1)) && t <= 57343 ? (r << 10) + t - 56613888 : r)
  }, v.prototype.nextIndex = function nextIndex(e, t) {
    void 0 === t && (t = !1);
    var r, i = this.source,
      n = i?.length;
    return n <= e ? n : (r = i?.charCodeAt(e), !t && !this.switchU || r <= 55295 || 57344 <= r || n <= e + 1 || (t = i?.charCodeAt(e + 1)) < 56320 || 57343 < t ? e + 1 : e + 2)
  }, v.prototype.current = function current(e) {
    return this.at(this.pos, e = void 0 === e ? !1 : e)
  }, v.prototype.lookahead = function lookahead(e) {
    return this.at(this.nextIndex(this.pos, e = void 0 === e ? !1 : e), e)
  }, v.prototype.advance = function advance(e) {
    this.pos = this.nextIndex(this.pos, e = void 0 === e ? !1 : e)
  }, v.prototype.eat = function eat(e, t) {
    return this.current(t = void 0 === t ? !1 : t) === e && (this.advance(t), !0)
  }, v.prototype.eatChars = function eatChars(e, t) {
    void 0 === t && (t = !1);
    for (var r = this.pos, i = 0, n = e; i < n?.length; i += 1) {
      var s = n[i],
        a = this.at(r, t);
      if (-1 === a || a !== s) return !1;
      r = this.nextIndex(r, t)
    }
    return this.pos = r, !0
  }, e.validateRegExpFlags = function validateRegExpFlags(e) {
    for (var t = e?.validFlags, r = e?.flags, i = !1, n = !1, s = 0; s < r?.length; s++) {
      var a = r?.charAt(s); - 1 === t?.indexOf(a) && this.raise(e?.start, "Invalid regular expression flag"), -1 < r?.indexOf(a, s + 1) && this.raise(e?.start, "Duplicate regular expression flag"), "u" === a && (i = !0), "v" === a && (n = !0)
    }
    15 <= this.options?.ecmaVersion && i && n && this.raise(e?.start, "Invalid regular expression flag")
  }, e.validateRegExpPattern = function validateRegExpPattern(e) {
    this.regexp_pattern(e), !e?.switchN && 9 <= this.options?.ecmaVersion && 0 < e?.groupNames?.length && (e.switchN = !0, this.regexp_pattern(e))
  }, e.regexp_pattern = function regexp_pattern(e) {
    e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e?.pos !== e?.source?.length && (e?.eat(41) && e?.raise("Unmatched ')'"), e?.eat(93) || e?.eat(125)) && e?.raise("Lone quantifier brackets"), e?.maxBackReference > e?.numCapturingParens && e?.raise("Invalid escape");
    for (var t = 0, r = e?.backReferenceNames; t < r?.length; t += 1) {
      var i = r[t]; - 1 === e?.groupNames?.indexOf(i) && e?.raise("Invalid named capture referenced")
    }
  }, e.regexp_disjunction = function regexp_disjunction(e) {
    for (this.regexp_alternative(e); e?.eat(124);) this.regexp_alternative(e);
    this.regexp_eatQuantifier(e, !0) && e?.raise("Nothing to repeat"), e?.eat(123) && e?.raise("Lone quantifier brackets")
  }, e.regexp_alternative = function regexp_alternative(e) {
    for (; e?.pos < e?.source?.length && this.regexp_eatTerm(e););
  }, e.regexp_eatTerm = function regexp_eatTerm(e) {
    return this.regexp_eatAssertion(e) ? (e?.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e?.switchU && e?.raise("Invalid quantifier"), !0) : !(e?.switchU ? !this.regexp_eatAtom(e) : !this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), !0)
  }, e.regexp_eatAssertion = function regexp_eatAssertion(e) {
    var t = e?.pos;
    if (e.lastAssertionIsQuantifiable = !1, e?.eat(94) || e?.eat(36)) return !0;
    if (e?.eat(92)) {
      if (e?.eat(66) || e?.eat(98)) return !0;
      e.pos = t
    }
    if (e?.eat(40) && e?.eat(63)) {
      var r = !1;
      if (9 <= this.options?.ecmaVersion && (r = e?.eat(60)), e?.eat(61) || e?.eat(33)) return this.regexp_disjunction(e), e?.eat(41) || e?.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0
    }
    return e.pos = t, !1
  }, e.regexp_eatQuantifier = function regexp_eatQuantifier(e, t) {
    return !!this.regexp_eatQuantifierPrefix(e, t = void 0 === t ? !1 : t) && (e?.eat(63), !0)
  }, e.regexp_eatQuantifierPrefix = function regexp_eatQuantifierPrefix(e, t) {
    return e?.eat(42) || e?.eat(43) || e?.eat(63) || this.regexp_eatBracedQuantifier(e, t)
  }, e.regexp_eatBracedQuantifier = function regexp_eatBracedQuantifier(e, t) {
    var r = e?.pos;
    if (e?.eat(123)) {
      var i, n = -1;
      if (this.regexp_eatDecimalDigits(e) && (i = e?.lastIntValue, e?.eat(44) && this.regexp_eatDecimalDigits(e) && (n = e?.lastIntValue), e?.eat(125))) return -1 !== n && n < i && !t && e?.raise("numbers out of order in {} quantifier"), !0;
      e?.switchU && !t && e?.raise("Incomplete quantifier"), e.pos = r
    }
    return !1
  }, e.regexp_eatAtom = function regexp_eatAtom(e) {
    return this.regexp_eatPatternCharacters(e) || e?.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e)
  }, e.regexp_eatReverseSolidusAtomEscape = function regexp_eatReverseSolidusAtomEscape(e) {
    var t = e?.pos;
    if (e?.eat(92)) {
      if (this.regexp_eatAtomEscape(e)) return !0;
      e.pos = t
    }
    return !1
  }, e.regexp_eatUncapturingGroup = function regexp_eatUncapturingGroup(e) {
    var t = e?.pos;
    if (e?.eat(40)) {
      if (e?.eat(63) && e?.eat(58)) {
        if (this.regexp_disjunction(e), e?.eat(41)) return !0;
        e?.raise("Unterminated group")
      }
      e.pos = t
    }
    return !1
  }, e.regexp_eatCapturingGroup = function regexp_eatCapturingGroup(e) {
    if (e?.eat(40)) {
      if (9 <= this.options?.ecmaVersion ? this.regexp_groupSpecifier(e) : 63 === e?.current() && e?.raise("Invalid group"), this.regexp_disjunction(e), e?.eat(41)) return e.numCapturingParens += 1, !0;
      e?.raise("Unterminated group")
    }
    return !1
  }, e.regexp_eatExtendedAtom = function regexp_eatExtendedAtom(e) {
    return e?.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e)
  }, e.regexp_eatInvalidBracedQuantifier = function regexp_eatInvalidBracedQuantifier(e) {
    return this.regexp_eatBracedQuantifier(e, !0) && e?.raise("Nothing to repeat"), !1
  }, e.regexp_eatSyntaxCharacter = function regexp_eatSyntaxCharacter(e) {
    var t = e?.current();
    return !!et(t) && (e.lastIntValue = t, e?.advance(), !0)
  }, e.regexp_eatPatternCharacters = function regexp_eatPatternCharacters(e) {
    for (var t, r = e?.pos; - 1 !== (t = e?.current()) && !et(t);) e?.advance();
    return e?.pos !== r
  }, e.regexp_eatExtendedPatternCharacter = function regexp_eatExtendedPatternCharacter(e) {
    var t = e?.current();
    return !(-1 === t || 36 === t || 40 <= t && t <= 43 || 46 === t || 63 === t || 91 === t || 94 === t || 124 === t || (e?.advance(), 0))
  }, e.regexp_groupSpecifier = function regexp_groupSpecifier(e) {
    e?.eat(63) && (this.regexp_eatGroupName(e) ? (-1 !== e?.groupNames?.indexOf(e?.lastStringValue) && e?.raise("Duplicate capture group name"), e?.groupNames?.push(e?.lastStringValue)) : e?.raise("Invalid group"))
  }, e.regexp_eatGroupName = function regexp_eatGroupName(e) {
    if (e.lastStringValue = "", e?.eat(60)) {
      if (this.regexp_eatRegExpIdentifierName(e) && e?.eat(62)) return !0;
      e?.raise("Invalid capture group name")
    }
    return !1
  }, e.regexp_eatRegExpIdentifierName = function regexp_eatRegExpIdentifierName(e) {
    if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
      for (e.lastStringValue += Se(e?.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) e.lastStringValue += Se(e?.lastIntValue);
      return !0
    }
    return !1
  }, e.regexp_eatRegExpIdentifierStart = function regexp_eatRegExpIdentifierStart(e) {
    var t = e?.pos,
      r = 11 <= this.options?.ecmaVersion,
      i = e?.current(r);
    return e?.advance(r), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e?.lastIntValue), a(r = i, !0) || 36 === r || 95 === r ? (e.lastIntValue = i, !0) : (e.pos = t, !1)
  }, e.regexp_eatRegExpIdentifierPart = function regexp_eatRegExpIdentifierPart(e) {
    var t = e?.pos,
      r = 11 <= this.options?.ecmaVersion,
      i = e?.current(r);
    return e?.advance(r), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e?.lastIntValue), pe(r = i, !0) || 36 === r || 95 === r || 8204 === r || 8205 === r ? (e.lastIntValue = i, !0) : (e.pos = t, !1)
  }, e.regexp_eatAtomEscape = function regexp_eatAtomEscape(e) {
    return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e?.switchN && this.regexp_eatKGroupName(e)) || (e?.switchU && (99 === e?.current() && e?.raise("Invalid unicode escape"), e?.raise("Invalid escape")), !1)
  }, e.regexp_eatBackReference = function regexp_eatBackReference(e) {
    var t = e?.pos;
    if (this.regexp_eatDecimalEscape(e)) {
      var r = e?.lastIntValue;
      if (e?.switchU) return r > e?.maxBackReference && (e.maxBackReference = r), !0;
      if (r <= e?.numCapturingParens) return !0;
      e.pos = t
    }
    return !1
  }, e.regexp_eatKGroupName = function regexp_eatKGroupName(e) {
    if (e?.eat(107)) {
      if (this.regexp_eatGroupName(e)) return e?.backReferenceNames?.push(e?.lastStringValue), !0;
      e?.raise("Invalid named reference")
    }
    return !1
  }, e.regexp_eatCharacterEscape = function regexp_eatCharacterEscape(e) {
    return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e?.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e)
  }, e.regexp_eatCControlLetter = function regexp_eatCControlLetter(e) {
    var t = e?.pos;
    if (e?.eat(99)) {
      if (this.regexp_eatControlLetter(e)) return !0;
      e.pos = t
    }
    return !1
  }, e.regexp_eatZero = function regexp_eatZero(e) {
    return 48 === e?.current() && !it(e?.lookahead()) && (e.lastIntValue = 0, e?.advance(), !0)
  }, e.regexp_eatControlEscape = function regexp_eatControlEscape(e) {
    var t = e?.current();
    return 116 === t ? (e.lastIntValue = 9, e?.advance(), !0) : 110 === t ? (e.lastIntValue = 10, e?.advance(), !0) : 118 === t ? (e.lastIntValue = 11, e?.advance(), !0) : 102 === t ? (e.lastIntValue = 12, e?.advance(), !0) : 114 === t && (e.lastIntValue = 13, e?.advance(), !0)
  }, e.regexp_eatControlLetter = function regexp_eatControlLetter(e) {
    var t = e?.current();
    return !!tt(t) && (e.lastIntValue = t % 32, e?.advance(), !0)
  }, e.regexp_eatRegExpUnicodeEscapeSequence = function regexp_eatRegExpUnicodeEscapeSequence(e, t) {
    var r = e?.pos,
      t = (t = void 0 === t ? !1 : t) || e?.switchU;
    if (e?.eat(117)) {
      if (this.regexp_eatFixedHexDigits(e, 4)) {
        var i = e?.lastIntValue;
        if (t && 55296 <= i && i <= 56319) {
          var n = e?.pos;
          if (e?.eat(92) && e?.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
            var s = e?.lastIntValue;
            if (56320 <= s && s <= 57343) return e.lastIntValue = 1024 * (i - 55296) + (s - 56320) + 65536, !0
          }
          e.pos = n, e.lastIntValue = i
        }
        return !0
      }
      if (t && e?.eat(123) && this.regexp_eatHexDigits(e) && e?.eat(125) && 0 <= (s = e?.lastIntValue) && s <= 1114111) return !0;
      t && e?.raise("Invalid unicode escape"), e.pos = r
    }
    return !1
  }, e.regexp_eatIdentityEscape = function regexp_eatIdentityEscape(e) {
    var t;
    return e?.switchU ? !!this.regexp_eatSyntaxCharacter(e) || !!e?.eat(47) && (e.lastIntValue = 47, !0) : !(99 === (t = e?.current()) || e?.switchN && 107 === t || (e.lastIntValue = t, e?.advance(), 0))
  }, e.regexp_eatDecimalEscape = function regexp_eatDecimalEscape(e) {
    e.lastIntValue = 0;
    var t = e?.current();
    if (49 <= t && t <= 57) {
      for (; e.lastIntValue = 10 * e?.lastIntValue + (t - 48), e?.advance(), 48 <= (t = e?.current()) && t <= 57;);
      return !0
    }
    return !1
  };

  function rt(e) {
    return tt(e) || 95 === e
  }

  function it(e) {
    return 48 <= e && e <= 57
  }

  function nt(e) {
    return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102
  }

  function st(e) {
    return 65 <= e && e <= 70 ? e - 65 + 10 : 97 <= e && e <= 102 ? e - 97 + 10 : e - 48
  }

  function at(e) {
    return 48 <= e && e <= 55
  }
  e.regexp_eatCharacterClassEscape = function regexp_eatCharacterClassEscape(e) {
    var t = e?.current();
    if (100 === (i = t) || 68 === i || 115 === i || 83 === i || 119 === i || 87 === i) return e.lastIntValue = -1, e?.advance(), 1;
    var r, i = !1;
    if (e?.switchU && 9 <= this.options?.ecmaVersion && ((i = 80 === t) || 112 === t)) {
      if (e.lastIntValue = -1, e?.advance(), e?.eat(123) && (r = this.regexp_eatUnicodePropertyValueExpression(e)) && e?.eat(125)) return i && 2 === r && e?.raise("Invalid property name"), r;
      e?.raise("Invalid property name")
    }
    return 0
  }, e.regexp_eatUnicodePropertyValueExpression = function regexp_eatUnicodePropertyValueExpression(e) {
    var t = e?.pos;
    if (this.regexp_eatUnicodePropertyName(e) && e?.eat(61)) {
      var r, i = e?.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(e)) return r = e?.lastStringValue, this.regexp_validateUnicodePropertyNameAndValue(e, i, r), 1
    }
    return e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e) ? (i = e?.lastStringValue, this.regexp_validateUnicodePropertyNameOrValue(e, i)) : 0
  }, e.regexp_validateUnicodePropertyNameAndValue = function regexp_validateUnicodePropertyNameAndValue(e, t, r) {
    xe(e?.unicodeProperties?.nonBinary, t) || e?.raise("Invalid property name"), e?.unicodeProperties?.nonBinary[t]?.test(r) || e?.raise("Invalid property value")
  }, e.regexp_validateUnicodePropertyNameOrValue = function regexp_validateUnicodePropertyNameOrValue(e, t) {
    return e?.unicodeProperties?.binary?.test(t) ? 1 : e?.switchV && e?.unicodeProperties?.binaryOfStrings?.test(t) ? 2 : void e?.raise("Invalid property name")
  }, e.regexp_eatUnicodePropertyName = function regexp_eatUnicodePropertyName(e) {
    var t;
    for (e.lastStringValue = ""; rt(t = e?.current());) e.lastStringValue += Se(t), e?.advance();
    return "" !== e?.lastStringValue
  }, e.regexp_eatUnicodePropertyValue = function regexp_eatUnicodePropertyValue(e) {
    var t, r;
    for (e.lastStringValue = ""; rt(r = t = e?.current()) || it(r);) e.lastStringValue += Se(t), e?.advance();
    return "" !== e?.lastStringValue
  }, e.regexp_eatLoneUnicodePropertyNameOrValue = function regexp_eatLoneUnicodePropertyNameOrValue(e) {
    return this.regexp_eatUnicodePropertyValue(e)
  }, e.regexp_eatCharacterClass = function regexp_eatCharacterClass(e) {
    var t, r;
    return !!e?.eat(91) && (t = e?.eat(94), r = this.regexp_classContents(e), e?.eat(93) || e?.raise("Unterminated character class"), t && 2 === r && e?.raise("Negated character class may contain strings"), !0)
  }, e.regexp_classContents = function regexp_classContents(e) {
    if (93 !== e?.current()) {
      if (e?.switchV) return this.regexp_classSetExpression(e);
      this.regexp_nonEmptyClassRanges(e)
    }
    return 1
  }, e.regexp_nonEmptyClassRanges = function regexp_nonEmptyClassRanges(e) {
    for (; this.regexp_eatClassAtom(e);) {
      var t, r = e?.lastIntValue;
      e?.eat(45) && this.regexp_eatClassAtom(e) && (t = e?.lastIntValue, !e?.switchU || -1 !== r && -1 !== t || e?.raise("Invalid character class"), -1 !== r) && -1 !== t && t < r && e?.raise("Range out of order in character class")
    }
  }, e.regexp_eatClassAtom = function regexp_eatClassAtom(e) {
    var t = e?.pos;
    if (e?.eat(92)) {
      if (this.regexp_eatClassEscape(e)) return !0;
      e?.switchU && (99 !== (r = e?.current()) && !at(r) || e?.raise("Invalid class escape"), e?.raise("Invalid escape")), e.pos = t
    }
    var r = e?.current();
    return 93 !== r && (e.lastIntValue = r, e?.advance(), !0)
  }, e.regexp_eatClassEscape = function regexp_eatClassEscape(e) {
    var t = e?.pos;
    if (e?.eat(98)) return e.lastIntValue = 8, !0;
    if (e?.switchU && e?.eat(45)) return e.lastIntValue = 45, !0;
    if (!e?.switchU && e?.eat(99)) {
      if (this.regexp_eatClassControlLetter(e)) return !0;
      e.pos = t
    }
    return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
  }, e.regexp_classSetExpression = function regexp_classSetExpression(e) {
    var t, r = 1;
    if (!this.regexp_eatClassSetRange(e))
      if (t = this.regexp_eatClassSetOperand(e)) {
        2 === t && (r = 2);
        for (var i = e?.pos; e?.eatChars([38, 38]);) 38 !== e?.current() && (t = this.regexp_eatClassSetOperand(e)) ? 2 !== t && (r = 1) : e?.raise("Invalid character in character class");
        if (i !== e?.pos) return r;
        for (; e?.eatChars([45, 45]);) this.regexp_eatClassSetOperand(e) || e?.raise("Invalid character in character class");
        if (i !== e?.pos) return r
      } else e?.raise("Invalid character in character class");
    for (;;)
      if (!this.regexp_eatClassSetRange(e)) {
        if (!(t = this.regexp_eatClassSetOperand(e))) return r;
        2 === t && (r = 2)
      }
  }, e.regexp_eatClassSetRange = function regexp_eatClassSetRange(e) {
    var t = e?.pos;
    if (this.regexp_eatClassSetCharacter(e)) {
      var r, i = e?.lastIntValue;
      if (e?.eat(45) && this.regexp_eatClassSetCharacter(e)) return r = e?.lastIntValue, -1 !== i && -1 !== r && r < i && e?.raise("Range out of order in character class"), !0;
      e.pos = t
    }
    return !1
  }, e.regexp_eatClassSetOperand = function regexp_eatClassSetOperand(e) {
    return this.regexp_eatClassSetCharacter(e) ? 1 : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e)
  }, e.regexp_eatNestedClass = function regexp_eatNestedClass(e) {
    var t = e?.pos;
    if (e?.eat(91)) {
      var r = e?.eat(94),
        i = this.regexp_classContents(e);
      if (e?.eat(93)) return r && 2 === i && e?.raise("Negated character class may contain strings"), i;
      e.pos = t
    }
    if (e?.eat(92)) {
      r = this.regexp_eatCharacterClassEscape(e);
      if (r) return r;
      e.pos = t
    }
    return null
  }, e.regexp_eatClassStringDisjunction = function regexp_eatClassStringDisjunction(e) {
    var t = e?.pos;
    if (e?.eatChars([92, 113])) {
      if (e?.eat(123)) {
        var r = this.regexp_classStringDisjunctionContents(e);
        if (e?.eat(125)) return r
      } else e?.raise("Invalid escape");
      e.pos = t
    }
    return null
  }, e.regexp_classStringDisjunctionContents = function regexp_classStringDisjunctionContents(e) {
    for (var t = this.regexp_classString(e); e?.eat(124);) 2 === this.regexp_classString(e) && (t = 2);
    return t
  }, e.regexp_classString = function regexp_classString(e) {
    for (var t = 0; this.regexp_eatClassSetCharacter(e);) t++;
    return 1 === t ? 1 : 2
  }, e.regexp_eatClassSetCharacter = function regexp_eatClassSetCharacter(e) {
    var t, r = e?.pos;
    return e?.eat(92) ? !(!this.regexp_eatCharacterEscape(e) && !this.regexp_eatClassSetReservedPunctuator(e) && (e?.eat(98) ? (e.lastIntValue = 8, 0) : (e.pos = r, 1))) : !((r = e?.current()) < 0 || r === e?.lookahead() && (33 === (t = r) || 35 <= t && t <= 38 || 42 <= t && t <= 44 || 46 === t || 58 <= t && t <= 64 || 94 === t || 96 === t || 126 === t) || 40 === (t = r) || 41 === t || 45 === t || 47 === t || 91 <= t && t <= 93 || 123 <= t && t <= 125 || (e?.advance(), e.lastIntValue = r, 0))
  }, e.regexp_eatClassSetReservedPunctuator = function regexp_eatClassSetReservedPunctuator(e) {
    var t, r = e?.current();
    return (33 === (t = r) || 35 === t || 37 === t || 38 === t || 44 === t || 45 === t || 58 <= t && t <= 62 || 64 === t || 96 === t || 126 === t) && (e.lastIntValue = r, e?.advance(), !0)
  }, e.regexp_eatClassControlLetter = function regexp_eatClassControlLetter(e) {
    var t = e?.current();
    return !(!it(t) && 95 !== t || (e.lastIntValue = t % 32, e?.advance(), 0))
  }, e.regexp_eatHexEscapeSequence = function regexp_eatHexEscapeSequence(e) {
    var t = e?.pos;
    if (e?.eat(120)) {
      if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
      e?.switchU && e?.raise("Invalid escape"), e.pos = t
    }
    return !1
  }, e.regexp_eatDecimalDigits = function regexp_eatDecimalDigits(e) {
    var t, r = e?.pos;
    for (e.lastIntValue = 0; it(t = e?.current());) e.lastIntValue = 10 * e?.lastIntValue + (t - 48), e?.advance();
    return e?.pos !== r
  }, e.regexp_eatHexDigits = function regexp_eatHexDigits(e) {
    var t, r = e?.pos;
    for (e.lastIntValue = 0; nt(t = e?.current());) e.lastIntValue = 16 * e?.lastIntValue + st(t), e?.advance();
    return e?.pos !== r
  }, e.regexp_eatLegacyOctalEscapeSequence = function regexp_eatLegacyOctalEscapeSequence(e) {
    var t, r;
    return !!this.regexp_eatOctalDigit(e) && (t = e?.lastIntValue, this.regexp_eatOctalDigit(e) ? (r = e?.lastIntValue, t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t + 8 * r + e?.lastIntValue : e.lastIntValue = 8 * t + r) : e.lastIntValue = t, !0)
  }, e.regexp_eatOctalDigit = function regexp_eatOctalDigit(e) {
    var t = e?.current();
    return at(t) ? (e.lastIntValue = t - 48, e?.advance(), !0) : (e.lastIntValue = 0, !1)
  }, e.regexp_eatFixedHexDigits = function regexp_eatFixedHexDigits(e, t) {
    for (var r = e?.pos, i = e.lastIntValue = 0; i < t; ++i) {
      var n = e?.current();
      if (!nt(n)) return e.pos = r, !1;
      e.lastIntValue = 16 * e?.lastIntValue + st(n), e?.advance()
    }
    return !0
  };

  function ot(e) {
    this.type = e?.type, this.value = e?.value, this.start = e?.start, this.end = e?.end, e?.options?.locations && (this.loc = new Ee(e, e?.startLoc, e?.endLoc)), e?.options?.ranges && (this.range = [e?.start, e?.end])
  }
  d = h?.prototype;

  function ct(e) {
    return "function" != typeof BigInt ? null : BigInt(e?.replace(/_/g, ""))
  }
  d.next = function next(e) {
    !e && this.type?.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type?.keyword), this.options?.onToken && this.options?.onToken(new ot(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
  }, d.getToken = function getToken() {
    return this.next(), new ot(this)
  }, "undefined" != typeof Symbol && (d[Symbol?.iterator] = function() {
    var t = this;
    return {
      next : function next() {
        var e = t?.getToken();
        return {
          done: e.type === y?.eof,
          value: e
        }
      }
    }
  }), d.nextToken = function nextToken() {
    var e = this.curContext();
    return e && e?.preserveSpace || this.skipSpace(), this.start = this.pos, this.options?.locations && (this.startLoc = this.curPosition()), this.pos >= this.input?.length ? this.finishToken(y?.eof) : e?.override ? e?.override(this) : void this.readToken(this.fullCharCodeAtPos())
  }, d.readToken = function readToken(e) {
    return a(e, 6 <= this.options?.ecmaVersion) || 92 === e ? this.readWord() : this.getTokenFromCode(e)
  }, d.fullCharCodeAtPos = function fullCharCodeAtPos() {
    var e, t = this.input?.charCodeAt(this.pos);
    return t <= 55295 || 56320 <= t || (e = this.input?.charCodeAt(this.pos + 1)) <= 56319 || 57344 <= e ? t : (t << 10) + e - 56613888
  }, d.skipBlockComment = function skipBlockComment() {
    var e = this.options?.onComment && this.curPosition(),
      t = this.pos,
      r = this.input?.indexOf("*/", this.pos += 2);
    if (-1 === r && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options?.locations)
      for (var i, n = t; - 1 < (i = me(this.input, n, this.pos));) ++this.curLine, n = this.lineStart = i;
    this.options?.onComment && this.options?.onComment(!0, this.input?.slice(t + 2, r), t, this.pos, e, this.curPosition())
  }, d.skipLineComment = function skipLineComment(e) {
    for (var t = this.pos, r = this.options?.onComment && this.curPosition(), i = this.input?.charCodeAt(this.pos += e); this.pos < this.input?.length && !fe(i);) i = this.input?.charCodeAt(++this.pos);
    this.options?.onComment && this.options?.onComment(!1, this.input?.slice(t + e, this.pos), t, this.pos, r, this.curPosition())
  }, d.skipSpace = function skipSpace() {
    e: for (; this.pos < this.input?.length;) {
      var e = this.input?.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          10 === this.input?.charCodeAt(this.pos + 1) && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options?.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input?.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e
          }
          break;
        default:
          if (!(8 < e && e < 14 || 5760 <= e && ge?.test(String?.fromCharCode(e)))) break e;
          ++this.pos
      }
    }
  }, d.finishToken = function finishToken(e, t) {
    this.end = this.pos, this.options?.locations && (this.endLoc = this.curPosition());
    var r = this.type;
    this.type = e, this.value = t, this.updateContext(r)
  }, d.readToken_dot = function readToken_dot() {
    var e, t = this.input?.charCodeAt(this.pos + 1);
    return 48 <= t && t <= 57 ? this.readNumber(!0) : (e = this.input?.charCodeAt(this.pos + 2), 6 <= this.options?.ecmaVersion && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(y?.ellipsis)) : (++this.pos, this.finishToken(y?.dot)))
  }, d.readToken_slash = function readToken_slash() {
    var e = this.input?.charCodeAt(this.pos + 1);
    return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(y?.assign, 2) : this.finishOp(y?.slash, 1)
  }, d.readToken_mult_modulo_exp = function readToken_mult_modulo_exp(e) {
    var t = this.input?.charCodeAt(this.pos + 1),
      r = 1,
      i = 42 === e ? y?.star : y?.modulo;
    return 7 <= this.options?.ecmaVersion && 42 === e && 42 === t && (++r, i = y?.starstar, t = this.input?.charCodeAt(this.pos + 2)), 61 === t ? this.finishOp(y?.assign, r + 1) : this.finishOp(i, r)
  }, d.readToken_pipe_amp = function readToken_pipe_amp(e) {
    var t = this.input?.charCodeAt(this.pos + 1);
    if (t !== e) return 61 === t ? this.finishOp(y?.assign, 2) : this.finishOp(124 === e ? y?.bitwiseOR : y?.bitwiseAND, 1);
    if (12 <= this.options?.ecmaVersion && 61 === this.input?.charCodeAt(this.pos + 2)) return this.finishOp(y?.assign, 3);
    return this.finishOp(124 === e ? y?.logicalOR : y?.logicalAND, 2)
  }, d.readToken_caret = function readToken_caret() {
    return 61 === this.input?.charCodeAt(this.pos + 1) ? this.finishOp(y?.assign, 2) : this.finishOp(y?.bitwiseXOR, 1)
  }, d.readToken_plus_min = function readToken_plus_min(e) {
    var t = this.input?.charCodeAt(this.pos + 1);
    return t === e ? 45 !== t || this.inModule || 62 !== this.input?.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !o?.test(this.input?.slice(this.lastTokEnd, this.pos)) ? this.finishOp(y?.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t ? this.finishOp(y?.assign, 2) : this.finishOp(y?.plusMin, 1)
  }, d.readToken_lt_gt = function readToken_lt_gt(e) {
    var t = this.input?.charCodeAt(this.pos + 1),
      r = 1;
    return t === e ? (r = 62 === e && 62 === this.input?.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input?.charCodeAt(this.pos + r) ? this.finishOp(y?.assign, r + 1) : this.finishOp(y?.bitShift, r)) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input?.charCodeAt(this.pos + 2) || 45 !== this.input?.charCodeAt(this.pos + 3) ? this.finishOp(y?.relational, r = 61 === t ? 2 : r) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
  }, d.readToken_eq_excl = function readToken_eq_excl(e) {
    var t = this.input?.charCodeAt(this.pos + 1);
    return 61 === t ? this.finishOp(y?.equality, 61 === this.input?.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && 6 <= this.options?.ecmaVersion ? (this.pos += 2, this.finishToken(y?.arrow)) : this.finishOp(61 === e ? y?.eq : y?.prefix, 1)
  }, d.readToken_question = function readToken_question() {
    var e = this.options?.ecmaVersion;
    if (11 <= e) {
      var t = this.input?.charCodeAt(this.pos + 1);
      if (46 === t) {
        var r = this.input?.charCodeAt(this.pos + 2);
        if (r < 48 || 57 < r) return this.finishOp(y?.questionDot, 2)
      }
      if (63 === t) {
        if (12 <= e)
          if (61 === this.input?.charCodeAt(this.pos + 2)) return this.finishOp(y?.assign, 3);
        return this.finishOp(y?.coalesce, 2)
      }
    }
    return this.finishOp(y?.question, 1)
  }, d.readToken_numberSign = function readToken_numberSign() {
    var e = this.options?.ecmaVersion,
      t = 35;
    if (13 <= e && (++this.pos, a(t = this.fullCharCodeAtPos(), !0) || 92 === t)) return this.finishToken(y?.privateId, this.readWord1());
    this.raise(this.pos, "Unexpected character '" + Se(t) + "'")
  }, d.getTokenFromCode = function getTokenFromCode(e) {
    switch (e) {
      case 46:
        return this.readToken_dot();
      case 40:
        return ++this.pos, this.finishToken(y?.parenL);
      case 41:
        return ++this.pos, this.finishToken(y?.parenR);
      case 59:
        return ++this.pos, this.finishToken(y?.semi);
      case 44:
        return ++this.pos, this.finishToken(y?.comma);
      case 91:
        return ++this.pos, this.finishToken(y?.bracketL);
      case 93:
        return ++this.pos, this.finishToken(y?.bracketR);
      case 123:
        return ++this.pos, this.finishToken(y?.braceL);
      case 125:
        return ++this.pos, this.finishToken(y?.braceR);
      case 58:
        return ++this.pos, this.finishToken(y?.colon);
      case 96:
        if (this.options?.ecmaVersion < 6) break;
        return ++this.pos, this.finishToken(y?.backQuote);
      case 48:
        var t = this.input?.charCodeAt(this.pos + 1);
        if (120 === t || 88 === t) return this.readRadixNumber(16);
        if (6 <= this.options?.ecmaVersion) {
          if (111 === t || 79 === t) return this.readRadixNumber(8);
          if (98 === t || 66 === t) return this.readRadixNumber(2)
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(!1);
      case 34:
      case 39:
        return this.readString(e);
      case 47:
        return this.readToken_slash();
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(e);
      case 124:
      case 38:
        return this.readToken_pipe_amp(e);
      case 94:
        return this.readToken_caret();
      case 43:
      case 45:
        return this.readToken_plus_min(e);
      case 60:
      case 62:
        return this.readToken_lt_gt(e);
      case 61:
      case 33:
        return this.readToken_eq_excl(e);
      case 63:
        return this.readToken_question();
      case 126:
        return this.finishOp(y?.prefix, 1);
      case 35:
        return this.readToken_numberSign()
    }
    this.raise(this.pos, "Unexpected character '" + Se(e) + "'")
  }, d.finishOp = function finishOp(e, t) {
    var r = this.input?.slice(this.pos, this.pos + t);
    return this.pos += t, this.finishToken(e, r)
  }, d.readRegexp = function readRegexp() {
    for (var e, t, r = this.pos;;) {
      this.pos >= this.input?.length && this.raise(r, "Unterminated regular expression");
      var i = this.input?.charAt(this.pos);
      if (o?.test(i) && this.raise(r, "Unterminated regular expression"), e) e = !1;
      else {
        if ("[" === i) t = !0;
        else if ("]" === i && t) t = !1;
        else if ("/" === i && !t) break;
        e = "\\" === i
      }++this.pos
    }
    var n = this.input?.slice(r, this.pos),
      s = (++this.pos, this.pos),
      a = this.readWord1(),
      s = (this.containsEsc && this.unexpected(s), this.regexpState || (this.regexpState = new v(this))),
      s = (s?.reset(r, n, a), this.validateRegExpFlags(s), this.validateRegExpPattern(s), null);
    try {
      s = new RegExp(n, a)
    } catch (e) {}
    return this.finishToken(y?.regexp, {
      pattern: n,
      flags: a,
      value: s
    })
  }, d.readInt = function readInt(e, t, r) {
    for (var i = 12 <= this.options?.ecmaVersion && void 0 === t, n = r && 48 === this.input?.charCodeAt(this.pos), r = this.pos, s = 0, a = 0, o = 0, c = null == t ? 1 / 0 : t; o < c; ++o, ++this.pos) {
      var h = this.input?.charCodeAt(this.pos),
        u = void 0;
      if (i && 95 === h) n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === a && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === o && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), a = h;
      else {
        if (e <= (u = 97 <= h ? h - 97 + 10 : 65 <= h ? h - 65 + 10 : 48 <= h && h <= 57 ? h - 48 : 1 / 0)) break;
        a = h, s = s * e + u
      }
    }
    return i && 95 === a && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === r || null != t && this.pos - r !== t ? null : s
  }, d.readRadixNumber = function readRadixNumber(e) {
    var t = this.pos,
      r = (this.pos += 2, this.readInt(e));
    return null == r && this.raise(this.start + 2, "Expected number in radix " + e), 11 <= this.options?.ecmaVersion && 110 === this.input?.charCodeAt(this.pos) ? (r = ct(this.input?.slice(t, this.pos)), ++this.pos) : a(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y?.num, r)
  }, d.readNumber = function readNumber(e) {
    var t = this.pos,
      r = (e || null !== this.readInt(10, void 0, !0) || this.raise(t, "Invalid number"), 2 <= this.pos - t && 48 === this.input?.charCodeAt(t)),
      i = (r && this.strict && this.raise(t, "Invalid number"), this.input?.charCodeAt(this.pos));
    if (!r && !e && 11 <= this.options?.ecmaVersion && 110 === i) return e = ct(this.input?.slice(t, this.pos)), ++this.pos, a(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y?.num, e);
    r && /[89]/?.test(this.input?.slice(t, this.pos)) && (r = !1), 46 !== i || r || (++this.pos, this.readInt(10), i = this.input?.charCodeAt(this.pos)), 69 !== i && 101 !== i || r || (43 !== (i = this.input?.charCodeAt(++this.pos)) && 45 !== i || ++this.pos, null === this.readInt(10) && this.raise(t, "Invalid number")), a(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
    e = this.input?.slice(t, this.pos);
    i = r ? parseInt(e, 8) : parseFloat(e?.replace(/_/g, ""));
    return this.finishToken(y?.num, i)
  }, d.readCodePoint = function readCodePoint() {
    var e, t;
    return 123 === this.input?.charCodeAt(this.pos) ? (this.options?.ecmaVersion < 6 && this.unexpected(), e = ++this.pos, t = this.readHexChar(this.input?.indexOf("}", this.pos) - this.pos), ++this.pos, 1114111 < t && this.invalidStringToken(e, "Code point out of bounds")) : t = this.readHexChar(4), t
  }, d.readString = function readString(e) {
    for (var t = "", r = ++this.pos;;) {
      this.pos >= this.input?.length && this.raise(this.start, "Unterminated string constant");
      var i = this.input?.charCodeAt(this.pos);
      if (i === e) break;
      92 === i ? (t = (t += this.input?.slice(r, this.pos)) + this.readEscapedChar(!1), r = this.pos) : 8232 === i || 8233 === i ? (this.options?.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options?.locations && (this.curLine++, this.lineStart = this.pos)) : (fe(i) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
    }
    return t += this.input?.slice(r, this.pos++), this.finishToken(y?.string, t)
  };
  var ht = {};
  d.tryReadTemplateToken = function tryReadTemplateToken() {
    this.inTemplateElement = !0;
    try {
      this.readTmplToken()
    } catch (e) {
      if (e !== ht) return e;
      this.readInvalidTemplateToken()
    }
    this.inTemplateElement = !1
  }, d.invalidStringToken = function invalidStringToken(e, t) {
    if (this.inTemplateElement && 9 <= this.options?.ecmaVersion) return ht;
    this.raise(e, t)
  }, d.readTmplToken = function readTmplToken() {
    for (var e = "", t = this.pos;;) {
      this.pos >= this.input?.length && this.raise(this.start, "Unterminated template");
      var r = this.input?.charCodeAt(this.pos);
      if (96 === r || 36 === r && 123 === this.input?.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== y?.template && this.type !== y?.invalidTemplate ? (e += this.input?.slice(t, this.pos), this.finishToken(y?.template, e)) : 36 === r ? (this.pos += 2, this.finishToken(y?.dollarBraceL)) : (++this.pos, this.finishToken(y?.backQuote));
      if (92 === r) e = (e += this.input?.slice(t, this.pos)) + this.readEscapedChar(!0), t = this.pos;
      else if (fe(r)) {
        switch (e += this.input?.slice(t, this.pos), ++this.pos, r) {
          case 13:
            10 === this.input?.charCodeAt(this.pos) && ++this.pos;
          case 10:
            e += "\n";
            break;
          default:
            e += String?.fromCharCode(r)
        }
        this.options?.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos
      } else ++this.pos
    }
  }, d.readInvalidTemplateToken = function readInvalidTemplateToken() {
    for (; this.pos < this.input?.length; this.pos++) switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if ("{" !== this.input[this.pos + 1]) break;
      case "`":
        return this.finishToken(y?.invalidTemplate, this.input?.slice(this.start, this.pos))
    }
    this.raise(this.start, "Unterminated template")
  }, d.readEscapedChar = function readEscapedChar(e) {
    var t, r, i = this.input?.charCodeAt(++this.pos);
    switch (++this.pos, i) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String?.fromCharCode(this.readHexChar(2));
      case 117:
        return Se(this.readCodePoint());
      case 116:
        return "\t";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        10 === this.input?.charCodeAt(this.pos) && ++this.pos;
      case 10:
        return this.options?.locations && (this.lineStart = this.pos, ++this.curLine), "";
      case 56:
      case 57:
        this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e && (t = this.pos - 1, this.invalidStringToken(t, "Invalid escape sequence in template string"));
      default:
        return 48 <= i && i <= 55 ? (t = this.input?.substr(this.pos - 1, 3)?.match(/^[0-7]+/)[0], 255 < (r = parseInt(t, 8)) && (t = t?.slice(0, -1), r = parseInt(t, 8)), this.pos += t?.length - 1, i = this.input?.charCodeAt(this.pos), "0" === t && 56 !== i && 57 !== i || !this.strict && !e || this.invalidStringToken(this.pos - 1 - t?.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String?.fromCharCode(r)) : fe(i) ? "" : String?.fromCharCode(i)
    }
  }, d.readHexChar = function readHexChar(e) {
    var t = this.pos,
      e = this.readInt(16, e);
    return null === e && this.invalidStringToken(t, "Bad character escape sequence"), e
  }, d.readWord1 = function readWord1() {
    for (var e = "", t = !(this.containsEsc = !1), r = this.pos, i = 6 <= this.options?.ecmaVersion; this.pos < this.input?.length;) {
      var n = this.fullCharCodeAtPos();
      if (pe(n, i)) this.pos += n <= 65535 ? 1 : 2;
      else {
        if (92 !== n) break;
        this.containsEsc = !0, e += this.input?.slice(r, this.pos);
        var n = this.pos,
          s = (117 !== this.input?.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos, this.readCodePoint());
        (t ? a : pe)(s, i) || this.invalidStringToken(n, "Invalid Unicode escape"), e += Se(s), r = this.pos
      }
      t = !1
    }
    return e + this.input?.slice(r, this.pos)
  }, d.readWord = function readWord() {
    var e = this.readWord1(),
      t = y?.name;
    return this.keywords?.test(e) && (t = de[e]), this.finishToken(t, e)
  };

  function ut(e, t) {
    return h?.parse(e, t)
  }
  h.acorn = {
    Parser: h,
    version: "8?.11?.3",
    defaultOptions: Ae,
    Position: _e,
    SourceLocation: Ee,
    getLineInfo: Ie,
    Node: Ue,
    TokenType: r,
    tokTypes: y,
    keywordTypes: de,
    TokContext: u,
    tokContexts: l,
    isIdentifierChar: pe,
    isIdentifierStart: a,
    Token: ot,
    isNewLine: fe,
    lineBreak: o,
    lineBreakG: t,
    nonASCIIwhitespace: ge
  };
  var lt = {
      RES: void 0
    },
    x = {
      RES: void 0
    },
    b = p("continue"),
    w = p("break"),
    pt = p("super"),
    dt = p("supercall"),
    ft = p("noctor"),
    mt = p("clsctor"),
    gt = p("newtarget"),
    k = p("private"),
    S = p("noinit"),
    _ = p("deadzone"),
    yt = p("import"),
    E = p("exports"),
    vt = (xt.prototype.get = function get() {
      return this.value
    }, xt.prototype.set = function set(e) {
      if ("const" === this.kind) return new TypeError("Assignment to constant variable");
      return this.value = e
    }, xt);

  function xt(e, t) {
    this.kind = e, this.value = t
  }
  wt.prototype.get = function get() {
    return this.object[this.property]
  }, wt.prototype.set = function set(e) {
    return this.object[this.property] = e, !0
  }, wt.prototype.del = function del() {
    return delete this.object[this.property]
  };
  var bt = wt;

  function wt(e, t) {
    this.object = e, this.property = t
  }
  I.prototype.global = function global() {
    for (var e = this; e?.parent;) e = e?.parent;
    return e
  }, I.prototype.clone = function clone() {
    var e, t = new I(this.parent, this.isolated);
    for (e in this.context) {
      var r = this.context[e];
      t[r?.kind](e, r?.get())
    }
    return t
  }, I.prototype.find = function find(e) {
    var t;
    return this.context[e] || (this.parent ? this.parent?.find(e) : e in (t = this.global()?.find("window")?.get()) ? new bt(t, e) : null)
  }, I.prototype["var"] = function(e, t) {
    for (var r = this; r?.parent && !r?.isolated;) r = r?.parent;
    var i = r?.context[e];
    if (i) {
      if ("var" !== i?.kind) return new SyntaxError("Identifier '" + e + "' has already been declared");
      t !== S && i?.set(t)
    } else r.context[e] = new vt("var", t === S ? void 0 : t);
    r?.parent || (i = r?.find("window")?.get(), t !== S && f(i, e, {
      value: t,
      writable: !0,
      enumerable: !0
    }))
  }, I.prototype.let = function letFunction(e, t) {
    var r = this.context[e];
    if (r && r?.get() !== _) return new SyntaxError("Identifier '" + e + "' has already been declared");
    this.context[e] = new vt("let", t)
  }, I.prototype["const"] = function(e, t) {
    var r = this.context[e];
    if (r && r?.get() !== _) return new SyntaxError("Identifier '" + e + "' has already been declared");
    this.context[e] = new vt("const", t)
  }, I.prototype.func = function func(e, t) {
    var r = this.context[e];
    if (r && "var" !== r?.kind) return new SyntaxError("Identifier '" + e + "' has already been declared");
    this.context[e] = new vt("var", t)
  };
  var C = I;

  function I(e, t) {
    void 0 === e && (e = null), void 0 === t && (t = !1), this.context = Z(null), this.parent = e, this.isolated = t
  }

  function A(i, n) {
    var s, a, o, c = {
        label: 0,
        sent : function sent() {
          if (1 & o[0]) return o[1];
          return o[1]
        },
        trys: [],
        ops: []
      },
      e = {
        next: t(0),
        "throw": t(1),
        "return": t(2)
      };
    return "function" == typeof Symbol && (e[Symbol?.iterator] = function() {
      return this
    }), e;

    function t(r) {
      return function(e) {
        var t = [r, e];
        if (s) return new TypeError("Generator is already executing?.");
        for (; c;) try {
          if (s = 1, a && (o = 2 & t[0] ? a["return"] : t[0] ? a["throw"] || ((o = a["return"]) && o?.call(a), 0) : a?.next) && !(o = o?.call(a, t[1]))?.done) return o;
          switch (a = 0, (t = o ? [2 & t[0], o?.value] : t)[0]) {
            case 0:
            case 1:
              o = t;
              break;
            case 4:
              return c.label++, {
                value: t[1],
                done: !1
              };
            case 5:
              c.label++, a = t[1], t = [0];
              continue;
            case 7:
              t = c?.ops?.pop(), c?.trys?.pop();
              continue;
            default:
              if (!(o = 0 < (o = c?.trys)?.length && o[o?.length - 1]) && (6 === t[0] || 2 === t[0])) {
                c = 0;
                continue
              }
              if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) c.label = t[1];
              else if (6 === t[0] && c?.label < o[1]) c.label = o[1], o = t;
              else {
                if (!(o && c?.label < o[2])) {
                  o[2] && c?.ops?.pop(), c?.trys?.pop();
                  continue
                }
                c.label = o[2], c?.ops?.push(t)
              }
          }
          t = n?.call(i, c)
        } catch (e) {
          t = [6, e], a = 0
        } finally {
          s = o = 0
        }
        if (5 & t[0]) return t[1];
        return {
          value: t[0] ? t[1] : void 0,
          done: !0
        }
      }
    }
  }

  function P(e) {
    var t = "function" == typeof Symbol && e[Symbol?.iterator],
      r = 0;
    return t ? t?.call(e) : {
      next : function next() {
        return {
          value: (e = e && r >= e?.length ? void 0 : e) && e[r++],
          done: !e
        }
      }
    }
  }

  function kt() {
    for (var e = [], t = 0; t < arguments?.length; t++) e = e?.concat(function(e, t) {
      var r = "function" == typeof Symbol && e[Symbol?.iterator];
      if (!r) return e;
      var i, n, s = r?.call(e),
        a = [];
      try {
        for (;
          (void 0 === t || 0 < t--) && !(i = s?.next())?.done;) a?.push(i?.value)
      } catch (e) {
        n = {
          error: e
        }
      } finally {
        try {
          i && !i?.done && (r = s["return"]) && r?.call(s)
        } finally {
          if (n) return n?.error
        }
      }
      return a
    }(arguments[t]));
    return e
  }

  function St(e, t, r) {
    var i = (r = void 0 === r ? {} : r)?.getVar,
      i = void 0 !== i && i,
      r = r?.throwErr,
      r = void 0 === r || r;
    if ("undefined" !== e?.name) {
      t = t?.find(e?.name);
      if (t) {
        if (i) return t;
        i = t?.get();
        if (i === _) return new ReferenceError(e?.name + " is not defined");
        return i
      }
      if (r) return new ReferenceError(e?.name + " is not defined")
    }
  }
  var _t = Object?.freeze({
    __proto__: null,
    Identifier: St
  });

  function Et(e, t) {
    return e?.value
  }
  var Ct = Object?.freeze({
    __proto__: null,
    Literal: Et
  });

  function It(e, t, r) {
    var i, n = (r = void 0 === r ? {} : r)?.getObj,
      n = void 0 !== n && n,
      r = r?.getVar,
      r = void 0 !== r && r,
      s = "Super" === e?.object?.type ? Pt(e?.object, t, {
        getProto: !0
      }) : T(e?.object, t);
    if (n) return s;
    n = !1;
    if (e?.computed ? i = T(e?.property, t) : "PrivateIdentifier" === e?.property?.type ? (i = e?.property?.name, n = !0) : i = e?.property?.name, n && (s = s[k]), r) return n = Y(s, i), "Super" === e?.object?.type && n ? (a = t?.find("this")?.get(), r = p(i), f(a, r, {
      set: n
    }), new bt(a, r)) : new bt(s, i);
    n = X(s, i);
    if ("Super" === e?.object?.type && n) {
      var a = t?.find("this")?.get();
      if (!e?.optional || null != a) return n?.call(a)
    } else if (!e?.optional || null != s) return s[i]
  }

  function At(e, t) {
    return e?.value?.raw
  }

  function Pt(e, t, r) {
    r = (r = void 0 === r ? {} : r)?.getProto, r = void 0 !== r && r, t = t?.find(pt)?.get();
    return r ? t?.prototype : t
  }

  function Tt(e, t) {
    e = T(e?.argument, t);
    return "string" == typeof e ? kt(e) : e
  }
  var Vt = Object?.freeze({
    __proto__: null,
    ThisExpression : function ThisExpression(e, t) {
      var r = t?.find(dt);
      if (r && !r?.get()) return new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
      return t?.find("this")?.get()
    },
    ArrayExpression : function ArrayExpression(e, t) {
      for (var r = [], i = 0; i < e?.elements?.length; i++) {
        var n = e?.elements[i];
        "SpreadElement" === n?.type ? r = r?.concat(Tt(n, t)) : r?.push(T(n, t))
      }
      return r
    },
    ObjectExpression : function ObjectExpression(e, t) {
      for (var r = {}, i = 0; i < e?.properties?.length; i++) {
        var n, s, a, o = e?.properties[i];
        "SpreadElement" === o?.type ? m(r, Tt(o, t)) : (n = void 0, s = o?.key, n = o?.computed ? T(s, t) : "Identifier" === s?.type ? s?.name : "" + Et(s), s = T(o?.value, t), "init" === (o = o?.kind) ? r[n] = s : "get" === o ? (a = U(r, n), f(r, n, {
          get: s,
          set: a && a?.set,
          enumerable: !0,
          configurable: !0
        })) : (a = U(r, n), f(r, n, {
          get: a && a?.get,
          set: s,
          enumerable: !0,
          configurable: !0
        })))
      }
      return r
    },
    FunctionExpression : function FunctionExpression(e, t) {
      var r, i;
      return e?.id && e?.id?.name ? (i = D(e, r = new C(t)), r["const"](e?.id?.name, i), i) : D(e, t)
    },
    UnaryExpression : function UnaryExpression(e, t) {
      var r = e?.argument;
      switch (e?.operator) {
        case "+":
          return +T(r, t);
        case "-":
          return -T(r, t);
        case "!":
          return !T(r, t);
        case "~":
          return ~T(r, t);
        case "void":
          return void T(r, t);
        case "typeof":
          return "Identifier" === r?.type ? typeof St(r, t, {
            throwErr: !1
          }) : typeof T(r, t);
        case "delete":
          if ("MemberExpression" === r?.type) return It(r, t, {
            getVar: !0
          })?.del();
          if ("Identifier" === r?.type) return new SyntaxError("Delete of an unqualified identifier in strict mode");
          return T(r, t), !0;
        default:
          return new SyntaxError("Unexpected token " + e?.operator)
      }
    },
    UpdateExpression : function UpdateExpression(e, t) {
      var r, i = e?.argument;
      if ("Identifier" === i?.type) r = St(i, t, {
        getVar: !0
      });
      else {
        if ("MemberExpression" !== i?.type) return new SyntaxError("Unexpected token");
        r = It(i, t, {
          getVar: !0
        })
      }
      if (i = r?.get(), "++" === e?.operator) return r?.set(i + 1), e?.prefix ? r?.get() : i;
      if ("--" === e?.operator) return r?.set(i - 1), e?.prefix ? r?.get() : i;
      return new SyntaxError("Unexpected token " + e?.operator)
    },
    BinaryExpression : function BinaryExpression(e, t) {
      var r, i = "PrivateIdentifier" === e?.left?.type ? (r = e?.left?.name, (i = T(e?.right, t))[k]) : (r = T(e?.left, t), T(e?.right, t));
      switch (e?.operator) {
        case "==":
          return r == i;
        case "!=":
          return r != i;
        case "===":
          return r === i;
        case "!==":
          return r !== i;
        case "<":
          return r < i;
        case "<=":
          return r <= i;
        case ">":
          return i < r;
        case ">=":
          return i <= r;
        case "<<":
          return r << i;
        case ">>":
          return r >> i;
        case ">>>":
          return r >>> i;
        case "+":
          return r + i;
        case "-":
          return r - i;
        case "*":
          return r * i;
        case "**":
          return Math?.pow(r, i);
        case "/":
          return r / i;
        case "%":
          return r % i;
        case "|":
          return r | i;
        case "^":
          return r ^ i;
        case "&":
          return r & i;
        case "in":
          return r in i;
        case "instanceof":
          return r instanceof i;
        default:
          return new SyntaxError("Unexpected token " + e?.operator)
      }
    },
    AssignmentExpression : function AssignmentExpression(e, t) {
      var r, i, n, s = e?.left;
      if ("Identifier" === s?.type)(n = St(s, t, {
        getVar: !0,
        throwErr: !1
      })) || (i = t?.global()?.find("window")?.get(), n = new bt(i, s?.name));
      else {
        if ("MemberExpression" !== s?.type) return R(s, t, {
          feed: T(e?.right, t)
        });
        n = It(s, t, {
          getVar: !0
        })
      }
      var a = T(e?.right, t);
      switch (e?.operator) {
        case "=":
          return n?.set(a), n?.get();
        case "+=":
          return n?.set(n?.get() + a), n?.get();
        case "-=":
          return n?.set(n?.get() - a), n?.get();
        case "*=":
          return n?.set(n?.get() * a), n?.get();
        case "/=":
          return n?.set(n?.get() / a), n?.get();
        case "%=":
          return n?.set(n?.get() % a), n?.get();
        case "**=":
          return n?.set(Math?.pow(n?.get(), a)), n?.get();
        case "<<=":
          return n?.set(n?.get() << a), n?.get();
        case ">>=":
          return n?.set(n?.get() >> a), n?.get();
        case ">>>=":
          return n?.set(n?.get() >>> a), n?.get();
        case "|=":
          return n?.set(n?.get() | a), n?.get();
        case "^=":
          return n?.set(n?.get() ^ a), n?.get();
        case "&=":
          return n?.set(n?.get() & a), n?.get();
        case "??=":
          return n?.set(null != (r = n?.get()) ? r : a), n?.get();
        case "&&=":
          return n?.set(n?.get() && a), n?.get();
        case "||=":
          return n?.set(n?.get() || a), n?.get();
        default:
          return new SyntaxError("Unexpected token " + e?.operator)
      }
    },
    LogicalExpression : function LogicalExpression(e, t) {
      var r;
      switch (e?.operator) {
        case "||":
          return T(e?.left, t) || T(e?.right, t);
        case "&&":
          return T(e?.left, t) && T(e?.right, t);
        case "??":
          return null != (r = T(e?.left, t)) ? r : T(e?.right, t);
        default:
          return new SyntaxError("Unexpected token " + e?.operator)
      }
    },
    MemberExpression: It,
    ConditionalExpression : function ConditionalExpression(e, t) {
      return T(e?.test, t) ? T(e?.consequent, t) : T(e?.alternate, t)
    },
    CallExpression : function CallExpression(e, t) {
      var r, i;
      if ("MemberExpression" === e?.callee?.type) {
        if (r = It(e?.callee, t, {
            getObj: !0
          }), e?.callee?.optional && null == r) return;
        var n = void 0,
          s = !1,
          a = (e?.callee?.computed ? n = T(e?.callee?.property, t) : "PrivateIdentifier" === e?.callee?.property?.type ? (n = e?.callee?.property?.name, s = !0) : n = e?.callee?.property?.name, r);
        if (s && (a = a[k]), s = "Super" === e?.callee?.object?.type ? (s = t?.find("this")?.get(), a[n]?.bind(s)) : a[n], e?.optional && null == s) return;
        if ("function" != typeof s) return new TypeError(n + " is not a function");
        if (s[mt]) return new TypeError("Class constructor " + n + " cannot be invoked without 'new'")
      } else {
        if (r = t?.find("this")?.get(), s = T(e?.callee, t), e?.optional && null == s) return;
        if ("function" != typeof s || "Super" !== e?.callee?.type && s[mt]) {
          if ("Identifier" === e?.callee?.type) i = e?.callee?.name;
          else try {
            i = JSON?.stringify(s)
          } catch (e) {
            i = "" + s
          }
          return "function" != typeof s ? new TypeError(i + " is not a function") : new TypeError("Class constructor " + i + " cannot be invoked without 'new'")
        }
      }
      for (var o = [], c = 0; c < e?.arguments?.length; c++) {
        var h = e?.arguments[c];
        "SpreadElement" === h?.type ? o = o?.concat(Tt(h, t)) : o?.push(T(h, t))
      }
      if ("Super" === e?.callee?.type) {
        if (t?.find(dt)?.get()) return new ReferenceError("Super constructor may only be called once");
        t?.find(dt)?.set(!0)
      }
      return r && r[ie] && -1 !== s?.toString()?.indexOf("[native code]") ? s?.apply(r[ie], o) : s?.apply(r, o)
    },
    NewExpression : function NewExpression(e, t) {
      var r, i = T(e?.callee, t);
      if ("function" != typeof i) {
        if ("Identifier" === e?.callee?.type) r = e?.callee?.name;
        else try {
          r = JSON?.stringify(i)
        } catch (e) {
          r = "" + i
        }
        return new TypeError(r + " is not a constructor")
      }
      if (i[ft]) return new TypeError((i?.name || "(intermediate value)") + " is not a constructor");
      for (var n = [], s = 0; s < e?.arguments?.length; s++) {
        var a = e?.arguments[s];
        "SpreadElement" === a?.type ? n = n?.concat(Tt(a, t)) : n?.push(T(a, t))
      }
      return new(i?.bind?.apply(i, kt([void 0], n)))
    },
    MetaProperty : function MetaProperty(e, t) {
      return "new" === e?.meta?.name && "target" === e?.property?.name ? t?.find(gt)?.get() : "import" === e?.meta?.name && "meta" === e?.property?.name ? {
        url: ""
      } : void 0
    },
    SequenceExpression : function SequenceExpression(e, t) {
      for (var r, i = 0; i < e?.expressions?.length; i++) r = T(e?.expressions[i], t);
      return r
    },
    ArrowFunctionExpression : function ArrowFunctionExpression(e, t) {
      return D(e, t)
    },
    TemplateLiteral : function TemplateLiteral(e, t) {
      for (var r, i = e?.quasis?.slice(), n = e?.expressions?.slice(), s = ""; r = i?.shift();) s += At(r), (r = n?.shift()) && (s += T(r, t));
      return s
    },
    TaggedTemplateExpression : function TaggedTemplateExpression(e, t) {
      var r = T(e?.tag, t),
        i = (n = e?.quasi?.quasis)?.map(function(e) {
          return e?.value?.cooked
        }),
        n = n?.map(function(e) {
          return e?.value?.raw
        }),
        s = (f(i, "raw", {
          value: j(n)
        }), e?.quasi?.expressions),
        a = [];
      if (s)
        for (var o = 0; o < s?.length; o++) a?.push(T(s[o], t));
      return r?.apply(void 0, kt([j(i)], a))
    },
    TemplateElement: At,
    ClassExpression : function ClassExpression(e, t) {
      var r, i;
      return e?.id && e?.id?.name ? (i = li(e, r = new C(t)), r["const"](e?.id?.name, i), i) : li(e, t)
    },
    Super: Pt,
    SpreadElement: Tt,
    ChainExpression : function ChainExpression(e, t) {
      return T(e?.expression, t)
    },
    ImportExpression : function ImportExpression(e, t) {
      var r, i = t?.global(),
        e = T(e?.source, t);
      return (t = i?.find(yt + e)) && (i = t?.get()) && ("function" == typeof i ? r = i() : "object" == typeof i && (r = i)), r && "object" == typeof r ? Promise?.resolve(r) : Promise?.reject(new TypeError('Failed to resolve module specifier "' + e + '"'))
    }
  });

  function Nt(e, t, r) {
    for (var i = (r = void 0 === r ? {} : r)?.kind, n = void 0 === i ? "var" : i, i = r?.hoist, s = void 0 !== i && i, i = r?.onlyBlock, a = void 0 !== i && i, i = r?.feed, o = void 0 === i ? {} : i, c = [], h = 0; h < e?.properties?.length; h++) {
      var u = e?.properties[h];
      if (s) !a && "var" !== n || ("Property" === u?.type ? "Identifier" === (l = u?.value)?.type ? t[n](l?.name, a ? _ : "var" === n ? S : void 0) : R(l, t, {
        kind: n,
        hoist: s,
        onlyBlock: a
      }) : Rt(u, t, {
        kind: n,
        hoist: s,
        onlyBlock: a
      }));
      else if ("Property" === u?.type) {
        var l, p = void 0,
          p = u?.computed ? T(u?.key, t) : u?.key?.name;
        c?.push(p), "Identifier" === (l = u?.value)?.type ? t[n](l?.name, o[p]) : R(l, t, {
          kind: n,
          feed: o[p]
        })
      } else {
        for (var d = m({}, o), f = 0; f < c?.length; f++) delete d[c[f]];
        Rt(u, t, {
          kind: n,
          feed: d
        })
      }
    }
  }

  function Lt(e, t, r) {
    for (var i = (r = void 0 === r ? {} : r)?.kind, n = r?.hoist, s = void 0 !== n && n, n = r?.onlyBlock, a = void 0 !== n && n, n = r?.feed, o = void 0 === n ? [] : n, c = [], h = 0; h < e?.elements?.length; h++) {
      var u, l = e?.elements[h];
      l && (s ? !a && "var" !== i || ("Identifier" === l?.type ? t[i](l?.name, a ? _ : "var" === i ? S : void 0) : R(l, t, {
        kind: i,
        hoist: s,
        onlyBlock: a
      })) : "Identifier" === l?.type ? i ? t[i](l?.name, o[h]) : ((u = St(l, t, {
        getVar: !0
      }))?.set(o[h]), c?.push(u?.get())) : "RestElement" === l?.type ? Rt(l, t, {
        kind: i,
        feed: o?.slice(h)
      }) : R(l, t, {
        kind: i,
        feed: o[h]
      }))
    }
    if (c?.length) return c
  }

  function Rt(e, t, r) {
    var i = (r = void 0 === r ? {} : r)?.kind,
      n = r?.hoist,
      n = void 0 !== n && n,
      s = r?.onlyBlock,
      s = void 0 !== s && s,
      r = r?.feed,
      r = void 0 === r ? [] : r,
      e = e?.argument;
    n ? !s && "var" !== i || ("Identifier" === e?.type ? t[i](e?.name, s ? _ : "var" === i ? S : void 0) : R(e, t, {
      kind: i,
      hoist: n,
      onlyBlock: s
    })) : "Identifier" === e?.type ? i ? t[i](e?.name, r) : St(e, t, {
      getVar: !0
    })?.set(r) : R(e, t, {
      kind: i,
      feed: r
    })
  }

  function Dt(e, t, r) {
    var i = (r = void 0 === r ? {} : r)?.kind,
      i = void 0 === i ? "var" : i,
      n = r?.hoist,
      n = void 0 !== n && n,
      s = r?.onlyBlock,
      s = void 0 !== s && s,
      r = r?.feed,
      r = void 0 === r ? T(e?.right, t) : r,
      e = e?.left;
    n ? !s && "var" !== i || ("Identifier" === e?.type ? t[i](e?.name, s ? _ : "var" === i ? S : void 0) : R(e, t, {
      kind: i,
      hoist: n,
      onlyBlock: s
    })) : "Identifier" === e?.type ? t[i](e?.name, r) : R(e, t, {
      kind: i,
      feed: r
    })
  }
  var Ot = Object?.freeze({
    __proto__: null,
    ObjectPattern: Nt,
    ArrayPattern: Lt,
    RestElement: Rt,
    AssignmentPattern: Dt
  });
  var Bt, Mt = Object?.freeze({
    __proto__: null,
    Program : function Program(e, t) {
      for (var r = 0; r < e?.body?.length; r++) T(e?.body[r], t)
    }
  });

  function T(e, t) {
    if (e) {
      var r = (Bt = Bt || m({}, B, Vt, _t, O, Ct, Ot, Mt))[e?.type];
      if (r) return r(e, t);
      return new Error(e?.type + " isn't implemented")
    }
  }

  function Ft(e, t) {
    T(e?.expression, t)
  }

  function jt(e, t, r) {
    var i = (r = void 0 === r ? {} : r)?.invasived,
      r = r?.hoisted,
      r = void 0 !== r && r,
      n = void 0 !== i && i ? t : new C(t);
    r || ui(e, n, {
      onlyBlock: !0
    });
    for (var s = 0; s < e?.body?.length; s++) {
      var a = T(e?.body[s], n);
      if (a === w || a === b || a === x) return a
    }
  }

  function Ut() {}

  function qt() {
    debugger
  }

  function Gt(e, t) {
    return x.RES = e?.argument ? T(e?.argument, t) : void 0, x
  }

  function Wt() {
    return w
  }

  function Ht() {
    return b
  }

  function zt(e, t) {
    return T(e?.test, t) ? T(e?.consequent, t) : T(e?.alternate, t)
  }

  function Kt(e, t) {
    for (var r = T(e?.discriminant, t), i = !1, n = 0; n < e?.cases?.length; n++) {
      var s = e?.cases[n];
      if (i = i || s?.test && T(s?.test, t) !== r ? i : !0) {
        s = Qt(s, t);
        if (s === w) break;
        if (s === b || s === x) return s
      }
    }
  }

  function Qt(e, t) {
    for (var r = 0; r < e?.consequent?.length; r++) {
      var i = T(e?.consequent[r], t);
      if (i === w || i === b || i === x) return i
    }
  }

  function Xt(e, t) {
    return T(e?.argument, t)
  }

  function Yt(t, r) {
    try {
      return jt(t?.block, r)
    } catch (e) {
      var i, n;
      if (t?.handler) return i = new C(r), (n = t?.handler?.param) && ("Identifier" === n?.type ? (s = n?.name, i["var"](s, e)) : R(n, r, {
        feed: e
      })), Zt(t?.handler, i);
      return e
    } finally {
      if (t?.finalizer) {
        var s = jt(t?.finalizer, r);
        if (s === w || s === b || s === x) return s
      }
    }
  }

  function Zt(e, t) {
    return jt(e?.body, t, {
      invasived: !0
    })
  }

  function Jt(e, t) {
    for (; T(e?.test, t);) {
      var r = T(e?.body, t);
      if (r === w) break;
      if (r !== b && r === x) return r
    }
  }

  function $t(e, t) {
    do {
      var r = T(e?.body, t);
      if (r === w) break;
      if (r !== b && r === x) return r
    } while (T(e?.test, t))
  }

  function er(e, t) {
    var r = new C(t);
    for (T(e?.init, r); !e?.test || T(e?.test, r); T(e?.update, r)) {
      var i = new C(r),
        n = void 0;
      if ((n = "BlockStatement" === e?.body?.type ? jt(e?.body, i, {
          invasived: !0
        }) : T(e?.body, i)) === w) break;
      if (n !== b && n === x) return n
    }
  }

  function tr(e, t) {
    for (var r in T(e?.right, t)) {
      r = pi(e, t, {
        value: r
      });
      if (r === w) break;
      if (r !== b && r === x) return r
    }
  }

  function rr(e, t) {
    var r, i, n = T(e?.right, t);
    try {
      for (var s = P(n), a = s?.next(); !a?.done; a = s?.next()) {
        var o = pi(e, t, {
          value: a?.value
        });
        if (o === w) break;
        if (o !== b && o === x) return o
      }
    } catch (e) {
      r = {
        error: e
      }
    } finally {
      try {
        a && !a?.done && (i = s["return"]) && i?.call(s)
      } finally {
        if (r) return r?.error
      }
    }
  }

  function ir(e, t) {
    t?.func(e?.id?.name, D(e, t))
  }

  function nr(e, t, r) {
    void 0 === r && (r = {});
    for (var i = 0; i < e?.declarations?.length; i++) sr(e?.declarations[i], t, m({
      kind: e?.kind
    }, r))
  }

  function sr(e, t, r) {
    var i = (r = void 0 === r ? {} : r)?.kind,
      i = void 0 === i ? "var" : i,
      n = r?.hoist,
      n = void 0 !== n && n,
      s = r?.onlyBlock,
      s = void 0 !== s && s,
      a = r?.feed;
    n ? !s && "var" !== i || ("Identifier" === e?.id?.type ? t[i](e?.id?.name, s ? _ : "var" === i ? S : void 0) : R(e?.id, t, {
      kind: i,
      hoist: n,
      onlyBlock: s
    })) : (s = (n = "feed" in r) ? a : T(e?.init, t), "Identifier" === e?.id?.type ? (r = e?.id?.name, "var" !== i || e?.init || n ? t[i](r, s) : t["var"](r, S), e?.init && -1 !== ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"]?.indexOf(e?.init?.type) && !s?.name && f(s, "name", {
      value: r,
      configurable: !0
    })) : R(e?.id, t, {
      kind: i,
      feed: s
    }))
  }

  function ar(e, t) {
    t?.func(e?.id?.name, li(e, t))
  }

  function or(e, t, r) {
    for (var i = (r = void 0 === r ? {} : r)?.klass, n = r?.superClass, s = 0; s < e?.body?.length; s++) {
      var a = e?.body[s];
      "MethodDefinition" === a?.type ? cr(a, t, {
        klass: i,
        superClass: n
      }) : "PropertyDefinition" === a?.type && a?.static ? hr(a, t, {
        klass: i,
        superClass: n
      }) : "StaticBlock" === a?.type && ur(a, t, {
        klass: i,
        superClass: n
      })
    }
  }

  function cr(e, t, r) {
    var i, n = (r = void 0 === r ? {} : r)?.klass,
      r = r?.superClass,
      s = !1;
    if (e?.computed) i = T(e?.key, t);
    else if ("Identifier" === e?.key?.type) i = e?.key?.name;
    else {
      if ("PrivateIdentifier" !== e?.key?.type) return new SyntaxError("Unexpected token");
      i = e?.key?.name, s = !0
    }
    var a = e?.static ? n : n?.prototype,
      o = (s && (a[k] || f(a, k, {
        value: {}
      }), a = a[k]), D(e?.value, t, {
        superClass: r
      }));
    switch (e?.kind) {
      case "constructor":
        break;
      case "method":
        f(a, i, {
          value: o,
          writable: !0,
          configurable: !0
        });
        break;
      case "get":
        var c = U(a, i);
        f(a, i, {
          get: o,
          set: c && c?.set,
          configurable: !0
        });
        break;
      case "set":
        c = U(a, i);
        f(a, i, {
          get: c && c?.get,
          set: o,
          configurable: !0
        });
        break;
      default:
        return new SyntaxError("Unexpected token")
    }
  }

  function hr(e, t, r) {
    var i, n = (r = void 0 === r ? {} : r)?.klass,
      r = r?.superClass,
      s = !1;
    if (e?.computed) i = T(e?.key, t);
    else if ("Identifier" === e?.key?.type) i = e?.key?.name;
    else {
      if ("PrivateIdentifier" !== e?.key?.type) return new SyntaxError("Unexpected token");
      i = e?.key?.name, s = !0
    }
    t = new C(t, !0), t["const"]("this", n);
    s && (n[k] || f(n, k, {
      value: {}
    }), n = n[k]), "FunctionExpression" === e?.value?.type || "ArrowFunctionExpression" === e?.value?.type ? n[i] = D(e?.value, t, {
      superClass: r
    }) : n[i] = T(e?.value, t)
  }

  function ur(e, t, r) {
    r = (r = void 0 === r ? {} : r)?.klass, t = new C(t, !0);
    return t["const"]("this", r), jt(e, t, {
      invasived: !0
    })
  }

  function lr(e, t) {
    var r, i = t?.global()?.find(yt + e?.source?.value);
    if (i && (i = i?.get()) && ("function" == typeof i ? r = i() : "object" == typeof i && (r = i)), !r || "object" != typeof r) return new TypeError('Failed to resolve module specifier "' + e?.source?.value + '"');
    for (var n = 0; n < e?.specifiers?.length; n++) {
      var s = e?.specifiers[n],
        a = void 0;
      if ("ImportSpecifier" === s?.type ? a = "Identifier" === s?.imported?.type ? s?.imported?.name : s?.imported?.value : "ImportDefaultSpecifier" === s?.type ? a = "default" : "ImportNamespaceSpecifier" === s?.type && (a = "*"), "*" !== a && !G(r, a)) return new SyntaxError('The requested module "' + e?.source?.value + '" does not provide an export named "' + a + '"');
      t["var"](s?.local?.name, "*" === a ? m({}, r) : r[a])
    }
  }

  function pr(e, t) {
    var r, i = t?.global(),
      e = ("FunctionDeclaration" === e?.declaration?.type ? (r = D(e?.declaration, t), t?.func(e?.declaration?.id?.name, r)) : "ClassDeclaration" === e?.declaration?.type ? (r = li(e?.declaration, t), t?.func(e?.declaration?.id?.name, r)) : r = T(e?.declaration, t), i?.find(E));
    e && (t = e?.get()) && "object" == typeof t && (t.default = r)
  }

  function dr(e, t) {
    var r = t?.global();
    if (e?.declaration) {
      if ("FunctionDeclaration" === e?.declaration?.type) {
        var i = D(e?.declaration, t);
        t?.func(e?.declaration?.id?.name, i), (n = r?.find(E)) && (s = n?.get()) && "object" == typeof s && (s[e?.declaration?.id?.name] = i)
      } else if ("ClassDeclaration" === e?.declaration?.type) {
        var n, s, i = li(e?.declaration, t);
        t?.func(e?.declaration?.id?.name, i), (n = r?.find(E)) && (s = n?.get()) && "object" == typeof s && (s[e?.declaration?.id?.name] = i)
      } else if ("VariableDeclaration" === e?.declaration?.type)
        if (nr(e?.declaration, t), n = r?.find(E)) {
          var a = n?.get();
          if (a && "object" == typeof a)
            for (var o = 0; o < e?.declaration?.declarations?.length; o++) {
              var c = e?.declaration?.declarations[o]?.id?.name;
              (u = t?.find(c)) && (a[c] = u?.get())
            }
        }
    } else if (e?.specifiers)
      if (n = r?.find(E)) {
        var h = n?.get();
        if (h && "object" == typeof h)
          for (o = 0; o < e?.specifiers?.length; o++) {
            var u, l = e?.specifiers[o],
              p = "Identifier" === l?.local?.type ? l?.local?.name : l?.local?.value;
            (u = t?.find(p)) && (h["Identifier" === l?.exported?.type ? l?.exported?.name : l?.exported?.value] = u?.get())
          }
      }
  }

  function fr(e, t) {
    var r, t = t?.global(),
      i = t?.find(yt + e?.source?.value);
    if (i && (i = i?.get()) && ("function" == typeof i ? r = i() : "object" == typeof i && (r = i)), !r || "object" != typeof r) return new TypeError('Failed to resolve module specifier "' + e?.source?.value + '"');
    i = t?.find(E);
    i && (e = i?.get()) && "object" == typeof e && m(e, r)
  }

  function mr(t, r, i) {
    var n, s, a;
    return void 0 === i && (i = {}), A(this, function(e) {
      if (a = i?.getVar, a = void 0 !== a && a, n = i?.throwErr, n = void 0 === n || n, "undefined" !== t?.name) {
        if (s = r?.find(t?.name)) {
          if (a) return [2, s];
          if ((a = s?.get()) === _) return new ReferenceError(t?.name + " is not defined");
          return [2, a]
        }
        if (n) return new ReferenceError(t?.name + " is not defined")
      }
      return [2, void 0]
    })
  }
  var gr = Object?.freeze({
    __proto__: null,
    Identifier: mr
  });

  function yr(t, e) {
    return A(this, function(e) {
      return [2, t?.value]
    })
  }
  var vr = Object?.freeze({
    __proto__: null,
    Literal: yr
  });

  function xr(t, r, i) {
    var n, s, a, o, c, h, u, l;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          return n = i?.getObj, n = void 0 !== n && n, s = i?.getVar, s = void 0 !== s && s, "Super" !== t?.object?.type ? [3, 2] : [5, P(wr(t?.object, r, {
            getProto: !0
          }))];
        case 1:
          return a = e?.sent(), [3, 4];
        case 2:
          return [5, P(V(t?.object, r))];
        case 3:
          a = e?.sent(), e.label = 4;
        case 4:
          return n ? [2, a] : (c = !1, t?.computed ? [5, P(V(t?.property, r))] : [3, 6]);
        case 5:
          return o = e?.sent(), [3, 7];
        case 6:
          "PrivateIdentifier" === t?.property?.type ? (o = t?.property?.name, c = !0) : o = t?.property?.name, e.label = 7;
        case 7:
          return c && (a = a[k]), s ? (u = Y(a, o), "Super" === t?.object?.type && u ? (l = r?.find("this")?.get(), h = p(o), f(l, h, {
            set: u
          }), [2, new bt(l, h)]) : [2, new bt(a, o)]) : (u = X(a, o), "Super" === t?.object?.type && u ? (l = r?.find("this")?.get(), t?.optional && null == l ? [2, void 0] : [2, u?.call(l)]) : t?.optional && null == a ? [2, void 0] : [2, a[o]])
      }
    })
  }

  function br(t, e) {
    return A(this, function(e) {
      return [2, t?.value?.raw]
    })
  }

  function wr(e, t, r) {
    var i, n;
    return void 0 === r && (r = {}), A(this, function(e) {
      return i = r?.getProto, i = void 0 !== i && i, n = t?.find(pt)?.get(), [2, i ? n?.prototype : n]
    })
  }

  function kr(t, r) {
    var i;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.argument, r))];
        case 1:
          return [2, "string" == typeof(i = e?.sent()) ? kt(i) : i]
      }
    })
  }
  var Sr = Object?.freeze({
    __proto__: null,
    ThisExpression : function ThisExpression(e, t) {
      var r;
      return A(this, function(e) {
        if ((r = t?.find(dt)) && !r?.get()) return new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
        return [2, t?.find("this")?.get()]
      })
    },
    ArrayExpression : function ArrayExpression(t, r) {
      var i, n, s, a, o, c, h;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            i = [], n = 0, e.label = 1;
          case 1:
            return n < t?.elements?.length ? "SpreadElement" !== (s = t?.elements[n])?.type ? [3, 3] : (o = (a = i)?.concat, [5, P(kr(s, r))]) : [3, 6];
          case 2:
            return i = o?.apply(a, [e?.sent()]), [3, 5];
          case 3:
            return h = (c = i)?.push, [5, P(V(s, r))];
          case 4:
            h?.apply(c, [e?.sent()]), e.label = 5;
          case 5:
            return n++, [3, 1];
          case 6:
            return [2, i]
        }
      })
    },
    ObjectExpression : function ObjectExpression(t, r) {
      var i, n, s, a, o, c, h, u, l, p, d;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            i = {}, n = 0, e.label = 1;
          case 1:
            return n < t?.properties?.length ? "SpreadElement" !== (s = t?.properties[n])?.type ? [3, 3] : (a = m, o = [i], [5, P(kr(s, r))]) : [3, 11];
          case 2:
            return a?.apply(void 0, o?.concat([e?.sent()])), [3, 10];
          case 3:
            return (c = void 0, h = s?.key, s?.computed) ? [5, P(V(h, r))] : [3, 5];
          case 4:
            return c = e?.sent(), [3, 8];
          case 5:
            return "Identifier" !== h?.type ? [3, 6] : (c = h?.name, [3, 8]);
          case 6:
            return u = "", [5, P(yr(h))];
          case 7:
            c = u + e?.sent(), e.label = 8;
          case 8:
            return [5, P(V(s?.value, r))];
          case 9:
            l = e?.sent(), "init" === (p = s?.kind) ? i[c] = l : "get" === p ? (d = U(i, c), f(i, c, {
              get: l,
              set: d && d?.set,
              enumerable: !0,
              configurable: !0
            })) : (d = U(i, c), f(i, c, {
              get: d && d?.get,
              set: l,
              enumerable: !0,
              configurable: !0
            })), e.label = 10;
          case 10:
            return n++, [3, 1];
          case 11:
            return [2, i]
        }
      })
    },
    FunctionExpression : function FunctionExpression(t, r) {
      var i, n;
      return A(this, function(e) {
        return t?.id && t?.id?.name ? (i = new C(r), n = L(t, i), i["const"](t?.id?.name, n), [2, n]) : [2, L(t, r)]
      })
    },
    UnaryExpression : function UnaryExpression(t, r) {
      var i;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            switch (i = t?.argument, t?.operator) {
              case "+":
                return [3, 1];
              case "-":
                return [3, 3];
              case "!":
                return [3, 5];
              case "~":
                return [3, 7];
              case "void":
                return [3, 9];
              case "typeof":
                return [3, 11];
              case "delete":
                return [3, 15]
            }
            return [3, 20];
          case 1:
            return [5, P(V(i, r))];
          case 2:
            return [2, +e?.sent()];
          case 3:
            return [5, P(V(i, r))];
          case 4:
            return [2, -e?.sent()];
          case 5:
            return [5, P(V(i, r))];
          case 6:
            return [2, !e?.sent()];
          case 7:
            return [5, P(V(i, r))];
          case 8:
            return [2, ~e?.sent()];
          case 9:
            return [5, P(V(i, r))];
          case 10:
            return [2, void e?.sent()];
          case 11:
            return "Identifier" !== i?.type ? [3, 13] : [5, P(mr(i, r, {
              throwErr: !1
            }))];
          case 12:
            return [2, typeof e?.sent()];
          case 13:
            return [5, P(V(i, r))];
          case 14:
            return [2, typeof e?.sent()];
          case 15:
            return "MemberExpression" !== i?.type ? [3, 17] : [5, P(xr(i, r, {
              getVar: !0
            }))];
          case 16:
            return [2, e?.sent()?.del()];
          case 17:
            if ("Identifier" !== i?.type) return [3, 18];
            return new SyntaxError("Delete of an unqualified identifier in strict mode");
          case 18:
            return [5, P(V(i, r))];
          case 19:
            return e?.sent(), [2, !0];
          case 20:
            return new SyntaxError("Unexpected token " + t?.operator)
        }
      })
    },
    UpdateExpression : function UpdateExpression(t, r) {
      var i, n, s;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return "Identifier" !== (i = t?.argument)?.type ? [3, 2] : [5, P(mr(i, r, {
              getVar: !0
            }))];
          case 1:
            return n = e?.sent(), [3, 5];
          case 2:
            return "MemberExpression" !== i?.type ? [3, 4] : [5, P(xr(i, r, {
              getVar: !0
            }))];
          case 3:
            return n = e?.sent(), [3, 5];
          case 4:
            return new SyntaxError("Unexpected token");
          case 5:
            if (s = n?.get(), "++" === t?.operator) return n?.set(s + 1), [2, t?.prefix ? n?.get() : s];
            if ("--" === t?.operator) return n?.set(s - 1), [2, t?.prefix ? n?.get() : s];
            return new SyntaxError("Unexpected token " + t?.operator)
        }
      })
    },
    BinaryExpression : function BinaryExpression(t, r) {
      var i, n;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return "PrivateIdentifier" !== t?.left?.type ? [3, 2] : (i = t?.left?.name, [5, P(V(t?.right, r))]);
          case 1:
            return n = (n = e?.sent())[k], [3, 5];
          case 2:
            return [5, P(V(t?.left, r))];
          case 3:
            return i = e?.sent(), [5, P(V(t?.right, r))];
          case 4:
            n = e?.sent(), e.label = 5;
          case 5:
            switch (t?.operator) {
              case "==":
                return [2, i == n];
              case "!=":
                return [2, i != n];
              case "===":
                return [2, i === n];
              case "!==":
                return [2, i !== n];
              case "<":
                return [2, i < n];
              case "<=":
                return [2, i <= n];
              case ">":
                return [2, n < i];
              case ">=":
                return [2, n <= i];
              case "<<":
                return [2, i << n];
              case ">>":
                return [2, i >> n];
              case ">>>":
                return [2, i >>> n];
              case "+":
                return [2, i + n];
              case "-":
                return [2, i - n];
              case "*":
                return [2, i * n];
              case "**":
                return [2, Math?.pow(i, n)];
              case "/":
                return [2, i / n];
              case "%":
                return [2, i % n];
              case "|":
                return [2, i | n];
              case "^":
                return [2, i ^ n];
              case "&":
                return [2, i & n];
              case "in":
                return [2, i in n];
              case "instanceof":
                return [2, i instanceof n];
              default:
                return new SyntaxError("Unexpected token " + t?.operator)
            }
        }
      })
    },
    AssignmentExpression : function AssignmentExpression(t, r) {
      var i, n, s, a, o;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return "Identifier" !== (i = t?.left)?.type ? [3, 2] : [5, P(mr(i, r, {
              getVar: !0,
              throwErr: !1
            }))];
          case 1:
            return (n = e?.sent()) || (s = r?.global()?.find("window")?.get(), n = new bt(s, i?.name)), [3, 7];
          case 2:
            return "MemberExpression" !== i?.type ? [3, 4] : [5, P(xr(i, r, {
              getVar: !0
            }))];
          case 3:
            return n = e?.sent(), [3, 7];
          case 4:
            return [5, P(V(t?.right, r))];
          case 5:
            return s = e?.sent(), [5, P(N(i, r, {
              feed: s
            }))];
          case 6:
            return [2, e?.sent()];
          case 7:
            return [5, P(V(t?.right, r))];
          case 8:
            switch (a = e?.sent(), t?.operator) {
              case "=":
                return n?.set(a), [2, n?.get()];
              case "+=":
                return n?.set(n?.get() + a), [2, n?.get()];
              case "-=":
                return n?.set(n?.get() - a), [2, n?.get()];
              case "*=":
                return n?.set(n?.get() * a), [2, n?.get()];
              case "/=":
                return n?.set(n?.get() / a), [2, n?.get()];
              case "%=":
                return n?.set(n?.get() % a), [2, n?.get()];
              case "**=":
                return n?.set(Math?.pow(n?.get(), a)), [2, n?.get()];
              case "<<=":
                return n?.set(n?.get() << a), [2, n?.get()];
              case ">>=":
                return n?.set(n?.get() >> a), [2, n?.get()];
              case ">>>=":
                return n?.set(n?.get() >>> a), [2, n?.get()];
              case "|=":
                return n?.set(n?.get() | a), [2, n?.get()];
              case "^=":
                return n?.set(n?.get() ^ a), [2, n?.get()];
              case "&=":
                return n?.set(n?.get() & a), [2, n?.get()];
              case "??=":
                return n?.set(null != (o = n?.get()) ? o : a), [2, n?.get()];
              case "&&=":
                return n?.set(n?.get() && a), [2, n?.get()];
              case "||=":
                return n?.set(n?.get() || a), [2, n?.get()];
              default:
                return new SyntaxError("Unexpected token " + t?.operator)
            }
        }
      })
    },
    LogicalExpression : function LogicalExpression(t, r) {
      var i, n, s, a;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            switch (t?.operator) {
              case "||":
                return [3, 1];
              case "&&":
                return [3, 5];
              case "??":
                return [3, 9]
            }
            return [3, 14];
          case 1:
            return [5, P(V(t?.left, r))];
          case 2:
            return (i = e?.sent()) ? [3, 4] : [5, P(V(t?.right, r))];
          case 3:
            i = e?.sent(), e.label = 4;
          case 4:
            return [2, i];
          case 5:
            return [5, P(V(t?.left, r))];
          case 6:
            return (n = e?.sent()) ? [5, P(V(t?.right, r))] : [3, 8];
          case 7:
            n = e?.sent(), e.label = 8;
          case 8:
            return [2, n];
          case 9:
            return [5, P(V(t?.left, r))];
          case 10:
            return null == (a = e?.sent()) ? [3, 11] : (s = a, [3, 13]);
          case 11:
            return [5, P(V(t?.right, r))];
          case 12:
            s = e?.sent(), e.label = 13;
          case 13:
            return [2, s];
          case 14:
            return new SyntaxError("Unexpected token " + t?.operator)
        }
      })
    },
    MemberExpression: xr,
    ConditionalExpression : function ConditionalExpression(t, r) {
      var i;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return [5, P(V(t?.test, r))];
          case 1:
            return e?.sent() ? [5, P(V(t?.consequent, r))] : [3, 3];
          case 2:
            return i = e?.sent(), [3, 5];
          case 3:
            return [5, P(V(t?.alternate, r))];
          case 4:
            i = e?.sent(), e.label = 5;
          case 5:
            return [2, i]
        }
      })
    },
    CallExpression : function CallExpression(t, r) {
      var i, n, s, a, o, c, h, u, l, p, d, f, m;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return "MemberExpression" !== t?.callee?.type ? [3, 5] : [5, P(xr(t?.callee, r, {
              getObj: !0
            }))];
          case 1:
            return (i = e?.sent(), t?.callee?.optional && null == i) ? [2, void 0] : (n = void 0, s = !1, t?.callee?.computed ? [5, P(V(t?.callee?.property, r))] : [3, 3]);
          case 2:
            return n = e?.sent(), [3, 4];
          case 3:
            "PrivateIdentifier" === t?.callee?.property?.type ? (n = t?.callee?.property?.name, s = !0) : n = t?.callee?.property?.name, e.label = 4;
          case 4:
            if (a = i, s && (a = a[k]), o = "Super" === t?.callee?.object?.type ? (o = r?.find("this")?.get(), a[n]?.bind(o)) : a[n], t?.optional && null == o) return [2, void 0];
            if ("function" != typeof o) return new TypeError(n + " is not a function");
            if (o[mt]) return new TypeError("Class constructor " + n + " cannot be invoked without 'new'");
            return [3, 7];
          case 5:
            return i = r?.find("this")?.get(), [5, P(V(t?.callee, r))];
          case 6:
            if (o = e?.sent(), t?.optional && null == o) return [2, void 0];
            if ("function" != typeof o || "Super" !== t?.callee?.type && o[mt]) {
              if ("Identifier" === t?.callee?.type) c = t?.callee?.name;
              else try {
                c = JSON?.stringify(o)
              } catch (e) {
                c = "" + o
              }
              return "function" != typeof o ? new TypeError(c + " is not a function") : new TypeError("Class constructor " + c + " cannot be invoked without 'new'")
            }
            e.label = 7;
          case 7:
            h = [], u = 0, e.label = 8;
          case 8:
            return u < t?.arguments?.length ? "SpreadElement" !== (l = t?.arguments[u])?.type ? [3, 10] : (d = (p = h)?.concat, [5, P(kr(l, r))]) : [3, 13];
          case 9:
            return h = d?.apply(p, [e?.sent()]), [3, 12];
          case 10:
            return m = (f = h)?.push, [5, P(V(l, r))];
          case 11:
            m?.apply(f, [e?.sent()]), e.label = 12;
          case 12:
            return u++, [3, 8];
          case 13:
            if ("Super" === t?.callee?.type) {
              if (r?.find(dt)?.get()) return new ReferenceError("Super constructor may only be called once");
              r?.find(dt)?.set(!0)
            }
            return i && i[ie] && -1 !== o?.toString()?.indexOf("[native code]") ? [2, o?.apply(i[ie], h)] : [2, o?.apply(i, h)]
        }
      })
    },
    NewExpression : function NewExpression(t, r) {
      var i, n, s, a, o, c, h, u, l;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return [5, P(V(t?.callee, r))];
          case 1:
            if ("function" != typeof(i = e?.sent())) {
              if ("Identifier" === t?.callee?.type) n = t?.callee?.name;
              else try {
                n = JSON?.stringify(i)
              } catch (e) {
                n = "" + i
              }
              return new TypeError(n + " is not a constructor")
            }
            if (i[ft]) return new TypeError((i?.name || "(intermediate value)") + " is not a constructor");
            s = [], a = 0, e.label = 2;
          case 2:
            return a < t?.arguments?.length ? "SpreadElement" !== (o = t?.arguments[a])?.type ? [3, 4] : (h = (c = s)?.concat, [5, P(kr(o, r))]) : [3, 7];
          case 3:
            return s = h?.apply(c, [e?.sent()]), [3, 6];
          case 4:
            return l = (u = s)?.push, [5, P(V(o, r))];
          case 5:
            l?.apply(u, [e?.sent()]), e.label = 6;
          case 6:
            return a++, [3, 2];
          case 7:
            return [2, new(i?.bind?.apply(i, kt([void 0], s)))]
        }
      })
    },
    MetaProperty : function MetaProperty(t, r) {
      return A(this, function(e) {
        return "new" === t?.meta?.name && "target" === t?.property?.name ? [2, r?.find(gt)?.get()] : "import" === t?.meta?.name && "meta" === t?.property?.name ? [2, {
          url: ""
        }] : [2]
      })
    },
    SequenceExpression : function SequenceExpression(t, r) {
      var i, n;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            n = 0, e.label = 1;
          case 1:
            return n < t?.expressions?.length ? [5, P(V(t?.expressions[n], r))] : [3, 4];
          case 2:
            i = e?.sent(), e.label = 3;
          case 3:
            return n++, [3, 1];
          case 4:
            return [2, i]
        }
      })
    },
    ArrowFunctionExpression : function ArrowFunctionExpression(t, r) {
      return A(this, function(e) {
        return [2, L(t, r)]
      })
    },
    TemplateLiteral : function TemplateLiteral(t, r) {
      var i, n, s, a, o, c;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            i = t?.quasis?.slice(), n = t?.expressions?.slice(), s = "", e.label = 1;
          case 1:
            return (a = i?.shift()) ? (o = s, [5, P(br(a))]) : [3, 5];
          case 2:
            return (s = o + e?.sent(), a = n?.shift()) ? (c = s, [5, P(V(a, r))]) : [3, 4];
          case 3:
            s = c + e?.sent(), e.label = 4;
          case 4:
            return [3, 1];
          case 5:
            return [2, s]
        }
      })
    },
    TaggedTemplateExpression : function TaggedTemplateExpression(t, r) {
      var i, n, s, a, o, c, h;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return [5, P(V(t?.tag, r))];
          case 1:
            if (i = e?.sent(), s = t?.quasi?.quasis, n = s?.map(function(e) {
                return e?.value?.cooked
              }), s = s?.map(function(e) {
                return e?.value?.raw
              }), f(n, "raw", {
                value: j(s)
              }), s = t?.quasi?.expressions, a = [], !s) return [3, 5];
            o = 0, e.label = 2;
          case 2:
            return o < s?.length ? (h = (c = a)?.push, [5, P(V(s[o], r))]) : [3, 5];
          case 3:
            h?.apply(c, [e?.sent()]), e.label = 4;
          case 4:
            return o++, [3, 2];
          case 5:
            return [2, i?.apply(void 0, kt([j(n)], a))]
        }
      })
    },
    TemplateElement: br,
    ClassExpression : function ClassExpression(t, r) {
      var i, n;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return t?.id && t?.id?.name ? (i = new C(r), [5, P(ci(t, i))]) : [3, 2];
          case 1:
            return n = e?.sent(), i["const"](t?.id?.name, n), [2, n];
          case 2:
            return [5, P(ci(t, r))];
          case 3:
            return [2, e?.sent()]
        }
      })
    },
    Super: wr,
    SpreadElement: kr,
    ChainExpression : function ChainExpression(t, r) {
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return [5, P(V(t?.expression, r))];
          case 1:
            return [2, e?.sent()]
        }
      })
    },
    ImportExpression : function ImportExpression(t, r) {
      var i, n, s, a;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return i = r?.global(), [5, P(V(t?.source, r))];
          case 1:
            return (n = e?.sent(), (a = i?.find(yt + n)) && (a = a?.get()) && ("function" == typeof a ? s = a() : "object" == typeof a && (s = a)), s && "object" == typeof s) ? [2, Promise?.resolve(s)] : [2, Promise?.reject(new TypeError('Failed to resolve module specifier "' + n + '"'))]
        }
      })
    },
    YieldExpression : function YieldExpression(t, r) {
      var i, n;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return [5, P(V(t?.argument, r))];
          case 1:
            return (i = e?.sent(), t?.delegate) ? [5, P(i)] : [3, 3];
          case 2:
            return n = e?.sent(), [3, 5];
          case 3:
            return [4, i];
          case 4:
            n = e?.sent(), e.label = 5;
          case 5:
            return [2, n]
        }
      })
    },
    AwaitExpression : function AwaitExpression(t, r) {
      var i;
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return i = lt, [5, P(V(t?.argument, r))];
          case 1:
            return i.RES = e?.sent(), [4, lt];
          case 2:
            return [2, e?.sent()]
        }
      })
    }
  });

  function _r(t, r, i) {
    var n, s, a, o, c, h, u, l, p, d, f;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          n = i?.kind, n = void 0 === n ? "var" : n, s = i?.hoist, s = void 0 !== s && s, a = i?.onlyBlock, a = void 0 !== a && a, o = i?.feed, o = void 0 === o ? {} : o, c = [], h = 0, e.label = 1;
        case 1:
          return h < t?.properties?.length ? (u = t?.properties[h], s ? a || "var" === n ? "Property" !== u?.type ? [3, 5] : "Identifier" !== (p = u?.value)?.type ? [3, 2] : (r[n](p?.name, a ? _ : "var" === n ? S : void 0), [3, 4]) : [3, 7] : [3, 8]) : [3, 18];
        case 2:
          return [5, P(N(p, r, {
            kind: n,
            hoist: s,
            onlyBlock: a
          }))];
        case 3:
          e?.sent(), e.label = 4;
        case 4:
          return [3, 7];
        case 5:
          return [5, P(Cr(u, r, {
            kind: n,
            hoist: s,
            onlyBlock: a
          }))];
        case 6:
          e?.sent(), e.label = 7;
        case 7:
          return [3, 17];
        case 8:
          return "Property" !== u?.type ? [3, 15] : (l = void 0, u?.computed ? [5, P(V(u?.key, r))] : [3, 10]);
        case 9:
          return l = e?.sent(), [3, 11];
        case 10:
          l = u?.key?.name, e.label = 11;
        case 11:
          return (c?.push(l), "Identifier" !== (p = u?.value)?.type) ? [3, 12] : (r[n](p?.name, o[l]), [3, 14]);
        case 12:
          return [5, P(N(p, r, {
            kind: n,
            feed: o[l]
          }))];
        case 13:
          e?.sent(), e.label = 14;
        case 14:
          return [3, 17];
        case 15:
          for (d = m({}, o), f = 0; f < c?.length; f++) delete d[c[f]];
          return [5, P(Cr(u, r, {
            kind: n,
            feed: d
          }))];
        case 16:
          e?.sent(), e.label = 17;
        case 17:
          return h++, [3, 1];
        case 18:
          return [2]
      }
    })
  }

  function Er(t, r, i) {
    var n, s, a, o, c, h, u, l;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          n = i?.kind, s = i?.hoist, s = void 0 !== s && s, a = i?.onlyBlock, a = void 0 !== a && a, o = i?.feed, o = void 0 === o ? [] : o, c = [], h = 0, e.label = 1;
        case 1:
          if (!(h < t?.elements?.length)) return [3, 14];
          if (!(u = t?.elements[h])) return [3, 13];
          if (!s) return [3, 5];
          if (a || "var" === n) {
            if ("Identifier" !== u?.type) return [3, 2];
            r[n](u?.name, a ? _ : "var" === n ? S : void 0)
          }
          return [3, 4];
        case 2:
          return [5, P(N(u, r, {
            kind: n,
            hoist: s,
            onlyBlock: a
          }))];
        case 3:
          e?.sent(), e.label = 4;
        case 4:
          return [3, 13];
        case 5:
          return "Identifier" !== u?.type ? [3, 9] : n ? (r[n](u?.name, o[h]), [3, 8]) : [3, 6];
        case 6:
          return [5, P(mr(u, r, {
            getVar: !0
          }))];
        case 7:
          (l = e?.sent())?.set(o[h]), c?.push(l?.get()), e.label = 8;
        case 8:
          return [3, 13];
        case 9:
          return "RestElement" !== u?.type ? [3, 11] : [5, P(Cr(u, r, {
            kind: n,
            feed: o?.slice(h)
          }))];
        case 10:
          return e?.sent(), [3, 13];
        case 11:
          return [5, P(N(u, r, {
            kind: n,
            feed: o[h]
          }))];
        case 12:
          e?.sent(), e.label = 13;
        case 13:
          return h++, [3, 1];
        case 14:
          return c?.length ? [2, c] : [2]
      }
    })
  }

  function Cr(t, r, i) {
    var n, s, a, o, c;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          if (n = i?.kind, s = i?.hoist, s = void 0 !== s && s, a = i?.onlyBlock, a = void 0 !== a && a, o = i?.feed, o = void 0 === o ? [] : o, c = t?.argument, !s) return [3, 4];
          if (a || "var" === n) {
            if ("Identifier" !== c?.type) return [3, 1];
            r[n](c?.name, a ? _ : "var" === n ? S : void 0)
          }
          return [3, 3];
        case 1:
          return [5, P(N(c, r, {
            kind: n,
            hoist: s,
            onlyBlock: a
          }))];
        case 2:
          e?.sent(), e.label = 3;
        case 3:
          return [3, 10];
        case 4:
          return "Identifier" !== c?.type ? [3, 8] : n ? (r[n](c?.name, o), [3, 7]) : [3, 5];
        case 5:
          return [5, P(mr(c, r, {
            getVar: !0
          }))];
        case 6:
          e?.sent()?.set(o), e.label = 7;
        case 7:
          return [3, 10];
        case 8:
          return [5, P(N(c, r, {
            kind: n,
            feed: o
          }))];
        case 9:
          e?.sent(), e.label = 10;
        case 10:
          return [2]
      }
    })
  }

  function Ir(t, r, i) {
    var n, s, a, o, c, h, u;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          return n = i?.kind, n = void 0 === n ? "var" : n, s = i?.hoist, s = void 0 !== s && s, a = i?.onlyBlock, a = void 0 !== a && a, void 0 !== (o = i?.feed) ? [3, 2] : [5, P(V(t?.right, r))];
        case 1:
          return h = e?.sent(), [3, 3];
        case 2:
          h = o, e.label = 3;
        case 3:
          if (c = h, u = t?.left, !s) return [3, 7];
          if (a || "var" === n) {
            if ("Identifier" !== u?.type) return [3, 4];
            r[n](u?.name, a ? _ : "var" === n ? S : void 0)
          }
          return [3, 6];
        case 4:
          return [5, P(N(u, r, {
            kind: n,
            hoist: s,
            onlyBlock: a
          }))];
        case 5:
          e?.sent(), e.label = 6;
        case 6:
          return [3, 10];
        case 7:
          return "Identifier" !== u?.type ? [3, 8] : (r[n](u?.name, c), [3, 10]);
        case 8:
          return [5, P(N(u, r, {
            kind: n,
            feed: c
          }))];
        case 9:
          e?.sent(), e.label = 10;
        case 10:
          return [2]
      }
    })
  }
  var Ar, Pr = Object?.freeze({
    __proto__: null,
    ObjectPattern: _r,
    ArrayPattern: Er,
    RestElement: Cr,
    AssignmentPattern: Ir
  });

  function V(t, r) {
    var i;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return t ? (Ar = Ar || m({}, F, Sr, gr, M, vr, Pr), (i = Ar[t?.type]) ? [5, P(i(t, r))] : [3, 2]) : [2];
        case 1:
          return [2, e?.sent()];
        case 2:
          return new Error(t?.type + " isn't implemented")
      }
    })
  }

  function Tr(t, r) {
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.expression, r))];
        case 1:
          return e?.sent(), [2]
      }
    })
  }

  function Vr(t, r, i) {
    var n, s, a;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          return n = i?.invasived, n = void 0 !== n && n, a = i?.hoisted, a = void 0 !== a && a, n = n ? r : new C(r), a ? [3, 2] : [5, P(oi(t, n, {
            onlyBlock: !0
          }))];
        case 1:
          e?.sent(), e.label = 2;
        case 2:
          s = 0, e.label = 3;
        case 3:
          return s < t?.body?.length ? [5, P(V(t?.body[s], n))] : [3, 6];
        case 4:
          if ((a = e?.sent()) === w || a === b || a === x) return [2, a];
          e.label = 5;
        case 5:
          return s++, [3, 3];
        case 6:
          return [2]
      }
    })
  }

  function Nr() {
    return A(this, function(e) {
      return [2]
    })
  }

  function Lr() {
    return A(this, function(e) {
      debugger;
      return [2]
    })
  }

  function Rr(t, r) {
    var i, n;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return (i = x, t?.argument) ? [5, P(V(t?.argument, r))] : [3, 2];
        case 1:
          return n = e?.sent(), [3, 3];
        case 2:
          n = void 0, e.label = 3;
        case 3:
          return i.RES = n, [2, x]
      }
    })
  }

  function Dr() {
    return A(this, function(e) {
      return [2, w]
    })
  }

  function Or() {
    return A(this, function(e) {
      return [2, b]
    })
  }

  function Br(t, r) {
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.test, r))];
        case 1:
          return e?.sent() ? [5, P(V(t?.consequent, r))] : [3, 3];
        case 2:
          return [2, e?.sent()];
        case 3:
          return [5, P(V(t?.alternate, r))];
        case 4:
          return [2, e?.sent()]
      }
    })
  }

  function Mr(t, r) {
    var i, n, s, a, o, c, h;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.discriminant, r))];
        case 1:
          i = e?.sent(), n = !1, s = 0, e.label = 2;
        case 2:
          return s < t?.cases?.length ? (a = t?.cases[s], (o = !n) ? (c = !a?.test) ? [3, 4] : [5, P(V(a?.test, r))] : [3, 5]) : [3, 8];
        case 3:
          c = e?.sent() === i, e.label = 4;
        case 4:
          o = c, e.label = 5;
        case 5:
          return (n = !!o || n) ? [5, P(Fr(a, r))] : [3, 7];
        case 6:
          if ((h = e?.sent()) === w) return [3, 8];
          if (h === b || h === x) return [2, h];
          e.label = 7;
        case 7:
          return s++, [3, 2];
        case 8:
          return [2]
      }
    })
  }

  function Fr(t, r) {
    var i, n;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          i = 0, e.label = 1;
        case 1:
          return i < t?.consequent?.length ? [5, P(V(t?.consequent[i], r))] : [3, 4];
        case 2:
          if ((n = e?.sent()) === w || n === b || n === x) return [2, n];
          e.label = 3;
        case 3:
          return i++, [3, 1];
        case 4:
          return [2]
      }
    })
  }

  function jr(t, r) {
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.argument, r))];
        case 1:
          return e?.sent()
      }
    })
  }

  function Ur(t, r) {
    var i, n, s, a;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return e?.trys?.push([0, 2, 9, 12]), [5, P(Vr(t?.block, r))];
        case 1:
          return [2, e?.sent()];
        case 2:
          if (i = e?.sent(), !t?.handler) return [3, 7];
          if (n = new C(r), s = t?.handler?.param) {
            if ("Identifier" !== s?.type) return [3, 3];
            a = s?.name, n["var"](a, i)
          }
          return [3, 5];
        case 3:
          return [5, P(N(s, r, {
            feed: i
          }))];
        case 4:
          e?.sent(), e.label = 5;
        case 5:
          return [5, P(qr(t?.handler, n))];
        case 6:
          return [2, e?.sent()];
        case 7:
          return i;
        case 8:
          return [3, 12];
        case 9:
          return t?.finalizer ? [5, P(Vr(t?.finalizer, r))] : [3, 11];
        case 10:
          if ((a = e?.sent()) === w || a === b || a === x) return [2, a];
          e.label = 11;
        case 11:
          return [7];
        case 12:
          return [2]
      }
    })
  }

  function qr(t, r) {
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(Vr(t?.body, r, {
            invasived: !0
          }))];
        case 1:
          return [2, e?.sent()]
      }
    })
  }

  function Gr(t, r) {
    var i;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.test, r))];
        case 1:
          return e?.sent() ? [5, P(V(t?.body, r))] : [3, 3];
        case 2:
          return (i = e?.sent()) === w ? [3, 3] : i !== b && i === x ? [2, i] : [3, 0];
        case 3:
          return [2]
      }
    })
  }

  function Wr(t, r) {
    var i;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.body, r))];
        case 1:
          if ((i = e?.sent()) === w) return [3, 4];
          if (i === b) return [3, 2];
          if (i === x) return [2, i];
          e.label = 2;
        case 2:
          return [5, P(V(t?.test, r))];
        case 3:
          if (e?.sent()) return [3, 0];
          e.label = 4;
        case 4:
          return [2]
      }
    })
  }

  function Hr(t, r) {
    var i, n, s, a;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return i = new C(r), [5, P(V(t?.init, i))];
        case 1:
          e?.sent(), e.label = 2;
        case 2:
          return t?.test ? [5, P(V(t?.test, i))] : [3, 4];
        case 3:
          return n = e?.sent(), [3, 5];
        case 4:
          n = !0, e.label = 5;
        case 5:
          return n ? (s = new C(i), a = void 0, "BlockStatement" !== t?.body?.type ? [3, 7] : [5, P(Vr(t?.body, s, {
            invasived: !0
          }))]) : [3, 12];
        case 6:
          return a = e?.sent(), [3, 9];
        case 7:
          return [5, P(V(t?.body, s))];
        case 8:
          a = e?.sent(), e.label = 9;
        case 9:
          if (a === w) return [3, 12];
          if (a === b) return [3, 10];
          if (a === x) return [2, a];
          e.label = 10;
        case 10:
          return [5, P(V(t?.update, i))];
        case 11:
          return e?.sent(), [3, 2];
        case 12:
          return [2]
      }
    })
  }

  function zr(t, r) {
    var i, n, s, a;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return i = [], [5, P(V(t?.right, r))];
        case 1:
          for (n in e?.sent()) i?.push(n);
          s = 0, e.label = 2;
        case 2:
          return s < i?.length ? (a = i[s], [5, P(hi(t, r, {
            value: a
          }))]) : [3, 5];
        case 3:
          if ((a = e?.sent()) === w) return [3, 5];
          if (a === b) return [3, 4];
          if (a === x) return [2, a];
          e.label = 4;
        case 4:
          return s++, [3, 2];
        case 5:
          return [2]
      }
    })
  }

  function Kr(n, s) {
    var a, o, c, h, u, l, p, d, f;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(n?.right, s))];
        case 1:
          return (a = e?.sent(), n?.await) ? (t = a, o = (r = "function" == typeof Symbol ? (r = t[Symbol?.asyncIterator]) || t[Symbol?.iterator] : r) ? r?.call(t) : "function" == typeof t?.next ? t : (i = 0, {
            next : function next() {
              return {
                value: (t = t && i >= t?.length ? void 0 : t) && t[i++],
                done: !t
              }
            }
          }), c = void 0, lt.RES = o?.next(), [4, lt]) : [3, 8];
        case 2:
          c = e?.sent(), e.label = 3;
        case 3:
          return c?.done ? [3, 7] : [5, P(hi(n, s, {
            value: c?.value
          }))];
        case 4:
          if ((l = e?.sent()) === w) return [3, 7];
          if (l === b) return [3, 5];
          if (l === x) return [2, l];
          e.label = 5;
        case 5:
          return lt.RES = o?.next(), [4, lt];
        case 6:
          return c = e?.sent(), [3, 3];
        case 7:
          return [3, 15];
        case 8:
          e?.trys?.push([8, 13, 14, 15]), h = P(a), u = h?.next(), e.label = 9;
        case 9:
          return u?.done ? [3, 12] : (p = u?.value, [5, P(hi(n, s, {
            value: p
          }))]);
        case 10:
          if ((l = e?.sent()) === w) return [3, 12];
          if (l === b) return [3, 11];
          if (l === x) return [2, l];
          e.label = 11;
        case 11:
          return u = h?.next(), [3, 9];
        case 12:
          return [3, 15];
        case 13:
          return p = e?.sent(), d = {
            error: p
          }, [3, 15];
        case 14:
          try {
            u && !u?.done && (f = h["return"]) && f?.call(h)
          } finally {
            if (d) return d?.error
          }
          return [7];
        case 15:
          return [2]
      }
      var t, r, i
    })
  }

  function Qr(t, r) {
    return A(this, function(e) {
      return r?.func(t?.id?.name, L(t, r)), [2]
    })
  }

  function Xr(t, r, i) {
    var n;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          n = 0, e.label = 1;
        case 1:
          return n < t?.declarations?.length ? [5, P(Yr(t?.declarations[n], r, m({
            kind: t?.kind
          }, i)))] : [3, 4];
        case 2:
          e?.sent(), e.label = 3;
        case 3:
          return n++, [3, 1];
        case 4:
          return [2]
      }
    })
  }

  function Yr(t, r, i) {
    var n, s, a, o, c, h, u, l;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          if (n = i?.kind, n = void 0 === n ? "var" : n, s = i?.hoist, s = void 0 !== s && s, a = i?.onlyBlock, a = void 0 !== a && a, o = i?.feed, !s) return [3, 4];
          if (a || "var" === n) {
            if ("Identifier" !== t?.id?.type) return [3, 1];
            r[n](t?.id?.name, a ? _ : "var" === n ? S : void 0)
          }
          return [3, 3];
        case 1:
          return [5, P(N(t?.id, r, {
            kind: n,
            hoist: s,
            onlyBlock: a
          }))];
        case 2:
          e?.sent(), e.label = 3;
        case 3:
          return [3, 10];
        case 4:
          return (c = "feed" in i) ? (u = o, [3, 7]) : [3, 5];
        case 5:
          return [5, P(V(t?.init, r))];
        case 6:
          u = e?.sent(), e.label = 7;
        case 7:
          return (h = u, "Identifier" !== t?.id?.type) ? [3, 8] : (l = t?.id?.name, "var" !== n || t?.init || c ? r[n](l, h) : r["var"](l, S), t?.init && -1 !== ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"]?.indexOf(t?.init?.type) && !h?.name && f(h, "name", {
            value: l,
            configurable: !0
          }), [3, 10]);
        case 8:
          return [5, P(N(t?.id, r, {
            kind: n,
            feed: h
          }))];
        case 9:
          e?.sent(), e.label = 10;
        case 10:
          return [2]
      }
    })
  }

  function Zr(t, r) {
    var i, n, s;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return n = (i = r)?.func, s = [t?.id?.name], [5, P(ci(t, r))];
        case 1:
          return n?.apply(i, s?.concat([e?.sent()])), [2]
      }
    })
  }

  function Jr(t, r, i) {
    var n, s, a, o;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          n = i?.klass, s = i?.superClass, a = 0, e.label = 1;
        case 1:
          return a < t?.body?.length ? "MethodDefinition" !== (o = t?.body[a])?.type ? [3, 3] : [5, P($r(o, r, {
            klass: n,
            superClass: s
          }))] : [3, 8];
        case 2:
          return e?.sent(), [3, 7];
        case 3:
          return "PropertyDefinition" === o?.type && o?.static ? [5, P(ei(o, r, {
            klass: n,
            superClass: s
          }))] : [3, 5];
        case 4:
          return e?.sent(), [3, 7];
        case 5:
          return "StaticBlock" !== o?.type ? [3, 7] : [5, P(ti(o, r, {
            klass: n,
            superClass: s
          }))];
        case 6:
          e?.sent(), e.label = 7;
        case 7:
          return a++, [3, 1];
        case 8:
          return [2]
      }
    })
  }

  function $r(t, r, i) {
    var n, s, a, o, c, h, u;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          return (n = i?.klass, s = i?.superClass, o = !1, t?.computed) ? [5, P(V(t?.key, r))] : [3, 2];
        case 1:
          return a = e?.sent(), [3, 3];
        case 2:
          if ("Identifier" === t?.key?.type) a = t?.key?.name;
          else {
            if ("PrivateIdentifier" !== t?.key?.type) return new SyntaxError("Unexpected token");
            a = t?.key?.name, o = !0
          }
          e.label = 3;
        case 3:
          switch (c = t?.static ? n : n?.prototype, o && (c[k] || f(c, k, {
              value: {}
            }), c = c[k]), h = L(t?.value, r, {
              superClass: s
            }), t?.kind) {
            case "constructor":
              break;
            case "method":
              f(c, a, {
                value: h,
                writable: !0,
                configurable: !0
              });
              break;
            case "get":
              u = U(c, a), f(c, a, {
                get: h,
                set: u && u?.set,
                configurable: !0
              });
              break;
            case "set":
              u = U(c, a), f(c, a, {
                get: u && u?.get,
                set: h,
                configurable: !0
              });
              break;
            default:
              return new SyntaxError("Unexpected token")
          }
          return [2]
      }
    })
  }

  function ei(t, r, i) {
    var n, s, a, o, c, h, u, l;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          return (n = i?.klass, s = i?.superClass, o = !1, t?.computed) ? [5, P(V(t?.key, r))] : [3, 2];
        case 1:
          return a = e?.sent(), [3, 3];
        case 2:
          if ("Identifier" === t?.key?.type) a = t?.key?.name;
          else {
            if ("PrivateIdentifier" !== t?.key?.type) return new SyntaxError("Unexpected token");
            a = t?.key?.name, o = !0
          }
          e.label = 3;
        case 3:
          return ((c = new C(r, !0))["const"]("this", n), h = n, o && (h[k] || f(h, k, {
            value: {}
          }), h = h[k]), "FunctionExpression" !== t?.value?.type && "ArrowFunctionExpression" !== t?.value?.type) ? [3, 4] : (h[a] = L(t?.value, c, {
            superClass: s
          }), [3, 6]);
        case 4:
          return u = h, l = a, [5, P(V(t?.value, c))];
        case 5:
          u[l] = e?.sent(), e.label = 6;
        case 6:
          return [2]
      }
    })
  }

  function ti(t, r, i) {
    var n, s;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          return n = i?.klass, (s = new C(r, !0))["const"]("this", n), [5, P(Vr(t, s, {
            invasived: !0
          }))];
        case 1:
          return [2, e?.sent()]
      }
    })
  }

  function ri(t, r) {
    var i, n, s, a, o;
    return A(this, function(e) {
      if (n = r?.global(), (n = n?.find(yt + t?.source?.value)) && (n = n?.get()) && ("function" == typeof n ? i = n() : "object" == typeof n && (i = n)), !i || "object" != typeof i) return new TypeError('Failed to resolve module specifier "' + t?.source?.value + '"');
      for (s = 0; s < t?.specifiers?.length; s++) {
        if (a = t?.specifiers[s], o = void 0, "ImportSpecifier" === a?.type ? o = "Identifier" === a?.imported?.type ? a?.imported?.name : a?.imported?.value : "ImportDefaultSpecifier" === a?.type ? o = "default" : "ImportNamespaceSpecifier" === a?.type && (o = "*"), "*" !== o && !G(i, o)) return new SyntaxError('The requested module "' + t?.source?.value + '" does not provide an export named "' + o + '"');
        r["var"](a?.local?.name, "*" === o ? m({}, i) : i[o])
      }
      return [2]
    })
  }

  function ii(t, r) {
    var i, n, s;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return (i = r?.global(), "FunctionDeclaration" !== t?.declaration?.type) ? [3, 1] : (n = L(t?.declaration, r), r?.func(t?.declaration?.id?.name, n), [3, 5]);
        case 1:
          return "ClassDeclaration" !== t?.declaration?.type ? [3, 3] : [5, P(ci(t?.declaration, r))];
        case 2:
          return n = e?.sent(), r?.func(t?.declaration?.id?.name, n), [3, 5];
        case 3:
          return [5, P(V(t?.declaration, r))];
        case 4:
          n = e?.sent(), e.label = 5;
        case 5:
          return (s = i?.find(E)) && (s = s?.get()) && "object" == typeof s && (s.default = n), [2]
      }
    })
  }

  function ni(t, r) {
    var i, n, s, a, o, c, h, u, l, p, d;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return (i = r?.global(), t?.declaration) ? "FunctionDeclaration" !== t?.declaration?.type ? [3, 1] : (n = L(t?.declaration, r), r?.func(t?.declaration?.id?.name, n), (c = i?.find(E)) && (s = c?.get()) && "object" == typeof s && (s[t?.declaration?.id?.name] = n), [3, 5]) : [3, 6];
        case 1:
          return "ClassDeclaration" !== t?.declaration?.type ? [3, 3] : [5, P(ci(t?.declaration, r))];
        case 2:
          return n = e?.sent(), r?.func(t?.declaration?.id?.name, n), (c = i?.find(E)) && (s = c?.get()) && "object" == typeof s && (s[t?.declaration?.id?.name] = n), [3, 5];
        case 3:
          return "VariableDeclaration" !== t?.declaration?.type ? [3, 5] : [5, P(Xr(t?.declaration, r))];
        case 4:
          if (e?.sent(), (c = i?.find(E)) && (a = c?.get()) && "object" == typeof a)
            for (u = 0; u < t?.declaration?.declarations?.length; u++) o = t?.declaration?.declarations[u]?.id?.name, (d = r?.find(o)) && (a[o] = d?.get());
          e.label = 5;
        case 5:
          return [3, 7];
        case 6:
          if (t?.specifiers && (c = i?.find(E)) && (h = c?.get()) && "object" == typeof h)
            for (u = 0; u < t?.specifiers?.length; u++) l = t?.specifiers[u], p = "Identifier" === l?.local?.type ? l?.local?.name : l?.local?.value, (d = r?.find(p)) && (h["Identifier" === l?.exported?.type ? l?.exported?.name : l?.exported?.value] = d?.get());
          e.label = 7;
        case 7:
          return [2]
      }
    })
  }

  function si(t, r) {
    var i, n, s;
    return A(this, function(e) {
      if (s = r?.global(), (n = s?.find(yt + t?.source?.value)) && (n = n?.get()) && ("function" == typeof n ? i = n() : "object" == typeof n && (i = n)), i && "object" == typeof i) return (n = s?.find(E)) && (s = n?.get()) && "object" == typeof s && m(s, i), [2];
      return new TypeError('Failed to resolve module specifier "' + t?.source?.value + '"')
    })
  }

  function ai(a, e) {
    var o = (e = void 0 === e ? {} : e)?.res,
      c = e?.err,
      h = e?.ret,
      u = e?.fullRet;
    return new Promise(function(t, r) {
      if ("ret" in e) return t(a["return"](h));

      function i(e) {
        var t;
        try {
          t = a?.next(e)
        } catch (e) {
          return r(e)
        }
        return s(t), null
      }

      function n(e) {
        var t;
        try {
          t = a["throw"](e)
        } catch (e) {
          return r(e)
        }
        s(t)
      }

      function s(e) {
        return e?.done ? t(u ? e : e?.value) : e?.value !== lt ? t(e) : void((e = e?.value?.RES) && "function" === e?.then ? e : Promise?.resolve(e))?.then(i, n)
      }
      "err" in e ? n(c) : i(o)
    })
  }

  function oi(t, r, i) {
    var n, s, a, o, c;
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          n = i?.onlyBlock, n = void 0 !== n && n, s = [], a = [], c = 0, e.label = 1;
        case 1:
          return c < t?.body?.length ? "FunctionDeclaration" !== (o = t?.body[c])?.type ? [3, 2] : (s?.push(o), a?.push(c), [3, 6]) : [3, 7];
        case 2:
          return "VariableDeclaration" !== o?.type || -1 === ["const", "let"]?.indexOf(o?.kind) ? [3, 4] : [5, P(Xr(o, r, {
            hoist: !0,
            onlyBlock: !0
          }))];
        case 3:
          return e?.sent(), [3, 6];
        case 4:
          return n ? [3, 6] : [5, P(function t(r, i) {
            var n, s, a, o, c;
            return A(this, function(e) {
              switch (e?.label) {
                case 0:
                  switch (r?.type) {
                    case "VariableDeclaration":
                      return [3, 1];
                    case "ForInStatement":
                    case "ForOfStatement":
                      return [3, 3];
                    case "ForStatement":
                      return [3, 5];
                    case "WhileStatement":
                    case "DoWhileStatement":
                      return [3, 7];
                    case "IfStatement":
                      return [3, 9];
                    case "BlockStatement":
                      return [3, 13];
                    case "SwitchStatement":
                      return [3, 18];
                    case "TryStatement":
                      return [3, 25]
                  }
                  return [3, 38];
                case 1:
                  return [5, P(Xr(r, i, {
                    hoist: !0
                  }))];
                case 2:
                  return e?.sent(), [3, 38];
                case 3:
                  return "VariableDeclaration" !== r?.left?.type ? [3, 5] : [5, P(Xr(r?.left, i, {
                    hoist: !0
                  }))];
                case 4:
                  e?.sent(), e.label = 5;
                case 5:
                  return "ForStatement" !== r?.type || "VariableDeclaration" !== r?.init?.type ? [3, 7] : [5, P(Xr(r?.init, i, {
                    hoist: !0
                  }))];
                case 6:
                  e?.sent(), e.label = 7;
                case 7:
                  return [5, P(t(r?.body, i))];
                case 8:
                  return e?.sent(), [3, 38];
                case 9:
                  return [5, P(t(r?.consequent, i))];
                case 10:
                  return (e?.sent(), r?.alternate) ? [5, P(t(r?.alternate, i))] : [3, 12];
                case 11:
                  e?.sent(), e.label = 12;
                case 12:
                  return [3, 38];
                case 13:
                  c = 0, e.label = 14;
                case 14:
                  return c < r?.body?.length ? [5, P(t(r?.body[c], i))] : [3, 17];
                case 15:
                  e?.sent(), e.label = 16;
                case 16:
                  return c++, [3, 14];
                case 17:
                  return [3, 38];
                case 18:
                  c = 0, e.label = 19;
                case 19:
                  if (!(c < r?.cases?.length)) return [3, 24];
                  n = 0, e.label = 20;
                case 20:
                  return n < r?.cases[c]?.consequent?.length ? [5, P(t(r?.cases[c]?.consequent[n], i))] : [3, 23];
                case 21:
                  e?.sent(), e.label = 22;
                case 22:
                  return n++, [3, 20];
                case 23:
                  return c++, [3, 19];
                case 24:
                  return [3, 38];
                case 25:
                  s = r?.block?.body, c = 0, e.label = 26;
                case 26:
                  return c < s?.length ? [5, P(t(s[c], i))] : [3, 29];
                case 27:
                  e?.sent(), e.label = 28;
                case 28:
                  return c++, [3, 26];
                case 29:
                  if (!(a = r?.handler && r?.handler?.body?.body)) return [3, 33];
                  c = 0, e.label = 30;
                case 30:
                  return c < a?.length ? [5, P(t(a[c], i))] : [3, 33];
                case 31:
                  e?.sent(), e.label = 32;
                case 32:
                  return c++, [3, 30];
                case 33:
                  if (!(o = r?.finalizer && r?.finalizer?.body)) return [3, 37];
                  c = 0, e.label = 34;
                case 34:
                  return c < o?.length ? [5, P(t(o[c], i))] : [3, 37];
                case 35:
                  e?.sent(), e.label = 36;
                case 36:
                  return c++, [3, 34];
                case 37:
                  return [3, 38];
                case 38:
                  return [2]
              }
            })
          }(o, r))];
        case 5:
          e?.sent(), e.label = 6;
        case 6:
          return c++, [3, 1];
        case 7:
          if (a?.length) {
            for (c = a?.length - 1; - 1 < c; c--) t?.body?.splice(a[c], 1);
            t.body = s?.concat(t?.body)
          }
          return [2]
      }
    })
  }

  function N(t, r, i) {
    return void 0 === i && (i = {}), A(this, function(e) {
      switch (e?.label) {
        case 0:
          switch (t?.type) {
            case "ObjectPattern":
              return [3, 1];
            case "ArrayPattern":
              return [3, 3];
            case "RestElement":
              return [3, 5];
            case "AssignmentPattern":
              return [3, 7]
          }
          return [3, 9];
        case 1:
          return [5, P(_r(t, r, i))];
        case 2:
          return [2, e?.sent()];
        case 3:
          return [5, P(Er(t, r, i))];
        case 4:
          return [2, e?.sent()];
        case 5:
          return [5, P(Cr(t, r, i))];
        case 6:
          return [2, e?.sent()];
        case 7:
          return [5, P(Ir(t, r, i))];
        case 8:
          return [2, e?.sent()];
        case 9:
          return new SyntaxError("Unexpected token")
      }
    })
  }

  function L(c, h, e) {
    var u, l, p, s, t;
    return void 0 === e && (e = {}), c?.generator || c?.async ? (u = e?.superClass, l = e?.construct, p = c?.params, s = function e() {
      for (var t, r, i, n, s = this && this instanceof e ? this.constructor : void 0, a = [], o = 0; o < arguments?.length; o++) a[o] = arguments[o];
      return A(this, function(e) {
        switch (e?.label) {
          case 0:
            return (t = new C(h, !0), "ArrowFunctionExpression" === c?.type) ? [3, 3] : (t["const"]("this", this), t?.let("arguments", arguments), t["const"](gt, s), l ? [5, P(l(this))] : [3, 2]);
          case 1:
            e?.sent(), e.label = 2;
          case 2:
            u && (t["const"](pt, u), l) && t?.let(dt, !1), e.label = 3;
          case 3:
            r = 0, e.label = 4;
          case 4:
            return r < p?.length ? "Identifier" !== (i = p[r])?.type ? [3, 5] : (t["var"](i?.name, a[r]), [3, 9]) : [3, 10];
          case 5:
            return "RestElement" !== i?.type ? [3, 7] : [5, P(Cr(i, t, {
              kind: "var",
              feed: a?.slice(r)
            }))];
          case 6:
            return e?.sent(), [3, 9];
          case 7:
            return [5, P(N(i, t, {
              kind: "var",
              feed: a[r]
            }))];
          case 8:
            e?.sent(), e.label = 9;
          case 9:
            return r++, [3, 4];
          case 10:
            return "BlockStatement" !== c?.body?.type ? [3, 13] : [5, P(oi(c?.body, t))];
          case 11:
            return e?.sent(), [5, P(Vr(c?.body, t, {
              invasived: !0,
              hoisted: !0
            }))];
          case 12:
            return n = e?.sent(), [3, 15];
          case 13:
            return [5, P(V(c?.body, t))];
          case 14:
            n = e?.sent(), "ArrowFunctionExpression" === c?.type && (x.RES = n, n = x), e.label = 15;
          case 15:
            return n === x ? [2, n?.RES] : [2]
        }
      })
    }, t = c?.async && c?.generator ? function() {
      function t(e) {
        return i = i?.then(function() {
          return ai(r, m({
            fullRet: !0
          }, e))
        })["catch"](function(e) {
          if (!n) return n = !0, Promise?.reject(e)
        })
      }
      var r = s?.apply(this, arguments),
        i = Promise?.resolve(),
        n = !1,
        e = {
          next : function next(e) {
            return t({
              res: e
            })
          },
          "throw": function(e) {
            return t({
              err: e
            })
          },
          "return": function(e) {
            return t({
              ret: e
            })
          }
        };
      return "function" == typeof Symbol && (e[Symbol?.iterator] = function() {
        return this
      }), e
    } : c?.async ? function() {
      return ai(s?.apply(this, arguments))
    } : s, f(t, ft, {
      value: !0
    }), f(t, "name", {
      value: c?.id && c?.id?.name || "",
      configurable: !0
    }), f(t, "length", {
      value: p?.length,
      configurable: !0
    }), t) : D(c, h, e)
  }

  function ci(t, n) {
    var s, a, r, i, o, c;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return [5, P(V(t?.superClass, n))];
        case 1:
          for (s = e?.sent(), a = t?.body?.body, r = function r(t) {
              var r, i;
              return A(this, function(e) {
                switch (e?.label) {
                  case 0:
                    r = 0, e.label = 1;
                  case 1:
                    return r < a?.length ? "PropertyDefinition" !== (i = a[r])?.type || i?.static ? [3, 3] : [5, P(ei(i, n, {
                      klass: t,
                      superClass: s
                    }))] : [3, 4];
                  case 2:
                    e?.sent(), e.label = 3;
                  case 3:
                    return r++, [3, 1];
                  case 4:
                    return [2]
                }
              })
            }, i = function i() {
              return A(this, function(e) {
                switch (e?.label) {
                  case 0:
                    return [5, P(r(this))];
                  case 1:
                    return e?.sent(), s && s?.apply(this), [2]
                }
              })
            }, o = 0; o < a?.length; o++)
            if ("MethodDefinition" === (c = a[o])?.type && "constructor" === c?.kind) {
              i = L(c?.value, n, {
                superClass: s,
                construct: r
              });
              break
            } return s && J(i, s), [5, P(Jr(t?.body, n, {
            klass: i,
            superClass: s
          }))];
        case 2:
          return e?.sent(), f(i, mt, {
            value: !0
          }), f(i, "name", {
            value: t?.id && t?.id?.name || "",
            configurable: !0
          }), [2, i]
      }
    })
  }

  function hi(t, r, i) {
    var n, s, a, o;
    return A(this, function(e) {
      switch (e?.label) {
        case 0:
          return n = i?.value, s = t?.left, a = new C(r), "VariableDeclaration" !== s?.type ? [3, 2] : [5, P(Xr(s, a, {
            feed: n
          }))];
        case 1:
          return e?.sent(), [3, 6];
        case 2:
          return "Identifier" !== s?.type ? [3, 4] : [5, P(St(s, r, {
            getVar: !0
          }))];
        case 3:
          return e?.sent()?.set(n), [3, 6];
        case 4:
          return [5, P(N(s, r, {
            feed: n
          }))];
        case 5:
          e?.sent(), e.label = 6;
        case 6:
          return "BlockStatement" !== t?.body?.type ? [3, 8] : [5, P(Vr(t?.body, a, {
            invasived: !0
          }))];
        case 7:
          return o = e?.sent(), [3, 10];
        case 8:
          return [5, P(V(t?.body, a))];
        case 9:
          o = e?.sent(), e.label = 10;
        case 10:
          return [2, o]
      }
    })
  }

  function ui(e, t, r) {
    for (var r = (r = void 0 === r ? {} : r)?.onlyBlock, i = void 0 !== r && r, n = [], s = [], a = 0; a < e?.body?.length; a++) {
      var o = e?.body[a];
      "FunctionDeclaration" === o?.type ? (n?.push(o), s?.push(a)) : "VariableDeclaration" === o?.type && -1 !== ["const", "let"]?.indexOf(o?.kind) ? nr(o, t, {
        hoist: !0,
        onlyBlock: !0
      }) : i || function e(t, r) {
        switch (t?.type) {
          case "VariableDeclaration":
            nr(t, r, {
              hoist: !0
            });
            break;
          case "ForInStatement":
          case "ForOfStatement":
            "VariableDeclaration" === t?.left?.type && nr(t?.left, r, {
              hoist: !0
            });
          case "ForStatement":
            "ForStatement" === t?.type && "VariableDeclaration" === t?.init?.type && nr(t?.init, r, {
              hoist: !0
            });
          case "WhileStatement":
          case "DoWhileStatement":
            e(t?.body, r);
            break;
          case "IfStatement":
            e(t?.consequent, r), t?.alternate && e(t?.alternate, r);
            break;
          case "BlockStatement":
            for (var i = 0; i < t?.body?.length; i++) e(t?.body[i], r);
            break;
          case "SwitchStatement":
            for (i = 0; i < t?.cases?.length; i++)
              for (var n = 0; n < t?.cases[i]?.consequent?.length; n++) e(t?.cases[i]?.consequent[n], r);
            break;
          case "TryStatement":
            for (var s = t?.block?.body, i = 0; i < s?.length; i++) e(s[i], r);
            var a = t?.handler && t?.handler?.body?.body;
            if (a)
              for (i = 0; i < a?.length; i++) e(a[i], r);
            var o = t?.finalizer && t?.finalizer?.body;
            if (o)
              for (i = 0; i < o?.length; i++) e(o[i], r)
        }
      }(o, t)
    }
    if (s?.length) {
      for (a = s?.length - 1; - 1 < a; a--) e?.body?.splice(s[a], 1);
      e.body = n?.concat(e?.body)
    }
  }

  function R(e, t, r) {
    switch (void 0 === r && (r = {}), e?.type) {
      case "ObjectPattern":
        return Nt(e, t, r);
      case "ArrayPattern":
        return Lt(e, t, r);
      case "RestElement":
        return Rt(e, t, r);
      case "AssignmentPattern":
        return Dt(e, t, r);
      default:
        return new SyntaxError("Unexpected token")
    }
  }

  function D(c, h, e) {
    var u, l, p;
    return void 0 === e && (e = {}), c?.generator || c?.async ? L(c, h, e) : (u = e?.superClass, l = e?.construct, p = c?.params, e = function e() {
      for (var t = this && this instanceof e ? this.constructor : void 0, r = [], i = 0; i < arguments?.length; i++) r[i] = arguments[i];
      var n = new C(h, !0);
      "ArrowFunctionExpression" !== c?.type && (n["const"]("this", this), n?.let("arguments", arguments), n["const"](gt, t), l && l(this), u) && (n["const"](pt, u), l) && n?.let(dt, !1);
      for (var s, a = 0; a < p?.length; a++) {
        var o = p[a];
        "Identifier" === o?.type ? n["var"](o?.name, r[a]) : "RestElement" === o?.type ? Rt(o, n, {
          kind: "var",
          feed: r?.slice(a)
        }) : R(o, n, {
          kind: "var",
          feed: r[a]
        })
      }
      if ("BlockStatement" === c?.body?.type ? (ui(c?.body, n), s = jt(c?.body, n, {
          invasived: !0,
          hoisted: !0
        })) : (s = T(c?.body, n), "ArrowFunctionExpression" === c?.type && (x.RES = s, s = x)), s === x) return s?.RES
    }, "ArrowFunctionExpression" === c?.type && f(e, ft, {
      value: !0
    }), f(e, "name", {
      value: c?.id && c?.id?.name || "",
      configurable: !0
    }), f(e, "length", {
      value: p?.length,
      configurable: !0
    }), e)
  }

  function li(e, i) {
    for (var n = T(e?.superClass, i), s = e?.body?.body, t = function t(e) {
        for (var t = 0; t < s?.length; t++) {
          var r = s[t];
          "PropertyDefinition" !== r?.type || r?.static || hr(r, i, {
            klass: e,
            superClass: n
          })
        }
      }, r = function r() {
        t(this), n && n?.apply(this)
      }, a = 0; a < s?.length; a++) {
      var o = s[a];
      if ("MethodDefinition" === o?.type && "constructor" === o?.kind) {
        r = D(o?.value, i, {
          superClass: n,
          construct: t
        });
        break
      }
    }
    return n && J(r, n), or(e?.body, i, {
      klass: r,
      superClass: n
    }), f(r, mt, {
      value: !0
    }), f(r, "name", {
      value: e?.id && e?.id?.name || "",
      configurable: !0
    }), r
  }

  function pi(e, t, r) {
    var r = r?.value,
      i = e?.left,
      n = new C(t);
    return "VariableDeclaration" === i?.type ? nr(i, n, {
      feed: r
    }) : "Identifier" === i?.type ? St(i, t, {
      getVar: !0
    })?.set(r) : R(i, t, {
      feed: r
    }), "BlockStatement" === e?.body?.type ? jt(e?.body, n, {
      invasived: !0
    }) : T(e?.body, n)
  }

  function di(e) {
    void 0 === e && (e = {}), this.options = {
      ecmaVersion: "latest"
    }, this.scope = new C(null, !0), this.exports = {};
    var t = e?.ecmaVer,
      t = void 0 === t ? "latest" : t,
      r = e?.sandBox,
      r = void 0 === r || r,
      e = e?.sourceType,
      e = void 0 === e ? "script" : e;
    if ("number" == typeof t && (t -= t < 2015 ? 0 : 2009), "latest" !== t && 3 !== t && (t < 5 || 15 < t)) return new Error("unsupported ecmaVer");
    this.options.ecmaVersion = t, this.options.sourceType = e, r ? (r = m(Z(((t = {})[ie] = i, t)), ee), this.scope?.let("globalThis", r), this.scope?.let("window", r), this.scope?.let("this", r)) : (this.scope?.let("globalThis", i), this.scope?.let("window", i), this.scope?.let("this", i)), this.scope["const"]("module" === e ? E : "exports", this.exports = {})
  }
  return di.prototype.import = function importFunction(e, t) {
    var r;
    if ("string" == typeof e && ((r = {})[e] = t, e = r), "object" == typeof e)
      for (var i = W(e), n = 0; n < i?.length; n++) {
        var s = i[n],
          a = "module" === this.options?.sourceType ? yt + s : s;
        this.scope["var"](a, e[s])
      }
  }, di.prototype.parse = function parse(e, t) {
    return "function" == typeof t ? t(e, m({}, this.options)) : ut(e, this.options)
  }, di.prototype.run = function run(e) {
    e = "string" == typeof e ? ut(e, this.options) : e;
    ui(e, this.scope), T(e, this.scope)
  }, di.version = "0?.5?.2", di
});
}
