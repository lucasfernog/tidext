(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;A, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::array::BitArray"]},{"text":"impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::boxed::BitBox"]},{"text":"impl&lt;'a, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"enum\" href=\"bitvec/domain/enum.Domain.html\" title=\"enum bitvec::domain::Domain\">Domain</a>&lt;'a, <a class=\"struct\" href=\"bitvec/ptr/struct.Const.html\" title=\"struct bitvec::ptr::Const\">Const</a>, T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::domain::Domain"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitIdx.html\" title=\"struct bitvec::index::BitIdx\">BitIdx</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitIdx"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitEnd.html\" title=\"struct bitvec::index::BitEnd\">BitEnd</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitEnd"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitPos.html\" title=\"struct bitvec::index::BitPos\">BitPos</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitPos"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitSel.html\" title=\"struct bitvec::index::BitSel\">BitSel</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitSel"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitMask"]},{"text":"impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::slice::BitSlice"]},{"text":"impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::vec::BitVec"]}];
implementors["env_logger"] = [{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"env_logger/fmt/struct.StyledValue.html\" title=\"struct env_logger::fmt::StyledValue\">StyledValue</a>&lt;'a, T&gt;","synthetic":false,"types":["env_logger::fmt::writer::termcolor::imp::StyledValue"]}];
implementors["num_bigint"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]}];
implementors["openssl"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/cms/struct.CMSOptions.html\" title=\"struct openssl::cms::CMSOptions\">CMSOptions</a>","synthetic":false,"types":["openssl::cms::CMSOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspFlag.html\" title=\"struct openssl::ocsp::OcspFlag\">OcspFlag</a>","synthetic":false,"types":["openssl::ocsp::OcspFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Flags.html\" title=\"struct openssl::pkcs7::Pkcs7Flags\">Pkcs7Flags</a>","synthetic":false,"types":["openssl::pkcs7::Pkcs7Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslOptions.html\" title=\"struct openssl::ssl::SslOptions\">SslOptions</a>","synthetic":false,"types":["openssl::ssl::SslOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslMode.html\" title=\"struct openssl::ssl::SslMode\">SslMode</a>","synthetic":false,"types":["openssl::ssl::SslMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslVerifyMode.html\" title=\"struct openssl::ssl::SslVerifyMode\">SslVerifyMode</a>","synthetic":false,"types":["openssl::ssl::SslVerifyMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslSessionCacheMode.html\" title=\"struct openssl::ssl::SslSessionCacheMode\">SslSessionCacheMode</a>","synthetic":false,"types":["openssl::ssl::SslSessionCacheMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.ExtensionContext.html\" title=\"struct openssl::ssl::ExtensionContext\">ExtensionContext</a>","synthetic":false,"types":["openssl::ssl::ExtensionContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.ShutdownState.html\" title=\"struct openssl::ssl::ShutdownState\">ShutdownState</a>","synthetic":false,"types":["openssl::ssl::ShutdownState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509CheckFlags.html\" title=\"struct openssl::x509::verify::X509CheckFlags\">X509CheckFlags</a>","synthetic":false,"types":["openssl::x509::verify::X509CheckFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyFlags.html\" title=\"struct openssl::x509::verify::X509VerifyFlags\">X509VerifyFlags</a>","synthetic":false,"types":["openssl::x509::verify::X509VerifyFlags"]}];
implementors["sp_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"sp_core/offchain/struct.Capabilities.html\" title=\"struct sp_core::offchain::Capabilities\">Capabilities</a>","synthetic":false,"types":["sp_core::offchain::Capabilities"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["tracing_subscriber"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"tracing_subscriber/filter/struct.FilterId.html\" title=\"struct tracing_subscriber::filter::FilterId\">FilterId</a>","synthetic":false,"types":["tracing_subscriber::filter::layer_filters::FilterId"]}];
implementors["wyz"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtBinary"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtDisplay"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.LowerExp.html\" title=\"trait core::fmt::LowerExp\">LowerExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtLowerExp"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.LowerHex.html\" title=\"trait core::fmt::LowerHex\">LowerHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtLowerHex"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Octal.html\" title=\"trait core::fmt::Octal\">Octal</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtOctal"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtPointer"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.UpperExp.html\" title=\"trait core::fmt::UpperExp\">UpperExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtUpperExp"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtUpperHex"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtList.html\" title=\"struct wyz::fmt::FmtList\">FmtList</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.reference.html\">&amp;'a </a>T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.reference.html\">&amp;'a </a>T as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.59.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,&nbsp;</span>","synthetic":false,"types":["wyz::fmt::FmtList"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()