AfterOnLoad.js
==============

AfterOnLoad.js is a JavaScript snippet for queueing functions
to be triggered on/after the window load event (aka ```window.onload```).

When you are optimizing your page load times,
it often helps to move the loading of certain JavaScript resources
after the ```window.onload``` event.
For example, delaying third party resources
like social media widgets (Facebook, Twitter, Google+, ...)
or even visitor tracking systems (Google Analytics, ...)
until after ```window.onload``` can help to improve the
perceived loading speed of your pages.


Desing/features
---------------

AfterOnLoad.js has been designed with the following in mind:

*   *Compact* and intended for *inline Javacript*.
    The code is optimized for compact minification,
    so that the snippet can be added in an
    inline JavaScript block in your markup.
    Setting up ```window.onload``` handlers
    is typically bootstrap activity, where you don't want
    to lose precious page load time on network IO from
    additional JavaScript file loading.

*   *No framework dependencies or interference*.
    Just raw, standard/common JavaScript.

*   *Cross browser compatibility*:
    ```window.addEventListener``` (Firefox, Webkit, Opera),
    ```window.attachEvent``` (IE)
    or fall back on ```window.onload``` piggybacking?
    We've got it covered.

*   Queueing *also works after the load event* has happened.
    If you call ```afterOnLoad(fun)``` after
    ```window.onload```, the function will be
    triggered immediately, as there is nothing to wait for.



Usage
-----

AfterOnLoad.js is intended to be used as an inline JavaScript
snippet or as part of a bigger bootstrap script.
It's just too small to be loaded as a separate script file.

Just copy the minified snippet in your bootstrap code:

```javascript
afterOnLoad=function(a){var b="onload",c="addEventListener",d="attachEvent",e=!1,f=function(f){var g=a[b];e?f():a[c]?a[c]("load",f,!1):a[d]?a[d](b,f):a[b]=g?function(a){g(a),f(a)}:f};return f(function(){e=!0}),f}(window);
```
And optionally change the function name to suit your needs.

Queue one or more functions as follows:

```javascript
function zazalo() {
    alert('We are after onload now.');
}

afterOnLoad(zazalo);
```

Licence
-------

Do whatever you want. Stealing is bad. Attribution is nice.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
