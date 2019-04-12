(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/number.mdx":function(e,n,A){"use strict";A.r(n);var a=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),u=A("./node_modules/react/index.js"),l=A.n(u),g=A("./node_modules/@mdx-js/tag/dist/index.js"),c=A("./node_modules/docz/dist/index.esm.js"),m=A("./src/utils/language_list.ts"),B=A("./src/utils/use_translator.ts");"undefined"!==typeof IEOLocaleNumberProps&&IEOLocaleNumberProps&&IEOLocaleNumberProps===Object(IEOLocaleNumberProps)&&Object.defineProperty(IEOLocaleNumberProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IEOLocaleNumberProps",filename:"src/components/number.tsx"}});var p=function(e){e.children;var n=e.language,A=e.value,t=Object(a.a)(e,["children","language","value"]);return Object(B.a)(n).formatNumber(A,t)};p&&p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EOLocaleNumber",filename:"src/components/number.tsx"}}),A.d(n,"default",function(){return d});var d=function(e){function n(e){var A;return Object(t.a)(this,n),(A=Object(o.a)(this,Object(i.a)(n).call(this,e))).layout=null,A}return Object(s.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,A=Object(a.a)(e,["components"]);return l.a.createElement(g.MDXTag,{name:"wrapper",components:n},l.a.createElement(g.MDXTag,{name:"hr",components:n}),l.a.createElement(g.MDXTag,{name:"h1",components:n,props:{id:"eolocalenumber"}},"EOLocale.Number"),l.a.createElement(g.MDXTag,{name:"h2",components:n,props:{id:"decimal"}},"Decimal"),l.a.createElement(c.c,{__position:0,__code:"<ul>\n  {LanguageList.map(language => (\n    <li key={language.id} lang={language.id}>\n      {language.icon}{' '}\n      <EOLocaleNumber language={language.id} value={123456789.321} />\n    </li>\n  ))}\n</ul>",__scope:{props:this?this.props:A,Playground:c.c,LanguageList:m.a,EOLocaleNumber:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2AAGXcFJQlcNJCNsKY0KNWV2g9OABHISRwmgOBJDgmcyLSAB9KAqNwiD2Cgs8dUI054hgAA5UIiECI4aLdejJEY5jPnXGh2NQWT5JwAg4CwQT8PYQNJXQujTUVMFUF0FFjlOLDnAIRIsXYbhhPWKIBGeVArnaAAGdgkxmQy92rGYOxYGc_IAFhC9gADYQvaMKLDAYCADFvWgRI_P4ZxDgRB1MBgoR-CWIhqEoOAIoRFL1nSmhnAgLDLnYABGGKwvkazbKmABBOY3PYCMoPIGwoHQMNUI5NyxBG6MZHYFEXJgbhgGwpzVrgeQtxrYBxugKbggAMhO8ZEnmShmkOybpu4B65TAZDJQGVB2nYAB-DYjrDCNZquW7jtQHrqykGQqzfMwYXVY4YDAMIoCmf65oWsHBuXasE1MggcAyzIUivAg9prWtQigEnSeE4iuPImBKJRHAohmCNONIunUajLGqYTfj2G2GBEnWtnuL_Lg0LZ4WSNFnBxcpnmLGAEW6dl3R5GAD72lBhWqcYUTxLiWAZLkjJ2GVtIpdptJZfQNDWHiBl1vagAmJMYoAVgSgB2AAOABOHAk2d9q0M3Fceakfj5ZrDkOW13WWIplcpBxvGCaJvapAxyGzC_EBVJYmIoHY82YD4qi9K0ChgP0Bg0FoAQEaKhoafZtIPOrLgrhRacUhVTvdG71ECn70HoawYy-qI6W6YZggrhbme0gAbQAXWG5f1mAFdYmoPzAB4NwAb3f3wBz3fq7mu7lOhz4sJQt53we5X3wB33f3wAv3ZvmtL86DpUtQv_t4X0fu0d--9AAfu5_Cw388ifzvtWQBpNd6-SfoAC9396AGfdyBnB0B-SwngWBACH57yfoAO92MFYO_jYAh98gHEJAYAS9396ACvdihOC5SYGofAohyCQGAGvdl-rC_LSk4YrbhB80GAH_dwRcozgiI7og4B-8yGAE_d6R7QXhyIQV_RRx9n5qPnJosRT9AD3u_vQAr7tqPUK4QxtCeH734SQtRkBOGr37nnAu6lqD6C0jpDIlcsCAV0CBAwYE8KwyMCEOwONzImk1H6W0sMoJ5BgJYTIqA4BwQiApGJ9EPSsWLixOAZdUTuAydEIU8TnQT1hvXDITdugNH1hJI2viBDQQHHYbAIF0B2AaDQKAOBjbyQykKKIBAdQzG7Ok-R7B7ZQAZFcbSJsBD93WKXT6Q9e6j2sjDe0U8mmG2kq0q4qcMovSmWuLxNBGCNLEs0o5yz2mUDuPNdyo11hAzDH_Uuf85kMj_jgQFzyplwDMPIWa3B5paK6AQPo5hkmpNKZkoUrMl4wA5DgdKAgxlDMjH8mASxgVvTgLNfwIRUCJFHm4pQ-cmKFzYoU4paSylZMroEmuoFwLGQiWS6JtFYlmkqWE-0Ik7mHMcHoLA1EcmAoBJKl8_dhUEURek5F2T-XKRKaq8pAhKm7KlOct6uQikqpZSi9ZmyCizS0VPIJXThqp2SRK2gUqIwHMks6rpH5rJQOaKiq23QzpmzRewAAhI9O1UqcCl2tSuGFcL2DOjGKatV_q27ov7rfH1E5RwJsjbjLVZqVlgtzjSjxNco36XZXoTlSr2A8qiZqHJlkFXWTrVBFu9zUIyskJVTAxcjKJKsMytV3aNV5KLuxQtaq9XVPtLUxuEoGnutgJ6qVMzS6WpnJms29z7iNANpJNeO7p06quCmnVqzqxFIIK3UWabRZbpSByK4rBKBcG2f6Kpk9qB2RXTANdUx3Kp3IKaWggGbn_sAw2GhpNN1yiwVAPdVw15_wsI8cYGT66IBYBUDwsBzRVItPxZ0iBUCUHNDAAUzkVw3rvXTK4KNIXCTgaTU9WTFkwGTSOnV_0_6sZGv2GArAlhEYhfNCMQnWDRpDeG9yRGZMBq-h1dgVx_IcjCt61A7i6X5KnTx1lVbtB2trUJDtIzsXRD1PACoaQJkgqWJ2w5SxLDWbgLZ7oikMKyr7fOOAg6RWGlGdEMdSlZURQEEUgQkgItRdnZPOC7nh1Ip1TM_sbAsg5o7NQJIwaA1Pp3el-2tAssnFQLlo87m6b7rFFQAQ6BGA9wKC5tzHmxBXosDMN4_FyCFnSaiUIkpzUhvcu0a-SwkOHP3U5o9693Jr1jdzKek3JLDRW1iTFqgIwvCo6jHbRBFPprco9GNHWawTFsId0Wa20U7osBduATMbPVbW127662_yVY83YK4wB5A7rHuFbrsQguWe1FkCM-KrhaiyISyZxKNmNH6TgGHtBLD8hgBZsZ9niUvuWsPGcMyLDxoEOYJNSOCADNRykjHWPogRge1dumcOQUYqxWMyHDsM3rEB514HvX2fRFxQITn8y2pLPkizhHC9kfC7p-M-Hv7FukxJ2TrjFOBly-CwQBnBImdpCl0rzF2vRcMi01mr9fP8Mg_YzAbbbCmszkN-khe8vWt0xx7-4af28eO9nFoiwU8oKYARuTAg7uDfsEBTgfFdg0LuSJb-u7ZtRzsC-xzdyjP09pDgMvLgrjs2-pGs5K6zRs_dAeqNiXGRXxE5rKrtPz3rYRCcr3f6yfedfz9SXmA11G9VfbpXuUyEQ9oGyLXgPXfi-XV780EPiNw9N-6HJuUfuJ_h3r7m0n2Dk8W43-X4a8-w8R5gB3wv4wBDJEn8Trf5hBc68Zz8_vHmlix_NzWNCcQCDjRGhkIQAhlcqZbJKBYAcA_8UV2hl5e9zQPt14UpoQBB_93899uYG9y8AcS1tMy06VfMClVBsA2VjMOUQkQB9ULp5grAT9ho_d2AAAfRNVpK9MghdepA9LtLReDP3HdcvGrLYIUBrP3FrJfdrTA8eYyHvKwN3JfT3aZYDPg-rRrAnFIJYGg-g6vI4eg1OHGKSQEEQr9ZgvQRdZuKQgfGAGQzpKVOgHpSQ7XE_cwmZI_JGE_RHLgsFHTZiWLDIGLVwSLPxIzauGtEg9tdgM8SwSgAWVASwGfRzMIiIlzcIugVvcUWULzOiD0CICIniHuZI-LWGZ6GyKZUHDnTgpQiqJfJ9UkHw70XgurAQ0o8lRIMQX3JQmZKeDIxI1EZI4acnWIjo00IgCMcvd_WAKYLoekJGYadoSpQPX9KYWYMkRIXo8wN5KCRPdJJYHvV_LnVCBeJY5o3uVGSfCAbvGfY7dyUIhIyImfHAAANR8IgFcHw3RTrxv1hW3wi2qOXnxQL25k7yLwjDWJJReM4BOIoKHwuIiKiPmBwGcHnC2AIEAJ5gb0BOXg-KIFz2-NXiZlmAjHmKSD2P_HfVQEfFfF31QnP3-IkPBKWKhL_Fgj6HiERKpmRMV3SWXnJz6UpxwHpMyCgBFHJngAfTpgxSKVgElEkyqPRK-K51Xg5CxOZlxLmHxMuIxXUCJJJOQI_xXD-JzTePMHxQBzOxGAmm6AjFDXaNQCSO9FllQC61xjK2eMnzGLD3YAAGp3I8TFjLiGdLirSDsiN_p39O8G9nSkZP13DvDfDosLSsjOjrT_CgJAi64zMkc7S_TQtvNJA0A7TYz-jcj7Q6BZIQiaTTitEeT4g_5YSxSCA_5LAuk_47j-hHjYBuodk50xxDDWCGgliZke8rgIS6BaSd0od8ctkmRWS4BEdat-DFDe4YjLi149DAcJDLB2lshYhMs3lxon1xN2AvAQDxRUAr0p4dRoIzwpJJiNZ-4p57BCIdRnAzxJj5A_Qp4tQzxCIGg9RuyzwRRJjFBKkp5oIABVKSewHiZwAATT1GvDEmcA3lPPPKWFvPvLPCWDfI_K_MsB_J-MAsIiApFH6kIh4gaDfKkksAaAykaV_NGzJAZKgBfNmPYAfMIjPHsEsGItIvIsop_MmNFPhPzKmHIESzsCWPTK0S62t161NDK1y2zPCBlzTLjKIDOwkp6z6x7kGyyUGPKNHKtTr0ZzkqA0TXVz6UUv6O0tMKDOzVUpBwDLx27MuLr2OOLz10Mpj22KHwQqkiZNeITUZ2ksbIeKePb21PPwb38vFHQDrNdSsstz7H6GK26DgG2AgBZm3N0pnCZOcojB_xXwMttPCHcrFx8vxEuzctA0oFcG2BCt-PP3yrtJwDsowLiqK0y2koAHUTTJMugWAv82pVyeqNzaAmSRjRzJjpiaxjToBTTzTXKCr7SvF2Ag0hNeqId6rCr8VY5gSe43TM85qGqDSN91rcYmrQq4rfLt8e5mr1hWqSsAr7jmy7cmTGdkrUqIwvKtMVwp58VhoIqOxOrpqcq8RmNQ1bBoIXogbY49J-gBjPqL4_V8Vo06AUgCwh91NgTjqPghAqqarSYdTsrMafqh9kKHySqXqUqWYSazw4akTb9gT7sZ9-ySzoTArHq0MqZ8V2bb4z9zrSrHtXqWZ0LPzvyRQaaaw2jTi9rLt7qmynjaSUYyUByrj5gzsLrzBr89gJyrg_r0BWanjzC-MjroiN9ObtTrrwoEq2rIroqdcmSG8Na-zizLjaScAbaubZkudta9cOquqf9mNcrHovKlrzoA73IqaNMzaedrLLa7rIq9bYB5amSJawS-bQxIqAbYAgbUZQ72AhbMKfyMVh5YbVaQTp8wTHpoI8KCKiKSLzyuKqKSqG8laXbyyoAead5QSK9HpmLWL2La6yKKKG7gSm7ma_wqz4T27uZMaKqcbYqbqY7KQ46Hr9aJyUZJ9ya3q86RaxaZj-tNaQUTl5C6i5zGgljFzvd_tz8prYAXKyr5qiqGQw1Hpw7gSUSdabb_oH6_wi7_o5tU7pKzwJ4xj8hqBcatTeaN7Ka7zSaS6WSQVzbOsF7StAGhN3M3o16vrGKLTpsz6_7j06q9cBb3qzzvKS7r7TTCbtiV8X6HbLjHsus4A8BddLs7LNSdTIGIxw7YG6bsHmrAd8jXpmQwaIb0q_c8d9zyR1b1gG9gLQLwKoKYLCJnAbShLQhyhIbwzsCPCfCossz5rczkjCCAjgkGAyChL_Bel5qxKbr-dOBwwfB3J_JCtbGHThoEZi5T8bHJKPaxdxqVLbG-o0QhsRdbrF7stytkhDKdz9K9cibU7yq_ABB-oH85q1A56gdvG7Kn0Ym761BXTXSS6CbUnsB2AxApbHs3LYAZwJgya9dXHM80RPHarebwrYmPL4n77xofDknmGKn7H0mrc1KZ7qrnq8AhAxhyczxECUVihl4AASYAY6-QLE9gIC79eE3MLpzISUU2fgBZxnfFHqEAPYcwQUfIQo_Z4prAeQHAYoWK0GPOWqbYFWTQagatExsCLRfgVAb0RkJAdgfgH4YsaoDISjLAb0MkP5v-fgVgDIEB_0f5_gfyHAZF_ycqdYfgcoUDVKqZfgK4fgfqZaPCG-n8SFuGMkSgRIXMPIAoLLSUc0IFv4UsdF6sfgKINAPFgFlQex_8UFEAaFkATAeYcMGyCAeATlyfTFhyTl_gAAPXahRZRZZdJn4BbRlZAHlYShwC9iVf5ZXFVc1EtEiHVc1e1d1ajpBncSZdwF0EgBSF5beaIKTM-f4FoB9CyDxcBbAxgHNBbXNHmP4HkAUHkHkCAA"},l.a.createElement("ul",null,m.a.map(function(e){return l.a.createElement("li",{key:e.id,lang:e.id},e.icon," ",l.a.createElement(p,{language:e.id,value:123456789.321}))}))),l.a.createElement(g.MDXTag,{name:"h2",components:n,props:{id:"currency"}},"Currency"),l.a.createElement(c.c,{__position:1,__code:'<ul>\n  {LanguageList.map(language => (\n    <li key={language.id} lang={language.id}>\n      {language.icon}{\' \'}\n      <EOLocaleNumber\n        currency="USD"\n        language={language.id}\n        style="currency"\n        value={1000}\n      />\n    </li>\n  ))}\n</ul>',__scope:{props:this?this.props:A,Playground:c.c,LanguageList:m.a,EOLocaleNumber:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2AAGXcFJQlcNJCNsKY0KNWV2g9OABHISRwmgOBJDgmcyLSAB9KAqNwiD2Cgs8dUI054hgAA5UIiECI4aLdejJEY5jPnXGh2NQWT5JwAg4CwQT8PYQNJXQujTUVMFUF0FFjlOLDnAIRIsXYbhhPWKIBGeVArnaAAGdgkxmQy92rGYOxYGc_IAFhC9gADYQvaMKLDAYCADFvWgRI_P4ZxDgRB1MBgoR-CWIhqEoOAIoRFL1nSmhnAgLDLnYABGGKwvkazbKmABBOY3PYCMoPIGwoHQMNUI5NyxBG6MZHYFEXJgbhgGwpzVrgeQtxrYBxugKbggAMhO8ZEnmShmkOybpu4B65TAZDJQGVB2nYAB-DYjrDCNZquW7jtQHrqykGQqzfMwYXVY4YDAMIoCmf65oWsHBuXasE1MggcAyzIUivAg9prWtQigEnSeE4iuPImBKJRHAohmCNONIunUajLGqYTfj2G2GBEnWtnuL_Lg0LZ4WSNFnBxcpnmLGAEW6dl3R5GAD72lBhWqcYUTxLiWAZLk0FuZ1ixegEMNyCF_gAFVnC1fgV3N9hlbSKXabSWX0G112axW2A-B0PprcSZ2zfN1h4gZdb2v8hO_ddzcXd1jiIHlmsOQ5JOaykcnKakHG8YJom9qkDHIbML8QFUliYigdj3ZgPiqL0rQKGA_QGDQWgBARoqGhp9m0g86suCuFFpxSFVx90SfUQKWfQehrBjL6ojpbphmCCuIet7SABtABdYbD_WYAV1iag_MAHg3ABvd2_AHPd-ruYnuU6FfiwlAvq_57lW-gB33dvoAL92v41nfp0DoqVUIwMvm_f-7RQG30AB-74CLCQLyOAn-1Z4Gk2vr5ABgAL3dvoAZ930GcHQH5LCeBsFwL_jfABgA73bIRQyBNg6G_wQYwpBgBL3dvoAK922FULlJgThuCGGEKQYAa92gHCL8tKcRitJF3xIYAf935FyjOEose-DEG3xYYAT93NHtBeDovBED9GP0ASY-c5iVEAMAPe7t9ACvuyY9Qrh7HcKkbfWRTCTGQHEcfWeNc67qWoPoLSOkMjtywIBXQIEDBgTwrDIwIQ7A43MiaTUfpbSwygnkGAlhMioDgHBCICksn0Q9KxRuLE4At1RO4Mp0QhS5OdGvWGvcMgD26A0fWEkjbRIENBAcdhsAgXQHYBoNAoA4GNvJDKQoogEB1DMbspTdHsGjlABkVxtImwELPdYzdPoL2nsvayMN7QbwGYbaSwyrjFwyi9DZa4Ik0EYP0sSgyHmHNGZQO4813KjXWEDMMMDm4wJ2QyGBOB4WAo2XAMw8hZrcHmhYroBA-jmEKcU5p5ShSswPjADkOB0oCBWQsyMMKYBLERW9OAs1_AhFQIkZeISlC1yYvXNi9TGklJaRU9u8Su6gXAsZNJLLMm0WyWadpKT7QiR-fcxwegsDUSqfCgE6qXyz0VQRfFpTCWVNlcpJpxrWkCHadcqUry3q5AaUaoVRLTnnIKLNCxG8EkTOGsXQparaAaojHcySgaJkfmshg5oxKvbdDOm7El7AACEj0fUapwM3T1K4sU4vYM6MYzqTWxpHqS2e38o0TlHHm9NuMLUuqOSi6uXKwldwzfpUVehxUGvYFKjJmoqmWT1dZHtUEh6_NQlqyQlVMCNyMvkqwgqTWTrNTUhu7F60mptZ0-03T-4Sj6aG2A4aNVbObu6mc5a3a_PuI0A2kkT5Xs3Vaq4RarXHOrA0ggw9RYltFhelIHIrisEoFwS5_oOnr2oHZI9MAT1THcsXcgppaDwa-bB-DDYuGk3PXKChUAb1XBPjAiwjxxhlN7ogFgFQPCwHNB0i0_FnSIFQJQc0MABTORXF-n9dMrgo3RcJHBpNn0VP2TAQtS6rX_RgcJka_YYCsCWAxtF80IwKdYJmpNqb3IMa03Gr6HV2BXH8hyMKkbUChJ5bUjdUnhUdu0D67tQkx1LMpdEPU8AKhpDWUipY477lLEsJ5uA3nuiKQwtqmd844DzqVYaZZ0QV1KW1RFAQDSBCSDSxl7d684KhcXQSq1Wz-xsCyFWjs1AkiJrjQBq9pXo60AqycVA1WjyhbpresUVABDoEYFPAoQWQthbEB-iwMw3j8XIIWUpqJQiSldUm9y7RP5LAI_c29AWH2n3cifbN3MN7rcksNI7WJyWqAjC8DjqMrtEH06Wtyj0s1jZrBMWw93RYnZJVeiwb24BMy851k7E7vqnb_O1sLdgrjAHkFele4VJuxAS-57UWQIy0quFqLI9L1mMrOY0WZOAse0EsPyGAbmVm-cZUB5ai8ZxbIsLmgQ5gC0E4IHM4nRSycU-iBGP7H26Y46RWSilKz0cxzLeseH43EfTdF9EalAhxe7Lagc-SQu8d70J4rnnqzcfQf26TJnLOJNs7mTrxLBA-cEgF2kDXBvyWW-VwyCzFaIMy9o0j0TMBLsiIGzOe3pS966-G3TKn0Hhow5p_72cFiLbQYIpgBG5MCCh7t-weFOBaV2DQu5Bl0Gftu1HOwCHHN3L89L2kOAh8uDBMrdGkazkrrNEr90B6y21cZFfAzmsxuS-A-9hEJy09_qF-lxAmNTeYDXX7x10e7e5TIST2gbI3e48T8b5dafzQk-I1TwP7oOm5Qx7X6nRn1bmeUML271Orfhq75T2nmAY_6_jAEMkdf5_sWX_l1b_nULZ8wslhs9Xcaw0I4gCBxoRoMghABBDcqZbJKBYAcAYCiV2hD5p9zQwdT4UpoQrYhRQCb9uY-9W84cm1LMW0eVos6lVBsARVHMxUkkQBbULp5grAn9hoY92AAAffNYZD9FgvdXpO9CdCxXDGPK9VvLrLYIUPrGPIbA_Ubcg1eYyKfKwEPA_cPTZRDGQ3rfrOnFIJYLg3gzvI4Xg4uHGKSQEJQiDQQvQfdQeDQufGALQ8ZDVOgKZdQy3J_VwrZB_JGJ_fHCQlFKzZibLDILLVwdLGJBzTuLtJg0ddgM8SwSgAWVASwLffzFItIoLVIugYfcUWUCLOiD0CINIniKeQo3LWGZ6GyDZZHMXcQgwiqA_ADUkKI70aQnrOQ5o1lRIMQaPAwrZDeMo_I1EQo4aVnbIsY00IgCMVvUA2AKYLoekJGYadodpePWbEIOYJIaY8wEFKCfPUpJYKfYAiXVCPefYwY6eVGdfCASfLfR7dyZIvI9IrfHAAANSiIgFcFo1JR7y_zzTS06MPlpTr25nHwbwjGOKZUBM4EeLYIX1eLSIyPmBwGcHnC2AIHgJ5j71hMPhBKIGr3BOPiZlmAjFmDJESGuP_FA1QEfFfGv1Qlf2hLUORP2LRL_Fgj6HiFxKpnxP11KUPlZxmXZxwB5MyCgBFHJngD_TpjJQaVgElHUw6OJLBIl2Pg5DJOZkpN2JpLeLJXUHpMZMILAJXChKrW_3MFpThxexGAmm6AjGTVGNQAKO9FllQAm1xhawBPXxWJT3YAAGp3IqS9i3i-c3j3S7sGN_pQDx8-8AykZwNQjIjojMtXSKjxiPTYigJ4ie4XMCdvTozktItJA0BvSszZjqj7Q6BZIkjOSniLFJT4gYFMTlSCAYFLAJkYFvj-g_jYBuorkd0xx7DhCGh9itkp8rgUS6AuSr0MdacLkmQhS4B8dutZD9Dp4si3iT4bD4c1DLBRlshYhysQVxoANVN2AvAkDxRUAP0N4dRoIzwpJ1iNZZ4N57BCIdRnAzx1j5A_QN4tQzxCIGg9QJyzwRR1jFB2kN5oI7YpJ7AeJnAABNPUa8MSZwM-J8l8pYL8n8s8JYYC0C8CywSCiEuCwiO2EUfqQiHiBoYCqSSwBoDKfpKC5bMkXkqAQChPdgX8wiM8ewSweixi5i1iyC9YpU7EmsqYcgfLOwfYksixCbT3abU0FrarCs8ILXYs7MogF7FSqbGbKeebCpeY1opcj1HvfnLShDfNU3GZXS2Y8y5w-MytQypHWMmnCct4nvB4xvG3WyrPC4hfHCqSfkoEy_fndSvs34_40fC01_PvaK8UdAbs4NNy93PsfoRrboOAbYCAFmC8yymcfk_yiMKAo_Gyr08IYKlXCK_Ed7IK5DSgVwbYBKyE1_aq70nALysgrKhrcrdSgAdUdPUy6BYAgLaiPImtPNoH5KWKXPWM2JrAdOgCdJdMCpqp9IiXYATQU0mrR26tqtpWznhKnmDPLy2p6ttNTmOtxj6sSqysivMCnn6vWEGqaxip-IHJ935P53ysKojDCosxXA3lpWGhSo7FGvWoqrxEE2TVsGghejhuzj0n6DmNBrfhjVpUzToBSALAX1M3hPuo-CEDao6tJktPKtJohoX3wt_IaoBoKpZgZrPCxrxIv3ME_1ey3xnMbPRNit-pIyplpRFu_hf2esav-0BpZmIrAogpFA5prBGKeKuve2-v7P-K5JRhZVnPePmBexevhNhKuChvQCFv-NcJkzusyNTjFotPevChyqGtSvSqt35L7x5unIbLeK5JwHdvFu2QlzNptxGrGqgME0qsejCr2vOmjvcjZrM0dql3cpdq-tSsttgB1v5NVqROltDFSphtgDhtRgTvYHltIsgrJUXkxqNoRM3yRMemgioporooYpfLErYoar731v9pbKgElqvkRLb0en4sEuEo7qYpYu7vhN7oFr_HbOxKHu5lJpaopsyo-vTspEzp-qttXJRnX2ZqBsrsVuVq2LslNpMl0J6O3MaH2L3Mj1h1fzWtgACqau2rqoZBTUeiTpNtXMPnNvdv-i_r_Frv-h2wLvUrPDXhWPyGoEpvNKluPtZu_MZvrsFKRSdvG23uaxgYU1CzekPrBt4tdM2wfsgcfS6pt1luBufPCvrtfqdNpouKPz_u9reP-wmzgDwGt3ey8rNMtJQYjCTowa5qHDSLgH6vh1qNemZCRpRuKpjxpxvPJG5vWD73gsQuQrQowsImcE9LktCHKFRpTMoLCKiIy3LO2qrMKPoLiMSQYBYLkv8GmW2qUo-tl04HDB8Hcn8nqy8d9OGgRkbmf08dUuDpV2WoMq8b6jRAWyV0-p3sq1a2SFssvOsptzpoLuar8AEH6j_y2rUE3oRwia8oA0yY_rUCDKDPrppqKewHYDEHVv-yCtgBnAmCZptyCfLzRDCc6qluSqyZCpyc_vGiiIKb4daZ8ZKY9yMvXvav-rwCEDGFZzPHwKV2KEPgABJgB7r5AyT2A7ZINsTcxxnMhJQMh2B-Bdn-daUeoQA9hzBBR8h6jbmGmsB5AcBihMrQYa5aptgVZNBqBO1HGwILF-BUBvRGQkBrmgJyg_hSx2MsBvQyQYWYF-BWAMh4H_RYX-B_IcACX_Jyp1h-ByhkNCqNl-Arh-B-plo8I36fw0W4YyRKBEhcw8gCgKtJRzQfhixqhQQQAMWQAog0BqW4XaCNBkUhXSWQBMB5hwwbIIB4BxX18yWHJxX-AAA9dqQlwlkl7mfgIdTVkAHVhKHAAAdn1ZlcNcEE1EtEiBNbNctetdTpBlCURdwF0EgBSH_DgBBYYPzPBf4FoB9CyGpf4GQ3FFoHNCHXNCpP4HkAUHkHkCAA"},l.a.createElement("ul",null,m.a.map(function(e){return l.a.createElement("li",{key:e.id,lang:e.id},e.icon," ",l.a.createElement(p,{currency:"USD",language:e.id,style:"currency",value:1e3}))}))),l.a.createElement(g.MDXTag,{name:"h2",components:n,props:{id:"percent"}},"Percent"),l.a.createElement(c.c,{__position:2,__code:"<ul>\n  {LanguageList.map(language => (\n    <li key={language.id} lang={language.id}>\n      {language.icon}{' '}\n      <EOLocaleNumber language={language.id} style=\"percent\" value={0.5} />\n    </li>\n  ))}\n</ul>",__scope:{props:this?this.props:A,Playground:c.c,LanguageList:m.a,EOLocaleNumber:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2AAGXcFJQlcNJCNsKY0KNWV2g9OABHISRwmgOBJDgmcyLSAB9KAqNwiD2Cgs8dUI054hgAA5UIiECI4aLdejJEY5jPnXGh2NQWT5JwAg4CwQT8PYQNJXQujTUVMFUF0FFjlOLDnAIRIsXYbhhPWKIBGeVArnaAAGdgkxmQy92rGYOxYGc_IAFhC9gADYQvaMKLDAYCADFvWgRI_P4ZxDgRB1MBgoR-CWIhqEoOAIoRFL1nSmhnAgLDLnYABGGKwvkazbKmABBOY3PYCMoPIGwoHQMNUI5NyxBG6MZHYFEXJgbhgGwpzVrgeQtxrYBxugKbggAMhO8ZEnmShmkOybpu4B65TAZDJQGVB2nYAB-DYjrDCNZquW7jtQHrqykGQqzfMwYXVY4YDAMIoCmf65oWsHBuXasE1MggcAyzIUivAg9prWtQigEnSeE4iuPImBKJRHAohmCNONIunUajLGqYTfj2G2GBEnWtnuL_Lg0LZ4WSNFnBxcpnmLGAEW6dl3R5GAD72lBhWqcYUTxLiWAZLk0FuZ1ixlbSKXabSWX0G183SZW2A-BAWEERofgV0d1h4gZdb_JwABWB3Hc3b3dY4iB5ZrDkOVDmspHJympBxvGCaJvapAxyGzC_EBVJYmIoHYy2YD4qi9K0ChgP0Bg0FoAQEaKhoafZtIPOrLgrhRacUhVLvdB71ECgH0HoawYy-qI6W6YZggrlb2e0gAbQAXWGlf1mAFdYmoPzAB4NwAb3YPwBz3fq7nu7lOgL4sJRt93oe5QPwB33YPwAv3dvmsr86DpUtQ_-O9L5P3aB_A-gAP3a_hYH-eQv732rEA0me9fLP0ABe7B9ADPu1Azg6A_JYTwHAwBj997P0AHe7mDsE_xsIQh-wCSGgMAJe7B9ABXu5Q3BcpMA0IQcQlBoDADXu6_NhflpRcMVjww-6DAD_u0IuUZxRGdyQSAg-5DACfuzI9oLx5GIO_kok-L91Hzi0eI5-gB73YPoAV931HqFcEYuhvCD4CNIeoyAXC14D3zoXdS1B9BaR0hkKuWBAK6BAgYMCeFYZGBCHYHG5kTSaj9LaWGUE8gwEsJkVAcA4IRAUrE-iHpWIlxYnAcuqJ3CZOiEKBJzpJ6wwbhkZu3QGj6wkkbPxAhoIDjsNgEC6A7ANBoFAHAxt5IZSFFEAgOoZjdgyQo9gvsoAMiuNpE2AgB7rDLp9Yefcx7WRhvaaezTDbSTaVcNOGUXrTLXN4mgjAmliRacclZHTKB3Hmu5Ua6wgZhn_mXf-8yGT_xwECl50y4BmHkLNbg81tFdAIH0cwKS0llKyUKVmy8YAchwOlAQ4zhmRn-TAJYIK3pwFmv4EIqBEhj3cUoAuTEi5sSKSU9J5TslVyCbXUC4FjKRPJTE2icSzRVPCfaES9yjmOD0FgaiuSgUAilS-AeIqCJIoySinJArlKlLVRUgQVS9lSguW9XIxTVWstRRsrZBRZraOnsE7pw004pMlbQaVEZDmSRdd0j81loHNDRTbboZ12Bl3YAAQkeva6VOAy42pXLC-F7BnRjDNeqgN7cMUDzvr6ico5E1Rtxtq81qzwV51pZ42u0b9Icr0Fy5V7BeXRM1LkyyirrL1qgq3B5qFZWSEqpgEuRkklWBZeqntmr8nF3YkW9V-qan2jqU3CUjSPWwC9dK2ZZcrUzizSGh59xGgG0kuvXdM7dVXFTbqtZ1ZikEDbqLdNott0pA5FcVglAuA7P9NUqe1A7KrpgOuqY7k07kFNLQIDtyANAYbLQ0mW65TYKgPuq469_4WEeOMTJDdEAsAqB4WA5pqkWn4s6RAqBKDmhgAKZyK5b33rplcFGULhLwNJme7JSyYAptHbq_6_82MjX7DAVgSxiOQvmhGYTrAY3ovDY9YjsnA1fQ6uwK4_kORhR9agDx9KCnTt42y6t2h7V1qEp20ZOLoh6ngBUNIkzQVLC7UcpYlgbNwDs90RSGE5X9vnHAIdorDRjOiOOpScqIoCGKQISQkXotzqnnBDzI7kW6tmf2NgWRc0dmoEkEN6Ln27oy77Wg2WTioDy0eDzdMD1iioAIdAjBe4FFc-5zzYhr0WBmG8fi5BCwZNRKESUFq5PuXaDfJYyGjkHuc8eje7l15xu5tPKbklhqraxFi1QEYXjUdRrtogSmM1uUerGzrNYJi2CO6Ldb6Ld0WEu3AJmtmavre7d9Dbf4quebsFcYA8hd3j3Cj12IwWrPaiyBGAlVwtRZCJVMklmzGgDJwLD2glh-QwEs-MhzJLX3LRHjOWZFgE0CHMMm5HBBBlo9SZj7H0QIyPeu3TeHoLMXYvGVDv2mb1hA66yDvrHPoh4oEFzhZbVlnyVZ4jxeKORf04mQjv9S3Sak_J9xyngz5chYIIzgkzO0jS-V1inXYuGTaezd-_nBHQccZgDt9hzWZxG4yYvBXbW6a47_cNf7-Onezm0RYaeUFMAI3JgQD3hv2BApwASuwaF3LEr_fdkNo52DfY5u5JnGe0hwBXlwNxOa_UjWcldZoOfugPTG5LjIr5ic1jV-nl7tsIhOT7v9FPfPv7-tLzAa6Tfqsdyr3KZCoe0DZDr4H7vJfLp9-aKHxGEfm_dAjWN_3k-I4k7zWTnBKfLcRwr8NBf4fI8wE70X8YAhkhT633CnfQvddM9-QPzzSw48W5rGhOIBBxojQyEIAQFXKmWySgWAHAf_VFdoFePvc0T7DeFKaEAQAAj_ffbmRvCvQHUtHTctelPzQpVQbAdlEzTlUJEAA1C6eYKwU_Yaf3dgAAHyTTaWvXIMXQaUPW7W0QQ3913Qr1qy2CFEa391a2Xw6ywInmMl7ysHd2Xy9xmRA34Iaya0JxSCWFoIYJryOAYLThxikkBFEO_RYL0CXRbmkMHxgFkK6WlToF6SkJ11PwsNmWPyRlPyR24PBV02YjiwyFi1cCi38WMxrlrVII7XYDPEsEoAFlQEsFnyc3CMiNcwiLoDb3FFlG8zog9AiEiJ4l7hSIS1hmehsmmTB05y4OUIqmX2fVJF8O9D4Pq0ELKIpUSDED92UNmWnkyKSNRBSOGgpziM6NNCIAjArw_1gCmC6HpCRmGnaCqSDz_SmFmDJESD6PMHeSgiTwySWF7zf251QkXmWJaL7lRinwgB71nxO3cjCMSKiNnxwAADVfCIBXACMMV69b9E1IsaiV4CVC9uYu9i8Ix1jSVXjOBTjKDh9LjIjoj5gcBnB5wtgCAgCeZG9ASV4PiiA89vi14mZZgIwFikh9j_wP1UBHxXw99UIL9_jJDwTlioS_xYI-h4hESqZkSlcMkV4Kd-kqccB6TMgoARRyZ4BH06ZMVilYBJQpNqj0Svjuc14OQsTmZcS5h8SrjMV1AiSSSUDP8Vw_jc079zACVAdzsRgJpugIww0OjUBkjvRZZUButcZysXip9xjw92AABqdyPEpYq4xnK4q0w7Yjf6D_LvRvZ0pGL9DwnwvwmLC07Iro60gIoCII-uczZHO0v0sLHzSQNAO02MgYvI-0OgWSUImks47RHk-If-WEsUggf-Swbpf-e4_oJ42AbqXZedMcIwtghoZY2ZXvK4CEugWk3daHAnbZJkVkuAJHOrAQpQvuWIq49efQoHSQywDpbIWILLd5caZ9CTdgLwUA8UVAa9aeHUaCM8KSKYjWAeaeewQiHUZwM8KY-QP0aeLUM8QiBoPUbss8EUKYxQKpaeaCAAVSknsB4mcAAE09RrwxJnBN5Tzzylhbz7yzwlg3yPyvzLAfyfjALCIgKRR-pCIeIGg3ypJLAGgMomlfyxsyQGSoAXy5j2AHzCIzx7BLBiLSLyLKKfypjRT4T8yphyAks7Blj0ztFusbc-tTRys8tszwhZc0y4yiBzsJLet-te4htskhiKjRzrV68mc5LgMk0Nd-lFKBjtKzCgyc1VLQcAz8duyrj68TiS99dDLY8djh8EKpImS3id8mdpLGzHjniO9tSL9G9_LxR0A6y3UrKrc-x-gStug4BtgIAWZtzdKZwmTnKIxf9V98Qrs3KCUfL8qns3KwNKBXBtgQrfiL8DLbTwgcA7LMC4risstpKAB1E0qTLoFgb_NqVcnqjc2gJk0Y0cqYmYmsY06AU0801y-q-07xdgYNYTXqyHOqu09y8XOOYE3uN0rPOajag0iOdahqpq0KuK3y8wXuZq9YVq0rAKh45s-3JkpnZK1KiMLy7TFcaeAlYaCKjsTq6anKvEFjMNWwaCF6YGuOPSfoQYr6y-f1AlGNOgFIAsYfDTYEk63Gcqyq6q0mHU7KrGzahkc4hwO8h84q16lKlmZCim87VXbfcwG_C7Wffsks6EwKp69DKmAlbmu-c_C6kqnAN6lmdCz878kUeG0mdos4_aq7B6ps542klGclAc64-Yem3UxNZmwEq4f69ATm54iw_jY6mIiOXm7Um68KBKtqyK6K3XJkxvZmvs4sq42knAe2vmuZbnPW_XDqrq3_FjXKx6Lypa86YO9yWms8TTS23naym2-6yKw22AZWpkmWsEoW_2oGwO-aCO9gMWzCn8zFEeOGzWwm2Wx6aCPCgioiki88riqi4qxvNW928sqAAW3eUEyvR6Zi1i9iuusiiixu4E5u9mv8Ks-Eju7mImnGqq2K26hOykJOx6o2iclGKfKm96guiWqWmsaeXWkyBQ-oucxoZYxcn3AHC_Ka2AFygq-a4mlfR6KO4qlE_W-2_6B-mG_kf6ebTOyKs8SecY_IagPGrUwWzemm8m6OzWlk0FK2rrResrAB4TDzN6de76xii0mbM-3-k9Wq_XEWj6s87yzW6-00om36vK5-zGq4p7brOAPAPXK7OyzUnUiBiMZ-mBxmocSIuAZqoHAo16ZkcGyG9K_3fHfc8kJm9YRvYC0C8CqCmCwiZwG0oS0IcoKG8MnAzw3w6LLM-a3MlIogwIkJBgcgoS_wPpeasS26gXTgcMHwdyfyIrOxh04aBGEuM_WxyS728XcalSuxvqNEYbUXO6penLCrZIQync_S_XX6uW0q--8aXw_qR_OatQee4HHxuy59WJu-tQV010sunvdJ7AdgMQBJm0ja2AGcCYSm_XNxrPNELxmqwW8KuJjyoWsqvwAQVJphxJjJ-BvsQJoQXGl6vAIQMYCnM8JA1FYoFeAAEmACxvkCxPYCAp_XhNzGScyElAyHYH4CWaZwJR6hAD2HMEFHyCKKOdKawHkBwGKFitBnzlqm2BVk0GoBrVMbAm0X4FQG9EZCQAOaAnKD-FLCoywG9DJEBf_n4FYAyGAf9CBf4EDlRfKnWH4HKDA1SumX4CuH4H6mWjwhvp_GhbhjJEoESFzDyAKGy0lHNB-GLGqFBBAFhZACiDQDxeBYII0DBVZYxZAEwHmHDBsggHgC5an0xYci5f4AAD12ocA0X-XuZ-BW0ZWQB5WEocAAB2RV9FlVwQTUS0SIdVzVnVvVkAOOkGDxMF3AXQSAFIf8OAT54gpMn5_gWgH0LIPF_gMDcUWgc0Vtc0BY_geQBQeQeQIAA"},l.a.createElement("ul",null,m.a.map(function(e){return l.a.createElement("li",{key:e.id,lang:e.id},e.icon," ",l.a.createElement(p,{language:e.id,style:"percent",value:.5}))}))))}}]),n}(l.a.Component);"undefined"!==typeof d&&d&&d===Object(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/number.mdx"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/number.mdx"}}),d.isMDXComponent=!0},"./src/context.ts":function(e,n,A){"use strict";A.d(n,"a",function(){return r});var a=A("./node_modules/react/index.js"),t=A("./src/utils/translator.ts");"undefined"!==typeof IEOLocaleContext&&IEOLocaleContext&&IEOLocaleContext===Object(IEOLocaleContext)&&Object.defineProperty(IEOLocaleContext,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IEOLocaleContext",filename:"src/context.ts"}});var r=a.createContext({language:"",locales:[],setLanguage:function(){},translator:new t.a},function(e,n){return e.language!==n.language?1:0});"undefined"!==typeof r&&r&&r===Object(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EOLocaleContext",filename:"src/context.ts"}})},"./src/utils/language_list.ts":function(e,n,A){"use strict";A.d(n,"a",function(){return a});var a=[{icon:"\ud83c\uddec\ud83c\udde7",id:"en"},{icon:"\ud83c\uddf7\ud83c\uddfa",id:"ru"},{icon:"\ud83c\uddfa\ud83c\uddf8",id:"us"},{icon:"\ud83c\udde8\ud83c\uddf3",id:"zh"},{icon:"\ud83c\uddee\ud83c\uddf3",id:"hi"},{icon:"\ud83c\udde9\ud83c\uddea",id:"de"},{icon:"\ud83c\uddeb\ud83c\uddf7",id:"fr"},{icon:"\ud83c\udde8\ud83c\uddff",id:"cs"},{icon:"\ud83c\uddee\ud83c\uddf9",id:"it"},{icon:"\ud83c\uddec\ud83c\uddf7",id:"el"},{icon:"\ud83c\uddef\ud83c\uddf5",id:"ja"},{icon:"\ud83c\uddeb\ud83c\uddee",id:"fi"}];"undefined"!==typeof a&&a&&a===Object(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LanguageList",filename:"src/utils/language_list.ts"}})},"./src/utils/translator.ts":function(e,n,A){"use strict";var a,t=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=function(){function e(n){Object(r.a)(this,e),this.input=n,this.index=0,this.done=!1,this.value="",this.value=this.input.charAt(this.index)}return Object(o.a)(e,[{key:"next",value:function(){return this.index++,this.index>=this.input.length&&(this.done=!0),this.value=this.input.charAt(this.index)}},{key:"croak",value:function(){throw new Error("[".concat(this.input,']. Unexpected character "').concat(this.value,'" on position ').concat(this.index,"."))}}]),e}();"undefined"!==typeof i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InputStream",filename:"src/parser/input_stream.ts"}}),function(e){e[e.Plural=0]="Plural",e[e.Select=1]="Select",e[e.Text=2]="Text",e[e.Variable=3]="Variable"}(a||(a={})),"undefined"!==typeof a&&a&&a===Object(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ETokenType",filename:"src/parser/token_stream.ts"}}),"undefined"!==typeof IToken&&IToken&&IToken===Object(IToken)&&Object.defineProperty(IToken,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IToken",filename:"src/parser/token_stream.ts"}});var s=["{","}",","],u=function(){function e(n){Object(r.a)(this,e),this.input=void 0,this.input=new i(n)}return Object(o.a)(e,[{key:"next",value:function(){return"{"===this.input.value?this.readVariable():this.readText()}},{key:"skip",value:function(e){e!==this.input.value&&this.input.croak(),this.input.next()}},{key:"readWhile",value:function(e){for(var n="";!this.input.done&&e(this.input.value);)n+=this.input.value,this.input.next();return n}},{key:"readVariable",value:function(){this.skip("{");var e=this.readWhile(function(e){return!function(e){return s.includes(e)}(e)}).trim();if(0===e.length&&this.input.croak(),"}"===this.input.value)return this.skip("}"),{type:a.Variable,value:e};this.skip(",");var n=this.readVariableType();return{options:this.readVariableOptions(),type:n,value:e}}},{key:"readText",value:function(){return{type:a.Text,value:this.readWhile(function(e){return"{"!==e&&"}"!==e})}}},{key:"readVariableType",value:function(){var e=this.readWhile(function(e){return","!==e}).trim();return"plural"===e?a.Plural:"select"===e?a.Select:void this.input.croak()}},{key:"readVariableOptions",value:function(){this.skip(",");for(var e={};"}"!==this.input.value;)e[this.readText().value.trim()]=this.readExpression();return this.skip("}"),e}},{key:"readExpression",value:function(){var e=[];for(this.skip("{");"}"!==this.input.value;)e.push(this.next());return this.skip("}"),e}}]),e}();function l(e,n,A){for(var t=new u(n),r="",o=function n(t){var r=t.options,o=t.type,i=t.value;if(o===a.Variable)return A[i];if(r){if(o===a.Select)return r[A[i]].map(n).join("");if(o===a.Plural)return r[new Intl.PluralRules(e).select(A[i])].map(n).join("")}return i};!t.input.done;)r+=o(t.next());return r}"undefined"!==typeof u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TokenStream",filename:"src/parser/token_stream.ts"}}),l&&l===Object(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"format",filename:"src/parser/parser.ts"}}),A.d(n,"a",function(){return g});var g=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(r.a)(this,e),this.language=void 0,this.messages=void 0;var a=A.find(function(e){return e.language===n});this.language=n,this.messages=a?a.messages:{}}return Object(o.a)(e,[{key:"formatDate",value:function(e,n){return new Intl.DateTimeFormat(this.language,n).format(e)}},{key:"formatNumber",value:function(e,n){return new Intl.NumberFormat(this.language,n).format(e)}},{key:"translate",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},A=n.defaultMessage,a=Object(t.a)(n,["defaultMessage"]),r=this.messages[e];if("number"===typeof r)return r.toString();if("undefined"===typeof r){if("string"!==typeof A)return e;r=A}try{return l(this.language,r,a)}catch(o){console.error("[eo-locale] ",o)}return r}}]),e}();"undefined"!==typeof g&&g&&g===Object(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Translator",filename:"src/utils/translator.ts"}})},"./src/utils/use_translator.ts":function(e,n,A){"use strict";A.d(n,"a",function(){return o});var a=A("./node_modules/react/index.js"),t=A("./src/context.ts"),r=A("./src/utils/translator.ts");function o(e){var n=a.useContext(t.a);return e&&e!==n.language?new r.a(e):n.translator}o&&o===Object(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTranslator",filename:"src/utils/use_translator.ts"}})}}]);
//# sourceMappingURL=src-components-number.9f31cb344ca972cef781.js.map