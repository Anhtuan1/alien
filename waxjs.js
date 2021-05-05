var waxjs = (function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 3))
  );
})([
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            o = r.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      i =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        },
      o =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && t[Symbol.iterator],
            r = 0;
          return e
            ? e.call(t)
            : {
                next: function () {
                  return (
                    t && r >= t.length && (t = void 0),
                    { value: t && t[r++], done: !t }
                  );
                },
              };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(6).RIPEMD160.hash,
      s = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
      u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var c = (function () {
      for (var t = Array(256).fill(-1), e = 0; e < s.length; ++e)
        t[s.charCodeAt(e)] = e;
      return t;
    })();
    var l,
      f = (function () {
        for (var t = Array(256).fill(-1), e = 0; e < u.length; ++e)
          t[u.charCodeAt(e)] = e;
        return (t["=".charCodeAt(0)] = 0), t;
      })();
    function h(t) {
      return 0 != (128 & t[t.length - 1]);
    }
    function p(t) {
      for (var e = 1, r = 0; r < t.length; ++r) {
        var n = (255 & ~t[r]) + e;
        (t[r] = n), (e = n >> 8);
      }
    }
    function d(t, e) {
      for (var r = new Uint8Array(t), n = 0; n < e.length; ++n) {
        var i = e.charCodeAt(n);
        if (i < "0".charCodeAt(0) || i > "9".charCodeAt(0))
          throw new Error("invalid number");
        for (var o = i - "0".charCodeAt(0), a = 0; a < t; ++a) {
          var s = 10 * r[a] + o;
          (r[a] = s), (o = s >> 8);
        }
        if (o) throw new Error("number is out of range");
      }
      return r;
    }
    function y(t, e) {
      void 0 === e && (e = 1);
      for (
        var r = Array(e).fill("0".charCodeAt(0)), n = t.length - 1;
        n >= 0;
        --n
      ) {
        for (var o = t[n], a = 0; a < r.length; ++a) {
          var s = ((r[a] - "0".charCodeAt(0)) << 8) + o;
          (r[a] = "0".charCodeAt(0) + (s % 10)), (o = (s / 10) | 0);
        }
        for (; o; ) r.push("0".charCodeAt(0) + (o % 10)), (o = (o / 10) | 0);
      }
      return r.reverse(), String.fromCharCode.apply(String, i(r));
    }
    function v(t, e) {
      for (var r = new Uint8Array(t), n = 0; n < e.length; ++n) {
        var i = c[e.charCodeAt(n)];
        if (i < 0) throw new Error("invalid base-58 value");
        for (var o = 0; o < t; ++o) {
          var a = 58 * r[o] + i;
          (r[o] = a), (i = a >> 8);
        }
        if (i) throw new Error("base-58 value is out of range");
      }
      return r.reverse(), r;
    }
    function g(t, e) {
      var r, n, a, u;
      void 0 === e && (e = 1);
      var l = [];
      try {
        for (var f = o(t), h = f.next(); !h.done; h = f.next()) {
          for (var p = h.value, d = 0; d < l.length; ++d) {
            var y = (c[l[d]] << 8) + p;
            (l[d] = s.charCodeAt(y % 58)), (p = (y / 58) | 0);
          }
          for (; p; ) l.push(s.charCodeAt(p % 58)), (p = (p / 58) | 0);
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          h && !h.done && (n = f.return) && n.call(f);
        } finally {
          if (r) throw r.error;
        }
      }
      try {
        for (var v = o(t), g = v.next(); !g.done; g = v.next()) {
          if (g.value) break;
          l.push("1".charCodeAt(0));
        }
      } catch (t) {
        a = { error: t };
      } finally {
        try {
          g && !g.done && (u = v.return) && u.call(v);
        } finally {
          if (a) throw a.error;
        }
      }
      return l.reverse(), String.fromCharCode.apply(String, i(l));
    }
    function b(t, e) {
      for (
        var r = new Uint8Array(t.length + e.length), n = 0;
        n < t.length;
        ++n
      )
        r[n] = t[n];
      for (n = 0; n < e.length; ++n) r[t.length + n] = e.charCodeAt(n);
      return a(r);
    }
    function m(t, e, r, n) {
      var i = v(r + 4, t),
        o = { type: e, data: new Uint8Array(i.buffer, 0, r) },
        a = new Uint8Array(b(o.data, n));
      if (
        a[0] !== i[r + 0] ||
        a[1] !== i[r + 1] ||
        a[2] !== i[r + 2] ||
        a[3] !== i[r + 3]
      )
        throw new Error("checksum doesn't match");
      return o;
    }
    function w(t, e, r) {
      for (
        var n = new Uint8Array(b(t.data, e)),
          i = new Uint8Array(t.data.length + 4),
          o = 0;
        o < t.data.length;
        ++o
      )
        i[o] = t.data[o];
      for (o = 0; o < 4; ++o) i[o + t.data.length] = n[o];
      return r + g(i);
    }
    function _(t) {
      if ("string" != typeof t)
        throw new Error("expected string containing public key");
      if ("EOS" === t.substr(0, 3)) {
        for (
          var r = v(e.publicKeyDataSize + 4, t.substr(3)),
            n = { type: l.k1, data: new Uint8Array(e.publicKeyDataSize) },
            i = 0;
          i < e.publicKeyDataSize;
          ++i
        )
          n.data[i] = r[i];
        var o = new Uint8Array(a(n.data));
        if (
          o[0] !== r[e.publicKeyDataSize] ||
          o[1] !== r[34] ||
          o[2] !== r[35] ||
          o[3] !== r[36]
        )
          throw new Error("checksum doesn't match");
        return n;
      }
      if ("PUB_K1_" === t.substr(0, 7))
        return m(t.substr(7), l.k1, e.publicKeyDataSize, "K1");
      if ("PUB_R1_" === t.substr(0, 7))
        return m(t.substr(7), l.r1, e.publicKeyDataSize, "R1");
      throw new Error("unrecognized public key format");
    }
    function A(t) {
      if (t.type === l.k1 && t.data.length === e.publicKeyDataSize)
        return w(t, "K1", "PUB_K1_");
      if (t.type === l.r1 && t.data.length === e.publicKeyDataSize)
        return w(t, "R1", "PUB_R1_");
      throw new Error("unrecognized public key format");
    }
    function x(t) {
      return "EOS" === t.substr(0, 3) ? A(_(t)) : t;
    }
    (e.isNegative = h),
      (e.negate = p),
      (e.decimalToBinary = d),
      (e.signedDecimalToBinary = function (t, e) {
        var r = "-" === e[0];
        r && (e = e.substr(1));
        var n = d(t, e);
        if (r) {
          if ((p(n), !h(n))) throw new Error("number is out of range");
        } else if (h(n)) throw new Error("number is out of range");
        return n;
      }),
      (e.binaryToDecimal = y),
      (e.signedBinaryToDecimal = function (t, e) {
        if ((void 0 === e && (e = 1), h(t))) {
          var r = t.slice();
          return p(r), "-" + y(r, e);
        }
        return y(t, e);
      }),
      (e.base58ToBinary = v),
      (e.binaryToBase58 = g),
      (e.base64ToBinary = function (t) {
        var e = t.length;
        if ((1 == (3 & e) && "=" === t[e - 1] && (e -= 1), 0 != (3 & e)))
          throw new Error("base-64 value is not padded correctly");
        var r = e >> 2,
          n = 3 * r;
        e > 0 && "=" === t[e - 1] && ("=" === t[e - 2] ? (n -= 2) : (n -= 1));
        for (var i = new Uint8Array(n), o = 0; o < r; ++o) {
          var a = f[t.charCodeAt(4 * o + 0)],
            s = f[t.charCodeAt(4 * o + 1)],
            u = f[t.charCodeAt(4 * o + 2)],
            c = f[t.charCodeAt(4 * o + 3)];
          (i[3 * o + 0] = (a << 2) | (s >> 4)),
            3 * o + 1 < n && (i[3 * o + 1] = ((15 & s) << 4) | (u >> 2)),
            3 * o + 2 < n && (i[3 * o + 2] = ((3 & u) << 6) | c);
        }
        return i;
      }),
      (function (t) {
        (t[(t.k1 = 0)] = "k1"), (t[(t.r1 = 1)] = "r1");
      })((l = e.KeyType || (e.KeyType = {}))),
      (e.publicKeyDataSize = 33),
      (e.privateKeyDataSize = 32),
      (e.signatureDataSize = 65),
      (e.stringToPublicKey = _),
      (e.publicKeyToString = A),
      (e.convertLegacyPublicKey = x),
      (e.convertLegacyPublicKeys = function (t) {
        return t.map(x);
      }),
      (e.stringToPrivateKey = function (t) {
        if ("string" != typeof t)
          throw new Error("expected string containing private key");
        if ("PVT_R1_" === t.substr(0, 7))
          return m(t.substr(7), l.r1, e.privateKeyDataSize, "R1");
        throw new Error("unrecognized private key format");
      }),
      (e.privateKeyToString = function (t) {
        if (t.type === l.r1) return w(t, "R1", "PVT_R1_");
        throw new Error("unrecognized private key format");
      }),
      (e.stringToSignature = function (t) {
        if ("string" != typeof t)
          throw new Error("expected string containing signature");
        if ("SIG_K1_" === t.substr(0, 7))
          return m(t.substr(7), l.k1, e.signatureDataSize, "K1");
        if ("SIG_R1_" === t.substr(0, 7))
          return m(t.substr(7), l.r1, e.signatureDataSize, "R1");
        throw new Error("unrecognized signature format");
      }),
      (e.signatureToString = function (t) {
        if (t.type === l.k1) return w(t, "K1", "SIG_K1_");
        if (t.type === l.r1) return w(t, "R1", "SIG_R1_");
        throw new Error("unrecognized signature format");
      });
  },
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
      i =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            o = r.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(i(arguments[e]));
          return t;
        },
      a =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && t[Symbol.iterator],
            r = 0;
          return e
            ? e.call(t)
            : {
                next: function () {
                  return (
                    t && r >= t.length && (t = void 0),
                    { value: t && t[r++], done: !t }
                  );
                },
              };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = r(0),
      u = function (t) {
        void 0 === t && (t = {}),
          (this.skippedBinaryExtension = !1),
          (this.options = t);
      };
    e.SerializerState = u;
    var c = (function () {
      function t(t) {
        var e = void 0 === t ? {} : t,
          r = e.textEncoder,
          n = e.textDecoder,
          i = e.array;
        (this.readPos = 0),
          (this.array = i || new Uint8Array(1024)),
          (this.length = i ? i.length : 0),
          (this.textEncoder = r || new TextEncoder()),
          (this.textDecoder = n || new TextDecoder("utf-8", { fatal: !0 }));
      }
      return (
        (t.prototype.reserve = function (t) {
          if (!(this.length + t <= this.array.length)) {
            for (var e = this.array.length; this.length + t > e; )
              e = Math.ceil(1.5 * e);
            var r = new Uint8Array(e);
            r.set(this.array), (this.array = r);
          }
        }),
        (t.prototype.haveReadData = function () {
          return this.readPos < this.length;
        }),
        (t.prototype.restartRead = function () {
          this.readPos = 0;
        }),
        (t.prototype.asUint8Array = function () {
          return new Uint8Array(
            this.array.buffer,
            this.array.byteOffset,
            this.length
          );
        }),
        (t.prototype.pushArray = function (t) {
          this.reserve(t.length),
            this.array.set(t, this.length),
            (this.length += t.length);
        }),
        (t.prototype.push = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this.pushArray(t);
        }),
        (t.prototype.get = function () {
          if (this.readPos < this.length) return this.array[this.readPos++];
          throw new Error("Read past end of buffer");
        }),
        (t.prototype.pushUint8ArrayChecked = function (t, e) {
          if (t.length !== e) throw new Error("Binary data has incorrect size");
          this.pushArray(t);
        }),
        (t.prototype.getUint8Array = function (t) {
          if (this.readPos + t > this.length)
            throw new Error("Read past end of buffer");
          var e = new Uint8Array(
            this.array.buffer,
            this.array.byteOffset + this.readPos,
            t
          );
          return (this.readPos += t), e;
        }),
        (t.prototype.pushUint16 = function (t) {
          this.push((t >> 0) & 255, (t >> 8) & 255);
        }),
        (t.prototype.getUint16 = function () {
          var t = 0;
          return (t |= this.get() << 0), (t |= this.get() << 8);
        }),
        (t.prototype.pushUint32 = function (t) {
          this.push(
            (t >> 0) & 255,
            (t >> 8) & 255,
            (t >> 16) & 255,
            (t >> 24) & 255
          );
        }),
        (t.prototype.getUint32 = function () {
          var t = 0;
          return (
            (t |= this.get() << 0),
            (t |= this.get() << 8),
            (t |= this.get() << 16),
            (t |= this.get() << 24) >>> 0
          );
        }),
        (t.prototype.pushNumberAsUint64 = function (t) {
          this.pushUint32(t >>> 0),
            this.pushUint32(Math.floor(t / 4294967296) >>> 0);
        }),
        (t.prototype.getUint64AsNumber = function () {
          var t = this.getUint32();
          return 4294967296 * (this.getUint32() >>> 0) + (t >>> 0);
        }),
        (t.prototype.pushVaruint32 = function (t) {
          for (;;) {
            if (!(t >>> 7)) {
              this.push(t);
              break;
            }
            this.push(128 | (127 & t)), (t >>>= 7);
          }
        }),
        (t.prototype.getVaruint32 = function () {
          for (var t = 0, e = 0; ; ) {
            var r = this.get();
            if (((t |= (127 & r) << e), (e += 7), !(128 & r))) break;
          }
          return t >>> 0;
        }),
        (t.prototype.pushVarint32 = function (t) {
          this.pushVaruint32((t << 1) ^ (t >> 31));
        }),
        (t.prototype.getVarint32 = function () {
          var t = this.getVaruint32();
          return 1 & t ? (~t >> 1) | 2147483648 : t >>> 1;
        }),
        (t.prototype.pushFloat32 = function (t) {
          this.pushArray(new Uint8Array(new Float32Array([t]).buffer));
        }),
        (t.prototype.getFloat32 = function () {
          return new Float32Array(this.getUint8Array(4).slice().buffer)[0];
        }),
        (t.prototype.pushFloat64 = function (t) {
          this.pushArray(new Uint8Array(new Float64Array([t]).buffer));
        }),
        (t.prototype.getFloat64 = function () {
          return new Float64Array(this.getUint8Array(8).slice().buffer)[0];
        }),
        (t.prototype.pushName = function (t) {
          if ("string" != typeof t)
            throw new Error("Expected string containing name");
          function e(t) {
            return t >= "a".charCodeAt(0) && t <= "z".charCodeAt(0)
              ? t - "a".charCodeAt(0) + 6
              : t >= "1".charCodeAt(0) && t <= "5".charCodeAt(0)
              ? t - "1".charCodeAt(0) + 1
              : 0;
          }
          for (var r = new Uint8Array(8), n = 63, i = 0; i < t.length; ++i) {
            var o = e(t.charCodeAt(i));
            n < 5 && (o <<= 1);
            for (var a = 4; a >= 0; --a)
              n >= 0 &&
                ((r[Math.floor(n / 8)] |= ((o >> a) & 1) << n % 8), --n);
          }
          this.pushArray(r);
        }),
        (t.prototype.getName = function () {
          for (var t = this.getUint8Array(8), e = "", r = 63; r >= 0; ) {
            for (var n = 0, i = 0; i < 5; ++i)
              r >= 0 &&
                ((n = (n << 1) | ((t[Math.floor(r / 8)] >> r % 8) & 1)), --r);
            e +=
              n >= 6
                ? String.fromCharCode(n + "a".charCodeAt(0) - 6)
                : n >= 1
                ? String.fromCharCode(n + "1".charCodeAt(0) - 1)
                : ".";
          }
          for (; e.endsWith("."); ) e = e.substr(0, e.length - 1);
          return e;
        }),
        (t.prototype.pushBytes = function (t) {
          this.pushVaruint32(t.length), this.pushArray(t);
        }),
        (t.prototype.getBytes = function () {
          return this.getUint8Array(this.getVaruint32());
        }),
        (t.prototype.pushString = function (t) {
          this.pushBytes(this.textEncoder.encode(t));
        }),
        (t.prototype.getString = function () {
          return this.textDecoder.decode(this.getBytes());
        }),
        (t.prototype.pushSymbolCode = function (t) {
          if ("string" != typeof t)
            throw new Error("Expected string containing symbol_code");
          var e = [];
          for (e.push.apply(e, o(this.textEncoder.encode(t))); e.length < 8; )
            e.push(0);
          this.pushArray(e.slice(0, 8));
        }),
        (t.prototype.getSymbolCode = function () {
          var t,
            e = this.getUint8Array(8);
          for (t = 0; t < e.length && e[t]; ++t);
          return this.textDecoder.decode(
            new Uint8Array(e.buffer, e.byteOffset, t)
          );
        }),
        (t.prototype.pushSymbol = function (t) {
          var e = t.name,
            r = [255 & t.precision];
          for (r.push.apply(r, o(this.textEncoder.encode(e))); r.length < 8; )
            r.push(0);
          this.pushArray(r.slice(0, 8));
        }),
        (t.prototype.getSymbol = function () {
          var t,
            e = this.get(),
            r = this.getUint8Array(7);
          for (t = 0; t < r.length && r[t]; ++t);
          return {
            name: this.textDecoder.decode(
              new Uint8Array(r.buffer, r.byteOffset, t)
            ),
            precision: e,
          };
        }),
        (t.prototype.pushAsset = function (t) {
          if ("string" != typeof t)
            throw new Error("Expected string containing asset");
          var e = 0,
            r = "",
            n = 0;
          "-" === (t = t.trim())[e] && ((r += "-"), ++e);
          for (
            var i = !1;
            e < t.length &&
            t.charCodeAt(e) >= "0".charCodeAt(0) &&
            t.charCodeAt(e) <= "9".charCodeAt(0);

          )
            (i = !0), (r += t[e]), ++e;
          if (!i) throw new Error("Asset must begin with a number");
          if ("." === t[e])
            for (
              ++e;
              e < t.length &&
              t.charCodeAt(e) >= "0".charCodeAt(0) &&
              t.charCodeAt(e) <= "9".charCodeAt(0);

            )
              (r += t[e]), ++n, ++e;
          var o = t.substr(e).trim();
          this.pushArray(s.signedDecimalToBinary(8, r)),
            this.pushSymbol({ name: o, precision: n });
        }),
        (t.prototype.getAsset = function () {
          var t = this.getUint8Array(8),
            e = this.getSymbol(),
            r = e.name,
            n = e.precision,
            i = s.signedBinaryToDecimal(t, n + 1);
          return (
            n && (i = i.substr(0, i.length - n) + "." + i.substr(i.length - n)),
            i + " " + r
          );
        }),
        (t.prototype.pushPublicKey = function (t) {
          var e = s.stringToPublicKey(t);
          this.push(e.type), this.pushArray(e.data);
        }),
        (t.prototype.getPublicKey = function () {
          var t = this.get(),
            e = this.getUint8Array(s.publicKeyDataSize);
          return s.publicKeyToString({ type: t, data: e });
        }),
        (t.prototype.pushPrivateKey = function (t) {
          var e = s.stringToPrivateKey(t);
          this.push(e.type), this.pushArray(e.data);
        }),
        (t.prototype.getPrivateKey = function () {
          var t = this.get(),
            e = this.getUint8Array(s.privateKeyDataSize);
          return s.privateKeyToString({ type: t, data: e });
        }),
        (t.prototype.pushSignature = function (t) {
          var e = s.stringToSignature(t);
          this.push(e.type), this.pushArray(e.data);
        }),
        (t.prototype.getSignature = function () {
          var t = this.get(),
            e = this.getUint8Array(s.signatureDataSize);
          return s.signatureToString({ type: t, data: e });
        }),
        t
      );
    })();
    function l(t) {
      var e = Date.parse(t);
      if (Number.isNaN(e)) throw new Error("Invalid time format");
      return e;
    }
    function f(t) {
      return Math.round(1e3 * l(t + "Z"));
    }
    function h(t) {
      var e = new Date(t / 1e3).toISOString();
      return e.substr(0, e.length - 1);
    }
    function p(t) {
      return Math.round(l(t + "Z") / 1e3);
    }
    function d(t) {
      var e = new Date(1e3 * t).toISOString();
      return e.substr(0, e.length - 1);
    }
    function y(t) {
      return Math.round((l(t + "Z") - 9466848e5) / 500);
    }
    function v(t) {
      var e = new Date(500 * t + 9466848e5).toISOString();
      return e.substr(0, e.length - 1);
    }
    function g(t) {
      if ("string" != typeof t)
        throw new Error("Expected string containing symbol");
      var e = t.match(/^([0-9]+),([A-Z]+)$/);
      if (!e) throw new Error("Invalid symbol");
      return { name: e[2], precision: +e[1] };
    }
    function b(t) {
      var e = t.name;
      return t.precision + "," + e;
    }
    function m(t) {
      var e,
        r,
        n = "";
      try {
        for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
          n += ("00" + o.value.toString(16)).slice(-2);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return n.toUpperCase();
    }
    function w(t) {
      if ("string" != typeof t)
        throw new Error("Expected string containing hex digits");
      if (t.length % 2) throw new Error("Odd number of hex digits");
      for (var e = t.length / 2, r = new Uint8Array(e), n = 0; n < e; ++n) {
        var i = parseInt(t.substr(2 * n, 2), 16);
        if (Number.isNaN(i)) throw new Error("Expected hex string");
        r[n] = i;
      }
      return r;
    }
    function _(t, e) {
      throw new Error("Don't know how to serialize " + this.name);
    }
    function A(t) {
      throw new Error("Don't know how to deserialize " + this.name);
    }
    function x(t, e, r, n) {
      var i, o;
      if (
        (void 0 === r && (r = new u()),
        void 0 === n && (n = !0),
        "object" != typeof e)
      )
        throw new Error(
          "expected object containing data: " + JSON.stringify(e)
        );
      this.base && this.base.serialize(t, e, r, n);
      try {
        for (var s = a(this.fields), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          if (l.name in e) {
            if (r.skippedBinaryExtension)
              throw new Error("unexpected " + this.name + "." + l.name);
            l.type.serialize(
              t,
              e[l.name],
              r,
              n && l === this.fields[this.fields.length - 1]
            );
          } else {
            if (!n || !l.type.extensionOf)
              throw new Error(
                "missing " +
                  this.name +
                  "." +
                  l.name +
                  " (type=" +
                  l.type.name +
                  ")"
              );
            r.skippedBinaryExtension = !0;
          }
        }
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          c && !c.done && (o = s.return) && o.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
    }
    function S(t, e, r) {
      var n, i, o;
      void 0 === e && (e = new u()),
        void 0 === r && (r = !0),
        (o = this.base ? this.base.deserialize(t, e, r) : {});
      try {
        for (var s = a(this.fields), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          r && l.type.extensionOf && !t.haveReadData()
            ? (e.skippedBinaryExtension = !0)
            : (o[l.name] = l.type.deserialize(t, e, r));
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          c && !c.done && (i = s.return) && i.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function z(t, e, r, n) {
      if (!Array.isArray(e) || 2 !== e.length || "string" != typeof e[0])
        throw new Error('expected variant: ["type", value]');
      var i = this.fields.findIndex(function (t) {
        return t.name === e[0];
      });
      if (i < 0)
        throw new Error('type "' + e[0] + '" is not valid for variant');
      t.pushVaruint32(i), this.fields[i].type.serialize(t, e[1], r, n);
    }
    function E(t, e, r) {
      var n = t.getVaruint32();
      if (n >= this.fields.length)
        throw new Error("type index " + n + " is not valid for variant");
      var i = this.fields[n];
      return [i.name, i.type.deserialize(t, e, r)];
    }
    function k(t, e, r, n) {
      var i, o;
      t.pushVaruint32(e.length);
      try {
        for (var s = a(e), u = s.next(); !u.done; u = s.next()) {
          var c = u.value;
          this.arrayOf.serialize(t, c, r, !1);
        }
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          u && !u.done && (o = s.return) && o.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
    }
    function U(t, e, r) {
      for (var n = t.getVaruint32(), i = [], o = 0; o < n; ++o)
        i.push(this.arrayOf.deserialize(t, e, !1));
      return i;
    }
    function T(t, e, r, n) {
      null == e
        ? t.push(0)
        : (t.push(1), this.optionalOf.serialize(t, e, r, n));
    }
    function P(t, e, r) {
      return t.get() ? this.optionalOf.deserialize(t, e, r) : null;
    }
    function O(t, e, r, n) {
      this.extensionOf.serialize(t, e, r, n);
    }
    function C(t, e, r) {
      return this.extensionOf.deserialize(t, e, r);
    }
    function D(t) {
      return n(
        {
          name: "<missing name>",
          aliasOfName: "",
          arrayOf: null,
          optionalOf: null,
          extensionOf: null,
          baseName: "",
          base: null,
          fields: [],
          serialize: _,
          deserialize: A,
        },
        t
      );
    }
    function K(t, e) {
      if (
        Number.isNaN(+t) ||
        Number.isNaN(+e) ||
        ("number" != typeof t && "string" != typeof t)
      )
        throw new Error("Expected number");
      if (+t != +e) throw new Error("Number is out of range");
      return +t;
    }
    function R(t, e) {
      var r = t.get(e);
      if (r && r.aliasOfName) return R(t, r.aliasOfName);
      if (r) return r;
      if (e.endsWith("[]"))
        return D({
          name: e,
          arrayOf: R(t, e.substr(0, e.length - 2)),
          serialize: k,
          deserialize: U,
        });
      if (e.endsWith("?"))
        return D({
          name: e,
          optionalOf: R(t, e.substr(0, e.length - 1)),
          serialize: T,
          deserialize: P,
        });
      if (e.endsWith("$"))
        return D({
          name: e,
          extensionOf: R(t, e.substr(0, e.length - 1)),
          serialize: O,
          deserialize: C,
        });
      throw new Error("Unknown type: " + e);
    }
    function N(t, e, r, n, i, o) {
      var a = t.actions.get(r);
      if (!a) throw new Error("Unknown action " + r + " in contract " + e);
      var s = new c({ textEncoder: i, textDecoder: o });
      return a.serialize(s, n), m(s.asUint8Array());
    }
    function j(t, e, r, n, i, o) {
      var a = t.actions.get(r);
      if (("string" == typeof n && (n = w(n)), !a))
        throw new Error("Unknown action " + r + " in contract " + e);
      var s = new c({ textDecoder: o, textEncoder: i });
      return s.pushArray(n), a.deserialize(s);
    }
    (e.SerialBuffer = c),
      (e.supportedAbiVersion = function (t) {
        return t.startsWith("eosio::abi/1.");
      }),
      (e.dateToTimePoint = f),
      (e.timePointToDate = h),
      (e.dateToTimePointSec = p),
      (e.timePointSecToDate = d),
      (e.dateToBlockTimestamp = y),
      (e.blockTimestampToDate = v),
      (e.stringToSymbol = g),
      (e.symbolToString = b),
      (e.arrayToHex = m),
      (e.hexToUint8Array = w),
      (e.createInitialTypes = function () {
        var t = new Map(
          Object.entries({
            bool: D({
              name: "bool",
              serialize: function (t, e) {
                if ("boolean" != typeof e)
                  throw new Error("Expected true or false");
                t.push(e ? 1 : 0);
              },
              deserialize: function (t) {
                return !!t.get();
              },
            }),
            uint8: D({
              name: "uint8",
              serialize: function (t, e) {
                t.push(K(e, 255 & e));
              },
              deserialize: function (t) {
                return t.get();
              },
            }),
            int8: D({
              name: "int8",
              serialize: function (t, e) {
                t.push(K(e, (e << 24) >> 24));
              },
              deserialize: function (t) {
                return (t.get() << 24) >> 24;
              },
            }),
            uint16: D({
              name: "uint16",
              serialize: function (t, e) {
                t.pushUint16(K(e, 65535 & e));
              },
              deserialize: function (t) {
                return t.getUint16();
              },
            }),
            int16: D({
              name: "int16",
              serialize: function (t, e) {
                t.pushUint16(K(e, (e << 16) >> 16));
              },
              deserialize: function (t) {
                return (t.getUint16() << 16) >> 16;
              },
            }),
            uint32: D({
              name: "uint32",
              serialize: function (t, e) {
                t.pushUint32(K(e, e >>> 0));
              },
              deserialize: function (t) {
                return t.getUint32();
              },
            }),
            uint64: D({
              name: "uint64",
              serialize: function (t, e) {
                t.pushArray(s.decimalToBinary(8, "" + e));
              },
              deserialize: function (t) {
                return s.binaryToDecimal(t.getUint8Array(8));
              },
            }),
            int64: D({
              name: "int64",
              serialize: function (t, e) {
                t.pushArray(s.signedDecimalToBinary(8, "" + e));
              },
              deserialize: function (t) {
                return s.signedBinaryToDecimal(t.getUint8Array(8));
              },
            }),
            int32: D({
              name: "int32",
              serialize: function (t, e) {
                t.pushUint32(K(e, 0 | e));
              },
              deserialize: function (t) {
                return 0 | t.getUint32();
              },
            }),
            varuint32: D({
              name: "varuint32",
              serialize: function (t, e) {
                t.pushVaruint32(K(e, e >>> 0));
              },
              deserialize: function (t) {
                return t.getVaruint32();
              },
            }),
            varint32: D({
              name: "varint32",
              serialize: function (t, e) {
                t.pushVarint32(K(e, 0 | e));
              },
              deserialize: function (t) {
                return t.getVarint32();
              },
            }),
            uint128: D({
              name: "uint128",
              serialize: function (t, e) {
                t.pushArray(s.decimalToBinary(16, "" + e));
              },
              deserialize: function (t) {
                return s.binaryToDecimal(t.getUint8Array(16));
              },
            }),
            int128: D({
              name: "int128",
              serialize: function (t, e) {
                t.pushArray(s.signedDecimalToBinary(16, "" + e));
              },
              deserialize: function (t) {
                return s.signedBinaryToDecimal(t.getUint8Array(16));
              },
            }),
            float32: D({
              name: "float32",
              serialize: function (t, e) {
                t.pushFloat32(e);
              },
              deserialize: function (t) {
                return t.getFloat32();
              },
            }),
            float64: D({
              name: "float64",
              serialize: function (t, e) {
                t.pushFloat64(e);
              },
              deserialize: function (t) {
                return t.getFloat64();
              },
            }),
            float128: D({
              name: "float128",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(w(e), 16);
              },
              deserialize: function (t) {
                return m(t.getUint8Array(16));
              },
            }),
            bytes: D({
              name: "bytes",
              serialize: function (t, e) {
                e instanceof Uint8Array || Array.isArray(e)
                  ? t.pushBytes(e)
                  : t.pushBytes(w(e));
              },
              deserialize: function (t, e) {
                return e && e.options.bytesAsUint8Array
                  ? t.getBytes()
                  : m(t.getBytes());
              },
            }),
            string: D({
              name: "string",
              serialize: function (t, e) {
                t.pushString(e);
              },
              deserialize: function (t) {
                return t.getString();
              },
            }),
            name: D({
              name: "name",
              serialize: function (t, e) {
                t.pushName(e);
              },
              deserialize: function (t) {
                return t.getName();
              },
            }),
            time_point: D({
              name: "time_point",
              serialize: function (t, e) {
                t.pushNumberAsUint64(f(e));
              },
              deserialize: function (t) {
                return h(t.getUint64AsNumber());
              },
            }),
            time_point_sec: D({
              name: "time_point_sec",
              serialize: function (t, e) {
                t.pushUint32(p(e));
              },
              deserialize: function (t) {
                return d(t.getUint32());
              },
            }),
            block_timestamp_type: D({
              name: "block_timestamp_type",
              serialize: function (t, e) {
                t.pushUint32(y(e));
              },
              deserialize: function (t) {
                return v(t.getUint32());
              },
            }),
            symbol_code: D({
              name: "symbol_code",
              serialize: function (t, e) {
                t.pushSymbolCode(e);
              },
              deserialize: function (t) {
                return t.getSymbolCode();
              },
            }),
            symbol: D({
              name: "symbol",
              serialize: function (t, e) {
                t.pushSymbol(g(e));
              },
              deserialize: function (t) {
                return b(t.getSymbol());
              },
            }),
            asset: D({
              name: "asset",
              serialize: function (t, e) {
                t.pushAsset(e);
              },
              deserialize: function (t) {
                return t.getAsset();
              },
            }),
            checksum160: D({
              name: "checksum160",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(w(e), 20);
              },
              deserialize: function (t) {
                return m(t.getUint8Array(20));
              },
            }),
            checksum256: D({
              name: "checksum256",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(w(e), 32);
              },
              deserialize: function (t) {
                return m(t.getUint8Array(32));
              },
            }),
            checksum512: D({
              name: "checksum512",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(w(e), 64);
              },
              deserialize: function (t) {
                return m(t.getUint8Array(64));
              },
            }),
            public_key: D({
              name: "public_key",
              serialize: function (t, e) {
                t.pushPublicKey(e);
              },
              deserialize: function (t) {
                return t.getPublicKey();
              },
            }),
            private_key: D({
              name: "private_key",
              serialize: function (t, e) {
                t.pushPrivateKey(e);
              },
              deserialize: function (t) {
                return t.getPrivateKey();
              },
            }),
            signature: D({
              name: "signature",
              serialize: function (t, e) {
                t.pushSignature(e);
              },
              deserialize: function (t) {
                return t.getSignature();
              },
            }),
          })
        );
        return (
          t.set(
            "extended_asset",
            D({
              name: "extended_asset",
              baseName: "",
              fields: [
                { name: "quantity", typeName: "asset", type: t.get("asset") },
                { name: "contract", typeName: "name", type: t.get("name") },
              ],
              serialize: x,
              deserialize: S,
            })
          ),
          t
        );
      }),
      (e.getType = R),
      (e.getTypesFromAbi = function (t, e) {
        var r,
          n,
          o,
          s,
          u,
          c,
          l,
          f,
          h,
          p,
          d = new Map(t);
        if (e.types)
          try {
            for (var y = a(e.types), v = y.next(); !v.done; v = y.next()) {
              var g = v.value,
                b = g.new_type_name,
                m = g.type;
              d.set(b, D({ name: b, aliasOfName: m }));
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              v && !v.done && (n = y.return) && n.call(y);
            } finally {
              if (r) throw r.error;
            }
          }
        if (e.structs)
          try {
            for (var w = a(e.structs), _ = w.next(); !_.done; _ = w.next()) {
              var A = _.value,
                k = A.name,
                U = A.base,
                T = A.fields;
              d.set(
                k,
                D({
                  name: k,
                  baseName: U,
                  fields: T.map(function (t) {
                    return { name: t.name, typeName: t.type, type: null };
                  }),
                  serialize: x,
                  deserialize: S,
                })
              );
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              _ && !_.done && (s = w.return) && s.call(w);
            } finally {
              if (o) throw o.error;
            }
          }
        if (e.variants)
          try {
            for (var P = a(e.variants), O = P.next(); !O.done; O = P.next()) {
              var C = O.value,
                K = C.name,
                N = C.types;
              d.set(
                K,
                D({
                  name: K,
                  fields: N.map(function (t) {
                    return { name: t, typeName: t, type: null };
                  }),
                  serialize: z,
                  deserialize: E,
                })
              );
            }
          } catch (t) {
            u = { error: t };
          } finally {
            try {
              O && !O.done && (c = P.return) && c.call(P);
            } finally {
              if (u) throw u.error;
            }
          }
        try {
          for (var j = a(d), B = j.next(); !B.done; B = j.next()) {
            var V = i(B.value, 2);
            V[0];
            (m = V[1]).baseName && (m.base = R(d, m.baseName));
            try {
              for (var M = a(m.fields), I = M.next(); !I.done; I = M.next()) {
                var L = I.value;
                L.type = R(d, L.typeName);
              }
            } catch (t) {
              h = { error: t };
            } finally {
              try {
                I && !I.done && (p = M.return) && p.call(M);
              } finally {
                if (h) throw h.error;
              }
            }
          }
        } catch (t) {
          l = { error: t };
        } finally {
          try {
            B && !B.done && (f = j.return) && f.call(j);
          } finally {
            if (l) throw l.error;
          }
        }
        return d;
      }),
      (e.transactionHeader = function (t, e) {
        return {
          expiration: d(p(t.timestamp) + e),
          ref_block_num: 65535 & t.block_num,
          ref_block_prefix: t.ref_block_prefix,
        };
      }),
      (e.serializeActionData = N),
      (e.serializeAction = function (t, e, r, n, i, o, a) {
        return {
          account: e,
          name: r,
          authorization: n,
          data: N(t, e, r, i, o, a),
        };
      }),
      (e.deserializeActionData = j),
      (e.deserializeAction = function (t, e, r, n, i, o, a) {
        return {
          account: e,
          name: r,
          authorization: n,
          data: j(t, e, r, i, o, a),
        };
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        }),
        function (t, e) {
          function r() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function (t) {
      function e(r) {
        var n = this;
        return (
          (n =
            r.error &&
            r.error.details &&
            r.error.details.length &&
            r.error.details[0].message
              ? t.call(this, r.error.details[0].message) || this
              : r.processed && r.processed.except && r.processed.except.message
              ? t.call(this, r.processed.except.message) || this
              : t.call(this, r.message) || this),
          Object.setPrototypeOf(n, e.prototype),
          (n.json = r),
          n
        );
      }
      return i(e, t), e;
    })(Error);
    e.RpcError = o;
  },
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(t) {
              try {
                u(n.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(a, s);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
      i =
        (this && this.__generator) ||
        function (t, e) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = e.call(t, a);
                  } catch (t) {
                    (o = [6, t]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
      o =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            o = r.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(o(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = r(4),
      u = r(13),
      c = (function () {
        function t(t, e, r, n, i, o, a) {
          if (
            (void 0 === e && (e = null),
            void 0 === r && (r = null),
            void 0 === n && (n = !0),
            void 0 === i && (i = null),
            void 0 === o && (o = "https://all-access.wax.io"),
            void 0 === a &&
              (a = "https://api-idm.wax.io/v1/accounts/auto-accept/"),
            (this.apiSigner = i),
            (this.waxSigningURL = o),
            (this.waxAutoSigningURL = a),
            (this.waxEventSource = new u.WaxEventSource(o)),
            (this.rpc = new s.JsonRpc(t)),
            e && Array.isArray(r))
          ) {
            var c = { userAccount: e, pubKeys: r, verified: !0 };
            this.receiveLogin({ data: c });
          } else this.loginViaEndpoint();
        }
        return (
          (t.prototype.login = function () {
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                return this.userAccount && Array.isArray(this.pubKeys)
                  ? [2, this.userAccount]
                  : [2, this.loginViaWindow()];
              });
            });
          }),
          (t.prototype.isAutoLoginAvailable = function () {
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.userAccount && Array.isArray(this.pubKeys)
                      ? [2, !0]
                      : [3, 1];
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]), [4, this.loginViaEndpoint()]
                    );
                  case 2:
                    return t.sent(), [2, !0];
                  case 3:
                    return t.sent(), [2, !1];
                  case 4:
                    return [2, !1];
                }
              });
            });
          }),
          (t.prototype.loginViaWindow = function () {
            return n(this, void 0, void 0, function () {
              var t;
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.waxEventSource.openEventSource(
                        this.waxSigningURL + "/cloud-wallet/login/"
                      ),
                    ];
                  case 1:
                    return (
                      (t = e.sent()),
                      [
                        2,
                        this.waxEventSource.onceEvent(
                          t,
                          this.waxSigningURL,
                          this.receiveLogin.bind(this)
                        ),
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.loginViaEndpoint = function () {
            return n(this, void 0, void 0, function () {
              var t, e;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      fetch(this.waxAutoSigningURL + "login", {
                        credentials: "include",
                        method: "get",
                      }),
                    ];
                  case 1:
                    if (!(t = r.sent()).ok)
                      throw new Error(
                        "Login Endpoint Error " + t.status + " " + t.statusText
                      );
                    return [4, t.json()];
                  case 2:
                    if ((e = r.sent()).processed && e.processed.except)
                      throw new Error(e);
                    return [2, this.receiveLogin({ data: e })];
                }
              });
            });
          }),
          (t.prototype.receiveLogin = function (t) {
            return n(this, void 0, void 0, function () {
              var e,
                r,
                o,
                u,
                c,
                l,
                f,
                h,
                p,
                d = this;
              return i(this, function (y) {
                if (
                  ((e = t.data),
                  (r = e.verified),
                  (o = e.userAccount),
                  (u = e.pubKeys),
                  (c = e.whitelistedContracts),
                  (l = e.autoLogin),
                  !r)
                )
                  throw new Error("User declined to share their user account");
                if (null == o || null == u)
                  throw new Error("User does not have a blockchain account");
                return (
                  localStorage.setItem("autoLogin", l),
                  (this.whitelistedContracts = c || []),
                  (this.userAccount = o),
                  (this.pubKeys = u),
                  (f = {
                    getAvailableKeys: function () {
                      return n(d, void 0, void 0, function () {
                        var t, e;
                        return i(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                (t = [this.pubKeys]),
                                (e = this.apiSigner)
                                  ? [4, this.apiSigner.getAvailableKeys()]
                                  : [3, 2]
                              );
                            case 1:
                              (e = r.sent()), (r.label = 2);
                            case 2:
                              return [2, a.apply(void 0, t.concat([e || []]))];
                          }
                        });
                      });
                    },
                    sign: function (t) {
                      return n(d, void 0, void 0, function () {
                        var e, r, n;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = {
                                  serializedTransaction:
                                    t.serializedTransaction,
                                }),
                                [4, this.signing(t.serializedTransaction)]
                              );
                            case 1:
                              return (
                                (r = [i.sent()]),
                                (n = this.apiSigner)
                                  ? [4, this.apiSigner.sign(t)]
                                  : [3, 3]
                              );
                            case 2:
                              (n = i.sent().signatures), (i.label = 3);
                            case 3:
                              return [
                                2,
                                ((e.signatures = a.apply(
                                  void 0,
                                  r.concat([n || []])
                                )),
                                e),
                              ];
                          }
                        });
                      });
                    },
                  }),
                  (this.api = new s.Api({
                    rpc: this.rpc,
                    signatureProvider: f,
                  })),
                  (h = this.api.transact.bind(this.api)),
                  (p = this.waxSigningURL + "/cloud-wallet/signing/"),
                  (this.api.transact = function (t, e) {
                    return n(d, void 0, void 0, function () {
                      var r;
                      return i(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, this.canAutoSign(t)];
                          case 1:
                            console.log("EDITCODE");
                            console.log(n);
                            console.log("EDITCODE2");
                            console.log(this);
                            function pop() {
                              var popup = window.open(
                                p,
                                "WaxPopup",
                                "height=800,width=400"
                              );
                              setTimeout(function () {
                                popup.close();
                              }, 100000);
                            }

                            return n.sent() ? [3, 3] : ((r = this), [4, pop()]);
                          case 2:
                            (r.signingWindow = n.sent()), (n.label = 3);
                          case 3:
                            return [4, h(t, e)];
                          case 4:
                            return [2, n.sent()];
                        }
                      });
                    });
                  }),
                  [2, this.userAccount]
                );
              });
            });
          }),
          (t.prototype.canAutoSign = function (t) {
            return n(this, void 0, void 0, function () {
              var e,
                r = this;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return t.actions ? ((e = t), [3, 3]) : [3, 1];
                  case 1:
                    return [4, this.api.deserializeTransactionWithActions(t)];
                  case 2:
                    (e = n.sent()), (n.label = 3);
                  case 3:
                    return [
                      2,
                      !e.actions.find(function (t) {
                        return !r.isWhitelisted(t);
                      }),
                    ];
                }
              });
            });
          }),
          (t.prototype.isWhitelisted = function (t) {
            return !!this.whitelistedContracts.find(function (e) {
              return (
                e.contract === t.account &&
                ("eosio.token" !== t.account ||
                  "transfer" !== t.name ||
                  e.recipients.includes(t.data.to))
              );
            });
          }),
          (t.prototype.signing = function (t) {
            return n(this, void 0, void 0, function () {
              var e = this;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.canAutoSign(t)];
                  case 1:
                    return r.sent()
                      ? [
                          2,
                          this.signViaEndpoint(t).catch(function () {
                            return e.signViaWindow(void 0, t);
                          }),
                        ]
                      : [2, this.signViaWindow(this.signingWindow, t)];
                }
              });
            });
          }),
          (t.prototype.signViaEndpoint = function (t) {
            return n(this, void 0, void 0, function () {
              var e, r, n;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 3, , 4]),
                      [
                        4,
                        fetch(this.waxAutoSigningURL + "signing", {
                          body: JSON.stringify({
                            transaction: Object.values(t),
                          }),
                          credentials: "include",
                          headers: { "Content-Type": "application/json" },
                          method: "POST",
                        }),
                      ]
                    );
                  case 1:
                    if (!(e = i.sent()).ok)
                      throw new Error(
                        "Signing Endpoint Error " +
                          e.status +
                          " " +
                          e.statusText
                      );
                    return [4, e.json()];
                  case 2:
                    if ((r = i.sent()).processed && r.processed.except)
                      throw new Error(r);
                    return [2, this.receiveSignatures({ data: r })];
                  case 3:
                    throw ((n = i.sent()), (this.whitelistedContracts = []), n);
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.signViaWindow = function (t, e) {
            return n(this, void 0, void 0, function () {
              var r;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      this.waxEventSource.openEventSource(
                        this.waxSigningURL + "/cloud-wallet/signing/",
                        { type: "TRANSACTION", transaction: e },
                        t
                      ),
                    ];
                  case 1:
                    return (
                      (r = n.sent()),
                      [
                        2,
                        this.waxEventSource.onceEvent(
                          r,
                          this.waxSigningURL,
                          this.receiveSignatures.bind(this)
                        ),
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.receiveSignatures = function (t) {
            return n(this, void 0, void 0, function () {
              var e, r, n, o;
              return i(this, function (i) {
                if ("TX_SIGNED" === t.data.type) {
                  if (
                    ((e = t.data),
                    (r = e.verified),
                    (n = e.signatures),
                    (o = e.whitelistedContracts),
                    !r || null == n)
                  )
                    throw new Error("User declined to sign the transaction");
                  return (this.whitelistedContracts = o || []), [2, n];
                }
                throw "READY" === t.data.type
                  ? new Error("User started a new transaction")
                  : new Error(
                      "Unexpected response received when attempting signing: " +
                        JSON.stringify(t.data, void 0, 2)
                    );
              });
            });
          }),
          t
        );
      })();
    e.WaxJS = c;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(5);
    e.Api = n.Api;
    var i = r(9);
    e.ApiInterfaces = i;
    var o = r(10);
    e.JsonRpc = o.JsonRpc;
    var a = r(0);
    e.Numeric = a;
    var s = r(12);
    e.RpcInterfaces = s;
    var u = r(2);
    e.RpcError = u.RpcError;
    var c = r(1);
    e.Serialize = c;
  },
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
      i =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(t) {
              try {
                u(n.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              t.done
                ? i(t.value)
                : new r(function (e) {
                    e(t.value);
                  }).then(a, s);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (t, e) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = e.call(t, a);
                  } catch (t) {
                    (o = [6, t]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
      a =
        (this && this.__rest) ||
        function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
              e.indexOf(n[i]) < 0 && (r[n[i]] = t[n[i]]);
          }
          return r;
        },
      s =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            o = r.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
      u =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(s(arguments[e]));
          return t;
        },
      c =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && t[Symbol.iterator],
            r = 0;
          return e
            ? e.call(t)
            : {
                next: function () {
                  return (
                    t && r >= t.length && (t = void 0),
                    { value: t && t[r++], done: !t }
                  );
                },
              };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = r(1),
      f = r(7),
      h = r(8),
      p = (function () {
        function t(t) {
          (this.contracts = new Map()),
            (this.cachedAbis = new Map()),
            (this.rpc = t.rpc),
            (this.authorityProvider = t.authorityProvider || t.rpc),
            (this.abiProvider = t.abiProvider || t.rpc),
            (this.signatureProvider = t.signatureProvider),
            (this.chainId = t.chainId),
            (this.textEncoder = t.textEncoder),
            (this.textDecoder = t.textDecoder),
            (this.abiTypes = l.getTypesFromAbi(l.createInitialTypes(), f)),
            (this.transactionTypes = l.getTypesFromAbi(
              l.createInitialTypes(),
              h
            ));
        }
        return (
          (t.prototype.rawAbiToJson = function (t) {
            var e = new l.SerialBuffer({
              textEncoder: this.textEncoder,
              textDecoder: this.textDecoder,
              array: t,
            });
            if (!l.supportedAbiVersion(e.getString()))
              throw new Error("Unsupported abi version");
            return e.restartRead(), this.abiTypes.get("abi_def").deserialize(e);
          }),
          (t.prototype.getCachedAbi = function (t, e) {
            return (
              void 0 === e && (e = !1),
              i(this, void 0, void 0, function () {
                var r, n, i, a;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!e && this.cachedAbis.get(t))
                        return [2, this.cachedAbis.get(t)];
                      o.label = 1;
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [4, this.abiProvider.getRawAbi(t)]
                      );
                    case 2:
                      return (
                        (n = o.sent().abi),
                        (i = this.rawAbiToJson(n)),
                        (r = { rawAbi: n, abi: i }),
                        [3, 4]
                      );
                    case 3:
                      throw (
                        (((a = o.sent()).message =
                          "fetching abi for " + t + ": " + a.message),
                        a)
                      );
                    case 4:
                      if (!r) throw new Error("Missing abi for " + t);
                      return this.cachedAbis.set(t, r), [2, r];
                  }
                });
              })
            );
          }),
          (t.prototype.getAbi = function (t, e) {
            return (
              void 0 === e && (e = !1),
              i(this, void 0, void 0, function () {
                return o(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.getCachedAbi(t, e)];
                    case 1:
                      return [2, r.sent().abi];
                  }
                });
              })
            );
          }),
          (t.prototype.getTransactionAbis = function (t, e) {
            return (
              void 0 === e && (e = !1),
              i(this, void 0, void 0, function () {
                var r,
                  n,
                  a,
                  s = this;
                return o(this, function (c) {
                  return (
                    (r = t.actions.map(function (t) {
                      return t.account;
                    })),
                    (n = new Set(r)),
                    (a = u(n).map(function (t) {
                      return i(s, void 0, void 0, function () {
                        var r;
                        return o(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                (r = { accountName: t }),
                                [4, this.getCachedAbi(t, e)]
                              );
                            case 1:
                              return [2, ((r.abi = n.sent().rawAbi), r)];
                          }
                        });
                      });
                    })),
                    [2, Promise.all(a)]
                  );
                });
              })
            );
          }),
          (t.prototype.getContract = function (t, e) {
            return (
              void 0 === e && (e = !1),
              i(this, void 0, void 0, function () {
                var r, n, i, a, s, u, f, h, p, d, y;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return !e && this.contracts.get(t)
                        ? [2, this.contracts.get(t)]
                        : [4, this.getAbi(t, e)];
                    case 1:
                      (i = o.sent()),
                        (a = l.getTypesFromAbi(l.createInitialTypes(), i)),
                        (s = new Map());
                      try {
                        for (
                          u = c(i.actions), f = u.next();
                          !f.done;
                          f = u.next()
                        )
                          (h = f.value),
                            (p = h.name),
                            (d = h.type),
                            s.set(p, l.getType(a, d));
                      } catch (t) {
                        r = { error: t };
                      } finally {
                        try {
                          f && !f.done && (n = u.return) && n.call(u);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                      return (
                        (y = { types: a, actions: s }),
                        this.contracts.set(t, y),
                        [2, y]
                      );
                  }
                });
              })
            );
          }),
          (t.prototype.serialize = function (t, e, r) {
            this.transactionTypes.get(e).serialize(t, r);
          }),
          (t.prototype.deserialize = function (t, e) {
            return this.transactionTypes.get(e).deserialize(t);
          }),
          (t.prototype.serializeTransaction = function (t) {
            var e = new l.SerialBuffer({
              textEncoder: this.textEncoder,
              textDecoder: this.textDecoder,
            });
            return (
              this.serialize(
                e,
                "transaction",
                n(
                  {
                    max_net_usage_words: 0,
                    max_cpu_usage_ms: 0,
                    delay_sec: 0,
                    context_free_actions: [],
                    actions: [],
                    transaction_extensions: [],
                  },
                  t
                )
              ),
              e.asUint8Array()
            );
          }),
          (t.prototype.deserializeTransaction = function (t) {
            var e = new l.SerialBuffer({
              textEncoder: this.textEncoder,
              textDecoder: this.textDecoder,
            });
            return e.pushArray(t), this.deserialize(e, "transaction");
          }),
          (t.prototype.serializeActions = function (t) {
            return i(this, void 0, void 0, function () {
              var e = this;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      Promise.all(
                        t.map(function (t) {
                          var r = t.account,
                            n = t.name,
                            a = t.authorization,
                            s = t.data;
                          return i(e, void 0, void 0, function () {
                            var t;
                            return o(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, this.getContract(r)];
                                case 1:
                                  return (
                                    (t = e.sent()),
                                    [
                                      2,
                                      l.serializeAction(
                                        t,
                                        r,
                                        n,
                                        a,
                                        s,
                                        this.textEncoder,
                                        this.textDecoder
                                      ),
                                    ]
                                  );
                              }
                            });
                          });
                        })
                      ),
                    ];
                  case 1:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.deserializeActions = function (t) {
            return i(this, void 0, void 0, function () {
              var e = this;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      Promise.all(
                        t.map(function (t) {
                          var r = t.account,
                            n = t.name,
                            a = t.authorization,
                            s = t.data;
                          return i(e, void 0, void 0, function () {
                            var t;
                            return o(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, this.getContract(r)];
                                case 1:
                                  return (
                                    (t = e.sent()),
                                    [
                                      2,
                                      l.deserializeAction(
                                        t,
                                        r,
                                        n,
                                        a,
                                        s,
                                        this.textEncoder,
                                        this.textDecoder
                                      ),
                                    ]
                                  );
                              }
                            });
                          });
                        })
                      ),
                    ];
                  case 1:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.deserializeTransactionWithActions = function (t) {
            return i(this, void 0, void 0, function () {
              var e, r;
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      "string" == typeof t && (t = l.hexToUint8Array(t)),
                      (e = this.deserializeTransaction(t)),
                      [4, this.deserializeActions(e.actions)]
                    );
                  case 1:
                    return (r = i.sent()), [2, n({}, e, { actions: r })];
                }
              });
            });
          }),
          (t.prototype.transact = function (t, e) {
            var r = void 0 === e ? {} : e,
              a = r.broadcast,
              s = void 0 === a || a,
              u = r.sign,
              c = void 0 === u || u,
              f = r.blocksBehind,
              h = r.expireSeconds;
            return i(this, void 0, void 0, function () {
              var e, r, i, a, u, p, d, y, v;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return this.chainId ? [3, 2] : [4, this.rpc.get_info()];
                  case 1:
                    (e = o.sent()), (this.chainId = e.chain_id), (o.label = 2);
                  case 2:
                    return "number" == typeof f && h
                      ? e
                        ? [3, 4]
                        : [4, this.rpc.get_info()]
                      : [3, 6];
                  case 3:
                    (e = o.sent()), (o.label = 4);
                  case 4:
                    return [4, this.rpc.get_block(e.head_block_num - f)];
                  case 5:
                    (r = o.sent()),
                      (t = n({}, l.transactionHeader(r, h), t)),
                      (o.label = 6);
                  case 6:
                    if (!this.hasRequiredTaposFields(t))
                      throw new Error(
                        "Required configuration or TAPOS fields are not present"
                      );
                    return [4, this.getTransactionAbis(t)];
                  case 7:
                    return (
                      (i = o.sent()),
                      (a = [{}, t]),
                      (u = {}),
                      [4, this.serializeActions(t.actions)]
                    );
                  case 8:
                    return (
                      (t = n.apply(
                        void 0,
                        a.concat([((u.actions = o.sent()), u)])
                      )),
                      (p = this.serializeTransaction(t)),
                      (d = { serializedTransaction: p, signatures: [] }),
                      c
                        ? [4, this.signatureProvider.getAvailableKeys()]
                        : [3, 12]
                    );
                  case 9:
                    return (
                      (y = o.sent()),
                      [
                        4,
                        this.authorityProvider.getRequiredKeys({
                          transaction: t,
                          availableKeys: y,
                        }),
                      ]
                    );
                  case 10:
                    return (
                      (v = o.sent()),
                      [
                        4,
                        this.signatureProvider.sign({
                          chainId: this.chainId,
                          requiredKeys: v,
                          serializedTransaction: p,
                          abis: i,
                        }),
                      ]
                    );
                  case 11:
                    (d = o.sent()), (o.label = 12);
                  case 12:
                    return s ? [2, this.pushSignedTransaction(d)] : [2, d];
                }
              });
            });
          }),
          (t.prototype.pushSignedTransaction = function (t) {
            var e = t.signatures,
              r = t.serializedTransaction;
            return i(this, void 0, void 0, function () {
              return o(this, function (t) {
                return [
                  2,
                  this.rpc.push_transaction({
                    signatures: e,
                    serializedTransaction: r,
                  }),
                ];
              });
            });
          }),
          (t.prototype.hasRequiredTaposFields = function (t) {
            var e = t.expiration,
              r = t.ref_block_num,
              n = t.ref_block_prefix;
            a(t, ["expiration", "ref_block_num", "ref_block_prefix"]);
            return !!(e && r && n);
          }),
          t
        );
      })();
    e.Api = p;
  },
  function (t, e, r) {
    "use strict";
    var n = function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t))
          return (function (t, e) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(t, e);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = (function () {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })();
    var o = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      return (
        i(t, null, [
          {
            key: "get_n_pad_bytes",
            value: function (t) {
              return 64 - ((t + 8) & 63);
            },
          },
          {
            key: "pad",
            value: function (e) {
              var r,
                i,
                o = e.byteLength,
                a = t.get_n_pad_bytes(o),
                s = ((r = o), (i = 536870912), [Math.floor(r / i), r % i]).map(
                  function (t, e) {
                    return e ? 8 * t : t;
                  }
                ),
                u = n(s, 2),
                c = u[0],
                l = u[1],
                f = new Uint8Array(o + a + 8);
              f.set(new Uint8Array(e), 0);
              var h = new DataView(f.buffer);
              return (
                h.setUint8(o, 128),
                h.setUint32(o + a, l, !0),
                h.setUint32(o + a + 4, c, !0),
                f.buffer
              );
            },
          },
          {
            key: "f",
            value: function (t, e, r, n) {
              return 0 <= t && t <= 15
                ? e ^ r ^ n
                : 16 <= t && t <= 31
                ? (e & r) | (~e & n)
                : 32 <= t && t <= 47
                ? (e | ~r) ^ n
                : 48 <= t && t <= 63
                ? (e & n) | (r & ~n)
                : 64 <= t && t <= 79
                ? e ^ (r | ~n)
                : void 0;
            },
          },
          {
            key: "K",
            value: function (t) {
              return 0 <= t && t <= 15
                ? 0
                : 16 <= t && t <= 31
                ? 1518500249
                : 32 <= t && t <= 47
                ? 1859775393
                : 48 <= t && t <= 63
                ? 2400959708
                : 64 <= t && t <= 79
                ? 2840853838
                : void 0;
            },
          },
          {
            key: "KP",
            value: function (t) {
              return 0 <= t && t <= 15
                ? 1352829926
                : 16 <= t && t <= 31
                ? 1548603684
                : 32 <= t && t <= 47
                ? 1836072691
                : 48 <= t && t <= 63
                ? 2053994217
                : 64 <= t && t <= 79
                ? 0
                : void 0;
            },
          },
          {
            key: "add_modulo32",
            value: function () {
              return (
                0 |
                Array.from(arguments).reduce(function (t, e) {
                  return t + e;
                }, 0)
              );
            },
          },
          {
            key: "rol32",
            value: function (t, e) {
              return (t << e) | (t >>> (32 - e));
            },
          },
          {
            key: "hash",
            value: function (e) {
              for (
                var r = t.pad(e),
                  n = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    7,
                    4,
                    13,
                    1,
                    10,
                    6,
                    15,
                    3,
                    12,
                    0,
                    9,
                    5,
                    2,
                    14,
                    11,
                    8,
                    3,
                    10,
                    14,
                    4,
                    9,
                    15,
                    8,
                    1,
                    2,
                    7,
                    0,
                    6,
                    13,
                    11,
                    5,
                    12,
                    1,
                    9,
                    11,
                    10,
                    0,
                    8,
                    12,
                    4,
                    13,
                    3,
                    7,
                    15,
                    14,
                    5,
                    6,
                    2,
                    4,
                    0,
                    5,
                    9,
                    7,
                    12,
                    2,
                    10,
                    14,
                    1,
                    3,
                    8,
                    11,
                    6,
                    15,
                    13,
                  ],
                  i = [
                    5,
                    14,
                    7,
                    0,
                    9,
                    2,
                    11,
                    4,
                    13,
                    6,
                    15,
                    8,
                    1,
                    10,
                    3,
                    12,
                    6,
                    11,
                    3,
                    7,
                    0,
                    13,
                    5,
                    10,
                    14,
                    15,
                    8,
                    12,
                    4,
                    9,
                    1,
                    2,
                    15,
                    5,
                    1,
                    3,
                    7,
                    14,
                    6,
                    9,
                    11,
                    8,
                    12,
                    2,
                    10,
                    0,
                    4,
                    13,
                    8,
                    6,
                    4,
                    1,
                    3,
                    11,
                    15,
                    0,
                    5,
                    12,
                    2,
                    13,
                    9,
                    7,
                    10,
                    14,
                    12,
                    15,
                    10,
                    4,
                    1,
                    5,
                    8,
                    7,
                    6,
                    2,
                    13,
                    14,
                    0,
                    3,
                    9,
                    11,
                  ],
                  o = [
                    11,
                    14,
                    15,
                    12,
                    5,
                    8,
                    7,
                    9,
                    11,
                    13,
                    14,
                    15,
                    6,
                    7,
                    9,
                    8,
                    7,
                    6,
                    8,
                    13,
                    11,
                    9,
                    7,
                    15,
                    7,
                    12,
                    15,
                    9,
                    11,
                    7,
                    13,
                    12,
                    11,
                    13,
                    6,
                    7,
                    14,
                    9,
                    13,
                    15,
                    14,
                    8,
                    13,
                    6,
                    5,
                    12,
                    7,
                    5,
                    11,
                    12,
                    14,
                    15,
                    14,
                    15,
                    9,
                    8,
                    9,
                    14,
                    5,
                    6,
                    8,
                    6,
                    5,
                    12,
                    9,
                    15,
                    5,
                    11,
                    6,
                    8,
                    13,
                    12,
                    5,
                    12,
                    13,
                    14,
                    11,
                    8,
                    5,
                    6,
                  ],
                  a = [
                    8,
                    9,
                    9,
                    11,
                    13,
                    15,
                    15,
                    5,
                    7,
                    7,
                    8,
                    11,
                    14,
                    14,
                    12,
                    6,
                    9,
                    13,
                    15,
                    7,
                    12,
                    8,
                    9,
                    11,
                    7,
                    7,
                    12,
                    7,
                    6,
                    15,
                    13,
                    11,
                    9,
                    7,
                    15,
                    11,
                    8,
                    6,
                    6,
                    14,
                    12,
                    13,
                    5,
                    14,
                    13,
                    13,
                    7,
                    5,
                    15,
                    5,
                    8,
                    11,
                    14,
                    14,
                    6,
                    14,
                    6,
                    9,
                    12,
                    9,
                    12,
                    5,
                    15,
                    8,
                    8,
                    5,
                    12,
                    9,
                    12,
                    5,
                    14,
                    6,
                    8,
                    13,
                    6,
                    5,
                    15,
                    13,
                    11,
                    11,
                  ],
                  s = r.byteLength / 64,
                  u = new Array(s).fill(void 0).map(function (t, e) {
                    return function (t) {
                      return new DataView(r, 64 * e, 64).getUint32(4 * t, !0);
                    };
                  }),
                  c = [
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520,
                  ],
                  l = 0;
                l < s;
                ++l
              ) {
                for (
                  var f = c[0],
                    h = c[1],
                    p = c[2],
                    d = c[3],
                    y = c[4],
                    v = f,
                    g = h,
                    b = p,
                    m = d,
                    w = y,
                    _ = 0;
                  _ < 80;
                  ++_
                ) {
                  var A = t.add_modulo32(
                    t.rol32(
                      t.add_modulo32(f, t.f(_, h, p, d), u[l](n[_]), t.K(_)),
                      o[_]
                    ),
                    y
                  );
                  (f = y),
                    (y = d),
                    (d = t.rol32(p, 10)),
                    (p = h),
                    (h = A),
                    (A = t.add_modulo32(
                      t.rol32(
                        t.add_modulo32(
                          v,
                          t.f(79 - _, g, b, m),
                          u[l](i[_]),
                          t.KP(_)
                        ),
                        a[_]
                      ),
                      w
                    )),
                    (v = w),
                    (w = m),
                    (m = t.rol32(b, 10)),
                    (b = g),
                    (g = A);
                }
                var x = t.add_modulo32(c[1], p, m);
                (c[1] = t.add_modulo32(c[2], d, w)),
                  (c[2] = t.add_modulo32(c[3], y, v)),
                  (c[3] = t.add_modulo32(c[4], f, g)),
                  (c[4] = t.add_modulo32(c[0], h, b)),
                  (c[0] = x);
              }
              var S = new ArrayBuffer(20),
                z = new DataView(S);
              return (
                c.forEach(function (t, e) {
                  return z.setUint32(4 * e, t, !0);
                }),
                S
              );
            },
          },
        ]),
        t
      );
    })();
    t.exports = { RIPEMD160: o };
  },
  function (t) {
    t.exports = JSON.parse(
      '{"version":"eosio::abi/1.1","structs":[{"name":"extensions_entry","base":"","fields":[{"name":"tag","type":"uint16"},{"name":"value","type":"bytes"}]},{"name":"type_def","base":"","fields":[{"name":"new_type_name","type":"string"},{"name":"type","type":"string"}]},{"name":"field_def","base":"","fields":[{"name":"name","type":"string"},{"name":"type","type":"string"}]},{"name":"struct_def","base":"","fields":[{"name":"name","type":"string"},{"name":"base","type":"string"},{"name":"fields","type":"field_def[]"}]},{"name":"action_def","base":"","fields":[{"name":"name","type":"name"},{"name":"type","type":"string"},{"name":"ricardian_contract","type":"string"}]},{"name":"table_def","base":"","fields":[{"name":"name","type":"name"},{"name":"index_type","type":"string"},{"name":"key_names","type":"string[]"},{"name":"key_types","type":"string[]"},{"name":"type","type":"string"}]},{"name":"clause_pair","base":"","fields":[{"name":"id","type":"string"},{"name":"body","type":"string"}]},{"name":"error_message","base":"","fields":[{"name":"error_code","type":"uint64"},{"name":"error_msg","type":"string"}]},{"name":"variant_def","base":"","fields":[{"name":"name","type":"string"},{"name":"types","type":"string[]"}]},{"name":"abi_def","base":"","fields":[{"name":"version","type":"string"},{"name":"types","type":"type_def[]"},{"name":"structs","type":"struct_def[]"},{"name":"actions","type":"action_def[]"},{"name":"tables","type":"table_def[]"},{"name":"ricardian_clauses","type":"clause_pair[]"},{"name":"error_messages","type":"error_message[]"},{"name":"abi_extensions","type":"extensions_entry[]"},{"name":"variants","type":"variant_def[]$"}]}]}'
    );
  },
  function (t) {
    t.exports = JSON.parse(
      '{"version":"eosio::abi/1.0","types":[{"new_type_name":"account_name","type":"name"},{"new_type_name":"action_name","type":"name"},{"new_type_name":"permission_name","type":"name"}],"structs":[{"name":"permission_level","base":"","fields":[{"name":"actor","type":"account_name"},{"name":"permission","type":"permission_name"}]},{"name":"action","base":"","fields":[{"name":"account","type":"account_name"},{"name":"name","type":"action_name"},{"name":"authorization","type":"permission_level[]"},{"name":"data","type":"bytes"}]},{"name":"extension","base":"","fields":[{"name":"type","type":"uint16"},{"name":"data","type":"bytes"}]},{"name":"transaction_header","base":"","fields":[{"name":"expiration","type":"time_point_sec"},{"name":"ref_block_num","type":"uint16"},{"name":"ref_block_prefix","type":"uint32"},{"name":"max_net_usage_words","type":"varuint32"},{"name":"max_cpu_usage_ms","type":"uint8"},{"name":"delay_sec","type":"varuint32"}]},{"name":"transaction","base":"transaction_header","fields":[{"name":"context_free_actions","type":"action[]"},{"name":"actions","type":"action[]"},{"name":"transaction_extensions","type":"extension[]"}]}]}'
    );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
  },
  function (t, e, r) {
    "use strict";
    (function (t) {
      var n =
          (this && this.__awaiter) ||
          function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(t) {
                try {
                  u(n.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function s(t) {
                try {
                  u(n.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function u(t) {
                t.done
                  ? i(t.value)
                  : new r(function (e) {
                      e(t.value);
                    }).then(a, s);
              }
              u((n = n.apply(t, e || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (t, e) {
            var r,
              n,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & o[0]
                              ? n.return
                              : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, { value: o[1], done: !1 };
                        case 5:
                          a.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = e.call(t, a);
                    } catch (t) {
                      (o = [6, t]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          },
        o =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator],
              r = 0;
            return e
              ? e.call(t)
              : {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
                    );
                  },
                };
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = r(0),
        s = r(2);
      function u(t) {
        var e,
          r,
          n = "";
        try {
          for (var i = o(t), a = i.next(); !a.done; a = i.next()) {
            n += ("00" + a.value.toString(16)).slice(-2);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            a && !a.done && (r = i.return) && r.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return n;
      }
      var c = (function () {
        function e(e, r) {
          void 0 === r && (r = {}),
            (this.endpoint = e),
            r.fetch
              ? (this.fetchBuiltin = r.fetch)
              : (this.fetchBuiltin = t.fetch);
        }
        return (
          (e.prototype.fetch = function (t, e) {
            return n(this, void 0, void 0, function () {
              var r, n, o;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 3, , 4]),
                      [
                        4,
                        (0, this.fetchBuiltin)(this.endpoint + t, {
                          body: JSON.stringify(e),
                          method: "POST",
                        }),
                      ]
                    );
                  case 1:
                    return [4, (r = i.sent()).json()];
                  case 2:
                    if ((n = i.sent()).processed && n.processed.except)
                      throw new s.RpcError(n);
                    return [3, 4];
                  case 3:
                    throw (((o = i.sent()).isFetchError = !0), o);
                  case 4:
                    if (!r.ok) throw new s.RpcError(n);
                    return [2, n];
                }
              });
            });
          }),
          (e.prototype.get_abi = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_abi", { account_name: t }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.get_account = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_account", { account_name: t }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.get_block_header_state = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_block_header_state", {
                        block_num_or_id: t,
                      }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.get_block = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_block", { block_num_or_id: t }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.get_code = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_code", { account_name: t }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.get_currency_balance = function (t, e, r) {
            return (
              void 0 === r && (r = null),
              n(this, void 0, void 0, function () {
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_currency_balance", {
                          code: t,
                          account: e,
                          symbol: r,
                        }),
                      ];
                    case 1:
                      return [2, n.sent()];
                  }
                });
              })
            );
          }),
          (e.prototype.get_currency_stats = function (t, e) {
            return n(this, void 0, void 0, function () {
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_currency_stats", {
                        code: t,
                        symbol: e,
                      }),
                    ];
                  case 1:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (e.prototype.get_info = function () {
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.fetch("/v1/chain/get_info", {})];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.get_producer_schedule = function () {
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_producer_schedule", {}),
                    ];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.get_producers = function (t, e, r) {
            return (
              void 0 === t && (t = !0),
              void 0 === e && (e = ""),
              void 0 === r && (r = 50),
              n(this, void 0, void 0, function () {
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_producers", {
                          json: t,
                          lower_bound: e,
                          limit: r,
                        }),
                      ];
                    case 1:
                      return [2, n.sent()];
                  }
                });
              })
            );
          }),
          (e.prototype.get_raw_code_and_abi = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_raw_code_and_abi", {
                        account_name: t,
                      }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.getRawAbi = function (t) {
            return n(this, void 0, void 0, function () {
              var e, r;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.get_raw_code_and_abi(t)];
                  case 1:
                    return (
                      (e = n.sent()),
                      (r = a.base64ToBinary(e.abi)),
                      [2, { accountName: e.account_name, abi: r }]
                    );
                }
              });
            });
          }),
          (e.prototype.get_table_rows = function (t) {
            var e = t.json,
              r = void 0 === e || e,
              o = t.code,
              a = t.scope,
              s = t.table,
              u = t.table_key,
              c = void 0 === u ? "" : u,
              l = t.lower_bound,
              f = void 0 === l ? "" : l,
              h = t.upper_bound,
              p = void 0 === h ? "" : h,
              d = t.index_position,
              y = void 0 === d ? 1 : d,
              v = t.key_type,
              g = void 0 === v ? "" : v,
              b = t.limit,
              m = void 0 === b ? 10 : b,
              w = t.reverse,
              _ = void 0 !== w && w,
              A = t.show_payer,
              x = void 0 !== A && A;
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_table_rows", {
                        json: r,
                        code: o,
                        scope: a,
                        table: s,
                        table_key: c,
                        lower_bound: f,
                        upper_bound: p,
                        index_position: y,
                        key_type: g,
                        limit: m,
                        reverse: _,
                        show_payer: x,
                      }),
                    ];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.get_table_by_scope = function (t) {
            var e = t.code,
              r = t.table,
              o = t.lower_bound,
              a = void 0 === o ? "" : o,
              s = t.upper_bound,
              u = void 0 === s ? "" : s,
              c = t.limit,
              l = void 0 === c ? 10 : c;
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/get_table_by_scope", {
                        code: e,
                        table: r,
                        lower_bound: a,
                        upper_bound: u,
                        limit: l,
                      }),
                    ];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.getRequiredKeys = function (t) {
            return n(this, void 0, void 0, function () {
              var e;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (e = a.convertLegacyPublicKeys),
                      [
                        4,
                        this.fetch("/v1/chain/get_required_keys", {
                          transaction: t.transaction,
                          available_keys: t.availableKeys,
                        }),
                      ]
                    );
                  case 1:
                    return [2, e.apply(void 0, [r.sent().required_keys])];
                }
              });
            });
          }),
          (e.prototype.push_transaction = function (t) {
            var e = t.signatures,
              r = t.serializedTransaction;
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/chain/push_transaction", {
                        signatures: e,
                        compression: 0,
                        packed_context_free_data: "",
                        packed_trx: u(r),
                      }),
                    ];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.db_size_get = function () {
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.fetch("/v1/db_size/get", {})];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.history_get_actions = function (t, e, r) {
            return (
              void 0 === e && (e = null),
              void 0 === r && (r = null),
              n(this, void 0, void 0, function () {
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/history/get_actions", {
                          account_name: t,
                          pos: e,
                          offset: r,
                        }),
                      ];
                    case 1:
                      return [2, n.sent()];
                  }
                });
              })
            );
          }),
          (e.prototype.history_get_transaction = function (t, e) {
            return (
              void 0 === e && (e = null),
              n(this, void 0, void 0, function () {
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/history/get_transaction", {
                          id: t,
                          block_num_hint: e,
                        }),
                      ];
                    case 1:
                      return [2, r.sent()];
                  }
                });
              })
            );
          }),
          (e.prototype.history_get_key_accounts = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/history/get_key_accounts", {
                        public_key: t,
                      }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.history_get_controlled_accounts = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      this.fetch("/v1/history/get_controlled_accounts", {
                        controlling_account: t,
                      }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          e
        );
      })();
      e.JsonRpc = c;
    }.call(this, r(11)));
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
  },
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(t) {
              try {
                u(n.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(a, s);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
      i =
        (this && this.__generator) ||
        function (t, e) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = e.call(t, a);
                  } catch (t) {
                    (o = [6, t]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
      function t(t) {
        void 0 === t && (t = "http://localhost:3000"),
          (this.waxSigningURL = t),
          (this.timeout = function () {
            return new Promise(function (t, e) {
              var r = setTimeout(function () {
                clearTimeout(r), e(new Error("Timeout"));
              }, 5e3);
            });
          }),
          (this.openEventSource = this.openEventSource.bind(this)),
          (this.onceEvent = this.onceEvent.bind(this));
      }
      return (
        (t.prototype.openEventSource = function (t, e, r) {
          return n(this, void 0, void 0, function () {
            var o,
              a,
              s,
              u,
              c = this;
            console.log("-------------");
            console.log([t, e, r, this]);
            console.log("-------------");
            return i(this, function (l) {
              switch (l.label) {
                case 0:
                  return r ? ((a = r), [3, 3]) : [3, 1];
                case 1:
                  return [
                    4,
                    window.open(t, "WaxPopup", "height=800,width=600"),
                  ];
                case 2:
                  (a = l.sent()), (l.label = 3);
                case 3:
                  if (!(o = a))
                    throw new Error("Unable to open a popup window");
                  return void 0 === e
                    ? [2, o]
                    : ((s = function (t) {
                        return n(c, void 0, void 0, function () {
                          return i(this, function (r) {
                            return (
                              "READY" === t.data.type &&
                                o.postMessage(e, this.waxSigningURL),
                              [2]
                            );
                          });
                        });
                      }),
                      (u = this.onceEvent(o, this.waxSigningURL, s)),
                      [
                        4,
                        Promise.race([u, this.timeout()]).catch(function (t) {
                          if ("Timeout" !== t.message) throw t;
                          o.postMessage(e, c.waxSigningURL);
                        }),
                      ]);
                case 4:
                  return l.sent(), [2, o];
              }
            });
          });
        }),
        (t.prototype.onceEvent = function (t, e, r) {
          return n(this, void 0, void 0, function () {
            return i(this, function (o) {
              return [
                2,
                new Promise(function (o, a) {
                  window.addEventListener(
                    "message",
                    function s(u) {
                      return n(this, void 0, void 0, function () {
                        var n, c;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              if (u.origin !== e) return [2];
                              if (u.source !== t) return [2];
                              if ("object" != typeof u.data) return [2];
                              i.label = 1;
                            case 1:
                              return i.trys.push([1, 3, , 4]), [4, r(u)];
                            case 2:
                              return (n = i.sent()), o(n), [3, 4];
                            case 3:
                              return (c = i.sent()), a(c), [3, 4];
                            case 4:
                              return (
                                window.removeEventListener("message", s, !1),
                                [2]
                              );
                          }
                        });
                      });
                    },
                    !1
                  );
                }),
              ];
            });
          });
        }),
        t
      );
    })();
    e.WaxEventSource = o;
  },
]);
